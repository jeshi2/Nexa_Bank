import React from 'react'
import Navbar from '@/app/components/Navbar';
import OverviewAbout from "../app/components/OverviewAbout";
import MissionVission from "../app/components/MissionVission";
import Press from "../app/components/Press"
import Footer from '@/app/components/Footer';

const about = () => {
    return (
        <div className="min-h-screen bg-zinc-900 overflow-x-hidden">
            <Navbar />
            <OverviewAbout />
            <MissionVission />
            <Press />
            <Footer />
        </div>
    )
}

export default about