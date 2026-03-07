import { useSelector } from "react-redux";
import ShimmerUI from "./ShimmerUI";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  const loading = useSelector((store) => store.gpt.loading);

  if (loading) return <ShimmerUI />;

  if (!movieNames) return null;

  return (
    <div className="">
      {
        <div className="p-4 m-4  text-white">
          {movieNames.map((movie, index) => (
            <div className="bg-white bg-opacity-20 m-4 rounded-lg p-2">
            <MovieList key={movie} title={movie} movies={movieResults[index]} />
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default GptMovieSuggestions;
