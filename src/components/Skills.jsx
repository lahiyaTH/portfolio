import React from 'react';
import { Palette, Code, Target, Cpu } from 'lucide-react';

function Skills() {
  const skillCategories = [
    {
      title: 'Graphic & Video Design',
      icon: <Palette className="w-5 h-5 text-electricBlue" />,
      skills: [
        { name: 'Adobe Photoshop', level: 90 },
        { name: 'Adobe Illustrator', level: 85 },
        { name: 'AI Video Editing (CapCut/Premiere)', level: 92 },
        { name: 'Canva', level: 95 }
      ]
    },
    {
      title: 'Web Development',
      icon: <Code className="w-5 h-5 text-electricBlue" />,
      skills: [
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'JavaScript (ES6+)', level: 85 },
        { name: 'React.js', level: 80 },
        { name: 'PHP & MySQL', level: 80 }
      ]
    },
    {
      title: 'Digital Marketing',
      icon: <Target className="w-5 h-5 text-electricBlue" />,
      skills: [
        { name: 'Social Media Management', level: 92 },
        { name: 'Branding & Identity', level: 85 },
        { name: 'Content Strategy', level: 90 },
        { name: 'Marketing Strategy', level: 80 }
      ]
    },
    {
      title: 'AI & Prompt Engineering',
      icon: <Cpu className="w-5 h-5 text-electricBlue" />,
      skills: [
        { name: 'LLM Prompt Engineering', level: 96 },
        { name: 'AI Workflow Automation', level: 85 },
        { name: 'Business Process Automation', level: 80 },
        { name: 'AI Content Generation', level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16 reveal">
          <span className="text-electricBlue font-display font-bold text-xs tracking-[0.2em] uppercase mb-2">
            My Expertise
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
            Skills & Abilities
          </h2>
          <div className="w-16 h-[2px] bg-electricBlue mt-4 shadow-electric-glow"></div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="glass-card p-6 md:p-8 rounded-xl reveal"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              
              {/* Category Title & Icon */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                <div className="w-9 h-9 rounded-lg bg-electricBlue/10 border border-electricBlue/20 flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="font-display font-bold text-lg text-white">
                  {category.title}
                </h3>
              </div>

              {/* Progress Bars List */}
              <div className="flex flex-col gap-5">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="flex flex-col">
                    <div className="flex justify-between items-center mb-1.5 text-xs font-semibold">
                      <span className="text-white/80">{skill.name}</span>
                      <span className="text-electricBlue">{skill.level}%</span>
                    </div>
                    {/* Progress Track */}
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-electricBlue rounded-full shadow-electric-glow"
                        style={{ 
                          width: `${skill.level}%`,
                          transition: 'width 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.5s'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
