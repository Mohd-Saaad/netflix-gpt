import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-transparent">
      <div className="px-12 pt-[18%] text-white max-w-2xl">
        {/* Title */}
        <h1 className="text-6xl font-extrabold leading-tight drop-shadow-lg">
          {title}
        </h1>

        {/* Description */}
        <p className="text-lg mt-6 text-white/90 line-clamp-3">{overview}</p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4">
          <button className="flex items-center gap-2 bg-white text-black px-8 py-3 text-lg font-semibold rounded hover:bg-gray-300 transition">
            ▶ Play
          </button>

          <button className="flex items-center gap-2 bg-gray-600/80 text-white px-8 py-3 text-lg font-semibold rounded hover:bg-gray-500 transition">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
