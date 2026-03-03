import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { upcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcoming = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      API_OPTIONS,
    );

    const json = await data.json();
    dispatch(upcomingMovies(json.results));
    // console.log(json.results);
  };

  useEffect(() => {
    getUpcoming();
  }, []);
};

export default useUpcomingMovies;
