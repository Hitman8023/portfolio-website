import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(true);
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setEnabled(false);
      return;
    }

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: target.x, y: target.y };
    let frame = 0;

    const updatePosition = () => {
      ring.x += (target.x - ring.x) * 0.14;
      ring.y += (target.y - ring.y) * 0.14;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${target.x}px, ${target.y}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0)`;
      }

      frame = requestAnimationFrame(updatePosition);
    };

    const onMove = (event) => {
      target.x = event.clientX;
      target.y = event.clientY;
    };

    const onEnter = () => {
      if (dotRef.current) dotRef.current.style.opacity = "1";
      if (ringRef.current) ringRef.current.style.opacity = "1";
    };

    const onLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseenter", onEnter);
    window.addEventListener("mouseleave", onLeave);
    frame = requestAnimationFrame(updatePosition);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div ref={ringRef} className="custom-cursor-ring" />
      <div ref={dotRef} className="custom-cursor-dot" />
    </>
  );
}
