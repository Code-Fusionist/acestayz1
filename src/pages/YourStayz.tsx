
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ThreeBackground from '../components/ThreeBackground';
import { Star, MapPin, Wifi, Car, Coffee, Dumbbell } from 'lucide-react';

const YourStayz = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Premium Quality",
      description: "Every property is carefully selected and maintained to our highest standards"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Prime Locations",
      description: "Strategic locations in the heart of major cities for your convenience"
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Modern Amenities",
      description: "High-speed internet, smart TVs, and contemporary furnishings"
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Easy Access",
      description: "Convenient parking and transportation links"
    }
  ];

  const properties = [
    {
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
      title: "Luxury Suite Delhi",
      location: "Connaught Place, Delhi",
      price: "₹8,999",
      rating: 4.8
    },
    {
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop",
      title: "Executive Room Gurugram",
      location: "Cyber City, Gurugram",
      price: "₹7,499",
      rating: 4.9
    },
    {
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop",
      title: "Heritage Stay Jaipur",
      location: "Pink City, Jaipur",
      price: "₹6,999",
      rating: 4.7
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
              Your Perfect
              <span className="text-ace-gold block">Stayz</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our curated collection of premium accommodations designed 
              for the modern traveler who values comfort, style, and exceptional service.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
                alt="Luxury Hotel Room"
                className="rounded-3xl shadow-2xl hover-lift"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-playfair text-4xl font-bold text-ace-dark mb-6">
                  Where Elegance Stays
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Every stay tells a story of comfort and style. Our properties are 
                  meticulously designed to provide you with an unforgettable experience 
                  that combines luxury with the warmth of home.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 bg-ace-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-3 text-ace-gold">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold text-ace-dark mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section ref={ref} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl lg:text-6xl font-bold text-ace-dark mb-6">
              Featured Properties
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Handpicked accommodations that represent the best of our collection
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <motion.div
                key={property.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover-lift group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star size={14} className="text-ace-gold fill-current" />
                    <span className="text-sm font-medium">{property.rating}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-bold text-ace-dark mb-2">
                    {property.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex items-center">
                    <MapPin size={16} className="mr-2" />
                    {property.location}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-ace-gold">
                      {property.price}
                      <span className="text-sm text-gray-500 font-normal">/night</span>
                    </span>
                    <button className="bg-ace-gold text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-ace-dark transition-colors duration-300">
                      Book Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default YourStayz;
