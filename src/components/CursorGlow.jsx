import React, { useState, useEffect, useCallback, useRef } from 'react';

/**
 * A unique cursor effect that creates a glowing, snake-like neon trail that follows the mouse.
 * This component is self-contained and can be dropped into any React application.
 */
const CursorGlow = () => {
  // Configuration for the trail effect
  const numDots = 20; // The number of dots in the trail
  const lagFactor = 0.15; // The easing factor for the trail effect (lower is more lag).

  // `mousePosition` stores the actual cursor position from the event listener.
  const mousePosition = useRef({ x: -200, y: -200 });
  
  // `dots` stores an array of positions, one for each dot in the trail.
  const [dots, setDots] = useState(
    Array.from({ length: numDots }, () => ({ x: -200, y: -200 }))
  );

  // Update the ref with the latest mouse position without causing re-renders.
  const handleMouseMove = useCallback((e) => {
    mousePosition.current = { x: e.clientX, y: e.clientY };
  }, []);

  useEffect(() => {
    // Attach the mouse move listener
    window.addEventListener('mousemove', handleMouseMove);

    // Use an animation frame loop for smooth, performant updates
    let animationFrameId;
    const animate = () => {
      const newDots = [...dots];

      // The first dot (the "head" of the snake) follows the mouse cursor.
      newDots[0].x += (mousePosition.current.x - newDots[0].x) * lagFactor;
      newDots[0].y += (mousePosition.current.y - newDots[0].y) * lagFactor;

      // Each subsequent dot follows the dot in front of it.
      for (let i = 1; i < numDots; i++) {
        newDots[i].x += (newDots[i - 1].x - newDots[i].x) * lagFactor;
        newDots[i].y += (newDots[i - 1].y - newDots[i].y) * lagFactor;
      }
      
      setDots(newDots);
      animationFrameId = requestAnimationFrame(animate);
    };

    // Start the animation loop
    animate();

    // Cleanup function to be called when the component unmounts
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [handleMouseMove]); // Effect dependencies

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {dots.map((dot, i) => {
        // Calculate scale and opacity based on the dot's position in the trail.
        const scale = (numDots - i) / numDots;
        
        // Define the single color for the neon effect.
        const color = '#06b6d4'; // A bright cyan color

        return (
          <div
            key={i}
            className="absolute w-3 h-3 rounded-full"
            style={{
              // Position the dot using a CSS transform.
              transform: `translate(${dot.x - 6}px, ${dot.y - 6}px) scale(${scale})`,
              opacity: scale,
              // Apply the fixed color to the background and glow.
              backgroundColor: color,
              boxShadow: `0 0 10px ${color}, 0 0 20px ${color}`,
            }}
          />
        );
      })}
    </div>
  );
};


/**
 * Main App component to demonstrate the CursorGlow effect.
 */
export default function App() {
  return (
      <CursorGlow />
  );
}
