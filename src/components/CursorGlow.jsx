import React, { useState, useEffect } from 'react';

/**
 * A more advanced cursor effect with a main dot and a trailing circle.
 * The trailing circle animates smoothly and scales on hover over interactive elements.
 */
const CursorGlow = () => {
  // State for the primary cursor's position
  const [mainCursorPos, setMainCursorPos] = useState({ x: -100, y: -100 });
  // State for the trailing circle's position
  const [trailerCursorPos, setTrailerCursorPos] = useState({ x: -100, y: -100 });
  // State to track if the cursor is hovering over an interactive element
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // This function updates the main cursor's position instantly
    const handleMouseMove = (e) => {
      setMainCursorPos({ x: e.clientX, y: e.clientY });
    };

    // These functions detect when the mouse enters or leaves a link or button
    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
        setIsHovering(true);
      }
    };
    const handleMouseOut = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
        setIsHovering(false);
      }
    };

    // Add event listeners when the component mounts
    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseover', handleMouseOver);
    document.body.addEventListener('mouseout', handleMouseOut);

    // This sets up the animation loop for the trailing cursor
    let animationFrameId;
    const animateTrailer = () => {
      // Calculate the difference between the trailer and the main cursor
      setTrailerCursorPos((prevPos) => {
        const dx = mainCursorPos.x - prevPos.x;
        const dy = mainCursorPos.y - prevPos.y;
        // Move the trailer a fraction of the distance (creates the "lag" effect)
        return {
          x: prevPos.x + dx * 0.2,
          y: prevPos.y + dy * 0.2,
        };
      });
      animationFrameId = requestAnimationFrame(animateTrailer);
    };
    
    animateTrailer();

    // Cleanup function to remove listeners and cancel the animation frame
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseover', handleMouseOver);
      document.body.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mainCursorPos]); // Rerun effect only when main cursor position changes

  return (
    <>
      {/* The trailing circle element */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-50 w-8 h-8 rounded-full border-2 border-cyan-400 transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${trailerCursorPos.x - 16}px, ${trailerCursorPos.y - 16}px) scale(${isHovering ? 1.5 : 1})`,
          opacity: isHovering ? 0.5 : 1,
        }}
      />
      {/* The main cursor dot */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-50 w-2 h-2 rounded-full bg-cyan-300"
        style={{
          transform: `translate(${mainCursorPos.x - 4}px, ${mainCursorPos.y - 4}px)`,
        }}
      />
    </>
  );
};

export default CursorGlow;
