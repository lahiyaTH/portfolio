import React from 'react';

function BackgroundGrid() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* Deep dark base grid layer */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-normal"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      ></div>

      {/* Modern mesh glow points (Glassmorphic ambient backgrounds) */}
      
      {/* Top Right Blue Glow */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-electricBlue/10 blur-[120px] animate-pulse-slow"></div>

      {/* Left Center Subdued Blue Glow */}
      <div className="absolute top-[35%] left-[-15%] w-[600px] h-[600px] rounded-full bg-electricBlue/[0.04] blur-[150px] animate-float-slow"></div>

      {/* Bottom Right Electric Blue Accent */}
      <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] rounded-full bg-electricBlue/10 blur-[130px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      {/* Bottom Left Subtle Accent */}
      <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-white/[0.02] blur-[100px]"></div>

      {/* Horizontal subtle glow line at the top */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-electricBlue/20 to-transparent"></div>
    </div>
  );
}

export default BackgroundGrid;
