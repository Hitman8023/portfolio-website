import { motion } from "framer-motion";

const projects = [
  {
    category: "Security Platform",
    title: "BugHuntr",
    description:
      "BugHuntr is a full-stack bug bounty platform that connects security researchers with companies to identify and report vulnerabilities. The system includes secure report submission, company dashboards for vulnerability triage, and leaderboards to recognize top researchers.",
    stack: ["Python", "Flask", "TypeScript", "Firebase"],
    stats: ["Automated triage workflow with severity tagging", "Automated triage workflow with severity tagging", "REST APIs handling concurrent report submissions"],
    github: "https://github.com/Hitman8023/BugHuntr",
  },
  {
    category: "Agentic AI",
    title: "AI System Orchestrator",
    description:
      "A desktop AI assistant that orchestrates multiple tools to automate everyday tasks such as file operations, web searches, scheduling, and content generation.The system integrates LLM APIs for conversational control and supports specialized tools like blueprint generation using the DALL·E API.",
    stack: ["Python", "Electron.js", "Flask", "Redis", "OpenAI API"],
    stats: ["Multi-tool AI orchestration system", "Local automation through natural language commands", "AI-powered blueprint generation from design prompts"],
    github: "https://github.com/Hitman8023/AI-System-Orchestrator",
  },
  {
    category: "Machine Learning",
    title: "Fraud Detection System",
    description:
      "A machine learning system designed to detect suspicious banking transactions using anomaly detection and graph-based analysis. The project focuses on identifying fraud patterns across accounts and transaction networks.",
    stack: ["Python", "Kafka", "PostgreSQL", "Neo4j", "PyTorch", "GNN", "FastAPI", "TypeScript"],
    status: "In Progress",
    note: "Impact metrics and repository access will be published after validation benchmarking and production hardening.",
  },
  {
    category: "Data Pipeline",
    title: "CQC Webscraper",
    description:
      "An automated web scraping pipeline that extracts Care Quality Commission (CQC) service data across North East London. The system asynchronously crawls provider pages, collects service metadata, and produces structured datasets for analysis.",
    stack: ["Python", "Selenium", "BeautifulSoup", "Pandas"],
    stats: ["10K+ CQC service records scraped", "Async scraping pipeline using aiohttp + BeautifulSoup", "65% reduction in manual data prep","Automated dataset generation with pandas"],
    github: "https://github.com/Hitman8023/CQC-Webscraper",
  },
];

const parent = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.16 },
  },
};

const child = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

export default function Projects() {
  return (
    <section id="projects" className="section-wrap" style={{ maxWidth: "1480px" }}>
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className="eyebrow">Projects</p>
        <h2 className="section-title">Featured Work</h2>
      </motion.div>

      <motion.div
        variants={parent}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="mt-14 grid gap-8 2xl:grid-cols-2 2xl:gap-10"
      >
        {projects.map((project) => (
          <motion.article key={project.title} variants={child} whileHover={{ y: -8, scale: 1.01 }} className="card group p-7 md:p-8">
            <p className="mb-3 inline-flex rounded-full border border-orange-300/35 bg-orange-400/10 px-3 py-1 text-xs uppercase tracking-[0.18em] text-orange-200">
              {project.category}
            </p>
            <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
            {project.status && (
              <p className="mt-3 inline-flex w-fit rounded-full border border-amber-300/35 bg-amber-400/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-amber-200">
                {project.status}
              </p>
            )}
            <p className="mt-3 text-slate-300 leading-relaxed">{project.description}</p>

            {project.stats?.length > 0 ? (
              <div className="mt-4">
                <p className="mb-2 text-[11px] uppercase tracking-[0.18em] text-emerald-300/90">Impact</p>
                <div className="flex flex-wrap gap-2">
                  {project.stats.map((stat, index) => (
                    <span
                      key={`${project.title}-${index}`}
                      className="rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-200"
                    >
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              project.note && (
                <p className="mt-4 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300">{project.note}</p>
              )
            )}

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300 ring-1 ring-white/10">
                  {item}
                </span>
              ))}
            </div>

            {project.github ? (
              <div className="mt-7 flex gap-3">
                <a className="btn-primary" href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            ) : (
              <p className="mt-7 text-xs text-slate-400">GitHub link will be shared once this build reaches production readiness.</p>
            )}
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
