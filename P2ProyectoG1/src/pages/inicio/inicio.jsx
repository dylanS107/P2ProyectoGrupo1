import styles from './inicio.module.css';
import { Link } from 'react-router-dom';

export const Inicio = () => {
    return (
        <>
            <section className={styles.inicioPage}>
                <h1>Bienvenido a la Aplicación Matemática</h1>
                <p>
                    Sitio informativo sobre cálculo de derivadas y peso de composición de materiales.
                    Aprende los conceptos, consulta las noticias y prueba la calculadora interactiva.
                </p>

                <div className={styles.inicioGrid}>
                    <article className={styles.inicioCard}>
                        <h2>Conceptos</h2>
                        <p>Explicaciones sobre derivadas, composición de materiales y cálculo matemático aplicado.</p>
                    </article>
                    <article className={styles.inicioCard}>
                        <h2>Noticias</h2>
                        <p>Descubre las últimas novedades en matemáticas y aplicaciones de cálculo en ingeniería.</p>
                    </article>
                    <article className={styles.inicioCard}>
                        <h2>Calculadora</h2>
                        <p>Prueba la herramienta interactiva para derivar expresiones y calcular pesos por composición.</p>
                        <Link to="/practica" className="global-button" style={{display:'inline-block', marginTop:'12px', textDecoration:'none'}}>
                            Ir a Práctica →
                        </Link>
                    </article>
                </div>
            </section>
        </>
    );
};