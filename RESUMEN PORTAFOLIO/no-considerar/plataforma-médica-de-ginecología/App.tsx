
import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import ResourcesDashboard from './components/ResourcesDashboard';
import MedicalCarousel from './components/MedicalCarousel';
import MedicalTips from './components/MedicalTips';
import FetalMetricsAnalyzer from './components/FetalMetricsAnalyzer';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
        {/* The padding-top and negative margin-top are to offset the fixed header height for anchor links */}
        <div id="perfil" className="pt-20 -mt-20"><Profile /></div>
        <div id="recursos" className="pt-24"><ResourcesDashboard /></div>
        <div id="carrusel" className="pt-24"><MedicalCarousel /></div>
        <div id="tips" className="pt-24"><MedicalTips /></div>
        <div id="herramienta" className="pt-24"><FetalMetricsAnalyzer /></div>
        <div id="contacto" className="pt-24 pb-12"><Contact /></div>
      </main>
      <Footer />
      <WhatsAppButton phoneNumber="+584243167917" />
    </div>
  );
};

export default App;
