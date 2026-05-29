import styles from "./FloatingSticker.module.css";

type Props = {
  emoji: string;
  top?: string; bottom?: string; left?: string; right?: string;
  delay?: number;
  size?: number;
  rotate?: number;
};

export default function FloatingSticker({ emoji, top, bottom, left, right, delay = 0, size = 48, rotate = 0 }: Props) {
  return (
    <span
      className={styles.sticker}
      style={{
        top, bottom, left, right,
        animationDelay: `${delay}s`,
        fontSize: `${size}px`,
        "--rotate": `${rotate}deg`,
      } as React.CSSProperties}
    >
      {emoji}
    </span>
  );
}
