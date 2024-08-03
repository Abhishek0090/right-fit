export default function Hero() {
  return (
    <main className="w-full mx-auto pt-8 h-full sm:h-[80vh]">
      <div className="text-start sm:text-left px-4 sm:px-20 py-5 sm:py-60 mb-0 sm:mb-8">
        <h1 className="text-sm sm:text-7xl font-extrabold text-white">
          Latest Styles
        </h1>
        <p className="text-sm sm:text-xl text-white font-bold mt-0 sm:mt-4">
        At Yesterday&apos;s Prices
        </p>
        <div className="mt-0 sm:mt-8">
          <button className="px-2 sm:px-5 py-2 sm:py-3 bg-primaryColor text-white font-bold text-sm sm:text-xl rounded-xl">
            Browse All Styles
          </button>
        </div>
      </div>
    </main>
  );
}
