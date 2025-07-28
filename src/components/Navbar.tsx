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
  const location = useLocation();

  const destinations = ['Delhi', 'Gurugram', 'Jaipur', 'Noida', 'Mohali'];

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Partner with Us', href: '/partner-with-us' },
    { name: 'Why Us', href: '/why-us' },
  ];

  const handleContactClick = () => {
    if (onContactClick) {
      onContactClick();
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="w-full bg-black backdrop-blur-sm text-white z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div className="flex-shrink-0 flex items-center" whileHover={{ scale: 1.05 }}>
            <Link to="/" className="flex items-center">
              <h1 className="text-2xl text-ace-gold font-poppins">ACE STAYZ</h1>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium font-poppins transition-colors duration-200 ${
                    location.pathname === item.href
                      ? 'text-ace-gold font-semibold'
                      : 'text-white hover:text-ace-gold'
                  }`}
                >
                  {item.name}
                </Link>
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
              className="p-2 text-white hover:text-ace-gold transition-all duration-300 group"
            >
              {isMobileMenuOpen ? (
                <X size={24} />
              ) : (
                <AlignJustify size={24} />
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
            className="lg:hidden bg-black/90 text-white border-t border-white/20 rounded-b-lg"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 font-poppins ${
                    location.pathname === item.href
                      ? 'text-ace-gold bg-white/10 font-semibold'
                      : 'text-white hover:text-ace-gold hover:bg-white/10'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  handleContactClick();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 text-base font-medium text-ace-gold hover:bg-white/10 rounded-md transition-colors duration-200 font-poppins"
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
