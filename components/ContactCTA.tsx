import styles from "./ContactCTA.module.css";
import FloatingSticker from "./FloatingSticker";

export default function ContactCTA() {
  return (
    <section className={styles.cta} id="contact">
      <FloatingSticker emoji="💣" top="10%" left="5%" delay={0} size={80} />
      <FloatingSticker emoji="🦄" bottom="15%" right="8%" delay={2} size={70} />
      <FloatingSticker emoji="🍽️" top="30%" right="15%" delay={4} size={60} />

      <div className="container" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
        <h2 className={styles.headline}>
          stop searching for caterers<br />every time.
        </h2>
        <p className={styles.sub}>
          Tell us your requirement and we&apos;ll help you find the right catering solution.
        </p>
        <div className={styles.actions}>
          <a
            href="/contact"
            className="btn-brutal btn-brutal--white btn-wobble"
          >
            🟣 send inquiry
          </a>
          <a
            href="https://wa.me/917021266095?text=Hi%20PLATR%2C%20I%27d%20like%20to%20discuss%20our%20corporate%20food%20requirements."
            className="btn-brutal btn-brutal--whatsapp btn-wobble"
            target="_blank"
            rel="noopener"
            style={{ borderColor: "var(--white)" }}
          >
            💬 chat on whatsapp
          </a>
        </div>
      </div>
    </section>
  );
}
