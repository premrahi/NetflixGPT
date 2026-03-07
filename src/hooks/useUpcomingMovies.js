import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { upcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const upcome = useSelector((store) => store.movies.upcomingMovies);
  const dispatch = useDispatch();

  const getUpcoming = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(upcomingMovies(json.results));
  };

  useEffect(() => {
    if (!upcome) {
      getUpcoming();
    }
  }, []); 
};

export default useUpcomingMovies;