import React from 'react';
import aevonLogo from '../assets/aevon-logo.png';

function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative py-12 border-t border-white/5 bg-[#050507]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 select-none">
        
        {/* Left Branding */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg overflow-hidden border border-electricBlue/20 flex items-center justify-center bg-black">
            <img src={aevonLogo} alt="Aevon Logo" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-display font-bold text-sm tracking-wider text-white">
              LAHIRU
            </span>
            <span className="text-[9px] text-slateGray-light tracking-widest uppercase font-semibold">
              Aevon Digital Solutions
            </span>
          </div>
        </div>

        {/* Center Motto */}
        <p className="text-xs italic text-slateGray-light select-text">
          "Creating Digital Experiences That Matter"
        </p>

        {/* Right Info / Up Link */}
        <div className="flex flex-col md:items-end text-center md:text-right gap-1 text-[10px] text-slateGray-light">
          <p className="font-medium">
            &copy; {currentYear} Lahiru. All rights reserved.
          </p>
          <a 
            href="#home" 
            onClick={handleScrollToTop}
            className="hover:text-electricBlue transition-colors font-semibold uppercase tracking-wider mt-1"
          >
            Back to Top &uarr;
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
