import styles from './contacto.module.css';

export const Contacto = () => {
    return (
        <section className={styles.contactoPage}>
            <h1>Contacto</h1>
            <p>
                Para esta practica, la pagina de contacto muestra informacion basica de referencia
                para mantener una estructura completa dentro de la aplicacion.
            </p>

            <div className={styles.contactoBox}>
                <p><strong>Institucion:</strong> ESPE</p>
                <p><strong>Asignatura:</strong> Programacion Integrativa de Componentes Web</p>
                <p><strong>Proyecto:</strong> Practica React con componentes reutilizables</p>
            </div>
        </section>
    );
};
