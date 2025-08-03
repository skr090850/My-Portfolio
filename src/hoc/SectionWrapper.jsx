import React from 'react';
import { motion } from 'framer-motion';

// This is a Higher-Order Component (HOC) that wraps other components to provide animation.
const SectionWrapper = (Component, idName) => 
  function HOC() {
    return (
      <motion.section
        // Animation properties from Framer Motion
        initial="hidden" // The starting state of the animation
        whileInView="show" // The state to animate to when the component is in view
        viewport={{ once: true, amount: 0.25 }} // Animate once, when 25% of it is visible
        className="relative" // Ensures proper layout
      >
        {/* This span is an invisible anchor point for the navigation links */}
        <span className="absolute -top-20" id={idName}>
          &nbsp;
        </span>
        
        {/* The actual component we are wrapping (e.g., About, Skills) */}
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
