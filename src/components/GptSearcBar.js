import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstant";
import { useRef } from "react";
import { API_RESPONSE, setLoading } from "../utils/GptSlice";
import { API_OPTIONS } from "../utils/constant";
import useGeminiAI from "../hooks/useGeminiAI";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const langKey = useSelector((store) => store.config.lang);

  const fetchMoviesFromTmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS,
    );
    const json = await data.json();

    return json.results;
  };

  const ai = useGeminiAI();

  const handleGptSearchClick = async () => {
    const query = searchText.current.value;

    dispatch(setLoading(true));

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `Suggest 5 movies similar to ${query}. Return only comma separated movie names.`,
      });

      const text = response.text;

      const movies = text.split(",").map((m) => m.trim());

      const promiseArray = movies.map((m) => fetchMoviesFromTmdb(m));
      const tmdbResults = await Promise.all(promiseArray);

      dispatch(
        API_RESPONSE({
          movieNames: movies,
          movieResults: tmdbResults,
        }),
      );
    } catch (error) {
      console.error("Gemini error:", error);
      alert("AI service is busy. Please try again.");
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div>
      <form
        className="absolute md:mt-20 mt-72 sm:mt-72   left-1/2 -translate-x-1/2 w-2/3 z-30 text-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="w-1/2 border text-center bg-white p-4 rounded-lg"
          placeholder={lang[langKey].gptSearchPlaceHolder}
          ref={searchText}
        />
        <button
          className=" p-4 mx-4 rounded-lg text-white bg-red-800 hover:scale-105 transition-transform delay-75 overflow-hidden hover:bg-red-900"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
