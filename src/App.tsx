import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { ServiceArea } from './components/ServiceArea';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { CookieBanner } from './components/CookieBanner';
import { FAQ } from './components/FAQ';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <ServiceArea />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </div>
  );
}

export default App;