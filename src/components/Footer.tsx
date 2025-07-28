
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

function FooterPoints() {
  const ref = useRef<THREE.Points>(null);
  
  const sphere = new Float32Array(1000 * 3);
  for (let i = 0; i < 1000; i++) {
    const theta = THREE.MathUtils.randFloatSpread(360);
    const phi = THREE.MathUtils.randFloatSpread(360);
    const x = Math.sin(theta) * Math.cos(phi) * Math.random() * 5;
    const y = Math.sin(theta) * Math.sin(phi) * Math.random() * 5;
    const z = Math.cos(theta) * Math.random() * 5;
    
    sphere.set([x, y, z], i * 3);
  }

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.2;
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.15) * 0.1;
    }
  });

  return (
    <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#FFD700"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/your-stayz' },
      { name: 'Why Choose Us', href: '/why-us' },
      { name: 'Partner With Us', href: '/partner-with-us' },
      { name: 'Contact Us', href: '/contact' },
    ],
    destinations: [
      { name: 'Delhi', href: '/destinations' },
      { name: 'Gurugram', href: '/destinations' },
      { name: 'Jaipur', href: '/destinations' },
      { name: 'Noida', href: '/destinations' },
      { name: 'Mohali', href: '/destinations' },
    ],
    support: [
      { name: 'Customer Support', href: '/contact' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'FAQ', href: '#' },
    ]
  };

  const socialLinks = [
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram' },
    { icon: <Facebook size={20} />, href: '#', label: 'Facebook' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer ref={ref} className="relative bg-ace-dark text-white overflow-hidden">
      {/* Three.js Background */}
      <div className="absolute inset-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <FooterPoints />
        </Canvas>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {/* Company Info */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <img 
                    src="https://acestayz.com/new-img/ace.png" 
                    alt="Ace Stayz Logo" 
                    className="h-16 w-auto"
                  />
                </div>
                <p className="text-white/80 mb-6 leading-relaxed font-poppins">
                  Where luxury meets comfort. Experience unparalleled hospitality 
                  at our premium stays across India's most vibrant cities.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail size={16} className="text-ace-gold" />
                    <a href="mailto:info@acestayz.com" className="text-sm font-poppins hover:text-ace-gold transition-colors">
                      info@acestayz.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone size={16} className="text-ace-gold" />
                    <a href="tel:+917011315545" className="text-sm font-poppins hover:text-ace-gold transition-colors">
                      +91 7011315545
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Company Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="font-poppins text-xl font-semibold mb-6 text-ace-gold">
                  Company
                </h4>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    >
                      <Link
                        to={link.href}
                        className="text-white/80 hover:text-ace-gold transition-colors duration-200 text-sm font-poppins"
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Destinations */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h4 className="font-poppins text-xl font-semibold mb-6 text-ace-gold">
                  Destinations
                </h4>
                <ul className="space-y-3">
                  {footerLinks.destinations.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    >
                      <Link
                        to={link.href}
                        className="text-white/80 hover:text-ace-gold transition-colors duration-200 text-sm font-poppins"
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Support & Social */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h4 className="font-poppins text-xl font-semibold mb-6 text-ace-gold">
                  Support
                </h4>
                <ul className="space-y-3 mb-8">
                  {footerLinks.support.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    >
                      <Link
                        to={link.href}
                        className="text-white/80 hover:text-ace-gold transition-colors duration-200 text-sm font-poppins"
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <div>
                  <h5 className="font-semibold mb-4 text-ace-gold font-poppins">Follow Us</h5>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        className="w-10 h-10 bg-ace-gold/10 rounded-full flex items-center justify-center text-ace-gold hover:bg-ace-gold hover:text-ace-dark transition-all duration-300"
                        aria-label={social.label}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="border-t border-white/10 py-8"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-white/60 text-sm font-poppins">
                © 2024 Ace Stayz Pvt Ltd. All rights reserved.
              </p>
              <div className="flex space-x-8">
                <Link
                  to="#"
                  className="text-white/60 hover:text-ace-gold transition-colors duration-200 text-sm font-poppins"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="#"
                  className="text-white/60 hover:text-ace-gold transition-colors duration-200 text-sm font-poppins"
                >
                  Terms of Service
                </Link>
                <Link
                  to="#"
                  className="text-white/60 hover:text-ace-gold transition-colors duration-200 text-sm font-poppins"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
