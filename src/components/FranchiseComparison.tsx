
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, X } from 'lucide-react';

const FranchiseComparison = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const comparisonData = [
    {
      title: "Recession Proof",
      subtitle: "High - Business will have Demand even in Recession",
      hotel: true,
      food: false,
      gym: false,
      salon: true
    },
    {
      title: "Inventory",
      subtitle: "Low - Minimal Chances of Losses",
      hotel: true,
      food: false,
      gym: true,
      salon: false
    },
    {
      title: "Online to Offline Service",
      subtitle: "High - Home Service/Delivery Possible",
      hotel: true,
      food: true,
      gym: false,
      salon: false
    },
    {
      title: "Automation",
      subtitle: "High - Less Dependency on Trained Staff",
      hotel: true,
      food: false,
      gym: false,
      salon: false
    },
    {
      title: "Competitive",
      subtitle: "Low Intensity - High Margins",
      hotel: true,
      food: false,
      gym: false,
      salon: false
    }
  ];

  const categories = [
    { name: "HOTEL", score: "5/5" },
    { name: "FOOD", score: "1/5" },
    { name: "GYM", score: "1/5" },
    { name: "SALON", score: "1/5" }
  ];

  return (
    <section ref={ref} className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-ace-dark mb-4">
            Why Hotel Is India's Most Profitable Franchise Business
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-4 text-left font-poppins font-semibold text-ace-dark"></th>
                  {categories.map((category, index) => (
                    <th key={category.name} className="px-6 py-4 text-center">
                      <div className="font-poppins font-bold text-lg text-ace-dark mb-1">
                        {category.name}
                      </div>
                      <div className="text-sm text-gray-600">{category.score}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="px-6 py-4">
                      <div className="font-poppins font-semibold text-ace-dark mb-1">
                        {item.title}
                      </div>
                      <div className="text-sm text-gray-600">
                        <span className="text-green-600 font-medium">
                          {item.subtitle.split(' - ')[0]}
                        </span>
                        {' - '}
                        {item.subtitle.split(' - ')[1]}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      {item.hotel ? (
                        <Check className="w-8 h-8 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-8 h-8 text-red-500 mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {item.food ? (
                        <Check className="w-8 h-8 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-8 h-8 text-red-500 mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {item.gym ? (
                        <Check className="w-8 h-8 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-8 h-8 text-red-500 mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {item.salon ? (
                        <Check className="w-8 h-8 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-8 h-8 text-red-500 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FranchiseComparison;
