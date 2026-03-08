"use client";

import { useEffect } from "react";

const DURATION = 1200;

const easeInOutCubic = (time: number) =>
  time < 0.5 ? 4 * time * time * time : 1 - Math.pow(-2 * time + 2, 3) / 2;

const getTargetElement = (hash: string) => {
  if (!hash || hash === "#") return null;
  const id = decodeURIComponent(hash.slice(1));
  return document.getElementById(id);
};

export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let animationId = 0;

    const animateTo = (targetY: number) => {
      const startY = window.scrollY;
      const distance = targetY - startY;
      if (distance === 0) return;

      const startTime = performance.now();

      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / DURATION, 1);
        const eased = easeInOutCubic(progress);
        window.scrollTo(0, startY + distance * eased);

        if (progress < 1) {
          animationId = window.requestAnimationFrame(tick);
        }
      };

      window.cancelAnimationFrame(animationId);
      animationId = window.requestAnimationFrame(tick);
    };

    const scrollToHash = (hash: string) => {
      const target = getTargetElement(hash);
      if (!target) return;
      const targetY = window.scrollY + target.getBoundingClientRect().top;
      animateTo(targetY);
    };

    const onClick = (event: MouseEvent) => {
      const rawTarget = event.target;
      if (!(rawTarget instanceof Element)) return;

      const anchor = rawTarget.closest("a[href^='#']") as HTMLAnchorElement | null;
      if (!anchor) return;
      if (anchor.hasAttribute("data-no-smooth-scroll")) return;

      const hash = anchor.getAttribute("href") || "";
      const target = getTargetElement(hash);
      if (!target) return;

      event.preventDefault();
      window.history.pushState(null, "", hash);
      scrollToHash(hash);
    };

    const onHashChange = () => scrollToHash(window.location.hash);

    document.addEventListener("click", onClick);
    window.addEventListener("hashchange", onHashChange);

    if (window.location.hash) {
      window.setTimeout(() => scrollToHash(window.location.hash), 0);
    }

    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("hashchange", onHashChange);
      window.cancelAnimationFrame(animationId);
    };
  }, []);

  return null;
}