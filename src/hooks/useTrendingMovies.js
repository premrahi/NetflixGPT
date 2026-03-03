import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { trendingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

// trending Moveis
const useTrendingMovies = () => {
  const dispatch = useDispatch();

  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day",
      API_OPTIONS,
    );

    const json = await data.json();
    dispatch(trendingMovies(json.results));
  };
  useEffect(() => {
    getTrendingMovies();
  }, []);
};

export default useTrendingMovies;
