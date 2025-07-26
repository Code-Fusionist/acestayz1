import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building, Calendar, DollarSign, TrendingUp, Users, CreditCard } from 'lucide-react';

const FranchiseProposition = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const propositions = [
    {
      icon: <Building className="w-6 h-6 md:w-8 md:h-8" />,
      title: "PROPERTY SIZE",
      value: "2000 Sq Ft",
      subtitle: "Minimum Area"
    },
    {
      icon: <Calendar className="w-6 h-6 md:w-8 md:h-8" />,
      title: "BREAK EVEN PERIOD",
      value: "6 Months",
      subtitle: "Quick Returns"
    },
    {
      icon: <DollarSign className="w-6 h-6 md:w-8 md:h-8" />,
      title: "MONTHLY PROFIT",
      value: "2.5 Lakh",
      subtitle: "Average Earnings"
    },
    {
      icon: <TrendingUp className="w-6 h-6 md:w-8 md:h-8" />,
      title: "ANNUAL ROI",
      value: "65%",
      subtitle: "High Returns"
    },
    {
      icon: <Users className="w-6 h-6 md:w-8 md:h-8" />,
      title: "INVESTMENT RECOVERY",
      value: "18 Months",
      subtitle: "Fast Recovery"
    },
    {
      icon: <CreditCard className="w-6 h-6 md:w-8 md:h-8" />,
      title: "TOTAL INVESTMENT",
      value: "45 Lakh",
      subtitle: "Complete Setup"
    }
  ];

  return (
    <section ref={ref} className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop"
              alt="Hotel Franchise"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-poppins text-xl sm:text-2xl lg:text-3xl font-bold text-ace-dark mb-6">
              Our Franchise Proposition
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {propositions.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="text-center p-4 sm:p-5 bg-gray-50 rounded-lg hover:bg-ace-gold/10 transition-colors duration-300"
                >
                  <div className="text-ace-gold mb-2 flex justify-center">
                    {item.icon}
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-ace-dark mb-0.5 font-poppins">
                    {item.value}
                  </div>
                  <div className="text-xs font-medium text-gray-700 mb-0.5 font-poppins">
                    {item.title}
                  </div>
                  <div className="text-[10px] text-gray-500 font-poppins">
                    {item.subtitle}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseProposition;
