import { HiArrowRight } from "react-icons/hi2";
import type { PageCardProps } from "../../interfaces";
import styles from "./PageCard.module.css";

const PageCard = ({title, description,href}: PageCardProps) => {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.divider} aria-hidden="true" />
      <p className={styles.description}>{description}</p>
      <a href={href} className={styles.button}>
        Learn More
        <HiArrowRight aria-hidden="true" />
      </a>
    </article>
  );
};

export default PageCard;