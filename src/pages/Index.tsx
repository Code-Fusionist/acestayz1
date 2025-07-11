import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
// import AboutSection from '../components/AboutSection';
import DestinationSection from '../components/DestinationSection';
import FeaturedRoomsSection from '../components/FeaturedRoomsSection';
import FeaturedSection from '../components/FeaturedSection';
// import ServicesSection from '../components/ServicesSection';
import PartnersSection from '../components/PartnersSection';
// import PartnershipSection from '../components/PartnershipSection';
import ContactForm from '../components/ContactForm';
import FloatingArrow from '../components/FloatingArrow';
import ThreeBackground from '../components/ThreeBackground';
import Footer from '../components/Footer';
import PressCarousel from '../components/PressCarousel';

const Index = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-in-up');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animate-slide-up');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stats = [
    { number: "10K+", label: "Happy Guests" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "4.9", label: "Average Rating" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      <ThreeBackground />
      
      <Navbar onContactClick={() => setShowContactForm(true)} />
        
      <motion.div style={{ opacity }} className="relative z-10">
        <HeroSection />
      </motion.div>

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

      <div className="relative z-10 space-y-0">
        <FeaturedSection />
        <PressCarousel />
        <DestinationSection />
        <FeaturedRoomsSection />
        {/* <ServicesSection /> */}
        <PartnersSection />
        {/* <PartnershipSection onContactClick={() => setShowContactForm(true)} /> */}
      </div>

      <Footer />
      <FloatingArrow />
      
      {showContactForm && (
        <ContactForm onClose={() => setShowContactForm(false)} />
      )}
    </div>
  );
};

export default Index;
