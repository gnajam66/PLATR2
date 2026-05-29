"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./StickyNav.module.css";
import GooeyNav from "./GooeyNav";

const navItems = [
  { label: "how it works", href: "#how-it-works" },
  { label: "categories", href: "#categories" },
  { label: "packages", href: "#packages" },
  { label: "contact", href: "#contact" },
];

export default function StickyNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (_index: number, href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <a href="#top" className={styles.logo}>
          <Image src="/logo.png" alt="PLATR" width={140} height={56} priority />
        </a>

        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="toggle menu"
        >
          <span /><span /><span />
        </button>

        <div className={`${styles.links} ${menuOpen ? styles.linksOpen : ""}`}>
          <GooeyNav
            items={navItems}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
            onItemClick={handleNavClick}
          />
          <a
            href="#inquiry"
            className="btn-brutal btn-brutal--acid"
            style={{ fontSize: "0.85rem", padding: "0.6rem 1.25rem" }}
            onClick={() => setMenuOpen(false)}
          >
            send inquiry
          </a>
        </div>
      </div>
    </header>
  );
}
