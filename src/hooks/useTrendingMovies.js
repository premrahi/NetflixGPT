import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { trendingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

// trending Moveis
const useTrendingMovies = () => {
  const dispatch = useDispatch();
  const trending = useSelector((store) => store.movies.trendingMovies);

  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      API_OPTIONS,
    );

    const json = await data.json();
    // console.log(json)
    dispatch(trendingMovies(json.results));
  };
  useEffect(() => {
    !trending && getTrendingMovies();
  }, []);
};

export default useTrendingMovies;
