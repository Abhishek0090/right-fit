import Link from 'next/link';

export default function Hero() {
  return (
    <main
      className="relative w-full h-screen bg-cover bg-center"
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-20">
        <div className="text-center sm:text-left text-white">
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold">
            Ad Demo  
          </h1>
          <p className="text-lg sm:text-2xl lg:text-3xl font-bold mt-4">
            At Yesterday&apos;s Prices
          </p>
          <div className="mt-8">
            <Link
              href="/test"
              className="px-6 py-3 bg-primaryColor text-white font-bold text-lg sm:text-xl rounded-xl hover:bg-primaryColor-dark transition-colors"
            >
              Continue surfing
              
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
