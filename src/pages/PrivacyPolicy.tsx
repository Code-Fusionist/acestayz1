import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import FloatingArrow from '@/components/FloatingArrow';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-sand-beige overflow-x-hidden">
      <Navbar />

      <section className="bg-sand-beige text-coffee-brown px-6 md:px-20 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-coffee-brown mb-10">
            Privacy Policy
          </h1>

          <div className="space-y-6 leading-relaxed text-base md:text-lg">
            <p>
              ACE STAYZ understands that guests care about the use and storage of
              their personal information and data, and we value your trust in
              allowing us to do this in a careful and sensible manner. This
              privacy policy explains how we handle your data.
            </p>

            <h2 className="text-xl font-semibold text-tan-brown">Collection of Data</h2>
            <ul className="list-disc pl-6">
              <li>On our website (booking, registration, contact forms)</li>
              <li>In customer service correspondence</li>
              <li>By phone (call centre or direct)</li>
              <li>In-person at our front desk</li>
            </ul>

            <h2 className="text-xl font-semibold text-tan-brown">Usage of Your Information</h2>
            <ul className="list-disc pl-6">
              <li>Improve customer experience and services</li>
              <li>Process bookings, payments, and send confirmations</li>
              <li>Respond to inquiries and customer support</li>
              <li>Send important notifications and promotional content (if opted in)</li>
              <li>Detect fraud and ensure technical support</li>
              <li>Aggregate anonymous statistics</li>
            </ul>

            <h2 className="text-xl font-semibold text-tan-brown">Non-disclosure to Third Parties</h2>
            <p>
              We never sell, rent, or trade your data to third parties. We may
              share it only with trusted service providers under strict
              confidentiality. In case of a merger or acquisition, data may be
              shared with new owners under the same terms.
            </p>

            <h2 className="text-xl font-semibold text-tan-brown">Cookies</h2>
            <p>
              We use cookies to enhance user experience and analyze traffic.
              Cookies do not identify you individually unless you provide personal
              information. You may disable cookies in your browser settings, but
              some features may be limited.
            </p>

            <h2 className="text-xl font-semibold text-tan-brown">Security</h2>
            <p>
              We implement strict procedures to protect your information. Credit
              card data is never stored on our website.
            </p>

            <h2 className="text-xl font-semibold text-tan-brown">Your Consent</h2>
            <p>
              By using our services, you consent to this privacy policy. Any
              updates will be posted on this page.
            </p>

            <h2 className="text-xl font-semibold text-tan-brown">Opt-Out & Data Access</h2>
            <p>
              You may opt out of promotional emails anytime by:
            </p>
            <ul className="list-disc pl-6">
              <li>Emailing <a className="text-blue-600" href="mailto:book@acestayz.com">book@acestayz.com</a></li>
              <li>Clicking “unsubscribe” in our emails</li>
            </ul>
            <p>
              Note: You cannot opt out of booking-related messages. To view, amend, or delete your data, contact us via the email above.
            </p>
          </div>
        </motion.div>
      </section>

      <Footer />
      <WhatsAppButton />
      <FloatingArrow />
    </div>
  );
};

export default PrivacyPolicy;