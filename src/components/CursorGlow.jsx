import React, { useState, useEffect } from 'react';

/**
 * A "spotlight" or "flashlight" cursor effect.
 * It illuminates a circular area around the mouse, dimming the rest of the page.
 */
const CursorGlow = () => {
  // State to store the mouse position
  const [position, setPosition] = useState({ x: -200, y: -200 });
  // State to manage the visibility of the cursor (hides on mouse out)
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Updates the mouse position
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    // Handlers to show/hide the cursor when entering/leaving the window
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup listeners when the component unmounts
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* This div creates the spotlight effect.
          It's a full-screen overlay with a radial gradient background.
          The gradient is transparent at the center (the spotlight) and fades
          to a semi-transparent black, dimming the rest of the page.
      */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          opacity: isVisible ? 1 : 0,
          background: `radial-gradient(circle 300px at ${position.x}px ${position.y}px, transparent 0%, rgba(0, 0, 0, 0.85) 100%)`,
        }}
      />
      
      {/* This is the small dot at the center of the spotlight, acting as the main cursor point. */}
      <div
        className="pointer-events-none fixed w-2 h-2 bg-cyan-300 rounded-full z-50 transition-opacity duration-300"
        style={{
            opacity: isVisible ? 1 : 0,
            top: 0,
            left: 0,
            transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
            boxShadow: '0 0 10px #06b6d4, 0 0 20px #06b6d4'
        }}
      />
    </>
  );
};

export default CursorGlow;
