'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap } from 'lucide-react';
import loyaltyOffersVector from '/FranchseMan.png';

const FranchiseHeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="pt-24 pb-6 sm:py-8 px-4 sm:px-8 bg-tan-brown parallax-bg" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Outer Title - above the container */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center text-sand-beige mb-6 font-poppins"
        >
          Become a Hotelier
        </motion.h2>

        {/* Gradient Container */}
        <div className="bg-gradient-to-r from-coffee-brown to-coffee-brown rounded-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0 items-center">
            {/* Left Content */}
            <div className="p-4 sm:p-6 lg:p-8 flex flex-col justify-center">
              {/* Inner Title */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl sm:text-2xl font-semibold text-sand-beige mb-4 font-poppins"
              >
                Partner With Us
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-sand-beige text-sm sm:text-base leading-relaxed font-poppins"
              >
                Start your hospitality business with Ace Stayz - a trusted franchise opportunity
                backed by industry experts and complete hand-holding support.
              </motion.p>
            </div>

            {/* Right Image */}
            <div className="p-4 flex items-center justify-center relative">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={loyaltyOffersVector}
                  alt="Ace Stayz Franchise"
                  className="object-contain w-full max-w-[300px] max-h-[250px]"
                  loading="eager"
                  decoding="async"
                />
              </div>

              {/* Optional Floating Animation Element */}
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-2 right-2"
              >
                {/* Icon or floating badge if needed */}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseHeroSection;
