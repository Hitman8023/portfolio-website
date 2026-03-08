const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Hitman8023",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.1.66-.22.66-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .08 1.54 1.06 1.54 1.06.89 1.56 2.34 1.11 2.91.85.09-.67.35-1.11.64-1.36-2.22-.26-4.56-1.14-4.56-5.05 0-1.11.39-2.01 1.03-2.72-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.04A9.3 9.3 0 0 1 12 6.75c.85 0 1.71.12 2.52.36 1.91-1.32 2.75-1.04 2.75-1.04.55 1.42.2 2.47.1 2.73.64.71 1.03 1.61 1.03 2.72 0 3.92-2.34 4.79-4.57 5.05.36.31.69.92.69 1.85 0 1.33-.01 2.4-.01 2.72 0 .27.17.59.67.49A10.3 10.3 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nishchal-tendulkar-123abc",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M6.94 8.5a1.56 1.56 0 1 1 0-3.12 1.56 1.56 0 0 1 0 3.12ZM5.5 9.75h2.88V19H5.5V9.75Zm4.69 0h2.76v1.26h.04c.39-.73 1.32-1.5 2.71-1.5 2.9 0 3.44 1.95 3.44 4.48V19h-2.88v-4.42c0-1.05-.02-2.41-1.44-2.41-1.44 0-1.66 1.14-1.66 2.33V19h-2.97V9.75Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:nishchaltendulkar104@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
        <path d="M4 6h16v12H4z" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 pb-8 pt-10 lg:px-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <a href="#home" className="flex items-center gap-2 text-slate-200">
          <span className="rounded-lg border border-orange-300/45 bg-orange-400/10 px-3 py-1 text-xs font-semibold text-orange-200">NT</span>
          <span className="text-sm tracking-[0.2em]">NISHCHAL TENDULKAR</span>
        </a>

        <div className="flex flex-wrap items-center justify-center gap-5">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-slate-400 transition hover:text-orange-200">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={social.label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-slate-300 transition hover:border-orange-300/45 hover:text-orange-200"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      <p className="mt-8 text-center text-sm text-slate-500">© {new Date().getFullYear()} Nishchal Tendulkar. All rights reserved.</p>
    </footer>
  );
}
