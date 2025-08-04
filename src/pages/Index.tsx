import { useEffect, lazy, Suspense } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useScrollReveal } from '../hooks/useParallax';
import Navbar from '../components/Navbar';
import SEOHead from '../components/SEOHead';
import HeroSection from '../components/HeroSection';

// Lazy load components for better performance
const DestinationSection = lazy(() => import('../components/DestinationSection'));
const LoyaltySection = lazy(() => import('../components/LoyaltySection'));
const FeaturedRoomsSection = lazy(() => import('../components/FeaturedRoomsSection'));
const FeaturedSection = lazy(() => import('../components/FeaturedSection'));
const PartnersSection = lazy(() => import('../components/PartnersSection'));
const Footer = lazy(() => import('../components/Footer'));
const PressCarousel = lazy(() => import('../components/PressCarousel'));

import { useNavigate } from 'react-router-dom';
import WhatsAppButton from '../components/WhatsAppButton';
import FloatingArrow from '@/components/FloatingArrow';

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
      <SEOHead 
        title="ACE STAYZ - Premium Hotel Franchise & Property Management Solutions"
        description="Transform your property into a profitable hospitality business with ACE STAYZ. Premium hotel franchise opportunities, professional management, proven revenue growth strategies, and 24/7 support."
        keywords="hotel franchise, property management, hospitality business, hotel partnership, revenue growth, premium hotels, ACE STAYZ, franchise opportunities"
      />
      
      <Navbar onContactClick={() => navigate('/contact')} />
        
      <div className="relative z-10 y-5">
        <HeroSection />
      </div>
      
      <Suspense fallback={<div className="h-32 bg-sand-beige animate-pulse" />}>
        <div className="relative z-5">
          <LoyaltySection />
          <FeaturedSection />
          <FeaturedRoomsSection />
          <DestinationSection />
          <PressCarousel />
          <PartnersSection />
        </div>

        <Footer />
      </Suspense>
      
      <WhatsAppButton />
      <FloatingArrow />
    </div>
  );
};

export default Index;
