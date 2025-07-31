import { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useScrollReveal } from '../hooks/useParallax';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
// import AboutSection from '../components/AboutSection';
import DestinationSection from '../components/DestinationSection';
import LoyaltySection from '../components/LoyaltySection';
import FeaturedRoomsSection from '../components/FeaturedRoomsSection';
import FeaturedSection from '../components/FeaturedSection';
// import ServicesSection from '../components/ServicesSection';
import PartnersSection from '../components/PartnersSection';
// import PartnershipSection from '../components/PartnershipSection';
import { useNavigate } from 'react-router-dom';
import WhatsAppButton from '../components/WhatsAppButton';
import FloatingArrow from '@/components/FloatingArrow';
import Footer from '../components/Footer';
import PressCarousel from '../components/PressCarousel';

const Index = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  
  useScrollReveal();

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

  return (
    <div className="relative min-h-screen bg-sand-beige overflow-x-hidden">
      
      <Navbar onContactClick={() => navigate('/contact')} />
        
      <div className="relative z-10 y-5">
        <HeroSection />
      </div>
      <div className="relative z-5">
        <LoyaltySection />
        <FeaturedSection />
        <FeaturedRoomsSection />
        <DestinationSection />
        <PressCarousel />
        {/* <ServicesSection /> */}
        <PartnersSection />
        {/* <PartnershipSection onContactClick={() => setShowContactForm(true)} /> */}
      </div>

      <Footer />
      <WhatsAppButton />
      <FloatingArrow />
    </div>
  );
};

export default Index;
