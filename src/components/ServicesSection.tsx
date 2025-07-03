
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Wifi, Car, Coffee, Dumbbell, Shield, Clock, Utensils, Headphones } from 'lucide-react';

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: <Wifi className="w-8 h-8" />,
      title: 'High-Speed Wi-Fi',
      description: 'Stay connected with complimentary high-speed internet throughout your stay'
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: 'Valet Parking',
      description: 'Secure valet parking service available 24/7 for your convenience'
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: 'In-Room Dining',
      description: 'Gourmet meals delivered to your room with our premium dining service'
    },
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: 'Fitness Center',
      description: 'State-of-the-art gym facilities open 24 hours for your wellness needs'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security',
      description: 'Round-the-clock security with CCTV monitoring for your peace of mind'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '24/7 Concierge',
      description: 'Personal concierge service to assist with all your travel needs'
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: 'Fine Dining',
      description: 'World-class restaurants offering local and international cuisine'
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: 'Guest Support',
      description: 'Dedicated guest support team available to ensure your comfort'
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 relative overflow-hidden" style={{ backgroundColor: '#FFEAD8' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl lg:text-6xl font-bold text-ace-dark mb-6">
            Beyond the 
            <span className="text-ace-gold block">Stay</span>
          </h2>
          <p className="text-lg lg:text-xl text-ace-dark/80 max-w-3xl mx-auto">
            Amenities that elevate every moment — from arrival to check-out.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover-lift transition-all duration-300 group-hover:shadow-2xl">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-ace-gold/10 rounded-2xl flex items-center justify-center group-hover:bg-ace-gold group-hover:text-white transition-all duration-300 text-ace-gold">
                    {service.icon}
                  </div>
                </div>
                <h3 className="font-playfair text-xl font-bold text-ace-dark mb-3 group-hover:text-ace-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-4xl mx-auto">
            <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-ace-dark mb-4">
              Experience Unmatched Hospitality
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Every service is designed with your comfort in mind. From seamless check-in to personalized experiences, we ensure your stay is nothing short of exceptional.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-ace-gold text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-ace-dark transition-colors duration-300 shadow-lg"
            >
              Learn More About Our Services
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
