import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  
  // Track where the mouse actually is
  const mouse = useRef({ x: 0, y: 0 });
  // Track where the follower currently is (to be interpolated)
  const follower = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Only run on desktop
    if (window.innerWidth <= 768) return;

    const handleMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      // Immediately move the main dot
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const smoothFollow = () => {
      // Lerp (Linear Interpolation) formula for buttery smooth following
      // current = current + (target - current) * ease
      follower.current.x += (mouse.current.x - follower.current.x) * 0.15;
      follower.current.y += (mouse.current.y - follower.current.y) * 0.15;

      if (followerRef.current) {
        followerRef.current.style.left = `${follower.current.x}px`;
        followerRef.current.style.top = `${follower.current.y}px`;
      }

      requestAnimationFrame(smoothFollow);
    };

    window.addEventListener('mousemove', handleMouseMove);
    requestAnimationFrame(smoothFollow);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div className="custom-cursor" ref={cursorRef} />
      <div className="custom-cursor-follower" ref={followerRef} />
    </>
  );
};

export default CustomCursor;
