const ShimmerUI = () => {
  return (
    <div className="ml-6 mt-56 animate-bounce">
      {Array(5)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="text-left text-white m-4 p-4 rounded-lg bg-gray-800/60"
          >
            <div className="h-6 w-1/3 bg-gray-600 rounded mb-3"></div>

            <div className="h-4 w-full bg-gray-600 rounded mb-2"></div>
            <div className="h-4 w-5/6 bg-gray-600 rounded mb-2"></div>
            <div className="h-4 w-3/4 bg-gray-600 rounded"></div>
          </div>
        ))}
    </div>
  );
};

export default ShimmerUI;