import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { useScrollReveal } from '@/hooks/useParallax';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import CelebrityPromotion from '../components/CelebrityPromotion';
import IllustrationSection from '../components/IllustrationSection';
import FranchiseComparison from '../components/FranchiseComparison';
import FranchiseProposition from '../components/FranchiseProposition';
import HowWeWork from '../components/HowWeWork';
import RevenueCalculator from '../components/RevenueCalculator';
import HotelierSection from '@/components/HotelierSection';
import FloatingArrow from '@/components/FloatingArrow';
import { TrendingUp, Users, Award, Handshake, MapPin, Rocket, } from 'lucide-react';

const PartnerWithUs = () => {
  const ref = useRef(null);
  const processRef = useRef(null);

  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isProcessInView = useInView(processRef, { once: true, margin: '-100px' });


  const [activeStep, setActiveStep] = useState(0);

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Revenue Growth',
      description:
        'Maximize your property revenue with our proven hospitality strategies and guest acquisition channels.',
      stats: 'Up to 40% increase in revenue',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Guest Management',
      description:
        'Professional guest relations and 24/7 support to ensure exceptional experiences and repeat bookings.',
      stats: '98% guest satisfaction rate',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Brand Excellence',
      description:
        'Maintain premium standards with our quality assurance programs and brand guidelines.',
      stats: '5-star quality standards',
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: 'Partnership Support',
      description:
        'Dedicated partnership managers to guide you through every step of our collaboration.',
      stats: '24/7 dedicated support',
    },
  ];

  const process = [
    {
      title: 'Initial Consultation',
      description: 'We guide you with complete knowledge of our franchise program.',
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: 'Real Estate Support',
      description: 'Assistance in finding ideal property for your hotel.',
      icon: <MapPin className="w-6 h-6" />,
    },
    {
      title: 'Hotel Launch',
      description: 'From setup to opening, we manage it all.',
      icon: <Rocket className="w-6 h-6" />,
    },
    {
      title: 'Agreement & Setup',
      description: 'Sign the partnership agreement and begin property setup.',
      icon: <Handshake className="w-6 h-6" />,
    },
  ];

  useScrollReveal();

  return (
    <div className="min-h-screen bg-sand-beige">
      <Navbar />

      {/* Optional Promo Sections */}
      {/* <CelebrityPromotion />
      <IllustrationSection /> */}
      <HotelierSection />
      <FranchiseProposition />
      <HowWeWork />
      <FranchiseComparison />

      {/* Process Section */}
      <section ref={processRef} className="py-20 bg-tan-brown/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-poppins text-4xl lg:text-6xl font-bold text-coffee-brown mb-6">
              Partnership Process
            </h2>
            <p className="text-lg text-coffee-brown/80 max-w-2xl mx-auto">
              A simple 4-step process to get your property listed and generating revenue
            </p>
          </motion.div>

          <div className="relative">
            {/* Static Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-tan-brown/20 transform -translate-y-1/2 hidden lg:block" />

            {/* Active Progress Line */}
            <div
              className="absolute top-1/2 left-0 h-1 bg-tan-brown transform -translate-y-1/2 transition-all duration-1000 hidden lg:block"
              style={{ width: `${(activeStep + 1) * 25}%` }}
            />

            {/* Process Steps */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {process.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center group cursor-pointer"
                  onMouseEnter={() => setActiveStep(index)}
                >
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${index <= activeStep
                        ? 'bg-tan-brown text-white'
                        : 'bg-white border-2 border-tan-brown text-tan-brown'
                      }`}
                  >
                    {step.icon}
                  </div>
                  <h3 className="font-poppins text-lg font-bold text-coffee-brown mb-2">
                    {step.title}
                  </h3>
                  <p className="text-coffee-brown/70 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* <RevenueCalculator /> */}
      <Footer />
      <WhatsAppButton />
      <FloatingArrow />
    </div>
  );
};

export default PartnerWithUs;
