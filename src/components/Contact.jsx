import { motion } from "framer-motion";

const contactCards = [
  {
    label: "Email",
    value: "nishchaltendulkar104@gmail.com",
    href: "mailto:nishchaltendulkar104@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "www.linkedin.com/in/nishchal-tendulkar-123abc",
    href: "https://www.linkedin.com/in/nishchal-tendulkar-123abc",
  },
  {
    label: "GitHub",
    value: "https://github.com/Hitman8023",
    href: "https://github.com/Hitman8023",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-wrap">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className="eyebrow">Contact</p>
        <h2 className="section-title">Let&apos;s Build Something Intelligent</h2>
      </motion.div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          className="space-y-4"
        >
          {contactCards.map((card) => (
            <a
              key={card.label}
              href={card.href}
              target={card.href.startsWith("http") ? "_blank" : undefined}
              rel={card.href.startsWith("http") ? "noreferrer" : undefined}
              className="card block p-5 transition hover:border-orange-300/40"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400">{card.label}</p>
              <p className="mt-2 text-lg text-orange-100">{card.value}</p>
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          className="card p-6"
        >
          <form action="https://formsubmit.co/acdaede463e713a02c60b6512529227d" method="POST" className="space-y-4">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="Portfolio Contact Message" />
            <input name="name" type="text" placeholder="Name" className="input" required />
            <input name="email" type="email" placeholder="Email" className="input" required />
            <input name="subject" type="text" placeholder="Subject" className="input" required />
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              className="input resize-none"
              required
            />
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} type="submit" className="btn-primary w-full">
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
