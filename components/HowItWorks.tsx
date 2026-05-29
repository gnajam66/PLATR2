"use client";
import { motion } from "framer-motion";
import styles from "./HowItWorks.module.css";

const steps = [
  { num: "01", title: "choose your requirement", desc: "select from daily office meals, board meetings, corporate events, conferences, or custom needs.", icon: "📋" },
  { num: "02", title: "pick a package", desc: "browse curated packages with transparent inclusions and indicative pricing for your category.", icon: "📦" },
  { num: "03", title: "we handle the rest", desc: "from vendor coordination to on-ground execution — sit back while we deliver a flawless experience.", icon: "🚀" },
];

export default function HowItWorks() {
  return (
    <section className={`section ${styles.section}`} id="how-it-works">
      <div className="container">
        <span className="section-label">⚡ how it works</span>
        <h2 className="section-title">three steps to seamless corporate dining</h2>
        <p className="section-desc">no back-and-forth with multiple vendors. just tell us what you need.</p>

        <div className={styles.grid}>
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.5, ease: [0.175, 0.885, 0.32, 1.275] }}
              style={{ transform: `rotate(${i % 2 === 0 ? -1 : 1.5}deg)` }}
            >
              <div className={styles.num}>{s.num}</div>
              <div className={styles.emoji}>{s.icon}</div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
