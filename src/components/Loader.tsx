import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-tan-brown z-50 flex items-center justify-center">
      <div className="text-center space-y-6">

        {/* Title */}
        <motion.h1
          className="text-4xl font-bold text-coffee-brown font-poppins tracking-wide"
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
              className="w-3 h-3 bg-coffee-brown rounded-full"
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
