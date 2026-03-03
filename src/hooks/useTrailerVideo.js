import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

  //fetch trailer from api using movieID && updating the store

const useTrailerBG = (movieID) => {
  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +movieID+"/videos" ,
      API_OPTIONS,
    );
    const json = await data.json();
    const filterData = json.results.filter((vid) => vid.type === "Trailer"); // because there are more than 1 trailer
    const trailer = filterData.length ? filterData[0] : json.results[0]; // if trailer not found return any clip.

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useTrailerBG;
