import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundGrid from './components/BackgroundGrid';
import CustomCursor from './components/CustomCursor';
import aevonLogo from './assets/aevon-logo.png';

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  // Loading animation timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Custom Intersection Observer for Scroll Reveal & Active Nav Item
  useEffect(() => {
    if (loading) return;

    // Scroll Reveal implementation
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    revealElements.forEach((el) => revealObserver.observe(el));

    // Active Navigation section highlight
    const sections = document.querySelectorAll('section[id]');
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.getAttribute('id'));
          }
        });
      },
      { threshold: 0.5, rootMargin: '-10% 0px -50% 0px' }
    );

    sections.forEach((section) => navObserver.observe(section));

    return () => {
      revealObserver.disconnect();
      navObserver.disconnect();
    };
  }, [loading]);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-darkBg text-white font-sans">
        {/* Animated Brand Loader */}
        <div className="relative flex flex-col items-center select-none">
          <div className="w-24 h-24 relative flex items-center justify-center">
            {/* Spinning accent outer ring */}
            <div className="absolute inset-0 rounded-full border-2 border-t-electricBlue border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
            {/* Logo image container */}
            <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-black">
              <img src={aevonLogo} alt="Aevon Logo" className="w-full h-full object-cover" />
            </div>
          </div>
          
          <h2 className="mt-6 font-display font-bold text-xl tracking-[0.25em] text-white">
            AEVON
          </h2>
          <p className="mt-2 text-xs text-slateGray-light tracking-[0.4em] uppercase font-medium">
            Digital Solutions
          </p>

          {/* Loader bar */}
          <div className="w-32 h-[1px] bg-white/5 mt-8 rounded-full overflow-hidden">
            <div className="h-full bg-electricBlue w-0 animate-[shimmer_2s_infinite] origin-left" 
                 style={{ 
                   animationName: 'loaderProgress', 
                   animationDuration: '2s',
                   animationTimingFunction: 'cubic-bezier(0.65, 0, 0.35, 1)'
                 }}>
            </div>
          </div>
        </div>

        {/* CSS for loader internal animation */}
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes loaderProgress {
            0% { width: 0%; }
            50% { width: 70%; }
            100% { width: 100%; }
          }
        `}} />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-darkBg text-white overflow-hidden custom-cursor-active font-sans selection:bg-electricBlue selection:text-darkBg">
      {/* Premium custom mouse interaction */}
      <CustomCursor />

      {/* Decorative grids, radial gradients, and stars */}
      <BackgroundGrid />

      {/* Primary Sticky Header */}
      <Navbar activeSection={activeSection} />

      {/* Website Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Experience />
        <Contact />
      </main>

      {/* Footer Branding */}
      <Footer />
    </div>
  );
}

export default App;
