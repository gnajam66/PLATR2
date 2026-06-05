"use client";
import { motion } from "framer-motion";
import styles from "./HowItWorks.module.css";

const steps = [
  {
    num: "01",
    title: "tell us what you need",
    desc: "Office lunch, board meeting, event, conference or custom requirement.",
    icon: "📋",
  },
  {
    num: "02",
    title: "choose a package",
    desc: "Select the option closest to your budget and requirement.",
    icon: "🎯",
  },
  {
    num: "03",
    title: "send inquiry",
    desc: "Fill in a simple form or WhatsApp us.",
    icon: "📨",
  },
  {
    num: "04",
    title: "we coordinate everything",
    desc: "Vendor sourcing, menu planning, logistics and execution.",
    icon: "🤝",
  },
  {
    num: "05",
    title: "enjoy the event",
    desc: "You focus on your team. We handle the food.",
    icon: "🍽️",
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
          five steps to seamless corporate dining
        </motion.h2>
        <motion.p
          className="section-desc"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          no back-and-forth with multiple vendors. just tell us what you need.
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
