import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  //fetch data from TMDB API and updates store.
  const dispatch = useDispatch();
  const nowPlaying = useSelector(store => store.movies.nowPlayingMovies) ;


  //now playing movies
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      API_OPTIONS,
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
   !nowPlaying && getNowPlayingMovies();
  }, []);
};  

export default useNowPlayingMovies;
