
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building, Calendar, DollarSign, TrendingUp, Users, Target } from 'lucide-react';

const FranchiseProposition = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const propositionData = [
    {
      icon: <Building className="w-12 h-12" />,
      title: "STORE SIZE",
      value: "250 Sq Ft",
      color: "text-blue-600"
    },
    {
      icon: <Calendar className="w-12 h-12" />,
      title: "BREAK EVEN PERIOD",
      value: "3 Months",
      color: "text-green-600"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "MONTHLY PROFIT",
      value: "1.7 Lakh",
      color: "text-purple-600"
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "ANNUAL ROI",
      value: "80%",
      color: "text-red-600"
    },
    {
      icon: <DollarSign className="w-12 h-12" />,
      title: "INVESTMENT RECOVERY",
      value: "24 Months",
      color: "text-indigo-600"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "TOTAL INVESTMENT",
      value: "25 Lakh",
      color: "text-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-ace-gold/10 to-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-poppins text-4xl lg:text-6xl font-bold text-ace-dark mb-6">
            Our <span className="text-ace-gold">Franchise</span> Proposition
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-poppins">
            Discover the investment opportunity that delivers exceptional returns and sustainable growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {propositionData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2"
            >
              <div className={`${item.color} mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <h3 className="font-poppins text-lg font-semibold text-gray-700 mb-4 uppercase tracking-wide">
                {item.title}
              </h3>
              <div className={`text-4xl font-bold ${item.color} font-poppins`}>
                {item.value}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative"
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-12 flex items-center">
                <div>
                  <h3 className="font-poppins text-3xl font-bold text-ace-dark mb-6">
                    Ready to Transform Your Investment?
                  </h3>
                  <p className="text-lg text-gray-600 mb-8 font-poppins">
                    Join our successful franchise network and build a profitable hospitality business with proven systems and continuous support.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-ace-gold text-white px-8 py-4 rounded-full font-semibold hover:bg-ace-dark transition-colors duration-300 font-poppins"
                    >
                      Start Your Franchise
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="border-2 border-ace-gold text-ace-gold px-8 py-4 rounded-full font-semibold hover:bg-ace-gold hover:text-white transition-all duration-300 font-poppins"
                    >
                      Download Brochure
                    </motion.button>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/lovable-uploads/e2b61259-5063-4a67-87f3-71c766d92e4c.png"
                  alt="Franchise Proposition"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-white/20" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FranchiseProposition;
