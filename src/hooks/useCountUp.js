import { useEffect, useState } from "react";

export default function useCountUp(target, duration = 1400, shouldStart = true) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let animationFrame = 0;
    const start = performance.now();

    const update = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(update);
      }
    };

    animationFrame = requestAnimationFrame(update);

    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration, shouldStart]);

  return value;
}
