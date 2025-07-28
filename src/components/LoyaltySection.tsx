import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, MapPin, Building, Award, Smile, TrendingUp } from 'lucide-react';

const LoyaltySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-16 px-4 sm:px-8 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="mb-4"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-6 h-6 text-cyan-600" />
                  <span className="text-cyan-600 font-semibold font-poppins text-sm">
                    Get up to 45  % off extra on your stays!
                  </span>
                </div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 font-poppins"
              >
                The more you stay,<br />
                the less you pay.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white/80 text-lg leading-relaxed font-poppins"
              >
                A loyalty program designed for our most committed guests — like you, who stay with us wherever they go.
              </motion.p>
            </div>

            {/* Right Illustration */}
            <div className="relative p-8 lg:p-12 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white/95 rounded-2xl p-6 lg:p-8 w-full max-w-sm shadow-xl"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-yellow-500 font-bold text-xl font-poppins">ACE STAYZ</div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                    </div>
                    <div className="w-4 h-2 bg-gray-200 rounded-full"></div>
                    <div className="w-4 h-2 bg-gray-200 rounded-full"></div>
                  </div>
                </div>

                {/* Illustration */}
                <div className="relative bg-gray-50 rounded-xl p-6 mb-6 h-32">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Buildings */}
                    <div className="flex items-end gap-1">
                      <Building className="w-8 h-12 text-gray-300" />
                      <Building className="w-10 h-16 text-yellow-400" />
                      <Building className="w-6 h-10 text-gray-300" />
                      <Building className="w-8 h-14 text-gray-300" />
                    </div>
                    
                    {/* Floating elements */}
                    <motion.div
                      animate={{ y: [-5, 5, -5] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute top-2 right-4"
                    >
                      <div className="w-6 h-4 bg-gray-200 rounded-full opacity-60"></div>
                    </motion.div>
                    
                    <motion.div
                      animate={{ y: [5, -5, 5] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                      className="absolute top-4 left-4"
                    >
                      <Award className="w-5 h-5 text-yellow-400" />
                    </motion.div>
                  </div>
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 rounded-xl py-3 px-4 flex items-center justify-between text-gray-600 font-medium font-poppins"
                >
                  <span>Unlock Member Rates</span>
                  <TrendingUp className="w-4 h-4" />
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