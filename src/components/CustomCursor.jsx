import React, { useState, useEffect } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is a touch device
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsMobile(true);
      return;
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsHidden(false);
    };

    const onMouseLeave = () => setIsHidden(true);
    const onMouseEnter = () => setIsHidden(false);

    const onMouseOver = (e) => {
      const target = e.target;
      // Check if the hovered element should trigger the pointer state
      if (
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.tagName.toLowerCase() === 'input' ||
        target.tagName.toLowerCase() === 'textarea'
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('mouseenter', onMouseEnter);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Inner Dot */}
      <div 
        className={`fixed top-0 left-0 w-3 h-3 bg-brand-500 rounded-full pointer-events-none z-[9999] transition-transform duration-75 ease-out ${isHidden ? 'opacity-0' : 'opacity-100'}`}
        style={{
          transform: `translate3d(${position.x - 6}px, ${position.y - 6}px, 0) scale(${isPointer ? 0.5 : 1})`,
        }}
      />
      {/* Outer Ring */}
      <div 
        className={`fixed top-0 left-0 w-10 h-10 border-2 border-brand-500 rounded-full pointer-events-none z-[9998] transition-all duration-300 ease-out ${isHidden ? 'opacity-0' : 'opacity-100'}`}
        style={{
          transform: `translate3d(${position.x - 20}px, ${position.y - 20}px, 0) scale(${isPointer ? 1.5 : 1})`,
          backgroundColor: isPointer ? 'rgba(239, 68, 68, 0.1)' : 'transparent',
        }}
      />
    </>
  );
}
