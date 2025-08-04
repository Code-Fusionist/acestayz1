import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Book A Ace in Delhi");
  const [currentCityIndex, setCurrentCityIndex] = useState(0);

  const cities = ["Delhi", "Gurugram", "Noida", "Jaipur", "Mohali"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCityIndex((prevIndex) => (prevIndex + 1) % cities.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [cities.length]);

  return (
    <section id="home" className="relative h-[75vh] sm:h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          src="/Hero.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/30 to-black/50 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 flex items-end justify-start h-full text-white pb-12 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight bg-brown">
              <span className="block mb-4">Not Your Regular Hotel</span>
              <span className="text-gradient bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
                It's A Hybrid Hotel
              </span>
            </h1>
            <p className="font-poppins text-sm lg:text-base mb-6 max-w-2xl opacity-95 leading-relaxed">
              Stayz For Smart Guest.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="w-full max-w-xs"
            >
              <div
                onClick={() => setIsModalOpen(true)}
                className="cursor-pointer flex items-center justify-between bg-white/10 border border-white/30 rounded-full px-5 py-3 backdrop-blur-sm shadow-lg hover:ring-2 hover:ring-tan-brown transition"
              >
                <span className="text-white font-poppins text-sm sm:text-base opacity-90">
                  Book A Stayz in <span className="text-tan-brown font-semibold">{cities[currentCityIndex]}</span>
                </span>
                <svg
                  className="w-4 h-4 text-white opacity-70"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-2xl w-80 sm:w-96 p-6 pt-10 text-black shadow-2xl animate-fadeIn">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-tan-brown transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h2 className="text-2xl font-semibold mb-6 text-center text-coffee-brown">
              Select a City
            </h2>

            <ul className="space-y-3">
              {cities.map((city) => (
                <li
                  key={city}
                  onClick={() => {
                    setSelectedCity(`Book A Ace in ${city}`);
                    setIsModalOpen(false);
                    window.open('/Contact', '_blank');
                  }}
                  className="cursor-pointer px-4 py-2 rounded-lg text-center font-medium transition-all duration-200 hover:bg-tan-brown hover:text-white"
                >
                  {city}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
