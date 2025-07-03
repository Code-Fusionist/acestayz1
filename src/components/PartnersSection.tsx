
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const PartnersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Using placeholder partner logos - in real implementation, these would be actual partner logos
  const partners = [
    { name: 'Hotel Partner 1', logo: 'https://via.placeholder.com/200x80/baac55/ffffff?text=Partner+1' },
    { name: 'Hotel Partner 2', logo: 'https://via.placeholder.com/200x80/0d0808/ffffff?text=Partner+2' },
    { name: 'Hotel Partner 3', logo: 'https://via.placeholder.com/200x80/baac55/ffffff?text=Partner+3' },
    { name: 'Hotel Partner 4', logo: 'https://via.placeholder.com/200x80/0d0808/ffffff?text=Partner+4' },
    { name: 'Hotel Partner 5', logo: 'https://via.placeholder.com/200x80/baac55/ffffff?text=Partner+5' },
    { name: 'Hotel Partner 6', logo: 'https://via.placeholder.com/200x80/0d0808/ffffff?text=Partner+6' },
    { name: 'Hotel Partner 7', logo: 'https://via.placeholder.com/200x80/baac55/ffffff?text=Partner+7' },
    { name: 'Hotel Partner 8', logo: 'https://via.placeholder.com/200x80/0d0808/ffffff?text=Partner+8' }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl lg:text-6xl font-bold text-ace-dark mb-6">
            Our Esteemed 
            <span className="text-ace-gold block">Partners</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Collaborating with the finest hospitality brands to deliver exceptional experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          {/* Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover-lift transition-all duration-300 group-hover:shadow-2xl flex items-center justify-center h-24">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300 grayscale group-hover:grayscale-0"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Animated Background Elements */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-ace-gold/5 rounded-full animate-float" />
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-ace-dark/5 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-4xl mx-auto">
            <h3 className="font-playfair text-2xl lg:text-3xl font-bold text-ace-dark mb-4">
              Trusted by Industry Leaders
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Our partnerships enable us to offer you access to premium accommodations and exclusive experiences across all our destinations. Together, we create memories that last a lifetime.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="text-3xl font-bold text-ace-gold mb-2">50+</h4>
                <p className="text-gray-600">Partner Properties</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-ace-gold mb-2">15+</h4>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-ace-gold mb-2">98%</h4>
                <p className="text-gray-600">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
