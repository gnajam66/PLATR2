"use client";
import { useState, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { CONFIG, CATEGORIES } from "@/lib/data";
import styles from "./Hero.module.css";

const PAX = ["Up to 25", "25–100", "100–500", "500+"];

export default function Hero() {
  const [submitted, setSubmitted] = useState(false);
  const [err, setErr] = useState<Record<string, boolean>>({});
  const [cat, setCat] = useState<string>(CATEGORIES[0].id);
  const [pax, setPax] = useState("");
  const [date, setDate] = useState("");
  const [company, setCompany] = useState("");
  const [contact, setContact] = useState("");

  const clear = (k: string) => setErr((e) => ({ ...e, [k]: false }));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errs: Record<string, boolean> = {};
    if (!pax) errs.pax = true;
    if (!date) errs.date = true;
    if (!company.trim()) errs.company = true;
    if (!contact.trim()) errs.contact = true;
    setErr(errs);
    if (Object.keys(errs).length) return;

    const catName = CATEGORIES.find((c) => c.id === cat)?.name ?? cat;
    const msg = [
      `📋 New catering inquiry via ${CONFIG.brand}`, "",
      `• Requirement: ${catName}`,
      `• Guests: ${pax}`,
      `• Event date: ${date}`,
      `• Company: ${company}`,
      `• Contact: ${contact}`,
      "", "— sent from platr.in",
    ].join("\n");
    window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section className={styles.hero} id="top">
      <Image src="/images/corporate-event.png" alt="" fill priority sizes="100vw" className={styles.bg} />
      <div className={styles.overlay} />

      <div className={`container ${styles.inner}`}>
        {/* supporting copy */}
        <div className={styles.copy}>
          <span className={styles.eyebrow}>Corporate catering procurement, simplified</span>
          <h1 className={styles.headline}>
            Source, compare &amp; book corporate catering in{" "}
            <span className={styles.accent}>one inquiry</span>.
          </h1>
          <p className={styles.sub}>
            Tell us your requirement once. We coordinate vetted caterers, transparent
            per-head pricing and on-site execution for teams of 20 to 4,000+.
          </p>
          <ul className={styles.points}>
            <li>One inquiry, multiple vetted caterers</li>
            <li>Transparent per-head pricing</li>
            <li>End-to-end, on-site execution</li>
          </ul>
          <div className={styles.assure}>
            <span>Free, no-obligation quote</span>
            <span>Dedicated coordinator</span>
            <span>Reliable on-time delivery</span>
          </div>
        </div>

        {/* dominant inquiry form */}
        <div className={styles.formCard}>
          {!submitted ? (
            <>
              <div className={styles.formHead}>
                <span className={styles.formBadge}>Free quote · ~2-hour response</span>
                <h2 className={styles.formTitle}>Get a catering quote</h2>
              </div>

              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.field}>
                  <label>What do you need?</label>
                  <div className={styles.chips}>
                    {CATEGORIES.map((c) => (
                      <button
                        type="button"
                        key={c.id}
                        className={`${styles.chip} ${cat === c.id ? styles.chipOn : ""}`}
                        onClick={() => setCat(c.id)}
                        aria-pressed={cat === c.id}
                      >
                        <span className={styles.chipIcon}>{c.icon}</span>
                        {c.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className={styles.field}>
                  <label>How many guests?</label>
                  <div className={styles.pills}>
                    {PAX.map((p) => (
                      <button
                        type="button"
                        key={p}
                        className={`${styles.pill} ${pax === p ? styles.pillOn : ""} ${err.pax ? styles.badPill : ""}`}
                        onClick={() => { setPax(p); clear("pax"); }}
                        aria-pressed={pax === p}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="h-date">Event date</label>
                    <input
                      id="h-date" type="date" value={date}
                      onChange={(e) => { setDate(e.target.value); clear("date"); }}
                      className={`${styles.input} ${err.date ? styles.bad : ""}`}
                    />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="h-company">Company</label>
                    <input
                      id="h-company" type="text" placeholder="Company name" value={company}
                      onChange={(e) => { setCompany(e.target.value); clear("company"); }}
                      className={`${styles.input} ${err.company ? styles.bad : ""}`}
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="h-contact">Work email or phone</label>
                  <input
                    id="h-contact" type="text" placeholder="you@company.com" value={contact}
                    onChange={(e) => { setContact(e.target.value); clear("contact"); }}
                    className={`${styles.input} ${err.contact ? styles.bad : ""}`}
                  />
                </div>

                <button type="submit" className={styles.submit}>
                  Get my quote <span className={styles.submitArrow}>→</span>
                </button>
                <p className={styles.formFoot}>
                  No obligation. <Link href="/packages">Browse packages</Link> instead.
                </p>
              </form>
            </>
          ) : (
            <div className={styles.success}>
              <div className={styles.successMark}>✓</div>
              <h2>Inquiry ready to send</h2>
              <p>We&apos;ve opened WhatsApp with your details prefilled. Send the message and our team replies within 2 hours.</p>
              <button className={styles.again} onClick={() => setSubmitted(false)}>Submit another requirement</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
