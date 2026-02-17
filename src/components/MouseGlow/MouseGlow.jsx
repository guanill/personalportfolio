import { useEffect, useRef } from 'react';
import './MouseGlow.css';

export default function MouseGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    let x = 0, y = 0, cx = 0, cy = 0;
    let animFrame;

    const onMouse = (e) => {
      x = e.clientX;
      y = e.clientY;
    };

    const render = () => {
      cx += (x - cx) * 0.08;
      cy += (y - cy) * 0.08;
      glow.style.transform = `translate(${cx - 300}px, ${cy - 300}px)`;
      animFrame = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouse);
    animFrame = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouse);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return <div ref={glowRef} className="mouse-glow" />;
}
