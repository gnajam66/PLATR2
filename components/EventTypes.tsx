"use client";
import { motion } from "framer-motion";
import styles from "./EventTypes.module.css";

const events = [
  { icon: "🍱", title: "office lunches", sub: "Daily meals" },
  { icon: "☕", title: "board meetings", sub: "Executive catering" },
  { icon: "🎤", title: "conferences", sub: "Large attendee catering" },
  { icon: "🏕️", title: "team offsites", sub: "Food coordination" },
  { icon: "✨", title: "festive celebrations", sub: "Special occasions" },
  { icon: "🚀", title: "product launches", sub: "Corporate events" },
];

export default function EventTypes() {
  return (
    <section className={`section ${styles.section}`} id="event-types">
      <div className="container">
        <motion.span
          className="section-label"
          style={{
            background: "var(--black)",
            color: "var(--purple)",
            borderColor: "var(--purple)",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          🎪 event types
        </motion.span>
        <motion.h2
          className="section-title"
          style={{ color: "var(--white)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          events we handle
        </motion.h2>

        <div className={styles.grid}>
          {events.map((e, i) => (
            <motion.div
              key={e.title}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: i * 0.08,
                duration: 0.5,
                ease: [0.175, 0.885, 0.32, 1.275],
              }}
              style={{ transform: `rotate(${(i % 3 - 1) * 1.5}deg)` }}
            >
              <div className={styles.icon}>{e.icon}</div>
              <h3 className={styles.title}>{e.title}</h3>
              <p className={styles.sub}>{e.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
