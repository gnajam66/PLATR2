"use client";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import Carousel from "./Carousel";
import { CATEGORIES, STATS, CONFIG } from "@/lib/data";

const FOOD_ITEMS = [
  { id: 1, title: "Office lunch buffet", description: "Daily curated meals for teams of any size.", image: "/images/carousel-1.png" },
  { id: 2, title: "Boardroom catering", description: "Premium platters that match your standard.", image: "/images/carousel-2.png" },
  { id: 3, title: "Corporate events", description: "Large-scale setups with live food counters.", image: "/images/carousel-3.png" },
  { id: 4, title: "Packaged meals", description: "Eco-friendly individual boxes, delivered fresh.", image: "/images/carousel-4.png" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

const WHATSAPP_URL = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(
  "Hi PLATR, I'd like to know more about your corporate catering."
)}`;

export default function Hero() {
  const router = useRouter();
  const [cat, setCat] = useState<string>(CATEGORIES[0].id);
  const [pax, setPax] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({ cat });
    if (pax) params.set("pax", pax);
    if (date) params.set("date", date);
    router.push(`/packages?${params.toString()}`);
  };

  return (
    <section className={styles.hero} id="top">
      <div className={styles.glowA} />
      <div className={styles.glowB} />

      <div className={`container ${styles.inner}`}>
        <motion.div className={styles.left} initial="hidden" animate="visible">
          <motion.span className={styles.badge} custom={0} variants={fadeUp}>
            Premium corporate catering, simplified
          </motion.span>

          <motion.h1 className={styles.headline} custom={1} variants={fadeUp}>
            Corporate catering,{" "}
            <span className={styles.accent}>sorted</span> in one inquiry.
          </motion.h1>

          <motion.p className={styles.sub} custom={2} variants={fadeUp}>
            Discover, compare and book vetted caterers for daily office lunches,
            boardrooms and large-scale events — without chasing a single vendor.
          </motion.p>

          <motion.form className={styles.selector} custom={3} variants={fadeUp} onSubmit={handleSubmit}>
            <div className={styles.selectorField}>
              <label htmlFor="hero-cat">What do you need?</label>
              <select id="hero-cat" value={cat} onChange={(e) => setCat(e.target.value)}>
                {CATEGORIES.map((c) => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>
            <div className={styles.selectorField}>
              <label htmlFor="hero-pax">Headcount</label>
              <input id="hero-pax" type="number" min="1" inputMode="numeric" placeholder="e.g. 50" value={pax} onChange={(e) => setPax(e.target.value)} />
            </div>
            <div className={styles.selectorField}>
              <label htmlFor="hero-date">Date</label>
              <input id="hero-date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <button type="submit" className={styles.selectorBtn}>
              Get packages →
            </button>
          </motion.form>

          <motion.div className={styles.actions} custom={4} variants={fadeUp}>
            <Link href="/contact" className="btn-brutal btn-brutal--black">
              Get a quote
            </Link>
            <a href={WHATSAPP_URL} className="btn-brutal btn-brutal--whatsapp" target="_blank" rel="noopener">
              WhatsApp us
            </a>
          </motion.div>

          <motion.div className={styles.trust} custom={5} variants={fadeUp}>
            {STATS.map((s) => (
              <div key={s.label} className={styles.trustItem}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.right}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.carouselWrap}>
            <Carousel
              items={FOOD_ITEMS}
              baseWidth={560}
              autoplay={true}
              autoplayDelay={3500}
              pauseOnHover={true}
              loop={true}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
