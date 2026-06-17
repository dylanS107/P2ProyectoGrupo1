import styles from './concepto-card.module.css';

export const ConceptoCard = ({ title, description }) => {
  return (
    <article className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
};
