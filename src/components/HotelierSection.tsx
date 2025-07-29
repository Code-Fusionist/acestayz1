import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Award, TrendingUp, Users, CheckCircle } from 'lucide-react';

const HotelierSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Revenue Growth',
      value: '40%+ Increase'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Guest Satisfaction',
      value: '98% Rating'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Premium Standards',
      value: '5-Star Quality'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Success Rate',
      value: '95% Partners'
    }
  ];

  return (
    <section ref={ref} className="w-full bg-gradient-to-br from-white via-gray-50 to-white py-20 px-4 md:px-16 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-ace-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-ace-dark/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ace-dark font-poppins mb-6">
            BECOME A <span className="text-ace-gold">HOTELIER</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-poppins">
            Transform your property into a luxury hospitality experience with Ace Stayz. 
            Join our network of successful partners earning premium returns.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left: Enhanced Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-ace-gold to-ace-dark rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-xl" />
            <div className="relative bg-white rounded-2xl p-6 shadow-2xl">
              <img
                src="/specialservice/50718.jpg"
                alt="Luxury Hotel Partnership"
                className="w-full h-80 object-cover rounded-xl shadow-lg group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute top-10 left-10 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-ace-gold fill-current" />
                  <span className="font-bold text-ace-dark">Premium Partner</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-ace-dark font-poppins mb-4">
                Why Partner With Us?
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed font-poppins">
                Leverage our expertise, technology, and brand strength to maximize your property's 
                potential. From marketing to operations, we handle everything while you enjoy 
                guaranteed returns.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className="w-12 h-12 bg-ace-gold/10 rounded-lg flex items-center justify-center mb-4 text-ace-gold">
                    {benefit.icon}
                  </div>
                  <h4 className="font-bold text-ace-dark mb-2 font-poppins">{benefit.title}</h4>
                  <p className="text-ace-gold font-bold text-lg">{benefit.value}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-ace-gold text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-ace-dark transition-colors duration-300 shadow-xl font-poppins"
              >
                Start Partnership
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-ace-gold text-ace-gold px-8 py-4 rounded-full font-bold text-lg hover:bg-ace-gold hover:text-white transition-all duration-300 font-poppins"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-ace-dark rounded-3xl p-8 md:p-12 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-4xl font-bold text-ace-gold mb-2">500+</h4>
              <p className="text-white/80 font-poppins">Happy Partners</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-ace-gold mb-2">₹50L+</h4>
              <p className="text-white/80 font-poppins">Monthly Revenue</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-ace-gold mb-2">25+</h4>
              <p className="text-white/80 font-poppins">Cities Covered</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HotelierSection;
