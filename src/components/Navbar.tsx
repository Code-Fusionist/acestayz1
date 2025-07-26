import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlignJustify, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  onContactClick?: () => void;
}

const Navbar = ({ onContactClick }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const location = useLocation();

  const destinations = ['Delhi', 'Gurugram', 'Jaipur', 'Noida', 'Mohali'];

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Your Stayz', href: '/your-stayz' },
    { name: 'Destinations', href: '/destinations', hasDropdown: true },
    { name: 'Partner with Us', href: '/partner-with-us' },
    { name: 'Why Us', href: '/why-us' },
  ];

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up or stationary
      }

      lastScrollY = currentScrollY;

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setShowNavbar(true); // show if user stops
      }, 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const handleContactClick = () => {
    if (onContactClick) {
      onContactClick();
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-md border-b border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div className="flex-shrink-0 flex items-center" whileHover={{ scale: 1.05 }}>
            <Link to="/" className="flex items-center">
              <h1 className="text-2xl font-bold text-ace-gold font-poppins">
                Ace Stayz
              </h1>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsDestinationsOpen(true)}
                      onMouseLeave={() => setIsDestinationsOpen(false)}
                    >
                      <Link
                        to={item.href}
                        className={`px-3 py-2 text-sm font-medium font-poppins transition-colors duration-200 ${
                          location.pathname === item.href
                            ? 'text-ace-gold font-semibold'
                            : 'text-gray-700 hover:text-ace-gold'
                        }`}
                      >
                        {item.name}
                      </Link>
                      {isDestinationsOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50"
                        >
                          {destinations.map((destination) => (
                            <Link
                              key={destination}
                              to="/destinations"
                              className="block px-4 py-2 text-sm text-gray-700 hover:text-ace-gold hover:bg-gray-50 transition-colors duration-200 font-poppins"
                            >
                              {destination}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`px-3 py-2 text-sm font-medium font-poppins transition-colors duration-200 ${
                        location.pathname === item.href
                          ? 'text-ace-gold font-semibold'
                          : 'text-gray-700 hover:text-ace-gold'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleContactClick}
                className="bg-ace-gold text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-ace-dark transition-colors duration-200 font-poppins"
              >
                Let's Talk
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-ace-gold transition-all duration-300 group"
            >
              {isMobileMenuOpen ? (
                <X size={24} />
              ) : (
                <div className="space-y-1.5">
                  <span className="block w-6 h-0.5 bg-current transform transition-transform duration-300 group-hover:rotate-12"></span>
                  <span className="block w-6 h-0.5 bg-current transform transition-transform duration-300"></span>
                  <span className="block w-6 h-0.5 bg-current transform transition-transform duration-300 group-hover:-rotate-12"></span>
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 rounded-b-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 font-poppins ${
                      location.pathname === item.href
                        ? 'text-ace-gold bg-gray-50 font-semibold'
                        : 'text-gray-700 hover:text-ace-gold hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && (
                    <div className="ml-4 space-y-1">
                      {destinations.map((destination) => (
                        <Link
                          key={destination}
                          to="/destinations"
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-ace-gold hover:bg-gray-50 rounded-md transition-colors duration-200 font-poppins"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {destination}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button
                onClick={() => {
                  handleContactClick();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 text-base font-medium text-ace-gold hover:bg-gray-50 rounded-md transition-colors duration-200 font-poppins"
              >
                Let's Talk
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
