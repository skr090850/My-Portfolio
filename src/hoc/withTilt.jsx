import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

// This HOC now tracks hover state and mouse position
const withTilt = (Component) => {
  return (props) => {
    const ref = useRef(null);
    const [rotate, setRotate] = useState({ x: 0, y: 0 });
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotateX = (y / rect.height - 0.5) * -25;
      const rotateY = (x / rect.width - 0.5) * 25;
      
      setRotate({ x: rotateX, y: rotateY });
      setMousePosition({ x, y }); // Update mouse position relative to the card
    };

    const handleMouseEnter = () => setIsHovering(true);

    const handleMouseLeave = () => {
      setRotate({ x: 0, y: 0 });
      setIsHovering(false);
    };

    return (
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          rotateX: rotate.x,
          rotateY: rotate.y,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Pass down the new props to the wrapped component */}
        <Component {...props} isHovering={isHovering} mousePosition={mousePosition} />
      </motion.div>
    );
  };
};

export default withTilt;
