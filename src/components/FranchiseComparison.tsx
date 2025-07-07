
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, X } from 'lucide-react';

const FranchiseComparison = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const comparisonData = [
    {
      category: "Recession Proof",
      description: "Business will have Demand even in Recession",
      hotels: true,
      food: false,
      gym: false,
      salon: true
    },
    {
      category: "Inventory",
      description: "Minimal Chances of Losses",
      hotels: true,
      food: false,
      gym: true,
      salon: false
    },
    {
      category: "Offline to Online Service",
      description: "Home Service/Delivery Possible",
      hotels: true,
      food: true,
      gym: false,
      salon: false
    },
    {
      category: "Automation",
      description: "Less Dependency on Trained Staff",
      hotels: true,
      food: false,
      gym: false,
      salon: false
    },
    {
      category: "Competitive",
      description: "Low Intensity - High Margins",
      hotels: true,
      food: false,
      gym: false,
      salon: false
    }
  ];

  const ratings = {
    hotels: "5/5",
    food: "1/5",
    gym: "1/5",
    salon: "1/5"
  };

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-poppins text-4xl lg:text-6xl font-bold text-ace-dark mb-6">
            Why <span className="text-ace-gold">HOTEL</span> Is India's Most
            <span className="text-ace-gold block">Profitable Franchise Business</span>
          </h2>
        </motion.div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-left font-semibold text-gray-900 font-poppins">
                    Comparison Factors
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-green-600 font-poppins">
                    HOTEL
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-900 font-poppins">
                    FOOD
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-900 font-poppins">
                    GYM
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-900 font-poppins">
                    SALON
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <motion.tr
                    key={item.category}
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors"
                  >
                    <td className="px-6 py-6">
                      <div>
                        <div className="font-semibold text-gray-900 font-poppins mb-1">
                          {item.category}
                        </div>
                        <div className="text-sm text-gray-600 font-poppins">
                          <span className="text-green-600 font-medium">High</span> - {item.description}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-6 text-center">
                      {item.hotels ? (
                        <Check className="w-8 h-8 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-8 h-8 text-red-500 mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-6 text-center">
                      {item.food ? (
                        <Check className="w-8 h-8 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-8 h-8 text-red-500 mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-6 text-center">
                      {item.gym ? (
                        <Check className="w-8 h-8 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-8 h-8 text-red-500 mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-6 text-center">
                      {item.salon ? (
                        <Check className="w-8 h-8 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-8 h-8 text-red-500 mx-auto" />
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-gray-50 font-bold">
                  <td className="px-6 py-6 font-poppins text-gray-900">Overall Rating</td>
                  <td className="px-6 py-6 text-center text-2xl text-green-600 font-poppins">
                    {ratings.hotels}
                  </td>
                  <td className="px-6 py-6 text-center text-2xl text-red-500 font-poppins">
                    {ratings.food}
                  </td>
                  <td className="px-6 py-6 text-center text-2xl text-red-500 font-poppins">
                    {ratings.gym}
                  </td>
                  <td className="px-6 py-6 text-center text-2xl text-red-500 font-poppins">
                    {ratings.salon}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseComparison;
