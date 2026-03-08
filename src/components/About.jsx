import { motion } from "framer-motion";

const badges = [
  "Python",
  "Machine Learning",
  "Generative AI",
  "LLM Systems",
  "Automation",
  "MLOps",
  "Flask",
  "React",
];

const codeSnippet = `class NishchalDeveloper:\n    def __init__(self):\n        self.name = \"Nishchal Tendulkar\"\n        self.role = \"AI & Machine Learning Developer\"\n        self.education = \"Computer Engineering Student\"\n        self.passion = [\"AI\", \"ML\", \"GenAI\"]\n        self.status = \"building intelligent systems\"\n\n    def mission(self):\n        return \"Turn complex AI ideas into real products\"`;

export default function About() {
  return (
    <section id="about" className="section-wrap">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65 }}
      >
        <p className="eyebrow">About</p>
        <h2 className="section-title">Engineering AI Systems That Ship</h2>
      </motion.div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65 }}
          className="card overflow-hidden"
        >
          <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
            <span className="h-3 w-3 rounded-full bg-rose-400" />
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
            <p className="ml-3 text-xs uppercase tracking-[0.2em] text-slate-400">developer.py</p>
          </div>
          <pre className="overflow-x-auto p-5 text-sm leading-7 text-slate-200">
            <code>{codeSnippet}</code>
          </pre>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="space-y-5"
        >
          <p className="text-slate-300">
            I&apos;m a Computer Engineering student focused on building practical AI products that solve real-world problems.
            My work spans from model experimentation to production-ready deployment.
          </p>
          <p className="text-slate-300">
            I design robust ML pipelines, LLM-powered assistants, and intelligent backend services with an emphasis on reliability,
            performance, and clean architecture.
          </p>
          <p className="text-slate-300">
            I enjoy turning complex research concepts into usable software with delightful user experiences and measurable impact.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {badges.map((badge) => (
              <span key={badge} className="rounded-full border border-orange-300/35 bg-orange-300/10 px-3 py-1 text-xs text-orange-100">
                {badge}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
