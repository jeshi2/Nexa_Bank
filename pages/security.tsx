import React from 'react'
import Navbar from '@/app/components/Navbar';
import OverviewSecurity from "../app/components/OverviewSecurity";
import Protect from "../app/components/Protect";
import Footer from '@/app/components/Footer';
import Faq from '@/app/components/Faq';

const security = () => {
  return (
    <div className="min-h-screen bg-zinc-900 overflow-x-hidden">
        <Navbar />
        <OverviewSecurity />
        <Protect />
        <Faq />
        <Footer />
    </div>
  )
}

export default security