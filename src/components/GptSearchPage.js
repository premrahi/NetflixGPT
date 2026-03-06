import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearcBar";
import netflixGptBG from "../assets//netflixGptBG.png";

const GptSearch = () => {
  return (
    <div className="overflow-x-hidden no-scrollbar">
      <div
        className="w-full h-[100vh] overflow-hidden object-cover bg-cover bg-center"
        style={{ backgroundImage: `url(${netflixGptBG})` }}
      >
        <div className="-mt-16 md:-mt-0 sm:-mt-12">
          <GptSearchBar />
          <div className="absolute md:mt-36 mt-96 sm:mt-80 left-1/2 -translate-x-1/2 w-2/3 z-20 text-center bg-black md:h-4/5 sm:h-2/3 h-1/2 rounded-xl bg-opacity-65 border-white border-2 overflow-y-auto">
            <GptMovieSuggestions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GptSearch;
