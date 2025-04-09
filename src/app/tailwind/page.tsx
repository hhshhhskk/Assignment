const TailwindPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(min(200px,_100%),_1fr))] gap-1 auto-rows-[100px] w-full h-full bg-amber-300">
        {[1, 2, 1, 2, 1].map((num, idx) => (
          <div
            key={idx}
            className={`${num === 1 ? "bg-red-500" : "bg-blue-500"} text-white`}
          >
            auto-fill
          </div>
        ))}
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,_minmax(min(200px,_100%),_1fr))] gap-1 auto-rows-[100px] w-full h-full   bg-gray-500 ">
        {[1, 2, 1, 2, 1].map((num, idx) => (
          <div
            key={idx}
            className={`${num === 1 ? "bg-red-500" : "bg-blue-500"} text-white`}
          >
            auto-fit
          </div>
        ))}
      </div>
    </div>
  );
};

export default TailwindPage;
