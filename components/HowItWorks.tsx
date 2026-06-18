"use client";
import { motion } from "framer-motion";
import styles from "./HowItWorks.module.css";

const steps = [
  {
    num: "01",
    title: "Tell us what you need",
    desc: "Office lunch, boardroom, conference, event or a custom brief — in one place.",
    icon: "📋",
  },
  {
    num: "02",
    title: "Compare curated packages",
    desc: "Browse transparent, vetted options matched to your headcount and budget.",
    icon: "🍽️",
  },
  {
    num: "03",
    title: "Send one inquiry",
    desc: "Confirm your pick via a quick form or WhatsApp — no vendor hunting.",
    icon: "📨",
  },
  {
    num: "04",
    title: "We coordinate & deliver",
    desc: "Sourcing, menu, logistics and on-site execution, handled end-to-end.",
    icon: "🤝",
  },
];

export default function HowItWorks() {
  return (
    <section className={`section ${styles.section}`} id="how-it-works">
      <div className="container">
        <motion.span
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          ⚡ how it works
        </motion.span>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Four steps to seamless corporate dining
        </motion.h2>
        <motion.p
          className="section-desc"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          No back-and-forth with multiple vendors — just tell us what you need.
        </motion.p>

        <div className={styles.timeline}>
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              className={styles.step}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: i * 0.12,
                duration: 0.5,
                ease: [0.175, 0.885, 0.32, 1.275],
              }}
            >
              <div className={styles.stepLine}>
                <div className={styles.dot}>{s.icon}</div>
                {i < steps.length - 1 && <div className={styles.connector} />}
              </div>
              <div className={styles.card}>
                <div className={styles.num}>{s.num}</div>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.cardDesc}>{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
