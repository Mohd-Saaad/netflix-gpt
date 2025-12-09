import React from "react";
import { IMG_URL } from "../utils/constansts";
const MovieCard = ({ posterPath, overview, title }) => {
  return (
    <div className="w-[200px] pr-4 relative group cursor-pointer">
      {/* Poster Image */}
      <img
        src={IMG_URL + posterPath}
        alt={title}
        className="rounded-lg transition-transform duration-300 group-hover:scale-105"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />

      {/* Movie Info (shown on hover) */}
      <div className="absolute bottom-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
        <h3 className="text-sm font-bold mb-1 line-clamp-1">{title}</h3>
        <p className="text-xs line-clamp-3">{overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
