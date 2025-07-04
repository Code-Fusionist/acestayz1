
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    title: "Tech with heart",
    description:
      "Like a best friend you can always trust & rely on, we're there for you every step of your stay helping you bloom to your best.",
    image: '/specialservice/50718.jpg',
  },
  {
    title: "Automated Cleanliness",
    description:
      "We actually design our hotels to be easier to clean which is probably why people keep saying we're the cleanest hotel chain in India.",
    image: '/specialservice/06.jpg',
  },
  {
    title: "Sleep Tech",
    description:
      "Our custom built CloudBeds™ are so comfortable you may just find yourself hitting the alarm snooze a few too many times.",
    image: '/specialservice/1728.jpg',
  },
];

const FeaturedSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-20 px-4 sm:px-8 bg-ace-gold" ref={ref}>
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white drop-shadow-lg mb-3 font-poppins"
        >
          What makes us Bloom?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-ace-dark font-poppins"
        >
          With so much to tell & so little time, here are a few key highlights.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
          >
            <div className="relative w-full h-[300px] overflow-hidden">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-ace-dark mb-3 font-poppins group-hover:text-ace-gold transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed font-poppins">
                {feature.description}
              </p>
            </div>

            <div className="absolute top-4 right-4 w-2 h-2 bg-ace-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center mt-12"
      >
        <a
          href="#"
          className="inline-flex items-center text-md font-semibold text-ace-dark hover:text-white transition-colors duration-300 font-poppins group"
        >
          See what makes us special
          <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default FeaturedSection;
