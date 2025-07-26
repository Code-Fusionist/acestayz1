
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

import PropertiesSection from '../components/PropertiesSection';
import { Star, MapPin, Wifi, Car, Coffee, Dumbbell } from 'lucide-react';

const YourStayz = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Premium Quality",
      description: "Every property is carefully selected and maintained to our highest standards"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Prime Locations",
      description: "Strategic locations in the heart of major cities for your convenience"
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Modern Amenities",
      description: "High-speed internet, smart TVs, and contemporary furnishings"
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Easy Access",
      description: "Convenient parking and transportation links"
    }
  ];


  return (
    <div className="min-h-screen bg-white">
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ace-gold/10 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="font-playfair text-5xl lg:text-7xl font-bold text-ace-dark mb-6">
              Your Perfect
              <span className="text-ace-gold block">Stayz</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our curated collection of premium accommodations designed 
              for the modern traveler who values comfort, style, and exceptional service.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
                alt="Luxury Hotel Room"
                className="rounded-3xl shadow-2xl hover-lift"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-playfair text-4xl font-bold text-ace-dark mb-6">
                  Where Elegance Stays
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Every stay tells a story of comfort and style. Our properties are 
                  meticulously designed to provide you with an unforgettable experience 
                  that combines luxury with the warmth of home.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 bg-ace-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-3 text-ace-gold">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold text-ace-dark mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <PropertiesSection
        title="Featured Properties"
        subtitle="Handpicked accommodations that represent the best of our collection"
        backgroundColor="bg-gray-50"
        textColor="text-ace-dark"
      />

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default YourStayz;
