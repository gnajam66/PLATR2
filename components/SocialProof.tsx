"use client";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/data";
import styles from "./SocialProof.module.css";

export default function SocialProof() {
  return (
    <section className={`section ${styles.section}`} id="social-proof">
      <div className="container">
        <span className="section-label">★ social proof</span>
        <h2 className="section-title">Teams that stopped chasing caterers.</h2>
        <p className="section-desc">
          What the people running corporate food at scale say about working with PLATR.
        </p>

        <div className={styles.grid}>
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={`${t.company}-${i}`}
              className={styles.card}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={styles.stars} aria-label="5 out of 5 stars">★★★★★</div>
              <blockquote className={styles.quote}>&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className={styles.person}>
                <span className={styles.avatar} aria-hidden="true">{t.company.charAt(0)}</span>
                <span className={styles.who}>
                  <strong>{t.name}</strong>
                  <em>{t.role}, {t.company}</em>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
