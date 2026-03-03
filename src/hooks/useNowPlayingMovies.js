import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import {
  addNowPlayingMovies,
  popularMovies,
  topRatedMovies,
  upcomingMovies,
} from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  //fetch data from TMDB API and updates store.
  const dispatch = useDispatch();
  //now playing movies
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      API_OPTIONS,
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };
  //popular movies
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      API_OPTIONS,
    );
    const json = await data.json();
    dispatch(popularMovies(json.results));
    console.log(json.results);
  };
  //TOP rated movies
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_OPTIONS,
    );
    const json = await data.json();
    dispatch(topRatedMovies(json.results));
    console.log(json.results);
  };
  //upcoming movies
  const getUpcoming = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      API_OPTIONS,
    );

    const json = await data.json();
    dispatch(upcomingMovies(json.results));
    console.log(json.results);
  };

  useEffect(() => {
    getNowPlayingMovies();
    getPopularMovies();
    getTopRatedMovies();
    getUpcoming();
  }, []);
};

export default useNowPlayingMovies;
