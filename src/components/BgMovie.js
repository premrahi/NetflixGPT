import { useSelector } from "react-redux";
import useTrailerBG from "../hooks/useTrailerVideo";

const BgMovie = ({ movieID }) => {
  const trailerVideo = useSelector((store) => store.movies?.addTrailerVideo);

  useTrailerBG(movieID);

  return (
    <div className="w-full">
        <iframe
          className="w-full aspect-video pointer-events-none"
          src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=${trailerVideo?.key}`}
          title="Background trailer"
          allow="autoplay; encrypted-media"
        />
    </div>
  );
};

export default BgMovie;
