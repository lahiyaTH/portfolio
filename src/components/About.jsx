import React from 'react';
import { Cpu, Lightbulb, Zap, Rocket, Video, Target } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

function About() {
  const cards = [
    {
      icon: <Cpu className="w-6 h-6 text-electricBlue" />,
      title: 'Prompt Engineering',
      desc: 'Developing advanced prompts and system instructions to optimize LLM performance and integrate AI capabilities.'
    },
    {
      icon: <Target className="w-6 h-6 text-electricBlue" />,
      title: 'Digital Marketing',
      desc: 'Formulating campaigns and managing social media accounts, including full marketing operations for Cherish Biscuits.'
    },
    {
      icon: <Video className="w-6 h-6 text-electricBlue" />,
      title: 'AI Video Editing',
      desc: 'Creating polished video cuts, animations, and visual effects for teams like Vini Productions on YouTube.'
    },
    {
      icon: <Rocket className="w-6 h-6 text-electricBlue" />,
      title: 'Digital Solutions',
      desc: 'Building responsive web pages and automation systems through Aevon Digital Solutions.'
    }
  ];

  return (
    <section id="about" className="relative py-24 border-t border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col mb-16 reveal">
          <span className="text-electricBlue font-display font-bold text-xs tracking-[0.2em] uppercase mb-2">
            Who I Am
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-[2px] bg-electricBlue mt-4 shadow-electric-glow"></div>
        </div>

        {/* Main profile section (Photo + Bio) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Left Column: Portrait photo */}
          <div className="lg:col-span-4 flex justify-center reveal-left">
            <div className="relative group max-w-[280px] w-full">
              {/* Outer neon border accent */}
              <div className="absolute inset-0 rounded-2xl border border-electricBlue/20 group-hover:border-electricBlue group-hover:shadow-electric-glow transition-all duration-300 transform translate-x-3 translate-y-3 -z-10"></div>
              
              {/* Image Frame */}
              <div className="w-full aspect-square rounded-2xl overflow-hidden glass-card border border-white/15 p-2 bg-white/[0.02] shadow-glass-md">
                <img 
                  src={profileImg} 
                  alt="Lahiru Thilakawardhana" 
                  className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Biography */}
          <div className="lg:col-span-8 flex flex-col justify-center reveal-right select-text">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-6 leading-snug">
              Lahiru Thilakawardhana <br />
              <span className="text-electricBlue">Prompt Engineer & Digital Solutions Entrepreneur</span>
            </h3>
            
            <p className="text-sm text-slateGray-light leading-relaxed mb-6">
              I am an Information Technology undergraduate with a passion for designing intelligent systems and digital solutions. Currently, I work as a <strong>Prompt Engineer in the CodeGen Rise Tech Village Project</strong>, where I structure prompt pipelines and optimize AI language model responses for next-generation software platforms.
            </p>

            <p className="text-sm text-slateGray-light leading-relaxed mb-6">
              As an entrepreneur, I founded <strong>Aevon Digital Solutions</strong> to deliver full-suite digital experiences. We create high-performance web applications, automate business processes, and engineer targeted brand assets. I lead our digital marketing division, which handles the complete social media presence and community management for brands like <strong>Cherish Biscuits</strong>.
            </p>

            <p className="text-sm text-slateGray-light leading-relaxed">
              Additionally, I am a specialized <strong>AI Video Editor</strong>, collaborating with the popular <strong>Vini Productions YouTube team</strong> to build premium, high-engagement video edits and creative graphics. I love combining technology with creative outlets to build digital products that captivate and convert.
            </p>
          </div>

        </div>

        {/* Pillars Cards Section (Below Bio) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
          {cards.map((card, i) => (
            <div 
              key={i} 
              className="glass-card p-6 rounded-xl flex flex-col items-start text-left"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-electricBlue/10 border border-electricBlue/20 flex items-center justify-center mb-5">
                {card.icon}
              </div>
              <h4 className="font-display font-bold text-base text-white mb-2.5">
                {card.title}
              </h4>
              <p className="text-xs text-slateGray-light leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default About;
