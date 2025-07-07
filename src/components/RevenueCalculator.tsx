
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Calculator, TrendingUp, MapPin, Bed, DollarSign } from 'lucide-react';

const RevenueCalculator = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [selectedLocation, setSelectedLocation] = useState('metro');
  const [selectedRooms, setSelectedRooms] = useState(20);
  const [selectedRate, setSelectedRate] = useState('mid-scale');

  const locations = [
    { id: 'metro', name: 'Metro', description: '(eg. Bangalore, Mumbai, Kolkata)', icon: <MapPin className="w-6 h-6" /> },
    { id: 'cities', name: 'Cities', description: '(eg. Indore, Ahmedabad, Pune)', icon: <MapPin className="w-6 h-6" /> },
    { id: 'tourist', name: 'Major Tourist Destinations', description: '(eg. Manali, Ooty, Goa)', icon: <MapPin className="w-6 h-6" /> },
    { id: 'offbeat', name: 'Offbeat', description: '(eg. Vagamon, Bir, Pushkar)', icon: <MapPin className="w-6 h-6" /> },
    { id: 'remote', name: 'Remote', description: '(eg. Shangarh, Cheog, Vythiri)', icon: <MapPin className="w-6 h-6" /> }
  ];

  const roomOptions = [15, 20, 25];
  const rateOptions = [
    { id: 'budget', name: 'Budget' },
    { id: 'mid-scale', name: 'Mid-scale' }
  ];

  // Dummy calculation logic
  const calculateMetrics = () => {
    const baseRevenue = selectedRooms * 2000;
    const locationMultiplier = {
      metro: 1.5,
      cities: 1.3,
      tourist: 1.4,
      offbeat: 1.2,
      remote: 1.0
    };
    const rateMultiplier = selectedRate === 'mid-scale' ? 1.3 : 1.0;
    
    const yearlyRevenue = Math.round(baseRevenue * locationMultiplier[selectedLocation as keyof typeof locationMultiplier] * rateMultiplier * 12);
    const yearlyExpense = Math.round(yearlyRevenue * 0.56);
    const occupancy = selectedLocation === 'metro' ? 85 : selectedLocation === 'cities' ? 80 : 75;
    const ebitda = yearlyRevenue - yearlyExpense;

    return {
      yearlyRevenue: yearlyRevenue.toLocaleString('en-IN'),
      yearlyExpense: yearlyExpense.toLocaleString('en-IN'),
      occupancy,
      ebitda: ebitda.toLocaleString('en-IN')
    };
  };

  const metrics = calculateMetrics();

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-poppins text-4xl lg:text-6xl font-bold text-ace-dark mb-6">
            Reach operational <span className="text-ace-gold">break-even</span> in
            <span className="text-ace-gold block">1-2 months</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto font-poppins">
            Use our revenue calculator to explore the scope of your business before you begin working on your dreams.
          </p>
        </motion.div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Results Display */}
          <div className="bg-gradient-to-r from-orange-400 to-orange-500 p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-gray-900 font-poppins mb-2">
                  ₹{metrics.yearlyRevenue}
                </div>
                <div className="text-gray-600 font-poppins">Revenue Yearly</div>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-gray-900 font-poppins mb-2">
                  ₹{metrics.yearlyExpense}
                </div>
                <div className="text-gray-600 font-poppins">Expense Yearly</div>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-gray-900 font-poppins mb-2">
                  {metrics.occupancy}%
                </div>
                <div className="text-gray-600 font-poppins">Occupancy</div>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-gray-900 font-poppins mb-2">
                  ₹{metrics.ebitda}
                </div>
                <div className="text-gray-600 font-poppins">EBITDA Yearly</div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="p-8 space-y-8">
            {/* Location Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 font-poppins">SELECT A LOCATION</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {locations.map((location) => (
                  <motion.button
                    key={location.id}
                    onClick={() => setSelectedLocation(location.id)}
                    className={`p-4 rounded-xl border-2 text-center transition-all duration-300 ${
                      selectedLocation === location.id
                        ? 'border-orange-500 bg-orange-50 text-orange-600'
                        : 'border-gray-200 hover:border-orange-300 text-gray-700'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex justify-center mb-2">
                      {location.icon}
                    </div>
                    <div className="font-semibold font-poppins text-sm">{location.name}</div>
                    <div className="text-xs text-gray-500 font-poppins mt-1">{location.description}</div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Room Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 font-poppins">SELECT NO. OF ROOMS</h3>
              <div className="flex gap-3">
                {roomOptions.map((rooms) => (
                  <motion.button
                    key={rooms}
                    onClick={() => setSelectedRooms(rooms)}
                    className={`px-8 py-3 rounded-xl border-2 font-semibold font-poppins transition-all duration-300 ${
                      selectedRooms === rooms
                        ? 'border-orange-500 bg-orange-500 text-white'
                        : 'border-gray-200 text-gray-700 hover:border-orange-300'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {rooms}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Rate Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 font-poppins">SELECT THE AVERAGE ROOM RATE</h3>
              <div className="flex gap-3">
                {rateOptions.map((rate) => (
                  <motion.button
                    key={rate.id}
                    onClick={() => setSelectedRate(rate.id)}
                    className={`px-8 py-3 rounded-xl border-2 font-semibold font-poppins transition-all duration-300 ${
                      selectedRate === rate.id
                        ? 'border-orange-500 bg-orange-500 text-white'
                        : 'border-gray-200 text-gray-700 hover:border-orange-300'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {rate.name}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-ace-gold text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-ace-dark transition-colors duration-300 shadow-xl font-poppins"
          >
            Get Detailed Business Plan
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default RevenueCalculator;
