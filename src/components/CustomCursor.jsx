import React, { useState, useEffect, useRef } from 'react';

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const dotRef = useRef(null);
  const ringRef = useRef(null);

  // Check if coarse pointer (mobile/tablet touchscreen) is used
  useEffect(() => {
    const checkDevice = () => {
      const mobile = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768;
      setIsMobile(mobile);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (hidden) setHidden(false);
    };

    const handleMouseEnter = () => setHidden(false);
    const handleMouseLeave = () => setHidden(true);

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    // Track links, buttons, and clickable inputs to increase cursor size
    const addHoverListeners = () => {
      const clickables = document.querySelectorAll('a, button, input[type="submit"], input[type="button"], select, textarea, .clickable');
      clickables.forEach((el) => {
        el.addEventListener('mouseenter', () => setLinkHovered(true));
        el.addEventListener('mouseleave', () => setLinkHovered(false));
      });
    };

    // Listen to changes in DOM to attach new clickables
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Initial setup
    addHoverListeners();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      observer.disconnect();
    };
  }, [isMobile, hidden]);

  if (isMobile || hidden) return null;

  return (
    <>
      {/* Inner solid dot */}
      <div
        ref={dotRef}
        className="fixed w-2 h-2 bg-electricBlue rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${clicked ? 0.8 : linkHovered ? 1.5 : 1})`,
        }}
      />
      
      {/* Outer glassy ring */}
      <div
        ref={ringRef}
        className="fixed w-8 h-8 border border-electricBlue/50 rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          backgroundColor: linkHovered ? 'rgba(0, 191, 255, 0.08)' : 'transparent',
          borderColor: linkHovered ? '#00BFFF' : 'rgba(0, 191, 255, 0.4)',
          transform: `translate(-50%, -50%) scale(${clicked ? 1.4 : linkHovered ? 1.8 : 1})`,
        }}
      />
    </>
  );
}

export default CustomCursor;
