"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./WhyPlatr.module.css";

const reasons = [
  { icon: "📞", image: "/images/one-point-of-contact.png", title: "One point of contact", desc: "One inquiry replaces calls to a dozen caterers." },
  { icon: "🌐", image: "/images/curated-vendor-network.png", title: "Curated vendor network", desc: "Vetted partners across cuisines, budgets and event formats." },
  { icon: "💰", image: "/images/transparent-pricing.png", title: "Transparent pricing", desc: "Clear per-person packages, with no surprise line items." },
  { icon: "🤝", image: "/images/end-to-end-execution.png", title: "End-to-end execution", desc: "Sourcing, menus, logistics and on-site delivery — all handled." },
];

function ReasonImage({ image, title, icon }: { image: string; title: string; icon: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <div className={styles.iconFallback}>{icon}</div>;
  return (
    <Image
      src={image}
      alt={title}
      fill
      sizes="(max-width: 480px) 100vw, (max-width: 900px) 50vw, 280px"
      className={styles.cardImage}
      onError={() => setFailed(true)}
    />
  );
}

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
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={styles.imageContainer}>
                <ReasonImage image={r.image} title={r.title} icon={r.icon} />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{r.title}</h3>
                <p className={styles.cardDesc}>{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
