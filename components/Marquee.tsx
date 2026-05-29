import styles from "./Marquee.module.css";

export default function Marquee() {
  const text = "one platform • vetted vendors • reliable execution • single point of contact • ";
  return (
    <div className={styles.marquee}>
      <div className={styles.track}>
        <span>{text}{text}{text}{text}</span>
      </div>
    </div>
  );
}
