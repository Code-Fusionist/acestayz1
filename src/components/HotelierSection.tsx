import { motion } from 'framer-motion';

const HotelierSection = () => {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-black font-poppins">
            WANT TO BECOME A <span className="text-ace-gold">HOTELLIER?</span>
          </h2>
          <p className="mt-4 text-gray-600 text-base md:text-lg font-poppins">
            Join hands with Ace Stayz and turn your property into a top-rated hospitality experience.
          </p>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <img
            src="specialservice/50718.jpg" // 👈 Replace this with your image in public folder
            alt="Become a Hotelier"
            className="w-full h-auto rounded-lg shadow-md object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HotelierSection;
