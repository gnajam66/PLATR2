"use client";
import { motion } from "framer-motion";
import { CATEGORIES } from "@/lib/data";
import Link from "next/link";
import styles from "./Categories.module.css";

export default function Categories() {
  return (
    <section className={`section ${styles.section}`} id="categories">
      <div className="container">
        <span className="section-label">🎯 requirement categories</span>
        <h2 className="section-title">what are you looking for?</h2>
        <p className="section-desc">select a category to explore tailored packages built for your specific need.</p>

        <div className={styles.grid}>
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.id}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.175, 0.885, 0.32, 1.275] }}
              style={{ transform: `rotate(${(i % 3 - 1) * 1.2}deg)` }}
            >
              <div className={styles.icon}>{cat.icon}</div>
              <h3 className={styles.name}>{cat.name}</h3>
              <p className={styles.desc}>{cat.desc}</p>
              <Link
                href="/packages"
                className={`btn-brutal btn-brutal--purple ${styles.cta}`}
              >
                view packages →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
