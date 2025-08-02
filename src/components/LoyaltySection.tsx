import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, MapPin, Building, Award, Smile, TrendingUp } from 'lucide-react';

const LoyaltySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-6 sm:py-8 px-4 sm:px-8 bg-tan-brown parallax-bg" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-coffee-brown to-coffee-brown rounded-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Content */}
            <div className="p-4 sm:p-6 lg:p-8 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="mb-3"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="w-4 h-4 sm:w-5 h-5 text-ace-gold" />
                  <span className="text-ace-gold font-semibold font-poppins text-xs sm:text-sm">
                    Get up to 30 % off extra on your stayz!
                  </span>
                </div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl sm:text-2xl lg:text-3xl font-bold text-sand-beige leading-tight mb-4 font-poppins"
              >
                More Nights, Better Price.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-sand-beige text-sm sm:text-base leading-relaxed font-poppins"
              >
                Planing a Longer Stayz? Grab exclusive weekly - monthly offers now!
              </motion.p>
            </div>

            <div className="relative rounded-lg p-4 mb-4 aspect-video overflow-hidden max-w-full mx-auto">
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src="/specialservice/4.png"
                  alt="Ace Stayz Offer"
                  className="h-full w-2/3 object-cover rounded-lg"
                  loading="eager"
                  decoding="async"
                  style={{ imageRendering: 'auto' }}
                />
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-2 right-2"
              >
                {/* Add badge/icon if needed */}
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default LoyaltySection;