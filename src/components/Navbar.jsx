import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Cpu } from 'lucide-react';
import aevonLogo from '../assets/aevon-logo.png';

function Navbar({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection to add darker background and shadow to header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Smooth scroll configuration
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
      scrolled 
        ? 'bg-darkBg/80 backdrop-blur-md border-b border-darkBorder py-4 shadow-glass-md' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Brand/Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleLinkClick(e, '#home')}
          className="flex items-center gap-2.5 group select-none"
        >
          <div className="w-10 h-10 rounded-lg overflow-hidden border border-electricBlue/30 flex items-center justify-center group-hover:border-electricBlue group-hover:shadow-electric-glow transition-all duration-300 bg-black">
            <img src={aevonLogo} alt="Aevon Logo" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg tracking-wider text-white group-hover:text-electricBlue transition-colors duration-300">
              LAHIRU
            </span>
            <span className="text-[10px] text-slateGray-light tracking-[0.2em] uppercase font-semibold -mt-1">
              Aevon Solutions
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => {
              const active = activeSection === link.href.replace('#', '');
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`relative text-sm font-medium tracking-wide uppercase transition-colors duration-300 py-1.5 px-0.5 ${
                      active 
                        ? 'text-electricBlue' 
                        : 'text-slateGray-light hover:text-white'
                    }`}
                  >
                    {link.name}
                    {/* Active highlight line indicator */}
                    {active && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-electricBlue rounded-full shadow-electric-glow animate-fade-in-up"></span>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <a 
            href="#contact" 
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="btn-secondary py-2 px-5 text-xs tracking-wider uppercase font-semibold flex items-center gap-2 group border-electricBlue/30 hover:border-electricBlue"
          >
            Hire Aevon
          </a>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 hover:border-electricBlue/50 text-white hover:text-electricBlue transition-colors duration-300"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-6 h-6 animate-pulse-slow" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-x-0 top-[73px] lg:hidden bg-darkBg/95 backdrop-blur-xl border-b border-darkBorder shadow-glass-lg z-30 transition-all duration-300 animate-[fadeInDown_0.3s_ease-out_forwards]">
          <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-6">
            <ul className="flex flex-col gap-5">
              {navLinks.map((link) => {
                const active = activeSection === link.href.replace('#', '');
                return (
                  <li key={link.name} className="border-b border-white/5 pb-2">
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`text-base font-semibold tracking-wide uppercase block py-1.5 transition-colors duration-300 ${
                        active 
                          ? 'text-electricBlue pl-2 border-l-2 border-electricBlue' 
                          : 'text-slateGray-light hover:text-white hover:pl-2 transition-all'
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>

            <a 
              href="#contact" 
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="btn-primary w-full py-3 text-center text-sm tracking-wider uppercase font-bold"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
