'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap } from 'lucide-react';
import loyaltyOffersVector from '/FranchseMan.png';

const FranchiseHeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-6 sm:py-8 px-4 sm:px-8 bg-tan-brown parallax-bg" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-coffee-brown to-coffee-brown rounded-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0 items-center">
            {/* Left Content */}
            <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold-italian text-tan-brown mb-6 font-poppins leading-tight">
            Become a Hotelier
          </h2>
          <p className="text-lg text-sand-beige font-poppins leading-relaxed bg-coffee-brown/20 p-4 rounded-lg">
            Start your hospitality business with Ace Stayz - a trusted franchise opportunity backed by industry experts and complete hand-holding support.
          </p>
          <motion.div 
            className="mt-6 flex gap-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >

            {/* Right Image */}
            <div className="p-4 flex items-center justify-center">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={loyaltyOffersVector}
                  alt="Ace Stayz Loyalty Offers"
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
                {/* Badge or icon if needed */}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseHeroSection;
