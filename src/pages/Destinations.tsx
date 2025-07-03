
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ThreeBackground from '../components/ThreeBackground';
import { MapPin, Star, Calendar, Users } from 'lucide-react';

const Destinations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const destinations = [
    {
      city: "Delhi",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop",
      description: "India's vibrant capital, where history meets modernity",
      properties: 12,
      rating: 4.8,
      highlights: ["Red Fort", "India Gate", "Connaught Place", "Lotus Temple"]
    },
    {
      city: "Gurugram",
      image: "https://images.unsplash.com/photo-1567552020993-6b0b29c2d35e?w=800&h=600&fit=crop",
      description: "The millennium city and corporate hub of North India",
      properties: 8,
      rating: 4.9,
      highlights: ["Cyber City", "Kingdom of Dreams", "Ambience Mall", "Golf Course"]
    },
    {
      city: "Jaipur",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      description: "The Pink City with royal heritage and stunning architecture",
      properties: 6,
      rating: 4.7,
      highlights: ["Hawa Mahal", "City Palace", "Amber Fort", "Jantar Mantar"]
    },
    {
      city: "Noida",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
      description: "Planned city with modern infrastructure and IT parks",
      properties: 5,
      rating: 4.6,
      highlights: ["Sector 18 Market", "DLF Mall", "Botanical Garden", "Film City"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <ThreeBackground />
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ace-gold/10 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="font-playfair text-5xl lg:text-7xl font-bold text-ace-dark mb-6">
              Stay Where You
              <span className="text-ace-gold block">Belong</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your perfect destination and let the journey begin. 
              Discover our premium accommodations across India's most vibrant cities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section ref={ref} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.city}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-3xl mb-8">
                  <img
                    src={destination.image}
                    alt={destination.city}
                    className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="font-playfair text-4xl font-bold text-white">
                        {destination.city}
                      </h2>
                      <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                        <Star size={16} className="text-ace-gold fill-current" />
                        <span className="text-white font-medium">{destination.rating}</span>
                      </div>
                    </div>
                    
                    <p className="text-white/90 text-lg mb-4">
                      {destination.description}
                    </p>
                    
                    <div className="flex items-center space-x-6 text-white/80 mb-6">
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} />
                        <span className="text-sm">{destination.properties} Properties</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users size={16} />
                        <span className="text-sm">Premium Locations</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="font-playfair text-2xl font-bold text-ace-dark mb-4">
                      Top Attractions
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {destination.highlights.map((highlight, idx) => (
                        <div
                          key={highlight}
                          className="bg-gray-50 rounded-lg px-4 py-2 text-center"
                        >
                          <span className="text-sm font-medium text-gray-700">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-ace-gold text-white py-3 rounded-full font-medium hover:bg-ace-dark transition-colors duration-300"
                    >
                      View Properties
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 border-2 border-ace-gold text-ace-gold py-3 rounded-full font-medium hover:bg-ace-gold hover:text-white transition-all duration-300"
                    >
                      Learn More
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-ace-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-ace-gold rounded-full -translate-y-48 translate-x-48" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-ace-gold rounded-full translate-y-32 -translate-x-32" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-playfair text-4xl lg:text-6xl font-bold mb-6">
              Ready to Explore?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Book your perfect stay today and discover the luxury that awaits you 
              in India's most exciting destinations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-ace-gold text-ace-dark px-8 py-4 rounded-full text-lg font-medium hover:bg-white transition-colors duration-300"
              >
                Book Your Stay
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-ace-gold text-ace-gold px-8 py-4 rounded-full text-lg font-medium hover:bg-ace-gold hover:text-ace-dark transition-all duration-300"
              >
                View All Properties
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Destinations;
