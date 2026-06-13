import {useState, useEffect} from 'react';
import {obtenerPersonajes} from '../../services/rick-and-morty-service';
import {PersonajeCard} from '../../components';
import styles from './personajes.module.css';

export const PersonajePage = () => {
    const [personajes, setPersonajes] = useState([]);

    const getPersonajes = async () => {
        const data = await obtenerPersonajes();
        setPersonajes(data);
    }

    useEffect(() => {
        getPersonajes();
    }, []);
        return (
            <>
                <h1>Personajes de Rick and Morty</h1>
                <div className={styles.contenedorPersonajes}>
                    {personajes.map((personaje) => (
                        <PersonajeCard
                            key={personaje.id}
                            nombre={personaje.name}
                            especie={personaje.species}
                            imagen={personaje.image}
                        />
                    ))}
                </div>
            </>
        );
}
export default PersonajePage;

