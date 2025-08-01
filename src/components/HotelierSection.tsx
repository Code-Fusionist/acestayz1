import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const HotelierSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="w-full bg-tan-brown pt-32 pb-16 px-4 md:px-16"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <img
              src="hotelier.png"
              alt="Hotelier"
              className="w-[350px] h-[350px] object-cover rounded-2xl shadow-2xl border-4 border-sand-beige"
            />
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-coffee-brown rounded-full flex items-center justify-center shadow-lg">
              <span className="text-sand-beige font-bold text-lg">★</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Title + Subtitle */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-brown mb-6 font-poppins leading-tight">
            Become a <span className="text-sand-beige bg-coffee-brown px-2 py-1 rounded-lg">Hotelier</span>
          </h2>
          <p className="text-lg text-sand-beige font-poppins leading-relaxed bg-coffee-brown/20 p-4 rounded-lg backdrop-blur-sm">
            Start your hospitality business with Ace Stayz – a trusted franchise opportunity backed by industry experts and complete hand-holding support.
          </p>
          <motion.div 
            className="mt-6 flex gap-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="w-12 h-1 bg-coffee-brown rounded-full"></div>
            <div className="w-8 h-1 bg-coffee-brown/60 rounded-full"></div>
            <div className="w-4 h-1 bg-coffee-brown/40 rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HotelierSection;
