"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Resources from '../components/Resources';
import WhyWorkWithMe from '../components/WhyWorkWithMe';
import Contact from '../components/Contact';

export default function Home() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <main className="min-h-screen relative">
            {/* Background patterns */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(163,230,53,0.12),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(34,197,94,0.10),_transparent_32%),linear-gradient(180deg,_rgba(24,31,24,0.88)_0%,_rgba(28,36,28,0.72)_40%,_rgba(35,42,35,0.68)_100%)]"></div>
            </div>

            <Navbar isScrolled={isScrolled} />

            <div className="relative z-10 pt-20">
                <Hero />
                <Services />
                <Portfolio />
                <Resources />
                <WhyWorkWithMe />
                <Contact />
            </div>

            <Footer />
        </main>
    );
}
