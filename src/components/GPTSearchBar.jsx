import React, { useRef } from "react";
import lang from "../utils/langConsts";
import { useDispatch, useSelector } from "react-redux";
import gemini from "../utils/gemini";
import { API_OPTIONS } from "../utils/constansts";
import { addGptMovies } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const dispatch = useDispatch(null);
  const searchText = useRef(null);
  const langKey = useSelector((store) => store.config.lang);
  const searchTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json;
  };
  const handleSearchClick = async () => {
    const query =
      "You are movie recomendation system and suggest top 5 movies for this querry:" +
      searchText.current.value +
      ". In comma seperated format like The Shawshank Redemption, The Godfather, The Dark Knight, The Godfather Part II, 12 Angry Men";

    const response = await gemini.models.generateContent({
      model: "gemini-2.5-flash-lite",
      contents: query,
    });
    const movies = response.text.split(", ");

    const promises = movies.map((movie) => searchTMDB(movie));
    const tmdbResults = await Promise.all(promises);
    dispatch(addGptMovies({ movieName: movies, movieResults: tmdbResults }));
  };
  return (
    <div className="pt-[10%] grid place-items-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        action=""
        className="bg-black w-1/2 grid grid-cols-12"
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 my-2 mx-4 col-span-9 justify-center text-white"
          name=""
          id=""
          placeholder={lang[langKey].placeholder}
        />
        <button
          onClick={handleSearchClick}
          className="bg-red-700 px-4 py-2 m-3 col-span-3 text-white"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
