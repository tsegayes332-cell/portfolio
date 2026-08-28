import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const AnimatedSection = ({ 
  children, 
  className = '', 
  animation = 'fade-up',
  delay = 0 
}) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-700 ease-out';
    
    if (isVisible) {
      return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`;
    }

    switch (animation) {
      case 'fade-up':
        return `${baseClasses} opacity-0 translate-y-10`;
      case 'fade-down':
        return `${baseClasses} opacity-0 -translate-y-10`;
      case 'fade-left':
        return `${baseClasses} opacity-0 translate-x-10`;
      case 'fade-right':
        return `${baseClasses} opacity-0 -translate-x-10`;
      case 'zoom-in':
        return `${baseClasses} opacity-0 scale-95`;
      case 'zoom-out':
        return `${baseClasses} opacity-0 scale-105`;
      default:
        return `${baseClasses} opacity-0 translate-y-10`;
    }
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClasses()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
