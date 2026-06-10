import React from 'react';
import { ArrowRight, Download, MessageSquare, Code, Layout, Palette } from 'lucide-react';

function Hero() {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
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
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left text column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left select-text">
          
          {/* Subheading Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electricBlue/10 border border-electricBlue/20 text-electricBlue text-xs font-semibold uppercase tracking-wider mb-6 animate-fade-in-down">
            <span className="w-1.5 h-1.5 rounded-full bg-electricBlue animate-pulse"></span>
            Ready for Opportunities
          </div>

          {/* Premium Headline */}
          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.1] mb-6 animate-fade-in-up">
            Hi, I'm <span className="text-glow text-gradient-blue text-electricBlue">Lahiru</span>
          </h1>

          <h2 className="font-display font-bold text-lg sm:text-xl md:text-2xl text-white/95 tracking-wide mb-5 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            IT Undergraduate <span className="text-electricBlue/50">|</span> Prompt Engineer <span className="text-electricBlue/50">|</span> Web Developer <span className="text-electricBlue/50">|</span> AI Video Editor
          </h2>

          <p className="text-base text-slateGray-light leading-relaxed max-w-xl mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            I specialize in crafting premium digital solutions, combining technological efficiency with modern marketing strategy. Currently working as a <span className="text-white font-semibold">Prompt Engineer in the CodeGen Rise Tech Village Project</span>, I manage digital operations through Aevon Digital Solutions, and drive social media growth for brands like Cherish Biscuits.
          </p>

          {/* Call-to-action buttons */}
          <div className="flex flex-wrap gap-4 items-center w-full sm:w-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a
              href="#projects"
              onClick={(e) => handleScrollTo(e, 'projects')}
              className="btn-primary flex items-center gap-2 group text-sm justify-center w-full sm:w-auto"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, 'contact')}
              className="btn-secondary flex items-center gap-2 text-sm justify-center w-full sm:w-auto"
            >
              <MessageSquare className="w-4 h-4 text-electricBlue" />
              Contact Me
            </a>
          </div>
        </div>

        {/* Right graphic column (Premium mock developer pane) */}
        <div className="lg:col-span-5 relative flex justify-center items-center w-full animate-fade-in-right" style={{ animationDelay: '0.2s' }}>
          
          {/* Glassmorphic Developer IDE Card Mockup */}
          <div className="w-full max-w-[460px] glass-card rounded-xl overflow-hidden shadow-glass-lg border border-white/5 select-none">
            
            {/* Window header */}
            <div className="flex items-center justify-between px-4 py-3 bg-white/[0.02] border-b border-white/5">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
              </div>
              <span className="text-[10px] text-slateGray-light uppercase font-mono tracking-widest flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5 text-electricBlue" /> profile.js
              </span>
              <div className="w-12"></div> {/* Spacer for symmetry */}
            </div>

            {/* Code editor body */}
            <div className="p-6 font-mono text-xs sm:text-[13px] text-slateGray-light leading-relaxed bg-[#090a0f]/45">
              <div className="text-white/40">// Professional Bio Config</div>
              <div>
                <span className="text-electricBlue">const</span> <span className="text-white">engineer</span> = &#123;
              </div>
              <div className="pl-4">
                <span className="text-white/60">name:</span> <span className="text-yellow-400">"Lahiru Thilakawardhana"</span>,
              </div>
              <div className="pl-4">
                <span className="text-white/60">role:</span> <span className="text-yellow-400">"Prompt Engineer @ CodeGen Rise"</span>,
              </div>
              <div className="pl-4">
                <span className="text-white/60">company:</span> <span className="text-yellow-400">"Aevon Digital Solutions"</span>,
              </div>
              <div className="pl-4">
                <span className="text-white/60">education:</span> <span className="text-yellow-400">"IT Undergraduate"</span>,
              </div>
              <div className="pl-4">
                <span className="text-white/60">skills:</span> [
              </div>
              <div className="pl-8">
                <span className="text-yellow-400">"Prompt Engineering"</span>, <span className="text-yellow-400">"Web Development"</span>,
              </div>
              <div className="pl-8">
                <span className="text-yellow-400">"AI Video Editing"</span>, <span className="text-yellow-400">"Digital Marketing"</span>
              </div>
              <div className="pl-4">],</div>
              <div className="pl-4">
                <span className="text-white/60">passionateAbout:</span> <span className="text-green-400">() =&gt;</span> &#123;
              </div>
              <div className="pl-8 text-green-400">
                return <span className="text-yellow-400">"Engineering prompts and creative video content"</span>;
              </div>
              <div className="pl-4">&#125;</div>
              <div>&#125;;</div>
            </div>

            {/* Lower info block with stats */}
            <div className="grid grid-cols-3 divide-x divide-white/5 border-t border-white/5 bg-white/[0.01]">
              <div className="p-4 flex flex-col items-center justify-center text-center">
                <Layout className="w-4 h-4 text-electricBlue mb-1.5" />
                <span className="text-white font-display font-semibold text-sm">6+</span>
                <span className="text-[10px] text-slateGray-light tracking-wider uppercase font-medium">Services</span>
              </div>
              <div className="p-4 flex flex-col items-center justify-center text-center">
                <Palette className="w-4 h-4 text-electricBlue mb-1.5" />
                <span className="text-white font-display font-semibold text-sm">100%</span>
                <span className="text-[10px] text-slateGray-light tracking-wider uppercase font-medium">Creative</span>
              </div>
              <div className="p-4 flex flex-col items-center justify-center text-center">
                <Code className="w-4 h-4 text-electricBlue mb-1.5" />
                <span className="text-white font-display font-semibold text-sm">24/7</span>
                <span className="text-[10px] text-slateGray-light tracking-wider uppercase font-medium">Automation</span>
              </div>
            </div>
          </div>
          
          {/* Subtle background glow for the card */}
          <div className="absolute inset-0 bg-electricBlue/5 filter blur-[60px] rounded-full -z-10 w-[80%] h-[80%] left-[10%] top-[10%]"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
