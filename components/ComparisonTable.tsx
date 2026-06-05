"use client";
import { motion } from "framer-motion";
import styles from "./ComparisonTable.module.css";

const rows = [
  { traditional: "Search multiple vendors", platr: "One platform" },
  { traditional: "Multiple calls", platr: "Single inquiry" },
  { traditional: "Compare manually", platr: "Curated options" },
  { traditional: "Coordinate execution", platr: "We manage it" },
  { traditional: "Follow-ups everywhere", platr: "One point of contact" },
];

export default function ComparisonTable() {
  return (
    <section className={`section ${styles.section}`} id="comparison">
      <div className="container">
        <motion.span
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          ⚔️ compare
        </motion.span>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          traditional way vs{" "}
          <span style={{ color: "var(--purple)" }}>PLATR</span>
        </motion.h2>

        <motion.div
          className={styles.tableWrap}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.thTraditional}>❌ traditional</th>
                <th className={styles.thPlatr}>✅ PLATR</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.traditional}>
                  <td className={styles.tdTraditional}>{row.traditional}</td>
                  <td className={styles.tdPlatr}>{row.platr}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
