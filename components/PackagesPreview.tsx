"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./PackagesPreview.module.css";

const packages = [
  { name: "essential", suitableFor: "Daily office meals", price: "₹180/pax" },
  { name: "premium", suitableFor: "Team lunches & meetings", price: "₹320/pax" },
  { name: "signature", suitableFor: "Events & celebrations", price: "₹500/pax" },
];

export default function PackagesPreview() {
  return (
    <section className={`section ${styles.section}`} id="packages-preview">
      <div className="container">
        <motion.span
          className="section-label"
          style={{
            background: "var(--black)",
            color: "var(--purple)",
            borderColor: "var(--purple)",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          📦 packages
        </motion.span>
        <motion.h2
          className="section-title"
          style={{ color: "var(--white)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          transparent pricing, no surprises
        </motion.h2>
        <motion.p
          className="section-desc"
          style={{ color: "rgba(255,255,255,0.6)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          indicative starting prices — we tailor everything to your exact need.
        </motion.p>

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
                <th>package</th>
                <th>suitable for</th>
                <th>starting from</th>
              </tr>
            </thead>
            <tbody>
              {packages.map((pkg, i) => (
                <tr
                  key={pkg.name}
                  className={i === 1 ? styles.featured : ""}
                >
                  <td className={styles.pkgName}>
                    {i === 1 && <span className={styles.badge}>🔥 popular</span>}
                    {pkg.name}
                  </td>
                  <td>{pkg.suitableFor}</td>
                  <td className={styles.price}>{pkg.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div
          className={styles.actions}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/packages"
            className="btn-brutal btn-brutal--purple btn-wobble"
          >
            view all packages →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
