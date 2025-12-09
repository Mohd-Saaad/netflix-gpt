import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="px-24 pt-[20%]  text-white w-screen absolute bg-linear-to-r from black to-transparent">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="text-lg w-2/5 py-6">{overview}</p>
      <div className="">
        <button className="text-black bg-white p-4 px-14 text-lg rounded-lg mx-2 hover:bg-gray-400">
          ▶️ Play
        </button>
        <button className="text-white bg-gray-500 p-4 px-14 text-lg rounded-lg mx-2 hover:bg-gray-400">
          ️ More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
