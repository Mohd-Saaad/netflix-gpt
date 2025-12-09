import React from "react";
import Header from "./Header";
import useNowPlaying from "../hooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useTopMovies from "../hooks/useTopMovies";
import usePopularMovies from "../hooks/usePopularMovies";
const Browse = () => {
  useNowPlaying();
  useTopMovies();
  usePopularMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
