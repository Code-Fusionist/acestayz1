
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Building, MapPin, Bed, DollarSign } from 'lucide-react';

const RevenueCalculator = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedLocation, setSelectedLocation] = useState('metro');
  const [selectedRooms, setSelectedRooms] = useState('20');
  const [selectedRate, setSelectedRate] = useState('mid-scale');

  const locations = [
    { id: 'metro', name: 'Metro', desc: '(eg. Bangalore, Mumbai, Kolkata)', icon: <Building /> },
    { id: 'cities', name: 'Cities', desc: '(eg. Indore, Ahmedabad, Pune)', icon: <Building /> },
    { id: 'tourist', name: 'Major Tourist Destination', desc: '(eg. Manali, Ooty, Goa)', icon: <MapPin /> },
    { id: 'offbeat', name: 'Offbeat', desc: '(eg. Vagamon, Bir, Pushkar)', icon: <MapPin /> },
    { id: 'remote', name: 'Remote', desc: '(eg. Shangarh, Cheog, Vythiri)', icon: <MapPin /> }
  ];

  const roomOptions = ['15', '20', '25'];
  const rateOptions = [
    { id: 'budget', name: 'Budget' },
    { id: 'mid-scale', name: 'Mid-scale' }
  ];

  // Dummy calculation logic
  const calculateRevenue = () => {
    const baseRevenue = 8000000;
    const locationMultiplier = selectedLocation === 'metro' ? 1.5 : selectedLocation === 'cities' ? 1.2 : 1.0;
    const roomMultiplier = parseInt(selectedRooms) / 20;
    const rateMultiplier = selectedRate === 'mid-scale' ? 1.3 : 1.0;
    
    return Math.round(baseRevenue * locationMultiplier * roomMultiplier * rateMultiplier);
  };

  const revenue = calculateRevenue();
  const expense = Math.round(revenue * 0.56);
  const occupancy = selectedLocation === 'metro' ? 85 : 78;
  const ebitda = revenue - expense;

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="font-poppins text-3xl lg:text-4xl font-bold text-ace-dark mb-4">
            Reach operational break-even in 1-2 months
          </h2>
          <p className="text-lg text-gray-600 font-poppins">
            Use our revenue calculator to explore the scope of your business before you begin working on your dreams.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-3xl p-8 mb-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-2xl p-6 text-center">
              <div className="text-2xl font-bold text-ace-dark mb-1">
                ₹{(revenue / 100000).toFixed(1)} L
              </div>
              <div className="text-sm text-gray-600">Revenue Yearly</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center">
              <div className="text-2xl font-bold text-ace-dark mb-1">
                ₹{(expense / 100000).toFixed(1)} L
              </div>
              <div className="text-sm text-gray-600">Expense Yearly</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center">
              <div className="text-2xl font-bold text-ace-dark mb-1">
                {occupancy}.0%
              </div>
              <div className="text-sm text-gray-600">Occupancy</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center">
              <div className="text-2xl font-bold text-ace-dark mb-1">
                ₹{(ebitda / 100000).toFixed(1)} L
              </div>
              <div className="text-sm text-gray-600">EBITDA Yearly</div>
            </div>
          </div>
        </motion.div>

        <div className="bg-gray-50 rounded-3xl p-8">
          {/* Location Selection */}
          <div className="mb-8">
            <h3 className="font-poppins text-lg font-semibold text-ace-dark mb-4">SELECT A LOCATION</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {locations.map((location) => (
                <button
                  key={location.id}
                  onClick={() => setSelectedLocation(location.id)}
                  className={`p-4 rounded-xl text-center transition-all duration-300 ${
                    selectedLocation === location.id
                      ? 'bg-orange-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <div className="mb-2 flex justify-center">{location.icon}</div>
                  <div className="font-medium text-sm mb-1">{location.name}</div>
                  <div className="text-xs opacity-80">{location.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Room Selection */}
          <div className="mb-8">
            <h3 className="font-poppins text-lg font-semibold text-ace-dark mb-4">SELECT NO. OF ROOMS</h3>
            <div className="flex gap-3">
              {roomOptions.map((rooms) => (
                <button
                  key={rooms}
                  onClick={() => setSelectedRooms(rooms)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedRooms === rooms
                      ? 'bg-orange-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {rooms}
                </button>
              ))}
            </div>
          </div>

          {/* Rate Selection */}
          <div>
            <h3 className="font-poppins text-lg font-semibold text-ace-dark mb-4">SELECT THE AVERAGE ROOM RATE</h3>
            <div className="flex gap-3">
              {rateOptions.map((rate) => (
                <button
                  key={rate.id}
                  onClick={() => setSelectedRate(rate.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedRate === rate.id
                      ? 'bg-orange-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {rate.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevenueCalculator;
