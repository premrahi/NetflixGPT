const BgTitle = ({ title, overview }) => {
  return (
    <div className="px-24 pt-60 z-10 absolute text-white bg-gradient-to-r from-black w-full aspect-video bg-opacity-30">
      
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-2/5">{overview}</p>

        <div>
          <button className=" px-5 py-2 w-32 text-black rounded-md font-semibold bg-white  m-2 hover:bg-gray-200 hover:scale-105 transition-transform delay-100">
            {" "}
            Play
          </button>
          <button className=" px-5 py-2 text-black w-32 rounded-md font-semibold bg-gray-500  m-2 opacity-80 hover:bg-gray-700 hover:scale-105 transition-transform delay-100">
            {" "}
            more info
          </button>
        </div>
      </div>
  );
};

export default BgTitle;
