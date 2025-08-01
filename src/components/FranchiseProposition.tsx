import { motion } from 'framer-motion';
import {
  Building,
  Calendar,
  DollarSign,
  TrendingUp,
  Users,
  CreditCard,
} from 'lucide-react';

const FranchiseProposition = () => {
  const franchiseStats = [
    {
      icon: <Building className="w-6 h-6 mx-auto mb-1" />,
      value: "20 Rooms Required",
      title: "PROPERTY SIZE",
    },
    {
      icon: <Calendar className="w-6 h-6 mx-auto mb-1" />,
      value: "3 Months",
      title: "BREAK EVEN PERIOD",
    },
    {
      icon: <DollarSign className="w-6 h-6 mx-auto mb-1" />,
      value: "2.5 Lakh",
      title: "MONTHLY PROFIT",
    },
    {
      icon: <TrendingUp className="w-6 h-6 mx-auto mb-1" />,
      value: "70%",
      title: "ANNUAL ROI",
    },
    {
      icon: <Users className="w-6 h-6 mx-auto mb-1" />,
      value: "15 - 18 Months",
      title: "INVESTMENT RECOVERY",
    },
    {
      icon: <CreditCard className="w-6 h-6 mx-auto mb-1" />,
      value: "50 Lakh",
      title: "TOTAL INVESTMENT",
    },
  ];

  return (
    <section className="py-12 px-4 bg-sand-beige scroll-reveal parallax-bg">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h1 className="font-poppins text-3xl lg:text-4xl font-bold text-coffee-brown mb-6 parallax-slow">
          Franchise Model Highlights
        </h1>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-6xl mx-auto bg-tan-brown rounded-2xl p-6 sm:p-8 shadow-xl"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {franchiseStats.map((item, index) => (
            <motion.div 
              key={item.title} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center bg-sand-beige rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-3 text-coffee-brown flex justify-center">{item.icon}</div>
              <div className="text-lg sm:text-xl font-bold text-coffee-brown mb-1">{item.value}</div>
              <div className="text-xs text-gray-600 uppercase font-medium">{item.title}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FranchiseProposition;
