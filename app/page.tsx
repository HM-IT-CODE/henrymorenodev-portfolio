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
import ChatBot from '../components/ChatBot';

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
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-teal-600/10 rounded-full blur-[120px]"></div>
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

            <ChatBot />
        </main>
    );
}
