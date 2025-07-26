
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

import TestimonialsSection from '../components/TestimonialsSection';
import { Shield, Clock, Star, HeadphonesIcon, Wifi, Car, Coffee, Dumbbell } from 'lucide-react';

const WhyUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const reasons = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Premium Quality Assurance",
      description: "Every property undergoes rigorous quality checks to ensure it meets our highest standards for cleanliness, comfort, and luxury."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "24/7 Concierge Service",
      description: "Round-the-clock support for all your needs, from booking assistance to local recommendations and emergency support."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Personalized Experiences",
      description: "Tailored services and amenities designed to make your stay unique and memorable, just the way you prefer it."
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8" />,
      title: "Dedicated Guest Relations",
      description: "Personal guest managers who ensure every aspect of your stay exceeds expectations with proactive service."
    }
  ];

  const amenities = [
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "High-Speed WiFi",
      description: "Complimentary ultra-fast internet"
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Premium Parking",
      description: "Secure parking for your vehicle"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Gourmet Kitchen",
      description: "Fully equipped modern kitchen"
    },
    {
      icon: <Dumbbell className="w-6 h-6" />,
      title: "Fitness Access",
      description: "Gym and wellness facilities"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Guests" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "4.9", label: "Average Rating" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-beyond-bg/30 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="font-playfair text-5xl lg:text-7xl font-bold text-ace-dark mb-6">
              Why Choose
              <span className="text-ace-gold block">Ace Stayz</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes us the preferred choice for discerning travelers 
              who value exceptional service and unparalleled comfort.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="text-4xl lg:text-5xl font-bold text-ace-gold mb-2"
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Reasons Section */}
      <section ref={ref} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl lg:text-6xl font-bold text-ace-dark mb-6">
              Beyond the Stay
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Amenities that elevate every moment — from arrival to check-out
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="flex items-start space-x-6 group"
              >
                <div className="w-16 h-16 bg-ace-gold/10 rounded-2xl flex items-center justify-center text-ace-gold group-hover:bg-ace-gold group-hover:text-white transition-all duration-300 flex-shrink-0">
                  {reason.icon}
                </div>
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-ace-dark mb-4">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 bg-beyond-bg/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-ace-dark mb-6">
              Premium Amenities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every stay includes access to our carefully curated amenities designed for your comfort
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
              <motion.div
                key={amenity.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover-lift"
              >
                <div className="w-12 h-12 bg-ace-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-ace-gold">
                  {amenity.icon}
                </div>
                <h3 className="font-playfair text-lg font-bold text-ace-dark mb-2">
                  {amenity.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {amenity.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&h=700&fit=crop"
                alt="Luxury Experience"
                className="rounded-3xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-ace-gold fill-current" />
                  ))}
                </div>
                <blockquote className="text-2xl lg:text-3xl font-playfair text-ace-dark leading-relaxed mb-6">
                  "Ace Stayz redefined luxury hospitality for us. Every detail was perfect, 
                  from the immaculate rooms to the exceptional service. We felt like royalty."
                </blockquote>
                <div>
                  <div className="font-semibold text-ace-dark">Sarah & Michael Johnson</div>
                  <div className="text-gray-600">Business Travelers, Delhi</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      {/* CTA Section */}
      <section className="py-20 bg-ace-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-ace-gold rounded-full -translate-y-48 translate-x-48" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-ace-gold rounded-full translate-y-32 -translate-x-32" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-playfair text-4xl lg:text-6xl font-bold mb-6">
              Experience the Difference
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied guests who have chosen Ace Stayz for their premium hospitality needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-ace-gold text-ace-dark px-8 py-4 rounded-full text-lg font-medium hover:bg-white transition-colors duration-300"
              >
                Book Your Stay
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-ace-gold text-ace-gold px-8 py-4 rounded-full text-lg font-medium hover:bg-ace-gold hover:text-ace-dark transition-all duration-300"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default WhyUs;
