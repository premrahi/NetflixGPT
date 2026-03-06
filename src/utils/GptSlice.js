import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResults: null,
    movieNames: null,
    loading: false,
  },

  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },

    API_RESPONSE: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { toggleGptSearchView, API_RESPONSE, setLoading } =
  GptSlice.actions;

export default GptSlice.reducer;