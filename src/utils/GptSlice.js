import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "gpt",
  initialState: {
    api : null ,
    showGptSearch: false,
    movieResults: null,
    movieNames: null,
    loading: false,
  },

  reducers: {
    addApi:(state,action) => {
      state.api = action.payload;
    },
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

export const { toggleGptSearchView, API_RESPONSE, setLoading ,addApi } =
  GptSlice.actions;

export default GptSlice.reducer;