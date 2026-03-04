import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer" ;

const Browse = () => {
 
    useNowPlayingMovies(); 
    useTrendingMovies() ;
    useUpcomingMovies() ;
    useTopRatedMovies()
    return (
    <div>
      <Header />
      <GptSearch />
      <MainContainer />
      <SecondaryContainer />

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
