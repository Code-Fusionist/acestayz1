import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import FloatingArrow from '../components/FloatingArrow';

import { MapPin, Star, Users, Wifi, Car, Coffee } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const Destinations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const destinations = [
    {
      city: "Delhi",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&h=600&fit=crop",
      description: "India's vibrant capital where history meets modernity",
      properties: 15,
      rating: 4.8,
      highlights: ["Red Fort", "India Gate", "Connaught Place", "Lotus Temple"],
      featured: {
        name: "Executive Suite Delhi",
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop",
        price: "₹8,999",
        amenities: ["King Bed", "City View", "Wi-Fi", "Parking"]
      }
    },
    {
      city: "Jaipur",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      description: "The Pink City with royal heritage and stunning architecture",
      properties: 12,
      rating: 4.7,
      highlights: ["Hawa Mahal", "City Palace", "Amber Fort", "Jantar Mantar"],
      featured: {
        name: "Heritage Stay Jaipur",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
        price: "₹6,999",
        amenities: ["Royal Theme", "Garden View", "Wi-Fi", "Cultural Tours"]
      }
    },
    {
      city: "Gurugram",
      image: "https://images.unsplash.com/photo-1567552020993-6b0b29c2d35e?w=800&h=600&fit=crop",
      description: "The millennium city and corporate hub of North India",
      properties: 10,
      rating: 4.9,
      highlights: ["Cyber City", "Kingdom of Dreams", "Ambience Mall", "Golf Course"],
      featured: {
        name: "Business Suite Gurugram",
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop",
        price: "₹7,499",
        amenities: ["Work Desk", "High-Speed WiFi", "Metro Access", "24/7 Service"]
      }
    },
    {
      city: "Noida",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
      description: "Planned city with modern infrastructure and IT parks",
      properties: 8,
      rating: 4.6,
      highlights: ["Sector 18 Market", "DLF Mall", "Botanical Garden", "Film City"],
      featured: {
        name: "Modern Stay Noida",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
        price: "₹5,999",
        amenities: ["Smart TV", "Mall Access", "Wi-Fi", "Metro Station"]
      }
    },
    {
      city: "Mohali",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
      description: "IT hub with green spaces and modern amenities",
      properties: 6,
      rating: 4.8,
      highlights: ["IT City", "Rose Garden", "Cricket Stadium", "Shopping Centers"],
      featured: {
        name: "Tech Stay Mohali",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
        price: "₹4,999",
        amenities: ["Work Space", "Garden View", "Wi-Fi", "Gym Access"]
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ace-gold/10 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-ace-dark mb-4">
              Stay Where You
              <span className="text-ace-gold block">Belong</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your perfect destination and let the journey begin. 
              Discover our premium accommodations across India's most vibrant cities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Destinations Carousel */}
      <section ref={ref} className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }) as any,
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-6">
              {destinations.map((destination, index) => (
                <CarouselItem key={destination.city} className="pl-2 md:pl-6 basis-full md:basis-1/2">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="bg-white rounded-3xl shadow-xl overflow-hidden hover-lift h-full"
                  >
                    <div className="grid md:grid-cols-2 h-full">
                      {/* Destination Image and Info */}
                      <div className="relative">
                        <img
                          src={destination.image}
                          alt={destination.city}
                          className="w-full h-64 md:h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <div className="flex items-center justify-between mb-3">
                            <h2 className="font-poppins text-2xl md:text-3xl font-bold text-white">
                              {destination.city}
                            </h2>
                            <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                              <Star size={14} className="text-ace-gold fill-current" />
                              <span className="text-white text-sm font-medium">{destination.rating}</span>
                            </div>
                          </div>
                          
                          <p className="text-white/90 text-sm md:text-base mb-3">
                            {destination.description}
                          </p>
                          
                          <div className="flex items-center space-x-4 text-white/80 text-sm">
                            <div className="flex items-center space-x-1">
                              <MapPin size={14} />
                              <span>{destination.properties} Properties</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users size={14} />
                              <span>Premium Locations</span>
                            </div>
                          </div>
                        </div>
                      </div>

      {/* City Information */}
                      <div className="p-6 flex flex-col justify-center">
                        <div>
                          <div className="mb-6">
                            <h5 className="font-poppins text-lg font-semibold text-ace-dark mb-4">
                              Top Attractions in {destination.city}
                            </h5>
                            <div className="grid grid-cols-2 gap-3">
                              {destination.highlights.map((highlight, idx) => (
                                <div key={highlight} className="bg-ace-gold/10 rounded-lg px-3 py-3 text-center border border-ace-gold/20">
                                  <span className="text-sm font-medium text-ace-dark">
                                    {highlight}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-ace-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-ace-gold rounded-full -translate-y-32 translate-x-32" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-ace-gold rounded-full translate-y-24 -translate-x-24" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Ready to Explore?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Book your perfect stay today and discover the luxury that awaits you 
              in India's most exciting destinations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-ace-gold text-ace-dark px-8 py-3 rounded-full text-lg font-medium hover:bg-white transition-colors duration-300"
              >
                Book Your Stay
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-ace-gold text-ace-gold px-8 py-3 rounded-full text-lg font-medium hover:bg-ace-gold hover:text-ace-dark transition-all duration-300"
              >
                View All Properties
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <FloatingArrow />
    </div>
  );
};

export default Destinations;