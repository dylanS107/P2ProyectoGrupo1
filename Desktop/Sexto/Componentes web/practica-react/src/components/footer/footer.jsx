import styles from './footer.module.css';

export const Footer = () => {
    const anioActual = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <p className={styles.text}>Todos los derechos reservados - ESPE IT {anioActual}.</p>
        </footer>
    );
};
