import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-[#0c0806]/70 border-b border-orange-300/15" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#home" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-orange-300/45 bg-orange-300/10 text-sm font-semibold text-orange-200 transition group-hover:scale-105">
            NT
          </div>
          <span className="hidden text-sm font-semibold tracking-[0.24em] text-slate-300 sm:block">NISHCHAL</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm text-slate-300 transition hover:text-orange-200">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a href="#contact" className="btn-primary">
            Hire Me
          </a>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-slate-100 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <span className="relative h-4 w-5">
            <span className={`absolute left-0 top-0 h-0.5 w-5 bg-white transition ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`absolute left-0 top-[7px] h-0.5 w-5 bg-white transition ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-[14px] h-0.5 w-5 bg-white transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div className="absolute inset-0 bg-[#0c0806]/90 backdrop-blur-2xl" />
            <div className="relative flex h-full flex-col justify-center px-8">
              <ul className="space-y-6">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block text-2xl font-medium text-slate-100"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-10 inline-flex w-full justify-center">
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
