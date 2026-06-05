"use client";
import { motion } from "framer-motion";
import styles from "./SocialProof.module.css";

const eventTypes = [
  "Office lunches",
  "Leadership meetings",
  "Townhalls",
  "Conferences",
  "Employee celebrations",
  "Product launches",
  "Team offsites",
  "Festive gifting",
];

export default function SocialProof() {
  return (
    <section className={`section ${styles.section}`} id="social-proof">
      <div className="container">
        <motion.span
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          🏢 built for
        </motion.span>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          built for every corporate food need
        </motion.h2>

        <motion.div
          className={styles.vendorCard}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className={styles.vendorIcon}>🌐</div>
          <div>
            <h3 className={styles.vendorTitle}>curated vendor network</h3>
            <p className={styles.vendorDesc}>
              Working with trusted catering partners across multiple cuisines and
              event formats.
            </p>
          </div>
        </motion.div>

        <div className={styles.tags}>
          {eventTypes.map((tag, i) => (
            <motion.span
              key={tag}
              className={styles.tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2 + i * 0.06,
                duration: 0.4,
                ease: [0.175, 0.885, 0.32, 1.275],
              }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
