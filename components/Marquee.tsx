import { Fragment } from "react";
import { EXECUTION_MARQUEE } from "@/lib/data";
import styles from "./Marquee.module.css";

export default function Marquee() {
  // duplicate the set once so the -50% translate loops with no visible jump
  const items = [...EXECUTION_MARQUEE, ...EXECUTION_MARQUEE];

  return (
    <section className={styles.section} aria-label="Built on real execution">
      <div className="container">
        <h2 className={styles.heading}>Built on Real Execution</h2>
        <span className={styles.divider} aria-hidden="true" />
      </div>

      <div className={styles.viewport}>
        <div className={styles.track}>
          {items.map((item, i) => (
            <Fragment key={`${item}-${i}`}>
              <span className={styles.item}>{item}</span>
              <span className={styles.sep} aria-hidden="true">•</span>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
