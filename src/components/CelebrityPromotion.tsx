import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';

const CelebrityPromotion = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-8 lg:py-16">
      {/* Yellow curved background */}
      <div
        className="absolute top-0 right-0 h-full w-[75%] bg-ace-gold z-0"
        style={{
          clipPath: "ellipse(120% 100% at 100% 50%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between min-h-[400px] lg:min-h-[500px]">
          {/* Left Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 flex justify-center md:justify-start order-2 md:order-1"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=500&fit=crop"
                alt="Premium Guest Experience"
                className="w-64 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[450px] rounded-3xl object-cover shadow-2xl"
              />
              
              {/* Floating elements */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -top-4 -right-4 bg-white p-3 rounded-full shadow-lg"
              >
                <span className="text-ace-gold text-lg font-bold">VIP</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Text */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 text-center md:text-left order-1 md:order-2 mb-8 md:mb-0"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white drop-shadow font-poppins leading-tight"
            >
              Premium Guests
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-2 text-xl sm:text-2xl lg:text-3xl font-semibold text-white drop-shadow-sm font-poppins"
            >
              Choose Ace Stayz
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-6"
            >
              <Button 
                size="lg" 
                className="bg-white text-ace-gold hover:bg-gray-100 transition-colors duration-300 px-6 py-3 text-lg font-semibold rounded-full"
              >
                Experience Luxury
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CelebrityPromotion;
