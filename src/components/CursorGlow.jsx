import React, { useState, useEffect, useCallback, useRef } from 'react';
const CursorGlow = () => {
  const numDots = 20;
  const lagFactor = 0.25;

  const mousePosition = useRef({ x: -100, y: -100 });
  
  const [dots, setDots] = useState(
    Array.from({ length: numDots }, () => ({ x: -100, y: -100 }))
  );

  const handleMouseMove = useCallback((e) => {
    mousePosition.current = { x: e.clientX, y: e.clientY };
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId;
    const animate = () => {
      const newDots = [...dots];

      newDots[0].x += (mousePosition.current.x - newDots[0].x) * lagFactor;
      newDots[0].y += (mousePosition.current.y - newDots[0].y) * lagFactor;

      for (let i = 1; i < numDots; i++) {
        newDots[i].x += (newDots[i - 1].x - newDots[i].x) * lagFactor;
        newDots[i].y += (newDots[i - 1].y - newDots[i].y) * lagFactor;
      }
      
      setDots(newDots);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [handleMouseMove]);

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {dots.map((dot, i) => {
        const scale = (numDots - i) / numDots;
        
        const color = '#06b6d4';

        return (
          <div
            key={i}
            className="absolute w-3 h-3 rounded-full"
            style={{
              transform: `translate(${dot.x - 6}px, ${dot.y - 6}px) scale(${scale})`,
              opacity: scale,
              backgroundColor: color,
              boxShadow: `0 0 10px ${color}, 0 0 20px ${color}`,
            }}
          />
        );
      })}
    </div>
  );
};

export default function App() {
  return (
      <CursorGlow />
  );
}
