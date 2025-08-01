import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import FloatingArrow from '../components/FloatingArrow';
import { useScrollReveal } from '@/hooks/useParallax';

import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://acestayz-backend.vercel.app/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
        setTimeout(() => setSubmitted(false), 10000);
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone size={24} />,
      title: "Phone",
      details: "+91 9403890926",
      description: "Always available — 24/7 support, just a call away."
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      details: "info@acestayz.com",
      description: "Drop us a message — we'll respond within 24 hours."
    },
    {
      icon: <MapPin size={24} />,
      title: "Locations",
      description: "Stay with us across premium properties in major cities."
    },
    {
      icon: <Clock size={24} />,
      title: "Support Hours",
      details: "24/7 Available",
      description: "Round-the-clock assistance, anytime you need us."
    }
  ];

  useScrollReveal();

  return (
    <div className="min-h-screen bg-sand-beige">

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-tan-brown/10 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="font-playfair text-5xl lg:text-7xl font-bold text-coffee-brown mb-6">
              Let’s Talk
              {/* <span className="text-ace-gold block">Hospitality</span> */}
            </h1>
            <p className="text-xl text-coffee-brown  max-w-3xl mx-auto">
              We'd love to hear from you! Whether you have a question, need assistance with booking, or just want more information.
              We are here to help you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-tan-brown">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-sand-beige rounded-3xl p-8 text-center shadow-lg hover-lift"
              >
                <div className="w-16 h-16 bg-coffee-brown/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-coffee-brown">
                  {info.icon}
                </div>
                <h3 className="font-poppins text-xl font-bold text-coffee-brown mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-sand-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl p-8 shadow-2xl border border-tan-brown"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="font-playfair text-3xl font-bold text-ace-dark mb-4">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for contacting us. We'll get back to you.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="font-playfair text-3xl font-bold text-coffee-brown mb-2">
                      Send us a Message
                    </h2>
                    <p className="text-coffee-brown mb-8">
                      Kindly fill the form we will get back to you.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-coffee-brown mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ace-gold focus:border-ace-gold transition-colors"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-coffee-brown mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ace-gold focus:border-ace-gold transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-coffee-brown mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ace-gold focus:border-ace-gold transition-colors"
                        placeholder="+91 your phone number"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-coffee-brown mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ace-gold focus:border-ace-gold transition-colors"
                      >
                        <option value="">Select a subject</option>
                        <option value="booking">Room Booking</option>
                        <option value="partnership">Franchise Partnership</option>
                        <option value="support">Customer Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-coffee-brown mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ace-gold focus:border-ace-gold transition-colors resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-tan-brown text-sand-beige py-4 rounded-lg font-medium hover:bg-coffee-brown transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-poppins text-4xl font-bold text-coffee-brown mb-6">
                  Let's Talk
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Planning a stay? Exploring a partnership? Have a quick question?
                  We're just a message away—always happy to help!
                </p>
              </div>

              <div className="bg-coffee-brown text-sand-beige rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-tan-brown/20 rounded-full -translate-y-16 translate-x-16" />
                <div className="relative z-10">
                  <h3 className="font-playfair text-2xl font-bold mb-4">
                    Why Ace Stayz?
                  </h3>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-tan-brown rounded-full" />
                      <span>24/7 premium support</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-tan-brown rounded-full" />
                      <span>Prime location stays</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-tan-brown rounded-full" />
                      <span>Personalized service</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-tan-brown rounded-full" />
                      <span> Hassle-free booking & check-in</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-beyond-bg/20 rounded-3xl p-8">
                <h3 className="font-playfair text-2xl font-bold text-coffee-brown mb-4">
                  Quick Response Promise
                </h3>
                <p className="text-coffee-brown">
                  We reply to all messages within 24 hours. For urgent matters, just give us a call.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <FloatingArrow />
    </div>
  );
};

export default Contact;