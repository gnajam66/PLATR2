"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./StickyNav.module.css";

const navItems = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "Categories", href: "/#categories" },
  { label: "Packages", href: "/#packages-preview" },
  { label: "Why PLATR", href: "/#why-platr" },
];

export default function StickyNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close the drawer on navigation
  useEffect(() => { setOpen(false); }, [pathname]);

  // only the homepage has a dark hero behind the bar — go transparent there
  const transparent = pathname === "/" && !scrolled && !open;

  return (
    <header className={`${styles.nav} ${transparent ? "" : styles.solid} ${open ? styles.menuOpen : ""}`}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo} aria-label="PLATR — home">
          <Image src="/logo.png" alt="PLATR" width={140} height={56} priority className={styles.logoImg} />
        </Link>

        <nav className={`${styles.links} ${open ? styles.linksOpen : ""}`}>
          {navItems.map((it) => (
            <Link key={it.href} href={it.href} className={styles.link} onClick={() => setOpen(false)}>
              {it.label}
            </Link>
          ))}
          <Link href="/contact" className={styles.cta} onClick={() => setOpen(false)}>
            Get a quote
          </Link>
        </nav>

        <button
          className={`${styles.burger} ${open ? styles.burgerActive : ""}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </div>

      {open && <div className={styles.overlay} onClick={() => setOpen(false)} aria-hidden="true" />}
    </header>
  );
}
