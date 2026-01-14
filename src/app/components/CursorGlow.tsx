// src/app/components/CursorGlow.tsx
"use client"

import React, { useState, useEffect } from 'react';

// This component creates a subtle glow effect that follows the cursor
// Adds a professional, interactive feel to the portfolio
const CursorGlow: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);

  // Handle mouse movement
  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    // Hide glow when mouse leaves window
    const hideGlow = () => setHidden(true);

    // Throttle mouse move event for performance
    let timeoutId: NodeJS.Timeout | null = null; // Cambiado a null
    const throttledUpdatePosition = (e: MouseEvent) => {
      if (timeoutId) return;
      timeoutId = setTimeout(() => {
        updatePosition(e);
        timeoutId = null;
      }, 10);
    };

    window.addEventListener('mousemove', throttledUpdatePosition);
    window.addEventListener('mouseout', hideGlow);

    return () => {
      window.removeEventListener('mousemove', throttledUpdatePosition);
      window.removeEventListener('mouseout', hideGlow);
      if (timeoutId) clearTimeout(timeoutId); // Asegurarse de que timeoutId no sea null
    };
  }, []);

  // Don't render on mobile devices
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null;
  }

  return (
    <div
      className={`fixed pointer-events-none z-50 transition-opacity duration-500 ${
        hidden ? 'opacity-0' : 'opacity-40'
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
        width: '350px',
        height: '350px',
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, rgba(139, 92, 246, 0.1) 40%, rgba(0, 0, 0, 0) 70%)',
        willChange: 'left, top',
      }}
    />
  );
};

export default CursorGlow;