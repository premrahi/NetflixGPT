import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { topRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRated = useSelector((store) => store.movies.topRatedMovies);

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      API_OPTIONS,
    );

    const json = await data.json();
    dispatch(topRatedMovies(json.results));
    // console.log(json.results);
  };

  useEffect(() => {
    !topRated && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
