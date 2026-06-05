"use client";
import { motion } from "framer-motion";
import styles from "./Problem.module.css";

const problems = [
  {
    icon: "🔍",
    title: "finding vendors",
    desc: "Search Google, ask colleagues, compare menus, follow up endlessly.",
  },
  {
    icon: "📄",
    title: "managing quotations",
    desc: "Different formats, unclear pricing, inconsistent communication.",
  },
  {
    icon: "⚙️",
    title: "coordinating execution",
    desc: "Last-minute issues, delivery delays, vendor management headaches.",
  },
];

export default function Problem() {
  return (
    <section className={`section ${styles.section}`} id="problem">
      <div className="container">
        <motion.span
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          😤 the problem
        </motion.span>
        <motion.h2
          className={`section-title ${styles.heading}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          corporate catering shouldn&apos;t require{" "}
          <span className={styles.highlight}>20 phone calls.</span>
        </motion.h2>

        <div className={styles.grid}>
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: i * 0.12,
                duration: 0.5,
                ease: [0.175, 0.885, 0.32, 1.275],
              }}
              style={{ transform: `rotate(${(i - 1) * 1.5}deg)` }}
            >
              <div className={styles.icon}>{p.icon}</div>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardDesc}>{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className={styles.bottom}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <strong>PLATR</strong> eliminates the chaos by giving companies a
          single place to request and manage food requirements.
        </motion.p>
      </div>
    </section>
  );
}
