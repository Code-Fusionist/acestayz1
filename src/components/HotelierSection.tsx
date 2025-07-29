import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const HotelierSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="w-full bg-ace-gold pt-36 pb-20 px-4 md:px-16"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="hotelier.png"
            alt="Hotelier"
            className="w-[300px] h-[300px] object-cover rounded-lg shadow-[0_8px_12px_-6px_rgba(0,0,0,0.15)]"
          />
        </motion.div>

        {/* Right: Title + Subtitle */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-ace-dark mb-4 font-poppins">
            Become a <span className="text-white">Hotelier</span>
          </h2>
          <p className="text-lg text-gray-700 font-poppins">
            Start your hospitality business with Ace Stayz – a trusted franchise opportunity backed by industry experts and complete hand-holding support.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HotelierSection;
