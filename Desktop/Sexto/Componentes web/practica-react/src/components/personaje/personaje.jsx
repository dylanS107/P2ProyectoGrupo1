import PropTypes from 'prop-types';
import styles from './personaje.module.css';

export const PersonajeCard = ({ nombre, especie, imagen }) => {
    return (
        <article className={styles.personajeCard}>
            <img className={styles.personajeImg} src={imagen} alt={nombre} />
            <div className={styles.contenido}>
                <h3 className={styles.personajeNombre}>{nombre}</h3>
                <p className={styles.personajeEspecie}>{especie}</p>
            </div>
        </article>
    );
};

PersonajeCard.propTypes = {
    nombre: PropTypes.string.isRequired,
    especie: PropTypes.string.isRequired,
    imagen: PropTypes.string.isRequired,
};
