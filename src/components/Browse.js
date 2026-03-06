import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearchPage";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";

const Browse = () => {
  const showToggle = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  useTrendingMovies();
  usePopularMovies() ;
  useUpcomingMovies();
  useTopRatedMovies();
  
  return (
    <div>
      <Header />

      {showToggle ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

     

      {/*
        mainContainer
            -trailer background
            -videoTitle

        secondary container
            - movieList * n
            - cards * n

      */}
    </div>
  );
};

export default Browse;
