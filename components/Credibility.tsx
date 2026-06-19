"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CLIENTS, OPERATIONS } from "@/lib/data";
import styles from "./Credibility.module.css";

function ClientLogo({ name, logo }: { name: string; logo: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <span className={styles.clientText}>{name}</span>;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={logo}
      alt={name}
      className={styles.clientLogo}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

export default function Credibility() {
  return (
    <section className={styles.section} id="execution" aria-label="Built on real execution">
      <div className="container">
        <div className={styles.head}>
          <span className="section-label">★ proven at scale</span>
          <h2 className={styles.title}>Built on Real Execution</h2>
          <span className={styles.divider} aria-hidden="true" />
        </div>

        {/* credibility statement */}
        <motion.div
          className={styles.statement}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className={styles.statementLead}>Real events, real scale — fully managed.</p>
          <p className={styles.statementSub}>
            From daily office meals to multi-day international conferences, PLATR sources,
            coordinates and executes corporate food end-to-end — so your team never chases a vendor.
          </p>
        </motion.div>

        {/* enterprise operations imagery */}
        <div className={styles.ops}>
          {OPERATIONS.map((o, i) => (
            <motion.div
              key={o.label}
              className={styles.op}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={styles.opMedia}>
                <Image src={o.image} alt={o.label} fill sizes="(max-width: 768px) 100vw, 360px" />
              </div>
              <div className={styles.opBody}>
                <h3>{o.label}</h3>
                <p>{o.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* client names */}
        <div className={styles.clients}>
          <span className={styles.clientsLabel}>Trusted by leading institutions &amp; enterprises</span>
          <div className={styles.clientRow}>
            {CLIENTS.map((c) => (
              <ClientLogo key={c.name} name={c.name} logo={c.logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
