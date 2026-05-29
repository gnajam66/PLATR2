import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.watermark}>PLATR</div>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <Image src="/logo.png" alt="PLATR" width={120} height={48} className={styles.logo} />
          <p>corporate food, sorted from one place. we handle vendor coordination and backend execution so you can focus on what matters.</p>
        </div>
        <div>
          <h4 className={styles.heading}>quick links</h4>
          <div className={styles.links}>
            <a href="#how-it-works">how it works</a>
            <a href="#categories">categories</a>
            <a href="#packages">packages</a>
            <a href="#inquiry">send inquiry</a>
          </div>
        </div>
        <div>
          <h4 className={styles.heading}>contact</h4>
          <div className={styles.links}>
            <a href="https://wa.me/917021266095" target="_blank" rel="noopener">whatsapp</a>
            <a href="mailto:hello@platr.in">hello@platr.in</a>
          </div>
        </div>
      </div>
      <div className={`container ${styles.bar}`}>
        <span>© 2026 PLATR. all rights reserved.</span>
        <span>built with care for corporate teams.</span>
      </div>
    </footer>
  );
}
