"use client"
import React from 'react';
import dynamic from 'next/dynamic';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingAnimation from "./components/LoadingAnimation";

const Hero = dynamic(() => import('./components/Hero'), { ssr: false });
const OurProducts = dynamic(() => import('./components/OurProducts'), { ssr: false });
const Cta = dynamic(() => import('./components/Cta'), { ssr: false });
const Testimonials = dynamic(() => import('./components/Testimonials'), { ssr: false });
const OurFeature = dynamic(() => import('./components/OurFeature'), { ssr: false });
const UseCases = dynamic(() => import('./components/UseCases'), { ssr: false });
const Faq = dynamic(() => import('./components/Faq'), { ssr: false });

export default function Home() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="min-h-screen bg-zinc-900 overflow-x-hidden ">
      {isLoading && <LoadingAnimation />}
      <Navbar />
      <Hero />
      <OurProducts />
      <UseCases />
      <OurFeature />
      <Faq />
      <Testimonials />
      <Cta />
      <Footer />
    </div>
  );
}

