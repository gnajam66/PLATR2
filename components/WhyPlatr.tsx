"use client";
import { motion } from "framer-motion";
import styles from "./WhyPlatr.module.css";

const reasons = [
  {
    icon: "📞",
    title: "one point of contact",
    desc: "No need to coordinate with multiple caterers.",
  },
  {
    icon: "🌐",
    title: "curated vendor network",
    desc: "Access trusted vendors for different budgets and requirements.",
  },
  {
    icon: "⚡",
    title: "faster procurement",
    desc: "Submit one inquiry and receive relevant options.",
  },
  {
    icon: "🎯",
    title: "tailored packages",
    desc: "From 20 pax lunches to 2000+ attendee events.",
  },
  {
    icon: "💰",
    title: "transparent pricing",
    desc: "Clear package structure with no surprises.",
  },
  {
    icon: "🤝",
    title: "end-to-end execution",
    desc: "We coordinate vendors so your team doesn\u2019t have to.",
  },
];

export default function WhyPlatr() {
  return (
    <section className={`section ${styles.section}`} id="why-platr">
      <div className="container">
        <motion.span
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          💡 why us
        </motion.span>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          why companies choose{" "}
          <span style={{ color: "var(--purple)" }}>PLATR</span>
        </motion.h2>
        <motion.p
          className="section-desc"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          everything you need to simplify corporate food, in one place.
        </motion.p>

        <div className={styles.grid}>
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: i * 0.08,
                duration: 0.5,
                ease: [0.175, 0.885, 0.32, 1.275],
              }}
              style={{ transform: `rotate(${(i % 3 - 1) * 1.2}deg)` }}
            >
              <div className={styles.icon}>{r.icon}</div>
              <h3 className={styles.cardTitle}>{r.title}</h3>
              <p className={styles.cardDesc}>{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
