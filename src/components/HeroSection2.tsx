
import { motion } from 'framer-motion';

const HeroSection = () => {
  const heroImage = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop';

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
      <div className="relative z-20 flex items-center h-full text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="font-poppins text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 leading-tight">
              Where Luxury
              <br />
              <span className="text-gradient bg-gradient-to-r from-ace-gold to-ace-gold bg-clip-text text-transparent">
                Meets Comfort
              </span>
            </h1>
            <p className="font-poppins text-xl lg:text-2xl mb-8 max-w-2xl opacity-95 leading-relaxed">
              Experience unparalleled hospitality at Ace Stayz — where every stay tells a story of elegance, comfort, and exceptional service.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 items-start"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 215, 0, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-ace-gold text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-ace-dark transition-all duration-300 shadow-2xl border-2 border-transparent hover:border-ace-gold font-poppins"
              >
                Explore Destinations
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-ace-dark transition-all duration-300 backdrop-blur-sm font-poppins"
              >
                View Our Stayz
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
