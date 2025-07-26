
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-playfair text-4xl lg:text-6xl font-bold text-ace-dark mb-6">
              Where Elegance 
              <span className="text-ace-gold block">Stays</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
              Where every stay tells a story of comfort and style.
            </p>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                At Ace Stayz, we believe that every journey deserves a perfect stay. Our carefully curated collection of boutique accommodations across India's most vibrant cities offers an unmatched blend of luxury, comfort, and authentic local experiences.
              </p>
              <p className="text-gray-700 leading-relaxed">
                From the bustling streets of Delhi to the royal heritage of Jaipur, from the corporate hub of Gurugram to the modern landscape of Noida — we're your gateway to experiencing India's diverse cultural tapestry while enjoying world-class hospitality.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8">
                <div>
                  <h3 className="text-3xl font-bold text-ace-gold mb-2">500+</h3>
                  <p className="text-gray-600">Happy Guests</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-ace-gold mb-2">4</h3>
                  <p className="text-gray-600">Prime Locations</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=500&fit=crop"
                  alt="Luxury Hotel Room"
                  className="w-full h-64 object-cover rounded-lg shadow-lg hover-lift"
                />
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop"
                  alt="Hotel Lobby"
                  className="w-full h-48 object-cover rounded-lg shadow-lg hover-lift"
                />
              </div>
              <div className="space-y-4 pt-8">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop"
                  alt="Hotel Suite"
                  className="w-full h-48 object-cover rounded-lg shadow-lg hover-lift"
                />
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop"
                  alt="Hotel Amenities"
                  className="w-full h-64 object-cover rounded-lg shadow-lg hover-lift"
                />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-ace-gold/10 rounded-full animate-float" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-ace-dark/5 rounded-full animate-float" style={{ animationDelay: '2s' }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
