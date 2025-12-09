import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const handleWheel = (e) => {
    e.preventDefault();

    const scrollSpeed = 3;
    e.currentTarget.scrollLeft += e.deltaY * scrollSpeed;
  };
  return (
    <div>
      <h1 className="py-6 text-3xl text-white ">{title}</h1>
      <div
        onWheel={handleWheel}
        className="flex overflow-x-scroll no-scrollbar scroll-smooth"
      >
        <div className="flex bg-transparent">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie?.poster_path}
              overview={movie.overview}
              title={movie.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
