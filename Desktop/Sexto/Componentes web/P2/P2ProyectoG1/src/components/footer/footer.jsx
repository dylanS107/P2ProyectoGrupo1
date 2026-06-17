import styles from './footer.module.css';

export const Footer = () => {
    const anioActual = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <p className={styles.text}>Proyecto Matemático de Cálculo y peso de composición - {anioActual}</p>
            <p className={styles.text}>Aprende derivadas, calcula pesos y registra tus actividades con Supabase o almacenamiento local.</p>
        </footer>
    );
};
