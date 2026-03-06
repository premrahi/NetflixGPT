const BgTitle = ({ title, overview }) => {
  return (
    <div className="md:px-24 sm:pt-28 sm:w-3/5 px-6 md:pt-60 pt-10 z-10 absolute text-white bg-gradient-to-r from-black/80 to-transparent h-full">
      
        <h1 className="md:text-6xl sm:text-2xl text-[12px] font-bold">{title}</h1>
        <p className="py-6 md:text-lg sm:text-[12px] sm:w-full text-[8px] w-3/5">{overview}</p>

        <div>
          <button className=" md:px-5 md:py-2 md:w-32 w-16 text-black rounded-md font-semibold bg-white  m-2 py-2 hover:bg-gray-200 md:text-lg text-[10px] hover:scale-105 transition-transform delay-100">
            {" "}
            Play
          </button>
          <button className=" md:px-5 md:py-2 md:w-32 w-20 text-black rounded-md font-semibold bg-gray-500 py-2 m-2 opacity-80 hover:bg-gray-700 md:text-lg text-[10px] hover:scale-105 transition-transform delay-100">
            {" "}
            more info
          </button>
        </div>
      </div>
  );
};

export default BgTitle;
