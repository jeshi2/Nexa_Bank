
import React from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import ContactForm from '../app/components/ContactForm';
import Faq from '@/app/components/Faq';

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-zinc-900 overflow-x-hidden">
      <Navbar />
      <div className='p-4 max-w-3xl mx-auto'>
        <h1 className='text-3xl font-bold text-lime-400'>Contact Us</h1>
        <p className='text-white text-2xl mt-2'>Please fill the form below</p>
        <ContactForm />
      </div>
      <Faq />
      <Footer />
    </div>

  );
}
