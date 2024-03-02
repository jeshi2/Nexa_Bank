
import React from 'react'
import Navbar from '@/app/components/Navbar';
import Overview from "../app/components/Overview";
import Values from "../app/components/Values";
import Benefits from "../app/components/Benefits";
import Jobs from "../app/components/Jobs";
import Faq from '@/app/components/Faq';
import Cta from '@/app/components/Cta';
import Footer from '@/app/components/Footer';

const careers = () => {
    return (
        <div className="min-h-screen bg-zinc-900 overflow-x-hidden">
            <Navbar />
            <Overview />
            <Values />
            <Benefits />
            <Jobs />
            <Faq />
            <Cta />
            <Footer />
        </div>
    )
}

export default careers