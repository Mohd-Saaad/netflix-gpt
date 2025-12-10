import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTSuggestions from "./GPTSuggestions";
import { BG_IMG_URL } from "../utils/constansts";

const GPTSearchPage = () => {
  return (
    <div>
      <img src={BG_IMG_URL} alt="BackGround Image" className="-z-10 absolute" />
      <GPTSearchBar />
      <GPTSuggestions />
    </div>
  );
};

export default GPTSearchPage;
