import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearcBar";
import netflixGptBG from "../assets/netflixGptBG.png";
import { useDispatch } from "react-redux";
import { useRef } from "react";
import { addApi } from "../utils/GptSlice";

const GptSearch = () => {
  const dispatch = useDispatch();
  const apiRef = useRef(null);

  const handleSetApi = () => {
    const apiKey = apiRef.current.value;
    if (!apiKey) return;
    dispatch(addApi(apiKey));
  };

  return (
    <div className="overflow-x-hidden no-scrollbar">
      <div
        className="w-full h-[100vh] overflow-hidden object-cover bg-cover bg-center"
        style={{ backgroundImage: `url(${netflixGptBG})` }}
      >
        <div className="-mt-14 md:-mt-0 sm:-mt-14">
          
          <form
            className=" m-2 p-2 mt-56 md:mt-36 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 absolute z-40 md:z-20 flex md:flex-col"
            onSubmit={(e) => {
              e.preventDefault();
              handleSetApi();
            }}
          >
            <input
              type="text"
              placeholder="Enter your API key here"
              className="p-2 m-2"
              ref={apiRef}
            />

            <button
              type="submit"
              className="bg-red-600 p-2 m-2 text-white rounded"
            >
              Submit
            </button>
          </form>

          <GptSearchBar />

          <div className="absolute md:mt-36  mt-96 sm:mt-96  left-1/2 -translate-x-1/2 w-2/3 z-20 text-center bg-black md:h-4/5 sm:h-2/3 h-1/2 rounded-xl bg-opacity-65 border-white border-2 overflow-y-auto">
            <GptMovieSuggestions />
          </div>

        </div>
      </div>
    </div>
  );
};

export default GptSearch;