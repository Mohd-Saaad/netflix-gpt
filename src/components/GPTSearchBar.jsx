import React from "react";
import lang from "../utils/langConsts";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] grid place-items-center">
      <form action="" className="bg-black w-1/2 grid grid-cols-12">
        <input
          type="text"
          className="p-4 my-2 mx-4 col-span-9 justify-center text-white"
          name=""
          id=""
          placeholder={lang[langKey].placeholder}
        />
        <button className="bg-red-700 px-4 py-2 m-3 col-span-3 text-white">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
