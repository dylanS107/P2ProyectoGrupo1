import styles from './nosotros.module.css';

export const Nosotros = () => {
    return (
        <section className={styles.nosotrosPage}>
            <h1>Sobre nosotros</h1>
            <p>
                Esta aplicacion fue desarrollada como parte de la practica de Componentes Web.
                Su objetivo es organizar una interfaz mediante paginas, componentes y servicios.
            </p>

            <div className={styles.nosotrosInfo}>
                <article>
                    <h2>Proposito</h2>
                    <p>Aplicar React para crear componentes simples, reutilizables y faciles de mantener.</p>
                </article>
                <article>
                    <h2>Aprendizaje</h2>
                    <p>Practicar props, PropTypes, CSS Modules, rutas y consumo de datos con fetch.</p>
                </article>
            </div>
        </section>
    );
};
