"use client";
import { useState, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { CONFIG, CATEGORIES, STATS } from "@/lib/data";
import styles from "./Hero.module.css";

const HERO_METRICS = STATS.slice(0, 3);

export default function Hero() {
  const [submitted, setSubmitted] = useState(false);
  const [err, setErr] = useState<Record<string, boolean>>({});

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const d = Object.fromEntries(new FormData(form)) as Record<string, string>;

    const required = ["requirement", "pax", "date", "company", "contact"];
    const errs: Record<string, boolean> = {};
    required.forEach((k) => { if (!String(d[k] || "").trim()) errs[k] = true; });
    setErr(errs);
    if (Object.keys(errs).length) return;

    const msg = [
      `📋 New catering inquiry via ${CONFIG.brand}`, "",
      `• Requirement: ${d.requirement}`,
      `• Headcount: ${d.pax}`,
      `• Event date: ${d.date}`,
      `• Company: ${d.company}`,
      `• Contact: ${d.contact}`,
      "", "— sent from platr.in",
    ].join("\n");

    window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
  };

  const clear = (k: string) => setErr((e) => ({ ...e, [k]: false }));

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
          <div className={styles.miniStats}>
            {HERO_METRICS.map((s) => (
              <div key={s.label} className={styles.miniStat}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* dominant inquiry form */}
        <div className={styles.formCard}>
          {!submitted ? (
            <>
              <div className={styles.formHead}>
                <h2 className={styles.formTitle}>Get a catering quote</h2>
                <p className={styles.formSub}>Avg. response within 2 hours on business days.</p>
              </div>
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.field}>
                  <label htmlFor="h-req">What do you need?</label>
                  <select id="h-req" name="requirement" defaultValue={CATEGORIES[0].name}>
                    {CATEGORIES.map((c) => (
                      <option key={c.id} value={c.name}>{c.name}</option>
                    ))}
                  </select>
                </div>

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="h-pax">Headcount</label>
                    <input id="h-pax" name="pax" type="number" min="1" inputMode="numeric" placeholder="e.g. 150"
                      className={err.pax ? styles.bad : ""} onChange={() => clear("pax")} />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="h-date">Event date</label>
                    <input id="h-date" name="date" type="date"
                      className={err.date ? styles.bad : ""} onChange={() => clear("date")} />
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="h-company">Company</label>
                    <input id="h-company" name="company" type="text" placeholder="Company name"
                      className={err.company ? styles.bad : ""} onChange={() => clear("company")} />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="h-contact">Work email or phone</label>
                    <input id="h-contact" name="contact" type="text" placeholder="you@company.com"
                      className={err.contact ? styles.bad : ""} onChange={() => clear("contact")} />
                  </div>
                </div>

                <button type="submit" className={styles.submit}>Send inquiry →</button>
                <p className={styles.formFoot}>
                  Prefer to browse first? <Link href="/packages">View packages &amp; pricing</Link>
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
