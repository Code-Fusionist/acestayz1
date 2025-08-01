import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import FloatingArrow from '@/components/FloatingArrow';

const TermsAndConditions = () => {
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
            Terms & Conditions
          </h1>

          <div className="space-y-6 leading-relaxed text-base md:text-lg">
            <p>
              Read the Terms and Conditions for more information. By staying with ACE STAYZ, you agree to the following rules and responsibilities:
            </p>

            <ol className="list-decimal pl-6 space-y-3">
              <li><strong>Check-in/Check-out:</strong> Check-in from 1:00 PM, Check-out until 10:00 AM. Flexible timings subject to availability.</li>
              <li><strong>No pets allowed</strong> (not even the cute ones).</li>
              <li><strong>Parties are permitted</strong>, but please keep them quiet and respectful.</li>
              <li><strong>Be a good neighbour:</strong> Keep noise to a minimum after 10:00 PM.</li>
              <li><strong>Guest Limits:</strong> Please avoid exceeding the maximum permitted number of guests.</li>
              <li><strong>Respect our property:</strong> Don’t take items such as linens, décor, or equipment. Snacks and bath items are for your stay only.</li>
              <li><strong>Reporting Damage:</strong> Inform us if something breaks or goes missing. We'll work out a solution together.</li>
              <li>ACE STAYZ is not responsible for guests who harm themselves or others.</li>
              <li><strong>No commercial photography/filming</strong> without prior written permission.</li>
              <li><strong>No illegal activities:</strong> Drug use, firearms, illegal downloads, or adult filming are strictly forbidden.</li>
              <li><strong>Zero tolerance policy:</strong> Respect our staff and guests at all times. We maintain a safe environment.</li>
              <li><strong>Guest belongings:</strong> You are responsible for your own valuables. We are not liable for loss or damage.</li>
              <li><strong>Non-compliance:</strong> Breach of terms may result in penalties or cancellation of your booking.</li>
              <li><strong>Luggage Drop:</strong> We do not offer baggage drop services. Keep your belongings safe.</li>
              <li><strong>Pet Guidelines:</strong> Pets are not allowed. Violators may be fined or face booking cancellation.</li>
            </ol>

            <div className="pt-6">
              <p>
                By continuing with your booking and stay, you accept all terms listed above. Changes may be made without prior notice.
              </p>
            </div>

            <div className="mt-10">
              <p className="text-gray-600 italic">
                I, <span className="inline-block w-40 border-b border-gray-400"></span>, confirm my agreement with the above conditions.
              </p>
              <p className="mt-4 text-gray-600 italic">
                Signature: <span className="inline-block w-48 border-b border-gray-400"></span>
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <Footer />
      <WhatsAppButton />
      <FloatingArrow />
    </div>
  );
};

export default TermsAndConditions;