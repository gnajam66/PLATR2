"use client";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import FloatingSticker from "./FloatingSticker";
import Waves from "./Waves";
import Carousel from "./Carousel";

const FOOD_ITEMS = [
  { id: 1, title: "office lunch buffet", description: "daily curated meals for teams of any size.", image: "/images/carousel-1.png" },
  { id: 2, title: "boardroom catering", description: "premium platters that match your standard.", image: "/images/carousel-2.png" },
  { id: 3, title: "corporate events", description: "large-scale setups with live food counters.", image: "/images/carousel-3.png" },
  { id: 4, title: "packaged meals", description: "eco-friendly individual boxes, delivered fresh.", image: "/images/carousel-4.png" },
];

const bounceUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.175, 0.885, 0.32, 1.275] as [number, number, number, number] },
  }),
};

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      {/* decorative blurred circles */}
      <div className={styles.blob1} />
      <div className={styles.blob2} />

      {/* interactive wave animation */}
      <Waves
        lineColor="#5227FF"
        backgroundColor="transparent"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      />

      <div className={`container ${styles.inner}`}>
        <motion.div
          className={styles.left}
          initial="hidden"
          animate="visible"
        >
          <motion.span className={styles.badge} custom={0} variants={bounceUp}>
            🍽️ premium corporate catering
          </motion.span>
          <motion.h1 className={styles.headline} custom={1} variants={bounceUp}>
            corporate food,{" "}
            <span className={styles.gradient}>sorted</span> from one place.
          </motion.h1>
          <motion.p className={styles.sub} custom={2} variants={bounceUp}>
            from daily office lunches to large-scale corporate events — PLATR handles
            vendor coordination, menu curation, and flawless execution so you don&apos;t have to.
          </motion.p>
          <motion.div className={styles.actions} custom={3} variants={bounceUp}>
            <a href="#inquiry" className="btn-brutal btn-brutal--black btn-wobble">
              send an inquiry →
            </a>
            <a
              href="https://wa.me/917021266095?text=Hi%20PLATR%2C%20I%27d%20like%20to%20know%20more."
              className="btn-brutal btn-brutal--whatsapp btn-wobble"
              target="_blank"
              rel="noopener"
            >
              💬 whatsapp us
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.right}
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 2 }}
          transition={{ delay: 0.3, duration: 0.7, ease: [0.175, 0.885, 0.32, 1.275] }}
        >
          <div className={styles.carouselWrap}>
            <Carousel
              items={FOOD_ITEMS}
              baseWidth={560}
              autoplay={true}
              autoplayDelay={3000}
              pauseOnHover={true}
              loop={true}
            />
          </div>
          <FloatingSticker emoji="🍱" top="5%" right="-8%" delay={0} size={52} />
          <FloatingSticker emoji="⭐" bottom="10%" left="-6%" delay={1.5} size={44} />
          <FloatingSticker emoji="🔥" top="40%" right="-12%" delay={3} size={40} />
        </motion.div>
      </div>
    </section>
  );
}
