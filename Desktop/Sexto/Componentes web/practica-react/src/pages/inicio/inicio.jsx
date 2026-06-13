import styles from './inicio.module.css';

export const Inicio = () => {
    return (
        <section className={styles.inicioPage}>
            <h1>Bienvenido a la pagina de inicio</h1>
            <p>
                Este sitio muestra una practica de React enfocada en componentes reutilizables,
                rutas, estilos con CSS Modules y consumo de una API externa.
            </p>

            <div className={styles.inicioGrid}>
                <article className={styles.inicioCard}>
                    <h2>Componentes</h2>
                    <p>Se usan tarjetas para conceptos, materias y personajes con propiedades validadas.</p>
                </article>
                <article className={styles.inicioCard}>
                    <h2>Navegacion</h2>
                    <p>React Router permite moverse entre Inicio, Nosotros, Contactos, Practica y Personajes.</p>
                </article>
                <article className={styles.inicioCard}>
                    <h2>API</h2>
                    <p>La pagina de personajes obtiene informacion desde la API de Rick and Morty.</p>
                </article>
            </div>
        </section>
    );
};
