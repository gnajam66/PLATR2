"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CATEGORIES, CATEGORY_IMAGES, PACKAGES, CONFIG } from "@/lib/data";
import styles from "./Categories.module.css";

type Cat = (typeof CATEGORIES)[number];

function CategoryImage({ cat }: { cat: Cat }) {
  const [failed, setFailed] = useState(false);
  const src = CATEGORY_IMAGES[cat.id];
  if (failed || !src) return <div className={styles.iconFallback}>{cat.icon}</div>;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={cat.name} className={styles.img} loading="lazy" onError={() => setFailed(true)} />
  );
}

function PackageDialog({ cat, onClose }: { cat: Cat; onClose: () => void }) {
  const pkgs = PACKAGES[cat.id] || [];
  const wa = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(
    `Hi PLATR, I'd like a quote for ${cat.name} catering.`
  )}`;
  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true" aria-label={`${cat.name} packages`}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose} aria-label="Close">×</button>

        <div className={styles.modalMedia}>
          <CategoryImage cat={cat} />
          <div className={styles.modalTitle}>
            <h3>{cat.name}</h3>
            <p>{cat.desc}</p>
          </div>
        </div>

        <div className={styles.modalBody}>
          {pkgs.length > 0 ? (
            <div className={styles.tiers}>
              {pkgs.map((p) => (
                <div key={p.name} className={`${styles.tier} ${p.featured ? styles.tierFeatured : ""}`}>
                  {p.featured && <span className={styles.pop}>★ popular</span>}
                  <div className={styles.tierHead}>
                    <h4>{p.name}</h4>
                    <span className={styles.price}>{p.price}</span>
                  </div>
                  <ul>
                    {p.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <p className={styles.custom}>
              Tell us your exact requirement — cuisine, headcount, budget, theme — and we&apos;ll
              craft a bespoke proposal within 24 hours.
            </p>
          )}

          <div className={styles.modalActions}>
            <Link href={`/contact?category=${encodeURIComponent(cat.name)}`} className="btn-brutal btn-brutal--purple" onClick={onClose}>
              Send inquiry →
            </Link>
            <a href={wa} className="btn-brutal btn-brutal--whatsapp" target="_blank" rel="noopener">
              WhatsApp us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Categories() {
  const [active, setActive] = useState<Cat | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setActive(null); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section className={`section ${styles.section}`} id="categories">
      <div className="container">
        <span className="section-label">🎯 requirement categories</span>
        <h2 className="section-title">What are you looking for?</h2>
        <p className="section-desc">Pick a category to see sample packages and pricing — then send your inquiry.</p>

        <div className={styles.grid}>
          {CATEGORIES.map((cat, i) => (
            <motion.button
              key={cat.id}
              type="button"
              className={styles.card}
              onClick={() => setActive(cat)}
              aria-haspopup="dialog"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={styles.media}>
                <CategoryImage cat={cat} />
              </div>
              <div className={styles.body}>
                <h3 className={styles.name}>{cat.name}</h3>
                <p className={styles.desc}>{cat.desc}</p>
                <span className={styles.cta}>View details →</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {active && <PackageDialog cat={active} onClose={() => setActive(null)} />}
    </section>
  );
}
