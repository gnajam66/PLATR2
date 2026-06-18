import styles from "./ContactCTA.module.css";
import { CONFIG } from "@/lib/data";

const WHATSAPP_URL = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(
  "Hi PLATR, I'd like to discuss our corporate food requirements."
)}`;

export default function ContactCTA() {
  return (
    <section className={styles.cta} id="contact">
      <div className={styles.glow} />
      <div className={`container ${styles.inner}`}>
        <span className={styles.eyebrow}>Ready when you are</span>
        <h2 className={styles.headline}>
          Stop searching for caterers<br />every single time.
        </h2>
        <p className={styles.sub}>
          Send one requirement and we&apos;ll match you with vetted caterers, transparent
          pricing and end-to-end coordination.
        </p>
        <div className={styles.actions}>
          <a href="/contact#inquiry" className="btn-brutal btn-brutal--white">
            Get a quote
          </a>
          <a href={WHATSAPP_URL} className="btn-brutal btn-brutal--whatsapp" target="_blank" rel="noopener">
            WhatsApp us
          </a>
        </div>
      </div>
    </section>
  );
}
