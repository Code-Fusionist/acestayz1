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
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h1 className="font-playfair text-5xl lg:text-7xl font-bold text-ace-dark mb-6">
          Our Franchise <span className="text-ace-gold block">Proposition</span>
        </h1>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative mx-auto max-w-6xl"
      >
        <img
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&h=600&fit=crop"
          alt="Franchise Stats"
          className="w-full h-72 object-cover rounded-3xl shadow-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl" />

        <div className="absolute bottom-6 left-6 right-6 text-white">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {franchiseStats.map((item) => (
              <div key={item.title} className="text-center">
                <div className="mb-1 text-ace-gold">{item.icon}</div>
                <div className="text-base sm:text-lg font-bold">{item.value}</div>
                <div className="text-xs opacity-90 uppercase">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FranchiseProposition;
