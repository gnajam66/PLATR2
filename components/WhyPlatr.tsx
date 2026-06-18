"use client";
import { motion } from "framer-motion";
import styles from "./WhyPlatr.module.css";

const reasons = [
  {
    icon: "📞",
    title: "One point of contact",
    desc: "One inquiry replaces calls to a dozen caterers.",
  },
  {
    icon: "🌐",
    title: "Curated vendor network",
    desc: "Vetted partners across cuisines, budgets and event formats.",
  },
  {
    icon: "💰",
    title: "Transparent pricing",
    desc: "Clear per-person packages, with no surprise line items.",
  },
  {
    icon: "🤝",
    title: "End-to-end execution",
    desc: "Sourcing, menus, logistics and on-site delivery — all handled.",
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
          Why companies choose{" "}
          <span style={{ color: "var(--terracotta)" }}>PLATR</span>
        </motion.h2>
        <motion.p
          className="section-desc"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Everything you need to simplify corporate food, in one place.
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
                ease: [0.22, 1, 0.36, 1],
              }}
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
