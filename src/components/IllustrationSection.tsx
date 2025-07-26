import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Award, ThumbsUp, Building, Cloud, Sun, Star } from 'lucide-react';

const IllustrationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const floatingIcons = [
    { icon: Award, delay: 0.2, position: "top-16 right-16" },
    { icon: ThumbsUp, delay: 0.4, position: "top-32 left-8" },
    { icon: Star, delay: 0.6, position: "bottom-32 right-8" },
    { icon: Cloud, delay: 0.8, position: "top-8 left-1/3" },
    { icon: Sun, delay: 1.0, position: "bottom-16 left-16" },
  ];

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden relative">
      {/* Floating animated icons */}
      {floatingIcons.map(({ icon: Icon, delay, position }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={isInView ? { opacity: 0.1, scale: 1, rotate: 0 } : {}}
          transition={{ duration: 1, delay }}
          className={`absolute ${position} text-ace-gold hidden lg:block`}
        >
          <Icon size={32} />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-ace-gold mb-2 leading-tight"
            >
              Be one of a hundred,
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold text-ace-gold mb-6 leading-tight"
            >
              not one of a thousand.
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg"
            >
              Partner with one of India's leading hospitality brands & enjoy segment-leading returns for your hotel investment.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button 
                size="lg" 
                className="bg-ace-gold text-white hover:bg-ace-dark transition-colors duration-300 px-8 py-3 text-lg font-semibold rounded-full"
              >
                Apply here
              </Button>
            </motion.div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-80 lg:h-96">
              {/* Buildings illustration */}
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center space-x-2">
                {/* Background buildings */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={isInView ? { height: `${Math.random() * 100 + 50}px` } : {}}
                    transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                    className="bg-gray-200 rounded-t-md"
                    style={{ width: `${Math.random() * 20 + 15}px` }}
                  />
                ))}
                
                {/* Featured building */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={isInView ? { height: "160px", opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="bg-ace-gold rounded-t-lg w-8 relative border-4 border-white shadow-lg"
                >
                  {/* Building windows */}
                  <div className="absolute inset-2 space-y-2">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="grid grid-cols-2 gap-1">
                        <div className="bg-white/30 h-3 rounded-sm" />
                        <div className="bg-white/30 h-3 rounded-sm" />
                      </div>
                    ))}
                  </div>
                </motion.div>
                
                {/* More background buildings */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i + 8}
                    initial={{ height: 0 }}
                    animate={isInView ? { height: `${Math.random() * 100 + 50}px` } : {}}
                    transition={{ duration: 0.8, delay: 0.7 + i * 0.1 }}
                    className="bg-gray-200 rounded-t-md"
                    style={{ width: `${Math.random() * 20 + 15}px` }}
                  />
                ))}
              </div>

              {/* Floating achievement icons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute top-8 left-8 bg-white p-3 rounded-full shadow-lg"
              >
                <Award className="text-ace-gold" size={24} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="absolute top-4 right-8 bg-white p-3 rounded-full shadow-lg"
              >
                <ThumbsUp className="text-green-500" size={24} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="absolute bottom-24 right-4 bg-white p-3 rounded-full shadow-lg"
              >
                <Star className="text-ace-gold" size={24} />
              </motion.div>

              {/* Clouds */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 0.7, x: 0 } : {}}
                transition={{ duration: 1, delay: 1.8 }}
                className="absolute top-12 left-16 text-gray-300"
              >
                <Cloud size={32} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 0.5, x: 0 } : {}}
                transition={{ duration: 1, delay: 2 }}
                className="absolute top-6 right-16 text-gray-300"
              >
                <Cloud size={24} />
              </motion.div>

              {/* Sun */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 2.2 }}
                className="absolute top-4 left-1/2 transform -translate-x-1/2 text-yellow-400"
              >
                <Sun size={28} />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IllustrationSection;