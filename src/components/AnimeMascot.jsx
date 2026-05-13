import React, { useEffect, useRef, useState } from 'react';

export default function AnimeMascot() {
  const mascotRef = useRef(null);
  
  // Physics state (using refs for the physics loop to avoid re-renders on every frame)
  const physics = useRef({
    x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0,
    y: typeof window !== 'undefined' ? window.innerHeight - 100 : 0,
    vx: 0,
    vy: 0,
    width: 60,
    height: 60,
    isGrounded: false,
    facingRight: true,
    action: 'idle' // 'idle', 'run', 'jump'
  });

  const mouse = useRef({ x: -1000, y: -1000 });
  const [renderState, setRenderState] = useState({ x: 0, y: 0, facingRight: true, action: 'idle' });

  // Handle mouse position
  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Physics Loop
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let animationFrameId;
    const gravity = 0.6;
    const friction = 0.85;
    const maxSpeed = 12;
    const jumpForce = -15;
    const repulsionRadius = 250; // Distance at which it starts running away
    const speed = 2.5;

    // Start in the middle of the screen
    physics.current.x = window.innerWidth / 2;
    physics.current.y = window.innerHeight - 100;

    const updatePhysics = () => {
      const p = physics.current;
      const m = mouse.current;
      
      // Calculate distance to mouse
      const dx = (p.x + p.width/2) - m.x;
      const dy = (p.y + p.height/2) - m.y;
      const distance = Math.sqrt(dx*dx + dy*dy);

      // React to mouse (run away)
      if (distance < repulsionRadius) {
        // Calculate repulsion vector (away from mouse)
        const angle = Math.atan2(dy, dx);
        
        // Add velocity away from mouse
        p.vx += Math.cos(angle) * speed;
        
        // If mouse gets very close, jump!
        if (p.isGrounded && distance < 120 && dy > -80) {
          p.vy = jumpForce;
          p.isGrounded = false;
        }
      }

      // Apply gravity
      p.vy += gravity;

      // Apply friction to horizontal movement
      p.vx *= friction;

      // Limit horizontal speed
      if (p.vx > maxSpeed) p.vx = maxSpeed;
      if (p.vx < -maxSpeed) p.vx = -maxSpeed;

      // Update positions
      p.x += p.vx;
      p.y += p.vy;

      // Screen Boundaries
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      // Floor collision
      if (p.y + p.height >= screenHeight) {
        p.y = screenHeight - p.height;
        p.vy = 0;
        p.isGrounded = true;
      } else {
        p.isGrounded = false;
      }

      // Wall collision (bounce off walls)
      if (p.x <= 0) {
        p.x = 0;
        p.vx = Math.abs(p.vx) * 0.8; // Bounce right
      } else if (p.x + p.width >= screenWidth) {
        p.x = screenWidth - p.width;
        p.vx = -Math.abs(p.vx) * 0.8; // Bounce left
      }

      // Determine action and facing direction
      if (Math.abs(p.vx) > 0.5) {
        p.facingRight = p.vx > 0;
      }
      
      if (!p.isGrounded) {
        p.action = 'jump';
      } else if (Math.abs(p.vx) > 1.5) {
        p.action = 'run';
      } else {
        p.action = 'idle';
      }

      // Force render to update DOM
      setRenderState({
        x: p.x,
        y: p.y,
        facingRight: p.facingRight,
        action: p.action
      });

      animationFrameId = requestAnimationFrame(updatePhysics);
    };

    updatePhysics();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Hide entirely on touch devices
  if (typeof window !== 'undefined' && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  // Visual appearance based on action
  let content = <img src="/assets/naruto.gif" alt="mascot" className="w-[150%] h-[150%] object-contain pointer-events-none drop-shadow-md" />;
  let animationClass = '';
  
  if (renderState.action === 'jump') {
    animationClass = '-translate-y-2'; // Stretch up slightly when jumping
  } else if (renderState.action === 'run') {
    animationClass = 'animate-pulse'; // Give it a running wobble
  }

  return (
    <div
      ref={mascotRef}
      className={`fixed top-0 left-0 z-[9999] pointer-events-none drop-shadow-2xl transition-transform`}
      style={{
        width: '60px',
        height: '60px',
        // We use pure inline styles for transform to prevent React jitter, but a tiny transition helps smooth the physics
        transform: `translate3d(${renderState.x}px, ${renderState.y}px, 0) scaleX(${renderState.facingRight ? -1 : 1})`,
        transitionDuration: '10ms'
      }}
    >
      <div className={`w-full h-full flex items-center justify-center ${animationClass} transition-transform`}>
        {content}
      </div>
    </div>
  );
}
