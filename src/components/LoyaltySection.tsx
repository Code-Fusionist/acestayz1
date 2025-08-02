'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap } from 'lucide-react';
import loyaltyOffersVector from '/specialservice/4.png';

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
                Planning a Longer Stayz? Grab exclusive weekly - monthly offers now!
              </motion.p>
            </div>

            {/* Right Image */}
            <div className="relative p-4 mb-4 flex items-center justify-center">
              <img
                src={loyaltyOffersVector}
                alt="Ace Stayz Loyalty Offers"
                className="object-contain rounded-lg w-full max-w-[400px] h-auto"
                loading="eager"
                decoding="async"
              />

              {/* Optional Floating Animation Element */}
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-2 right-2"
              >
                {/* Add icon/badge here if needed */}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoyaltySection;
