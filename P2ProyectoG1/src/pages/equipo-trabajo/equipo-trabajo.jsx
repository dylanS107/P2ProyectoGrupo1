import styles from './equipo-trabajo.module.css';

export const EquipoTrabajo = () => {
  return (
    <>
      <section className={styles.teamPage}>
        <h1>Equipo de trabajo</h1>
        <p>Conoce al equipo que construye esta aplicación matemática y sus páginas informativas.</p>
        <div className={styles.teamGrid}>
          <article className={styles.teamCard}>
            <h2>Ana Pérez</h2>
            <p>Desarrolladora frontend</p>
          </article>
          <article className={styles.teamCard}>
            <h2>Carlos Rivas</h2>
            <p>Diseñador UX/UI</p>
          </article>
          <article className={styles.teamCard}>
            <h2>María López</h2>
            <p>Analista de contenido matemático</p>
          </article>
        </div>
      </section>
    </>
  );
};
