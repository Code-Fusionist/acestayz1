import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const PartnersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const logos = [
    '/partners/as.png',
    '/partners/fh.png',
    '/partners/hcl.png',
    '/partners/lt.png',
    '/partners/offs.png',
    '/partners/paytm.jpg',
    '/partners/tm.png',
  ];

  return (
    <section className="py-20 lg:py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl lg:text-6xl font-bold text-ace-dark mb-6">
            Our Esteemed <span className="text-ace-gold block">Partners</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Collaborating with the finest hospitality brands to deliver exceptional experiences.
          </p>
        </motion.div>

        <div className="overflow-hidden relative w-full">
          <div className="flex animate-slide-infinite whitespace-nowrap gap-4">
            {[...logos, ...logos].map((logo, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[180px] sm:w-[200px] lg:w-[220px] p-1"
              >
                <img
                  src={logo}
                  alt={`Partner ${idx + 1}`}
                  className="h-40 w-full object-contain rounded-xl border border-gold shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;