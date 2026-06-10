import React, { useState } from 'react';
import { ExternalLink, Layers } from 'lucide-react';
import cherishImg from '../assets/cherish.png';

function Projects() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'design', name: 'Graphic Design' },
    { id: 'web', name: 'Web Dev' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'ai', name: 'AI & Automation' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Project Carnival 2026 Branding',
      desc: 'Full-scale visual branding package, layout guides, event collateral, and digital promotional banners.',
      category: 'design',
      technologies: ['Photoshop', 'Illustrator', 'Branding'],
      svgType: 'design-carnival'
    },
    {
      id: 2,
      title: 'Cherish Biscuits SMM Operations',
      desc: 'Complete digital marketing management, visual asset creation, audience engagement strategies, and content planning representing the Cherish Biscuits brand.',
      category: 'marketing',
      technologies: ['Social Media SMM', 'Content Strategy', 'Branding'],
      image: cherishImg
    },
    {
      id: 3,
      title: 'Logo Design Projects',
      desc: 'A collection of minimalist and modern corporate logo designs representing modern brand values.',
      category: 'design',
      technologies: ['Adobe Illustrator', 'Branding', 'Vector Design'],
      svgType: 'logo-mockup'
    },
    {
      id: 4,
      title: 'Web Development Projects',
      desc: 'Modern, high-performance responsive web pages featuring custom dashboards and database connections.',
      category: 'web',
      technologies: ['React', 'Tailwind CSS', 'PHP', 'MySQL'],
      svgType: 'web-dev'
    },
    {
      id: 5,
      title: 'AI Automation Solutions',
      desc: 'Automating business processes, emails, and database synchronization using AI workflows.',
      category: 'ai',
      technologies: ['OpenAI', 'Make.com', 'APIs', 'Node.js'],
      svgType: 'ai-nodes'
    },
    {
      id: 6,
      title: 'Vini Productions YouTube Edits',
      desc: 'AI-assisted video editing, motion graphics design, sound effects integration, and video pacing layout optimizations for the Vini Productions team.',
      category: 'design',
      technologies: ['AI Video Editing', 'YouTube Strategy', 'Premiere Pro'],
      svgType: 'content-creation'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter || (filter === 'design' && p.category === 'design') || (filter === 'marketing' && p.category === 'marketing'));

  // Helper function to render modern decorative SVG templates based on project type
  const renderProjectSVG = (type) => {
    switch (type) {
      case 'design-carnival':
        return (
          <svg className="w-full h-full bg-[#0a0a0c]" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="240" fill="#08080a"/>
            <circle cx="200" cy="120" r="70" stroke="#00BFFF" strokeWidth="1.5" strokeDasharray="5 5" />
            <circle cx="200" cy="120" r="50" fill="url(#carnivalGrad)" />
            <path d="M120 180 L200 60 L280 180 Z" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.2" />
            <path d="M150 180 L200 90 L250 180 Z" stroke="#00BFFF" strokeWidth="1" strokeOpacity="0.4" />
            <defs>
              <radialGradient id="carnivalGrad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" transform="translate(200 120) rotate(90) scale(50)">
                <stop stopColor="#00BFFF" stopOpacity="0.3"/>
                <stop offset="1" stopColor="#000000" stopOpacity="0"/>
              </radialGradient>
            </defs>
          </svg>
        );
      case 'logo-mockup':
        return (
          <svg className="w-full h-full bg-[#0a0a0c]" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="240" fill="#08080a"/>
            <rect x="150" y="70" width="100" height="100" rx="16" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.1" />
            <circle cx="200" cy="120" r="32" fill="#00BFFF" fillOpacity="0.08" stroke="#00BFFF" strokeWidth="2" />
            <path d="M190 120 L210 120 M200 110 V130" stroke="#00BFFF" strokeWidth="3" strokeLinecap="round" />
            <path d="M170 150 C170 160 230 160 230 150" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.3" strokeLinecap="round" />
          </svg>
        );
      case 'web-dev':
        return (
          <svg className="w-full h-full bg-[#0a0a0c]" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="240" fill="#08080a"/>
            <rect x="60" y="50" width="280" height="140" rx="8" fill="#030303" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.1" />
            <line x1="60" y1="75" x2="340" y2="75" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.1" />
            <circle cx="75" cy="62" r="3" fill="#ef4444" />
            <circle cx="85" cy="62" r="3" fill="#eab308" />
            <circle cx="95" cy="62" r="3" fill="#22c55e" />
            <text x="145" y="115" fill="#00BFFF" fontSize="18" fontFamily="monospace" fontWeight="bold">&lt;React /&gt;</text>
            <rect x="80" y="140" width="240" height="8" rx="4" fill="#ffffff" fillOpacity="0.05" />
            <rect x="80" y="155" width="160" height="8" rx="4" fill="#ffffff" fillOpacity="0.05" />
          </svg>
        );
      case 'ai-nodes':
        return (
          <svg className="w-full h-full bg-[#0a0a0c]" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="240" fill="#08080a"/>
            <circle cx="200" cy="120" r="24" fill="#00BFFF" fillOpacity="0.1" stroke="#00BFFF" strokeWidth="2" />
            <circle cx="110" cy="70" r="16" fill="#030303" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.2" />
            <circle cx="110" cy="170" r="16" fill="#030303" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.2" />
            <circle cx="290" cy="70" r="16" fill="#030303" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.2" />
            <circle cx="290" cy="170" r="16" fill="#030303" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.2" />
            <path d="M125 80 L176 108" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.15" />
            <path d="M125 160 L176 132" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.15" />
            <path d="M224 108 L275 80" stroke="#00BFFF" strokeWidth="1.5" strokeOpacity="0.6" />
            <path d="M224 132 L275 160" stroke="#00BFFF" strokeWidth="1.5" strokeOpacity="0.6" />
            <path d="M110 86 V154" stroke="#ffffff" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.1" />
            <path d="M290 86 V154" stroke="#ffffff" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.1" />
          </svg>
        );
      case 'content-creation':
        return (
          <svg className="w-full h-full bg-[#0a0a0c]" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="240" fill="#08080a"/>
            <circle cx="200" cy="120" r="45" fill="none" stroke="#00BFFF" strokeWidth="2" strokeOpacity="0.8" />
            <polygon points="190,100 220,120 190,140" fill="#00BFFF" />
            <path d="M90 70 H310 V170 H90 Z" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.1" />
            <line x1="90" y1="95" x2="310" y2="95" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.1" />
            <line x1="90" y1="145" x2="310" y2="145" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.1" />
          </svg>
        );
      default:
        return (
          <div className="w-full h-full bg-[#0a0a0c] flex items-center justify-center text-slateGray-light">
            <Layers className="w-8 h-8" />
          </div>
        );
    }
  };

  return (
    <section id="projects" className="relative py-24 border-t border-white/5 bg-white/[0.005]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 reveal">
          <div className="flex flex-col">
            <span className="text-electricBlue font-display font-bold text-xs tracking-[0.2em] uppercase mb-2">
              My Portfolio
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
              Featured Projects
            </h2>
            <div className="w-16 h-[2px] bg-electricBlue mt-4 shadow-electric-glow"></div>
          </div>

          {/* Filtering Links */}
          <div className="flex flex-wrap gap-2.5 mt-8 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-lg border transition-all duration-300 ${
                  filter === cat.id 
                    ? 'bg-electricBlue text-darkBg border-electricBlue shadow-electric-glow' 
                    : 'bg-white/5 text-slateGray-light border-white/5 hover:text-white hover:border-white/10'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project) => (
            <article 
              key={project.id} 
              className="glass-card flex flex-col rounded-xl overflow-hidden reveal h-full"
            >
              
              {/* Media placeholder */}
              <div className="aspect-[16/10] w-full overflow-hidden border-b border-white/5 relative group-hover:scale-105 transition-transform duration-500 flex items-center justify-center bg-[#0a0a0c]">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-contain p-6" />
                ) : (
                  renderProjectSVG(project.svgType)
                )}
                
                {/* Visual glass overlay */}
                <div className="absolute inset-0 bg-darkBg/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Detail block */}
              <div className="p-6 flex flex-col flex-grow select-text">
                <h3 className="font-display font-bold text-lg text-white mb-2.5 group-hover:text-electricBlue transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-xs text-slateGray-light leading-relaxed mb-6 flex-grow">
                  {project.desc}
                </p>

                {/* Technologies List */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="text-[10px] font-mono font-medium bg-white/5 text-white/70 px-2 py-0.5 rounded border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Interaction button */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-electricBlue hover:text-electricBlue-hover uppercase tracking-wider transition-colors mt-auto self-start group/btn"
                >
                  View Details 
                  <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
