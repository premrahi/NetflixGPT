import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    addTrailerVideo: null,
    popularMovies: null,
    topRatedMovies: null,
    upcomingMovies: null,
    trendingMovies :null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.addTrailerVideo = action.payload;
    },
    popularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    topRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    upcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    trendingMovies : (state , action) => {
        state.trendingMovies = action.payload ;
    }
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  popularMovies,
  topRatedMovies,
  upcomingMovies,
  trendingMovies,
} = movieSlice.actions;

export default movieSlice.reducer;
