"use client";
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { CONFIG } from "@/lib/data";
import styles from "./InquiryForm.module.css";

export default function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const validate = (form: HTMLFormElement) => {
    const errs: Record<string, boolean> = {};
    const fields = ["name", "company", "pax", "date", "location"];
    fields.forEach((f) => {
      const el = form.elements.namedItem(f) as HTMLInputElement;
      if (!el?.value.trim()) errs[f] = true;
    });
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!validate(form)) return;

    const fd = new FormData(form);
    const d = Object.fromEntries(fd) as Record<string, string>;
    const msg = [
      `📋 *New Inquiry via ${CONFIG.brand}*`, "",
      `👤 *Name:* ${d.name}`, `🏢 *Company:* ${d.company}`,
      `👥 *Pax:* ${d.pax}`, `📅 *Date:* ${d.date}`,
      `📍 *Location:* ${d.location}`, `📝 *Category:* ${d.category || "not specified"}`,
      "", `*Details:*`, d.details || "no additional details.", "", "— sent from platr.in",
    ].join("\n");

    const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    setSubmitted(true);
  };

  return (
    <section className={`section ${styles.section}`} id="inquiry">
      <div className="container">
        <span className="section-label" style={{ background: "var(--purple)", color: "var(--white)", borderColor: "var(--black)" }}>
          ✉️ get started
        </span>
        <h2 className="section-title" style={{ color: "var(--white)" }}>send us your requirement</h2>
        <p className="section-desc" style={{ color: "rgba(255,255,255,0.5)" }}>
          fill in the details and we&apos;ll reach out within 2 hours on business days.
        </p>

        {!submitted ? (
          <motion.form
            className={styles.form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            noValidate
          >
            <div className={styles.row}>
              <div className={`${styles.field} ${errors.name ? styles.fieldError : ""}`}>
                <label htmlFor="form-name">your name *</label>
                <input type="text" id="form-name" name="name" placeholder="jane doe" required onChange={() => setErrors(e => ({...e, name: false}))} />
              </div>
              <div className={`${styles.field} ${errors.company ? styles.fieldError : ""}`}>
                <label htmlFor="form-company">company name *</label>
                <input type="text" id="form-company" name="company" placeholder="acme corp" required onChange={() => setErrors(e => ({...e, company: false}))} />
              </div>
            </div>
            <div className={styles.row}>
              <div className={`${styles.field} ${errors.pax ? styles.fieldError : ""}`}>
                <label htmlFor="form-pax">number of pax *</label>
                <input type="number" id="form-pax" name="pax" placeholder="50" min="1" required onChange={() => setErrors(e => ({...e, pax: false}))} />
              </div>
              <div className={`${styles.field} ${errors.date ? styles.fieldError : ""}`}>
                <label htmlFor="form-date">preferred date *</label>
                <input type="date" id="form-date" name="date" required onChange={() => setErrors(e => ({...e, date: false}))} />
              </div>
            </div>
            <div className={`${styles.field} ${errors.location ? styles.fieldError : ""}`}>
              <label htmlFor="form-location">delivery location *</label>
              <input type="text" id="form-location" name="location" placeholder="office address or venue" required onChange={() => setErrors(e => ({...e, location: false}))} />
            </div>
            <input type="hidden" id="form-category" name="category" />
            <div className={styles.field}>
              <label htmlFor="form-details">requirement details</label>
              <textarea id="form-details" name="details" placeholder="tell us about your preferences — cuisine, dietary needs, budget..." rows={4} />
            </div>
            <div className={styles.actions}>
              <button type="submit" className="btn-brutal btn-brutal--whatsapp btn-wobble" style={{ fontSize: "1rem", padding: "1rem 2rem" }}>
                💬 send via whatsapp
              </button>
              <a
                href={`mailto:${CONFIG.email}`}
                className="btn-brutal btn-brutal--white"
                style={{ fontSize: "0.9rem" }}
              >
                ✉️ or email us
              </a>
            </div>
          </motion.form>
        ) : (
          <motion.div
            className={styles.success}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
          >
            <div className={styles.successEmoji}>✅</div>
            <h3>inquiry sent!</h3>
            <p>your whatsapp message has been prepared. we&apos;ll get back to you within 2 hours.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
