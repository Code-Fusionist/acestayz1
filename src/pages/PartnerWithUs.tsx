import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
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
import {
  TrendingUp,
  Users,
  Award,
  Handshake,
  CheckCircle,
  Star,
  DollarSign,
} from 'lucide-react';

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
      description: 'We assess your property and discuss partnership opportunities',
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: 'Property Evaluation',
      description: 'Our team conducts a thorough evaluation of your property',
      icon: <CheckCircle className="w-6 h-6" />,
    },
    {
      title: 'Agreement & Setup',
      description: 'Sign partnership agreement and begin property setup',
      icon: <Handshake className="w-6 h-6" />,
    },
    {
      title: 'Launch & Optimize',
      description: 'Go live and continuously optimize for maximum revenue',
      icon: <TrendingUp className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Optional Promo Sections */}
      {/* <CelebrityPromotion />
      <IllustrationSection /> */}
      <HotelierSection />
      <FranchiseProposition />
      <HowWeWork />
      <FranchiseComparison />

      {/* Process Section */}
      <section ref={processRef} className="py-20 bg-suite-bg/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl lg:text-6xl font-bold text-ace-dark mb-6">
              Partnership Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A simple 4-step process to get your property listed and generating revenue
            </p>
          </motion.div>

          <div className="relative">
            {/* Static Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-ace-gold/20 transform -translate-y-1/2 hidden lg:block" />

            {/* Active Progress Line */}
            <div
              className="absolute top-1/2 left-0 h-1 bg-ace-gold transform -translate-y-1/2 transition-all duration-1000 hidden lg:block"
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
                    className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${
                      index <= activeStep
                        ? 'bg-ace-gold text-white'
                        : 'bg-white border-2 border-ace-gold text-ace-gold'
                    }`}
                  >
                    {step.icon}
                  </div>
                  <h3 className="font-playfair text-lg font-bold text-ace-dark mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={ref} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl lg:text-6xl font-bold text-ace-dark mb-6">
              Why Partner With Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join our network of successful partners and experience the benefits of working with industry leaders
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg hover-lift group border border-gray-100"
              >
                <div className="w-16 h-16 bg-ace-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-ace-gold group-hover:text-white transition-all duration-300 text-ace-gold">
                  {benefit.icon}
                </div>
                <h3 className="font-playfair text-xl font-bold text-ace-dark mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 mb-4">{benefit.description}</p>
                <div className="text-ace-gold font-semibold text-sm">{benefit.stats}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-ace-dark text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-ace-gold/10 rounded-full -translate-y-32 translate-x-32" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-ace-gold/10 rounded-full translate-y-24 -translate-x-24" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-playfair text-4xl lg:text-6xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Take the first step towards a successful partnership with Ace Stayz. Our team is ready to discuss how we can help transform your property.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-ace-gold text-ace-dark px-8 py-4 rounded-full text-lg font-bold hover:bg-white transition-colors duration-300 shadow-xl"
              >
                Contact Partnership Team
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-ace-gold text-ace-gold px-8 py-4 rounded-full text-lg font-medium hover:bg-ace-gold hover:text-ace-dark transition-all duration-300"
              >
                Schedule a Call
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <RevenueCalculator />
      <Footer />
      <WhatsAppButton />
      <FloatingArrow />
    </div>
  );
};

export default PartnerWithUs;
