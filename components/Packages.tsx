"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CATEGORIES, PACKAGES } from "@/lib/data";
import Link from "next/link";
import styles from "./Packages.module.css";

export default function Packages() {
  const [active, setActive] = useState("office-lunch");

  const handleRequest = (catName: string, pkgName: string) => {
    const msg = `Category: ${catName}\nPackage: ${pkgName}`;
    const url = `/contact?details=${encodeURIComponent(msg)}`;
    window.location.href = url;
  };

  const pkgs = PACKAGES[active] || [];

  return (
    <section className={`section ${styles.section}`} id="packages">
      <div className="container">
        <span className="section-label" style={{ background: "var(--black)", color: "var(--purple)", borderColor: "var(--purple)" }}>
          📦 packages
        </span>
        <h2 className="section-title" style={{ color: "var(--white)" }}>curated packages for every occasion</h2>
        <p className="section-desc" style={{ color: "rgba(255,255,255,0.6)" }}>
          transparent inclusions, indicative pricing — pick what fits and we&apos;ll tailor it further.
        </p>

        <div className={styles.tabs}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              data-cat={cat.id}
              className={`${styles.tab} ${active === cat.id ? styles.tabActive : ""}`}
              onClick={() => setActive(cat.id)}
            >
              {cat.icon} {cat.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className={styles.grid}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.175, 0.885, 0.32, 1.275] }}
          >
            {pkgs.length > 0 ? pkgs.map((pkg, i) => {
              const catName = CATEGORIES.find(c => c.id === active)?.name || active;
              return (
                <div
                  key={pkg.name}
                  className={`${styles.card} ${pkg.featured ? styles.cardFeatured : ""}`}
                  style={{ transform: `rotate(${(i - 1) * 1.2}deg)` }}
                >
                  {pkg.featured && <div className={styles.popular}>🔥 popular</div>}
                  <div className={styles.tier}>{pkg.tier}</div>
                  <h3 className={styles.pkgName}>{pkg.name}</h3>
                  <ul className={styles.list}>
                    {pkg.items.map((item) => (
                      <li key={item}>✓ {item}</li>
                    ))}
                  </ul>
                  <div className={styles.price}>
                    starting from <strong>{pkg.price}</strong>
                  </div>
                  <button
                    className={`btn-brutal ${pkg.featured ? "btn-brutal--purple" : "btn-brutal--black"} btn-wobble`}
                    onClick={() => handleRequest(catName, pkg.name)}
                  >
                    request this package
                  </button>
                </div>
              );
            }) : (
              <div className={styles.customCard}>
                <h3>have something specific in mind?</h3>
                <p>tell us your exact requirements — cuisine, headcount, budget, theme — and we&apos;ll craft a bespoke proposal within 24 hours.</p>
                <button
                  className="btn-brutal btn-brutal--purple btn-wobble"
                  onClick={() => handleRequest("custom requirement", "custom")}
                >
                  send custom inquiry →
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
