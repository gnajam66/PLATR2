import styles from "./Marquee.module.css";

export default function Marquee() {
  const text = "✓ Corporate Lunches • ✓ Board Meetings • ✓ Conferences • ✓ Events • ✓ Festive Celebrations • ✓ Custom Requirements • ";
  return (
    <div className={styles.marquee}>
      <div className={styles.track}>
        <span>{text}{text}{text}{text}</span>
      </div>
    </div>
  );
}
