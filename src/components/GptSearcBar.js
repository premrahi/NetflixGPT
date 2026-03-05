const GptSearchBar = () => {
  return (
    <div>
      <form className="absolute mt-28 left-1/2 -translate-x-1/2 w-2/3 z-20 text-center ">
        <input
          type="text"
          className="w-1/2 border text-center bg-white p-4 rounded-lg"
          placeholder="what would you like to watch today?"
        />
        <button className="border p-4 mx-4 rounded-lg text-white bg-black">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
