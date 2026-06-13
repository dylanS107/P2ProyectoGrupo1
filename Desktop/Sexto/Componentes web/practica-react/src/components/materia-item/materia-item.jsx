import PropTypes from "prop-types";
import styles from "./materia-item.module.css";

export const MateriaItem = ({ icono, nombre, descripcion }) => {
    return (
        <article className={styles.materiaItem}>
            <span className={styles.icono} aria-hidden="true">
                {icono}
            </span>
            <div className={styles.contenido}>
                <h3 className={styles.nombre}>{nombre}</h3>
                <p className={styles.descripcion}>{descripcion}</p>
            </div>
        </article>
    );
};

MateriaItem.propTypes = {
    icono: PropTypes.node.isRequired,
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
};
