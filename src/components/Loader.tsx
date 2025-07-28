import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center space-y-6">
        {/* Hotel Building */}
        <motion.div
          className="mx-auto"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Roof */}
          <div className="w-0 h-0 border-l-[48px] border-r-[48px] border-b-[24px] border-l-transparent border-r-transparent border-b-[#1f2937] mx-auto" />

          {/* Building */}
          <div className="relative w-32 h-40 bg-gradient-to-b from-gray-800 to-gray-700 rounded-b-xl shadow-xl border-t-4 border-ace-gold mx-auto overflow-hidden">
            {/* Windows */}
            <div className="grid grid-cols-3 gap-2 p-3">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="w-full h-4 bg-yellow-400 rounded-sm shadow-sm animate-pulse"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>

            {/* Door */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-8 h-10 bg-gradient-to-t from-yellow-600 to-yellow-300 rounded-sm shadow-inner border border-yellow-500" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-4xl font-bold text-ace-gold font-poppins tracking-wide"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          ACE STAYZ
        </motion.h1>

        {/* Loading Dots */}
        <div className="flex space-x-2 justify-center">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-ace-gold rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        {/* Subtext */}
        <motion.p
          className="text-ace-dark font-poppins text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Almost there...
        </motion.p>
      </div>
    </div>
  );
};

export default Loader;
