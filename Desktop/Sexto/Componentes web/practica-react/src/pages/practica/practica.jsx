import camaro from '../../assets/camaro1.png';
import styles from './practica.module.css';

export const Practica = () => {
    return (
        <section className={styles.practicaPage}>
            <h1>Practica</h1>
            <img className={styles.practicaImg} src={camaro} alt="Camaro" />
            <p>
                Esta pagina se conserva como espacio de practica para probar contenido visual,
                estilos y estructura dentro del layout principal.
            </p>
            <ul className={styles.practicaLista}>
                <li>Uso de imagenes importadas desde assets.</li>
                <li>Aplicacion de estilos propios para evitar conflictos.</li>
                <li>Contenido organizado dentro de una pagina reutilizable.</li>
            </ul>
            <p>
                La imagen se muestra con un tamano controlado para que se vea bien en pantallas
                pequenas y grandes.
            </p>
        </section>
    );
};
