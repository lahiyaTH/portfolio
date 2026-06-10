import React from 'react';
import { Palette, Code, Share2, Video, Award, Cpu, ArrowUpRight } from 'lucide-react';

function Services() {
  const services = [
    {
      icon: <Palette className="w-6 h-6 text-electricBlue" />,
      title: 'Graphic Design',
      desc: 'High-impact visual designs including marketing flyers, digital advertisements, illustrations, and print materials customized for corporate branding.'
    },
    {
      icon: <Code className="w-6 h-6 text-electricBlue" />,
      title: 'Website Development',
      desc: 'Creation of responsive, secure, and SEO-optimized frontend and backend architectures, matching creative UI/UX layouts with raw database power.'
    },
    {
      icon: <Share2 className="w-6 h-6 text-electricBlue" />,
      title: 'Social Media Management',
      desc: 'Full-service profile growth, scheduling, audience engagement, and analytic reviews designed to build an active digital community for your business.'
    },
    {
      icon: <Video className="w-6 h-6 text-electricBlue" />,
      title: 'Content Creation',
      desc: 'Production of engaging video clips, creative articles, copies, and interactive graphics tailored to increase conversion metrics and brand presence.'
    },
    {
      icon: <Award className="w-6 h-6 text-electricBlue" />,
      title: 'Branding Solutions',
      desc: 'Strategic brand identity packages including modern logos, custom color schemes, asset templates, guidelines, and corporate styling kits.'
    },
    {
      icon: <Cpu className="w-6 h-6 text-electricBlue" />,
      title: 'AI Automation Services',
      desc: 'Custom integration of OpenAI API, chatbot assistance, and automated workflow scripts (Make.com/Python) to accelerate manual operational tasks.'
    }
  ];

  return (
    <section id="services" className="relative py-24 border-t border-white/5 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 reveal">
          <span className="text-electricBlue font-display font-bold text-xs tracking-[0.2em] uppercase mb-2">
            Aevon Digital Solutions
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            Services Offered
          </h2>
          <div className="w-16 h-[2px] bg-electricBlue mt-4 shadow-electric-glow"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((svc, i) => (
            <div 
              key={i} 
              className="glass-card p-6 md:p-8 rounded-xl flex flex-col items-start text-left group"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-lg bg-electricBlue/10 border border-electricBlue/20 flex items-center justify-center mb-6 group-hover:border-electricBlue group-hover:bg-electricBlue/20 transition-all duration-300">
                {svc.icon}
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-lg text-white mb-3 group-hover:text-electricBlue transition-colors duration-300">
                {svc.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-slateGray-light leading-relaxed mb-6 flex-grow">
                {svc.desc}
              </p>

              {/* Interaction Link */}
              <a 
                href="#contact" 
                className="inline-flex items-center gap-1 text-xs font-bold text-white hover:text-electricBlue transition-colors uppercase tracking-wider mt-auto"
              >
                Inquire Now
                <ArrowUpRight className="w-4 h-4 text-electricBlue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;
