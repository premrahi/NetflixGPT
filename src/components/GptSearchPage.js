import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearcBar";
import netflixGptBG from "../assets//netflixGptBG.png";

const GptSearch = () => {
  return (
    <div
      className="w-screen h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${netflixGptBG})` }}
    >
      <div className="absolute mt-28 left-1/2 -translate-x-1/2 w-2/3 z-20 text-center bg-black h-2/3 rounded-xl bg-opacity-65 border-white border-2">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
