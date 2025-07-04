
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Handshake, TrendingUp, Users, Award } from 'lucide-react';

interface PartnershipSectionProps {
  onContactClick: () => void;
}

const PartnershipSection = ({ onContactClick }: PartnershipSectionProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Revenue Growth',
      description: 'Maximize your property revenue with our proven hospitality strategies and guest acquisition channels.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Guest Management',
      description: 'Professional guest relations and 24/7 support to ensure exceptional experiences and repeat bookings.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Brand Excellence',
      description: 'Maintain premium standards with our quality assurance programs and brand guidelines.'
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: 'Partnership Support',
      description: 'Dedicated partnership managers to guide you through every step of our collaboration.'
    }
  ];

  return (
    <section id="partnership" className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-ace-gold/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl lg:text-6xl font-bold text-ace-dark mb-6">
            Partner 
            <span className="text-ace-gold block">With Us</span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Let's build a partnership that delivers exceptional hospitality together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-playfair text-3xl lg:text-4xl font-bold text-ace-dark mb-6">
              Join the Ace Stayz Family
            </h3>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Transform your property into a premium hospitality destination with Ace Stayz. Our comprehensive partnership program is designed to help property owners and managers succeed in the competitive hospitality market.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-ace-gold rounded-full mt-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-ace-dark mb-2">Comprehensive Support</h4>
                  <p className="text-gray-600">From property setup to ongoing operations, we provide end-to-end support for your success.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-ace-gold rounded-full mt-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-ace-dark mb-2">Marketing Excellence</h4>
                  <p className="text-gray-600">Leverage our marketing expertise and brand recognition to attract premium guests.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-ace-gold rounded-full mt-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-ace-dark mb-2">Proven Track Record</h4>
                  <p className="text-gray-600">Join our network of successful partners who have achieved significant revenue growth.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onContactClick}
                className="bg-ace-gold text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-ace-dark transition-colors duration-300 shadow-xl"
              >
                Start Partnership
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-ace-gold text-ace-gold px-8 py-4 rounded-full text-lg font-medium hover:bg-ace-gold hover:text-white transition-all duration-300"
              >
                Download Brochure
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover-lift group"
              >
                <div className="w-16 h-16 bg-ace-gold/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-ace-gold group-hover:text-white transition-all duration-300 text-ace-gold">
                  {benefit.icon}
                </div>
                <h4 className="font-playfair text-lg font-bold text-ace-dark mb-3">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 bg-ace-dark rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-ace-gold/10 rounded-full -translate-y-32 translate-x-32" />
          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-playfair text-3xl lg:text-4xl font-bold mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  Take the first step towards a successful partnership with Ace Stayz. Our team is ready to discuss how we can help transform your property into a premium hospitality destination.
                </p>
              </div>
              <div className="text-center lg:text-right">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onContactClick}
                  className="bg-ace-gold text-ace-dark px-8 py-4 rounded-full text-lg font-bold hover:bg-white transition-colors duration-300 shadow-xl"
                >
                  Contact Our Partnership Team
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnershipSection;
