import styles from './header.module.css';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className={styles.header}>
            <h2 className={styles.titulo}>Aplicación Matemática - Proyecto</h2>
            <nav className={styles.nav}>
                <Link className={styles.itemsMenu} to="/">Inicio</Link>
                <Link className={styles.itemsMenu} to="/noticias">Noticias</Link>
                <Link className={styles.itemsMenu} to="/nosotros">Equipo</Link>
                <Link className={styles.itemsMenu} to="/practica">Práctica</Link>
                <Link className={styles.itemsMenu} to="/contactos">Contacto</Link>
            </nav>
        </header>
    );
}
export default Header;
