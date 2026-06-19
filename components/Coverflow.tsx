"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { OPERATIONS } from "@/lib/data";
import styles from "./Coverflow.module.css";

const SPRING = { type: "spring" as const, stiffness: 250, damping: 30 };

export default function Coverflow() {
  const slides = OPERATIONS;
  const n = slides.length;
  const [active, setActive] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const [dim, setDim] = useState({ slideW: 0, slideH: 0, step: 0, center: 0 });

  // previous active (committed) — used to teleport the wrapping slide across the seam
  const prevRef = useRef(active);
  const prevActive = prevRef.current;
  useEffect(() => { prevRef.current = active; }, [active]);

  useEffect(() => {
    const measure = () => {
      const w = stageRef.current?.clientWidth ?? 0;
      if (!w) return;
      // use more of the width on small screens so the active slide reads well
      const frac = w < 560 ? 0.82 : 0.6;
      const slideW = Math.min(440, Math.max(230, w * frac));
      const slideH = Math.round(slideW * 0.7);
      setDim({ slideW, slideH, step: slideW * (w < 560 ? 0.46 : 0.52), center: (w - slideW) / 2 });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // shortest circular distance from active, in range (-n/2, n/2]
  const circ = (d: number) => {
    let m = ((d % n) + n) % n;
    if (m > n / 2) m -= n;
    return m;
  };
  const go = (dir: number) => setActive((a) => ((a + dir) % n + n) % n);

  return (
    <div
      className={styles.wrap}
      tabIndex={0}
      role="group"
      aria-label="Operations gallery"
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") go(-1);
        if (e.key === "ArrowRight") go(1);
      }}
    >
      <div className={styles.stage} ref={stageRef} style={dim.slideH ? { height: dim.slideH } : undefined}>
        <motion.div
          className={styles.track}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.16}
          onDragEnd={(_, info) => {
            if (info.offset.x < -55 || info.velocity.x < -380) go(1);
            else if (info.offset.x > 55 || info.velocity.x > 380) go(-1);
          }}
        >
          {slides.map((s, i) => {
            const offset = circ(i - active);
            const prevOffset = circ(i - prevActive);
            const abs = Math.abs(offset);
            // a slide "wraps" when it jumps between the far edges (e.g. -2 -> +2):
            // snap it instantly so it reappears on the other side instead of flying across
            const wrapped =
              abs >= 2 && Math.abs(prevOffset) >= 2 && Math.sign(offset) !== Math.sign(prevOffset);
            return (
              <motion.figure
                key={s.label}
                className={`${styles.slide} ${offset === 0 ? styles.slideActive : ""}`}
                onClick={() => offset !== 0 && setActive(i)}
                style={{ width: dim.slideW || "60%", height: dim.slideH || "100%" }}
                animate={{
                  x: dim.center + offset * dim.step,
                  rotateY: -offset * 38,
                  scale: Math.max(0.62, 1 - abs * 0.16),
                  z: -abs * 150,
                  opacity: Math.max(0, 1 - abs * 0.34),
                  zIndex: 100 - abs,
                }}
                transition={wrapped ? { duration: 0 } : SPRING}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.image} alt={s.label} className={styles.img} draggable={false} />
                <figcaption className={styles.caption}>
                  <strong>{s.label}</strong>
                  <span>{s.sub}</span>
                </figcaption>
              </motion.figure>
            );
          })}
        </motion.div>
      </div>

      <div className={styles.controls}>
        <button className={styles.arrow} onClick={() => go(-1)} aria-label="Previous slide">‹</button>
        <div className={styles.dots}>
          {slides.map((s, i) => (
            <button
              key={s.label}
              className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
              onClick={() => setActive(i)}
              aria-label={`Show ${s.label}`}
              aria-current={i === active}
            />
          ))}
        </div>
        <button className={styles.arrow} onClick={() => go(1)} aria-label="Next slide">›</button>
      </div>
    </div>
  );
}
