import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
      if (!movies || movies.length === 0) return null;

//   console.log(movies);
  return (
    <div className="p-2">
        <h1 className="font-semibold text-2xl text-white mx-4 ">{title}</h1>
      <div className="flex overflow-x-auto no-scrollbar ">
        <div className="flex ">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
