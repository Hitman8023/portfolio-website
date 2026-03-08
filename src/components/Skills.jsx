import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Programming",
    focus: "Core stack",
    skills: [
      "Python",
      "JavaScript",
      "TypeScript",
      "React"
    ],
  },
  {
    title: "AI / ML",
    focus: "Research + projects",
    skills: [
      "Machine Learning",
      "NLP",
      "Transformers",
      "PyTorch",
      "HuggingFace"
    ],
  },
  {
    title: "Frameworks",
    focus: "Product building",
    skills: [
      "React",
      "Node.js",
      "Flask",
      "FastAPI",
      "Firebase",
      "Tailwind CSS",
    ],
  },
  {
    title: "Tools",
    focus: "Workflow",
    skills: [
      "Git",
      "MongoDB",
      "PostgreSQL",
      "Redis",
    ],
  },
];

const tickerTech = [
  "Python",
  "JavaScript",
  "Node.js",
  "React",
  "Flask",
  "Firebase",
  "Machine Learning",
  "NLP",
  "Transformers",
  "Stable Diffusion",
  "Pandas",
  "Scikit-learn",
  "Neo4j",
  "PostgreSQL",
  "Redis",
  "LLMs",
  "OpenAI API",
  "Selenium",
  "BeautifulSoup",
  "TypeScript",
  "Git",
];

export default function Skills() {
  return (
    <section id="skills" className="section-wrap">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className="eyebrow">Skills</p>
        <h2 className="section-title">Tools I Build With</h2>
        <p className="mt-4 max-w-3xl text-slate-300">
          I&apos;m still growing as a developer, so this section highlights what I actively use and explore in projects
          rather than fixed proficiency scores.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, groupIndex) => (
          <motion.article
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: groupIndex * 0.08, duration: 0.55 }}
            className="card p-6"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-xl font-semibold text-orange-100">{group.title}</h3>
              <span className="rounded-full border border-orange-300/35 bg-orange-300/10 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-orange-200">
                {group.focus}
              </span>
            </div>

            <div className="mt-5 flex flex-wrap gap-2.5">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-sm text-slate-200"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-300" />
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5 py-4">
        <div className="ticker-track">
          {[...tickerTech, ...tickerTech].map((tech, index) => (
            <span key={`${tech}-${index}`} className="ticker-item">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
