import styles from './header.module.css';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className={styles.header}>
            <h2 className={styles.titulo}>Programacion Integrativa de Componentes Web</h2>
            <nav className={styles.nav}>
                <Link className={styles.itemsMenu} to="/">Inicio</Link>
                <Link className={styles.itemsMenu} to="/contactos">Contactos</Link>
                <Link className={styles.itemsMenu} to="/nosotros">Nosotros</Link>
                <Link className={styles.itemsMenu} to="/practica">Practica</Link>
                <Link className={styles.itemsMenu} to="/personajes">Personajes</Link>
            </nav>
        </header>
    );
}
export default Header;
