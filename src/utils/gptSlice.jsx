import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResults: null,
    movieName: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovies: (state, action) => {
      state.movieName = action.payload.movieName;
      state.movieResults = action.payload.movieResults;
    },
  },
});
export const { toggleGptSearchView, addGptMovies } = gptSlice.actions;
export default gptSlice.reducer;
