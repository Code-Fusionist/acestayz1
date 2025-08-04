import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/contact' },
      { name: 'Why Choose Us', href: '/contact' },
      { name: 'Partner With Us', href: '/partner-with-us' },
      { name: 'Contact Us', href: '/contact' },
    ],
    destinations: [
      { name: 'Delhi', href: '#' },
      { name: 'Gurugram', href: '#' },
      { name: 'Jaipur', href: '#' },
      { name: 'Noida', href: '#' },
      { name: 'Mohali', href: '#' },
    ],
    support: [
      { name: 'Customer Support', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms-and-conditions' },
      { name: 'Refund Policy', href: '/refund-policy' },
    ]
  };

  const socialLinks = [
    { icon: <Instagram size={20} />, href: 'https://www.instagram.com/acestayz', label: 'Instagram' },
    { icon: <Facebook size={20} />, href: 'https://www.facebook.com/acestayz', label: 'Facebook' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/company/acestayz', label: 'LinkedIn' },
    { icon: <Youtube size={20} />, href: 'https://www.youtube.com/@acestayz', label: 'YouTube' }, // ✅ Added YouTube
  ];

  return (
    <footer ref={ref} className="relative bg-coffee-brown text-white overflow-hidden parallax-bg">
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {/* Company Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <img src="/ACE_STAYZ.png" alt="Ace Stayz Logo" className="h-14 w-auto" />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail size={16} className="text-sand-beige hover:text-tan-brown" />
                    <a href="mailto:info@acestayz.com" className="text-sm font-poppins hover:text-tan-brown transition-colors">
                      info@acestayz.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone size={16} className="text-sand-beige hover:text-tan-brown" />
                    <a href="tel:+919403890926" className="text-sm font-poppins hover:text-tan-brown transition-colors">
                      +91 9403890926
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Combined Links for Compact Layout */}
            <div className="grid grid-cols-2 gap-6">
              {/* Company Links */}
              <div>
                <h4 className="font-poppins text-lg font-semibold mb-4 text-tan-brown">Company</h4>
                <ul className="space-y-2">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <Link to={link.href} className="text-white/80 hover:text-tan-brown text-sm font-poppins">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Destinations */}
              <div>
                <h4 className="font-poppins text-lg font-semibold mb-4 text-tan-brown">Destinations</h4>
                <ul className="space-y-2">
                  {footerLinks.destinations.map((link, index) => (
                    <li key={index}>
                      <Link to={link.href} className="text-white/80 hover:text-tan-brown text-sm font-poppins">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Support & Social */}
            <div>
              <h4 className="font-poppins text-lg font-semibold mb-4 text-tan-brown">Support</h4>
              <ul className="space-y-2 mb-6">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    {link.href.startsWith('/') ? (
                      <Link to={link.href} className="text-white/80 hover:text-tan-brown text-sm font-poppins">
                        {link.name}
                      </Link>
                    ) : (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-tan-brown text-sm font-poppins">
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>

              <h5 className="font-semibold mb-3 text-tan-brown font-poppins">Follow Us</h5>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-tan-brown/20 rounded-full flex items-center justify-center text-tan-brown hover:bg-tan-brown hover:text-white transition-all"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="border-t border-white/10 py-6"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center text-center space-y-3 md:space-y-0">
              <p className="text-white/60 text-sm font-poppins">
                © 2025 Ace Stayz Pvt. Ltd. All rights reserved.
              </p>
              <a
                href="https://www.linkedin.com/in/keshav-aggarwal-3b6759277/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-tan-brown text-sm font-poppins"
              >
                Created by: Keshav Aggarwal
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
