import styles from './noticias.module.css';

export const Noticia = () => {
  return (
    <>
      <section className={styles.newsPage}>
        <h1>Noticias Matemáticas</h1>
        <p>Esta aplicación propone un sitio informativo con conceptos de cálculo y composición de materiales.</p>
        <div className={styles.newsGrid}>
          <article className={styles.newsCard}>
            <h2>La derivada como herramienta básica</h2>
            <p>El cálculo de derivadas permite estudiar el cambio y el crecimiento de funciones en tiempo real.</p>
          </article>
          <article className={styles.newsCard}>
            <h2>Composiciones y porcentajes</h2>
            <p>Calcula el peso de piezas de una mezcla usando porcentajes y aplica el resultado en ingeniería o química.</p>
          </article>
          <article className={styles.newsCard}>
            <h2>Conexión con APIs matemáticas</h2>
            <p>Usamos la API de Newton para derivar expresiones directamente desde el navegador.</p>
          </article>
        </div>
      </section>
    </>
  );
};
