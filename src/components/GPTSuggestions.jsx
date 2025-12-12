import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTSuggestions = () => {
  const { movieName, movieResults } = useSelector((store) => store.gpt);
  if (!movieName || movieName.length === 0) {
    return null;
  }

  return (
    <div className="p-4 m-4 bg-black text-white">
      <div>
        {movieName.map((movie, index) => (
          <MovieList
            key={movie}
            title={movie}
            movies={movieResults[index]?.results}
          />
        ))}
      </div>
    </div>
  );
};

export default GPTSuggestions;
