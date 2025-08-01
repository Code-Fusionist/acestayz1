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
                className="text-xl sm:text-2xl lg:text-3xl font-bold text-coffee-brown leading-tight mb-4 font-poppins"
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

            {/* Right Illustration */}
            <div className="relative p-4 sm:p-6 lg:p-8 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white/95 rounded-xl p-4 sm:p-6 w-full max-w-xs shadow-xl"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-yellow-500 font-bold text-lg font-poppins">ACE STAYZ</div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    </div>
                    <div className="w-3 h-1 bg-gray-200 rounded-full"></div>
                    <div className="w-3 h-1 bg-gray-200 rounded-full"></div>
                  </div>
                </div>

                {/* Illustration with Image */}
                <div className="relative bg-gray-50 rounded-lg p-4 mb-4 h-24 sm:h-28 overflow-hidden">
                  <img 
                    src="/specialservice/1.png" 
                    alt="Ace Stayz Offer" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                  {/* Floating elements */}
                  <motion.div
                    animate={{ y: [-3, 3, -3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute top-2 right-2"
                  >
                    <Award className="w-4 h-4 text-yellow-400" />
                  </motion.div>
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 rounded-lg py-2 px-3 flex items-center justify-between text-gray-600 font-medium font-poppins text-sm"
                >
                  <span>Unlock Offer Rates</span>
                  <TrendingUp className="w-3 h-3" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoyaltySection;