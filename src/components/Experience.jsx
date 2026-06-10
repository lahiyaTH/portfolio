import React from 'react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

function Experience() {
  const education = [
    {
      degree: 'BSc in Information Technology',
      institution: 'University Undergraduate Program',
      duration: '2023 - Present',
      details: 'Specializing in software engineering, database management, cloud computing, and systems analysis. Actively exploring AI workflows and modern web technologies to build enterprise-grade products.'
    }
  ];

  const experience = [
    {
      role: 'Prompt Engineer',
      company: 'CodeGen Rise Tech Village Project',
      duration: '2025 - Present',
      details: 'Formulating complex system instructions and prompt architecture for large language model applications. Designing automated workflow chains and fine-tuning prompt behaviors to optimize software outcomes.'
    },
    {
      role: 'Founder & Director',
      company: 'Aevon Digital Solutions',
      duration: '2024 - Present',
      details: 'Managing operations and product delivery for web developments, workflow setups, and branding assets. Delivering tailored digital solution ecosystems for corporate growth.'
    },
    {
      role: 'Digital Marketer',
      company: 'Cherish Biscuits (Social Media Management)',
      duration: '2023 - Present',
      details: 'Managing all social media marketing strategies, organic community building, graphical promotions, and creative copy to increase brand reach and engagement.'
    },
    {
      role: 'AI Video Editor',
      company: 'Vini Productions YouTube Team',
      duration: '2023 - Present',
      details: 'Editing YouTube video cuts, designing animations, adding AI transitions, visual pacing improvements, and creating high-engagement video assets.'
    },
    {
      role: 'Freelance Web Developer & Designer',
      company: 'Self-Employed',
      duration: '2022 - Present',
      details: 'Building customized landing pages and databases using React, PHP, and SQL, and designing vector logos for startups.'
    }
  ];

  return (
    <section id="experience" className="relative py-24 border-t border-white/5 bg-white/[0.005]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col mb-16 reveal">
          <span className="text-electricBlue font-display font-bold text-xs tracking-[0.2em] uppercase mb-2">
            My Journey
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            Education & Experience
          </h2>
          <div className="w-16 h-[2px] bg-electricBlue mt-4 shadow-electric-glow"></div>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Education - Left Column */}
          <div className="lg:col-span-5 flex flex-col gap-8 reveal-left">
            <div className="flex items-center gap-3 mb-2">
              <GraduationCap className="w-6 h-6 text-electricBlue" />
              <h3 className="font-display font-bold text-xl text-white">Education</h3>
            </div>

            <div className="flex flex-col gap-6 pl-4 border-l border-white/5">
              {education.map((edu, idx) => (
                <div key={idx} className="relative pl-6">
                  {/* Timeline bullet */}
                  <span className="absolute left-[-21px] top-1.5 w-2.5 h-2.5 rounded-full bg-electricBlue shadow-electric-glow border-2 border-darkBg"></span>
                  
                  <h4 className="font-display font-bold text-base text-white hover:text-electricBlue transition-colors duration-300">
                    {edu.degree}
                  </h4>
                  <p className="text-xs text-white/70 font-semibold mt-1">
                    {edu.institution}
                  </p>
                  
                  <div className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/5 text-[10px] text-slateGray-light">
                    <Calendar className="w-3 h-3 text-electricBlue" />
                    {edu.duration}
                  </div>

                  <p className="text-xs text-slateGray-light leading-relaxed mt-4">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience - Right Column */}
          <div className="lg:col-span-7 flex flex-col gap-8 reveal-right">
            <div className="flex items-center gap-3 mb-2">
              <Briefcase className="w-6 h-6 text-electricBlue" />
              <h3 className="font-display font-bold text-xl text-white">Professional Experience</h3>
            </div>

            <div className="flex flex-col gap-8 pl-4 border-l border-white/5">
              {experience.map((exp, idx) => (
                <div key={idx} className="relative pl-6">
                  {/* Timeline bullet */}
                  <span className="absolute left-[-21px] top-1.5 w-2.5 h-2.5 rounded-full bg-electricBlue/50 border-2 border-darkBg hover:bg-electricBlue transition-colors"></span>
                  
                  <h4 className="font-display font-bold text-base text-white hover:text-electricBlue transition-colors duration-300">
                    {exp.role}
                  </h4>
                  <p className="text-xs text-electricBlue font-semibold mt-0.5">
                    {exp.company}
                  </p>
                  
                  <div className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/5 text-[10px] text-slateGray-light">
                    <Calendar className="w-3 h-3 text-electricBlue" />
                    {exp.duration}
                  </div>

                  <p className="text-xs text-slateGray-light leading-relaxed mt-4">
                    {exp.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;
