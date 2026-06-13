import { useState } from 'react';
import styles from './card.module.css';
import PropTypes from 'prop-types';


export const Card = ({ nombre = 'Dylan', edad }) => {
    const [mostrarEdad, setMostrarEdad] = useState(false);

    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>
                {nombre} y es {edad >= 18 ? 'Mayor de edad' : 'Menor de edad'}
            </h1>

            <h2 className={mostrarEdad ? styles.activo : styles.inactivo}>
                {mostrarEdad ? edad : 'Edad Oculta'}
            </h2>

            <button type="button" onClick={() => setMostrarEdad(!mostrarEdad)}>
                {mostrarEdad ? 'Ocultar Edad' : 'Mostrar Edad'}
            </button>
        </div>
    );
};        

Card.propTypes = {
    nombre: PropTypes.string, 
    edad: PropTypes.number
};             
