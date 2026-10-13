import type { SectionHeaderProps } from "../../interfaces";
import styles from "./SectionHeader.module.css";
const SectionHeader = ({ badge, title, description }: SectionHeaderProps) => {
  return (
    <header className={styles.header}>
      <span className={styles.badge}>{badge}</span>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </header>
  );
};

export default SectionHeader;