import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearcBar";
import netflixGptBG from "../assets//netflixGptBG.png";

const GptSearch = () => {
  return (
    <div className="overflow-x-hidden">
      <div
        className="w-full h-[100vh] overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${netflixGptBG})` }}
      >
        <GptSearchBar />
        <div className="absolute mt-36 left-1/2 -translate-x-1/2 w-2/3 z-20 text-center bg-black h-4/5 rounded-xl bg-opacity-65 border-white border-2 overflow-y-auto">
          <GptMovieSuggestions />
        </div>
      </div>
    </div>
  );
};

export default GptSearch;
