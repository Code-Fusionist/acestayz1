import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import FloatingArrow from '@/components/FloatingArrow';

const RefundPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-sand-beige overflow-x-hidden">
      <Navbar />

      <section className="px-6 md:px-20 py-20 text-coffee-brown bg-sand-beige">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto whitespace-pre-line"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-coffee-brown mb-10">
            Cancellations & Refund Policy
          </h1>

          <p className="text-base md:text-lg leading-relaxed">
            {`We have Two different rates for any Property listed on our website. The Two Rates have their own clearly defined Cancellation & Prepayment policies that are displayed alongside the rates. We are also listing them here for reference -
a). HOT DEAL - Non Refundable Rates
Cancellation Policy - Please note, this reservation is completely non-modifiable and non-cancellable. If it is cancelled, modified or in case of no-show, the total price of the reservation will be charged.
Prepayment Policy - The total price of the reservation will be charged at the time of booking.
b) BEST AVAILABLE RATE - Refundable Rates
Cancellation Policy - Please note, if cancelled or modified up to 7 days before date of arrival, no fee will be charged. If cancelled or modified later or in case of no-show, 25 percent of the total price of the reservation will be charged.

Prepayment Policy - No payment will be charged at the time of booking unless Check-In Date is within 7 Days from Date of Booking. You will need to pay only 25 per cent of the total price of reservation as Advance Payment 7 days before arrival to confirm your booking. This Advance Payment of 25% is equivalent to the Cancellation Charges and is not refundable as per the applicable Cancellation Policy.
Your Booking will be confirmed only after receipt of Advance Payment, if Advance Payment is not received 7 Days before arrival, then your booking will be cancelled automatically.
* No other Cancellation or Pre-Payment policy will supersede these above stated Policies unless otherwise specified clearly over email by our Sales Team.
* In the event that a guest needs to check out prior to the agreed departure date, we will use our best endeavours to obtain a refund of accommodation charges for the remainder of the stay. However, any refund will be subject to the apartment being re-let and may be subject to a cancellation charge.
4.1. Where a Guest wishes to extend the period of stay in the Property written notice should be given to us as soon as possible.
4.2. We cannot guarantee any extension, which is subject to availability of the Property. An alternative apartment may be offered if the Property has been booked for all or part of the required extension period.
4.3. We reserve the right to charge a different price for the Property for any period of extension. Payment for the extension period will be required immediately that we confirm the availability of the Property or alternative apartment(s) to the Guest or to you.
4.4 All refunds are subject to deduction of any transaction fees charged by the merchant banks/payment gateways.`}
          </p>
        </motion.div>
      </section>

      <Footer />
      <WhatsAppButton />
      <FloatingArrow />
    </div>
  );
};

export default RefundPolicy;
