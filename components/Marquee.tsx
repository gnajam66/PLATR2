import { Fragment } from "react";
import { CAPABILITIES } from "@/lib/data";
import styles from "./Marquee.module.css";

export default function Marquee() {
  // duplicate the set once so the -50% translate loops with no visible jump
  const items = [...CAPABILITIES, ...CAPABILITIES];

  return (
    <div className={styles.marquee} aria-hidden="true">
      <div className={styles.track}>
        {items.map((item, i) => (
          <Fragment key={`${item}-${i}`}>
            <span className={styles.item}>{item}</span>
            <span className={styles.sep}>•</span>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
