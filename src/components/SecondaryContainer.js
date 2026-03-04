import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movieData = useSelector((store) => store.movies);

  /*
        movieList
          movieCard * n
        -popular
        -trending
        -horror
        */

  return (
    <div className=" bg-black w-full">
      <div className="pl-16 -mt-72 relative z-20">

        <MovieList title={"Now Playing"} movies={movieData?.nowPlayingMovies} />
        <MovieList title={"Trending"} movies={movieData?.trendingMovies} />
        <MovieList title={"Popular"} movies={movieData?.popularMovies} />
        <MovieList title={"Top Rated"} movies={movieData?.topRatedMovies} />
        <MovieList title={"Upcoming"} movies={movieData?.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
