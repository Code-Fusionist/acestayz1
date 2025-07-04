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
      "We actually design our hotels to be easier to clean which is probably why people keep saying we’re the cleanest hotel chain in India.",
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
    <section className="py-20 px-4 sm:px-8 bg-[#D4AF37]" ref={ref}>
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-white drop-shadow mb-3"
        >
          What makes us Bloom?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-[#7A5500]"
        >
          With so much to tell & so little time, here are a few key highlights.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="text-left"
          >
            <div className="w-full h-64 flex items-center justify-center mb-4">
              <img
                src={feature.image}
                alt={feature.title}
                className="h-full object-contain"
              />
            </div>

            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
            <p className="text-[#7A5500] text-sm leading-relaxed">{feature.description}</p>
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
          className="text-md font-semibold text-[#7A5500] underline underline-offset-4 hover:text-white transition"
        >
          See what makes us special
        </a>
      </motion.div>
    </section>
  );
};

export default FeaturedSection;