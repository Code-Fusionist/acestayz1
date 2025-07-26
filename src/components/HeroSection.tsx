import { useState } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Select Your City");

  const heroImage = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop';
  const cities = ["Gurugram", "Noida", "Delhi", "Jaipur", "Mohali"];

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 flex items-start h-full text-white pt-52">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="font-poppins text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Not Your Regular Hotel
              <br />
              <span className="text-gradient bg-gradient-to-r from-ace-gold to-ace-gold bg-clip-text text-transparent">
                It's A Hybrid Hotel
              </span>
            </h1>
            <p className="font-poppins text-lg lg:text-xl mb-8 max-w-2xl opacity-95 leading-relaxed">
              Stayz For Smart Guest. 
            </p>

            {/* Search Bar (non-editable) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="w-full max-w-xs"
            >
              <div
                onClick={() => setIsModalOpen(true)}
                className="cursor-pointer flex items-center justify-between bg-white/10 border border-white/30 rounded-full px-5 py-3 backdrop-blur-sm shadow-lg hover:ring-2 hover:ring-ace-gold transition"
              >
                <span className="text-white font-poppins text-sm sm:text-base opacity-90">
                  {selectedCity}
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
      {/* Modal for city selection */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-2xl w-80 sm:w-96 p-6 pt-10 text-black shadow-2xl animate-fadeIn">
            {/* Close (X) button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-ace-gold transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Heading */}
            <h2 className="text-2xl font-semibold mb-6 text-center text-ace-dark">
              Select a City
            </h2>

            {/* City List */}
            <ul className="space-y-3">
              {cities.map((city) => (
                <li
                  key={city}
                  onClick={() => {
                    setSelectedCity(city);
                    setIsModalOpen(false);
                  }}
                  className="cursor-pointer px-4 py-2 rounded-lg text-center font-medium transition-all duration-200 hover:bg-ace-gold hover:text-white"
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
