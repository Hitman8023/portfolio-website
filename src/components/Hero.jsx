import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import useCountUp from "../hooks/useCountUp";

const Spline = lazy(() => import("@splinetool/react-spline"));

const stats = [
  { label: "Projects", value: 4, suffix: "+" },
  { label: "Years", value: 2, suffix: "+" },
  { label: "Technologies", value: 10, suffix: "+" },
];

function SplineFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1.3, repeat: Infinity, ease: "linear" }}
        className="h-12 w-12 rounded-full border-2 border-orange-300/30 border-t-orange-200"
      />
    </div>
  );
}

function SplineUnavailable({ message }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center p-8 text-center">
      <p className="text-xs uppercase tracking-[0.22em] text-amber-200">3D Scene Unavailable</p>
      <p className="mt-3 max-w-sm text-sm text-amber-100/90">{message}</p>
      <p className="mt-2 text-xs text-slate-300">Set `VITE_SPLINE_SCENE_URL` in your `.env` and restart `npm run dev`.</p>
    </div>
  );
}

class SplineErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {}

  render() {
    if (this.state.hasError) {
      return (
        <SplineUnavailable message="The Spline scene failed to load. Check your scene URL and permissions." />
      );
    }

    return this.props.children;
  }
}

const isValidSplineUrl = (url) => {
  if (!url || url.includes("your-scene-url")) return false;

  try {
    const parsed = new URL(url);
    return parsed.hostname.includes("spline.design") && parsed.pathname.endsWith(".splinecode");
  } catch {
    return false;
  }
};

export default function Hero() {
  const projectsCount = useCountUp(6, 1600, true);
  const yearsCount = useCountUp(2, 1600, true);
  const technologiesCount = useCountUp(10, 1600, true);
  const counts = [projectsCount, yearsCount, technologiesCount];
  const sceneUrl = import.meta.env.VITE_SPLINE_SCENE_URL || "";
  const canLoadSpline = isValidSplineUrl(sceneUrl);

  return (
    <section id="home" className="relative h-[410vh] border-b border-white/10">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden px-6 pb-16 pt-28 lg:px-10">
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute inset-0"
        >
          <div className="h-full w-full translate-y-[8%] translate-x-[3%] scale-[1.18] md:translate-x-[1%] md:translate-y-[10%] md:scale-[1.15]">
            {canLoadSpline ? (
              <SplineErrorBoundary>
                <Suspense fallback={<SplineFallback />}>
                  <Spline scene={sceneUrl} className="h-full w-full" />
                </Suspense>
              </SplineErrorBoundary>
            ) : (
              <SplineUnavailable message="No valid Spline scene URL configured yet." />
            )}
          </div>
        </motion.div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0c0806]/88 via-[#0c0806]/65 to-[#0c0806]/30" />

        <div className="mx-auto w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 max-w-3xl"
          >
            <span className="mb-5 inline-block rounded-full border border-orange-300/35 bg-orange-300/10 px-4 py-1 text-xs uppercase tracking-[0.28em] text-orange-200">
              Hi I&apos;m
            </span>

            <motion.h1
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.12, type: "spring", stiffness: 90 }}
              className="font-samurai text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
            >
              Nishchal Tendulkar
            </motion.h1>

            <p className="mt-4 text-xl text-orange-200/90 sm:text-2xl">AI &amp; Machine Learning Developer</p>
            <p className="mt-5 max-w-xl text-slate-300">
              Building end-to-end AI applications, ML pipelines, LLM-powered tools, and intelligent automation systems.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary">View Projects</a>
              <a href="/NishchalResume_2025%20(4).pdf" download="Nishchal_Tendulkar_Resume.pdf" className="btn-secondary">Download Resume</a>
              <a href="https://github.com/Hitman8023" target="_blank" rel="noreferrer" className="btn-secondary">GitHub</a>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-3 gap-3">
              {stats.map((item, index) => (
                <div key={item.label} className="card p-4 text-center">
                  <p className="text-2xl font-semibold text-orange-200">{counts[index]}{item.suffix}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1, duration: 1.8, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center text-[10px] uppercase tracking-[0.3em] text-slate-300/90"
        >
          Scroll
          <span className="mt-2 flex h-11 w-7 items-start justify-center rounded-full border border-orange-200/45 bg-black/20 p-1.5">
            <motion.span
              animate={{ y: [0, 10, 0], opacity: [1, 0.35, 1] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              className="h-2 w-2 rounded-full bg-orange-200 shadow-[0_0_10px_rgba(251,146,60,0.7)]"
            />
          </span>
        </motion.a>
      </div>
    </section>
  );
}
