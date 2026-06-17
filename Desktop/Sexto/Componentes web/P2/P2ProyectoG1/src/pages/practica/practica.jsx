import { useEffect, useState } from 'react';
import styles from './practica.module.css';
import { Modal } from '../../components';
import { derivar, simplificar, factorizar, resolver, crearFilaDePeso, registrarActividad } from '../../services/newton-api';

export const Practica = () => {
  const [expresion, setExpresion] = useState('x^2');
  const [derivada, setDerivada] = useState('');
  const [operacion, setOperacion] = useState('derive');
  const [nombre, setNombre] = useState('');
  const [peso, setPeso] = useState('');
  const [porcentaje, setPorcentaje] = useState('');
  const [filas, setFilas] = useState([]);
  const [mensaje, setMensaje] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTipo, setModalTipo] = useState('resultado');
  const [modalTitulo, setModalTitulo] = useState('');

  useEffect(() => {
    const guardado = localStorage.getItem('filasPeso');
    if (guardado) {
      setFilas(JSON.parse(guardado));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('filasPeso', JSON.stringify(filas));
  }, [filas]);

  const handleOperacion = async (event, tipoOp = operacion) => {
    event.preventDefault();

    if (!expresion.trim()) {
      setModalTitulo('Error');
      setModalTipo('error');
      setDerivada('Ingresa una expresión antes de calcular.');
      setModalVisible(true);
      return;
    }

    try {
      let resultado;
      let nombreOp = 'Operación';

      switch (tipoOp) {
        case 'derive':
          resultado = await derivar(expresion.trim());
          nombreOp = 'Derivada de';
          break;
        case 'simplify':
          resultado = await simplificar(expresion.trim());
          nombreOp = 'Simplificación de';
          break;
        case 'factor':
          resultado = await factorizar(expresion.trim());
          nombreOp = 'Factorización de';
          break;
        case 'solve':
          resultado = await resolver(expresion.trim());
          nombreOp = 'Solución de';
          break;
        default:
          resultado = await derivar(expresion.trim());
          nombreOp = 'Derivada de';
      }
      
      if (resultado.success && resultado.result) {
        setDerivada(resultado.result);
        setModalTitulo(`${nombreOp}: ${expresion.trim()}`);
        setModalTipo('resultado');
        setModalVisible(true);
        setMensaje('Operación calculada correctamente.');
        registrarActividad(`${nombreOp} ${expresion.trim()} = ${resultado.result}`);
      } else if (resultado.error) {
        setDerivada(`Error: ${resultado.error}`);
        setModalTitulo('Error al calcular');
        setModalTipo('error');
        setModalVisible(true);
      } else {
        setDerivada('No se pudo calcular la operación. Verifica la expresión.');
        setModalTitulo('Error en el cálculo');
        setModalTipo('error');
        setModalVisible(true);
      }
    } catch (error) {
      setDerivada('Error al conectar con la API. Intenta de nuevo.');
      setModalTitulo('Error de conexión');
      setModalTipo('error');
      setModalVisible(true);
    }
  };

  const handleAgregar = (event) => {
    event.preventDefault();
    if (!nombre.trim() || !peso || !porcentaje) {
      setModalTitulo('Campos incompletos');
      setModalTipo('error');
      setDerivada('Completa todos los campos para agregar la composición.');
      setModalVisible(true);
      return;
    }

    const fila = crearFilaDePeso(nombre.trim(), peso, porcentaje);
    setFilas((prev) => [...prev, fila]);
    
    setModalTitulo('Composición agregada');
    setModalTipo('success');
    setDerivada(`${fila.nombre} - Peso total: ${fila.peso} kg - Porcentaje: ${fila.porcentaje}% - Resultado: ${fila.resultado} kg`);
    setModalVisible(true);
    
    setNombre('');
    setPeso('');
    setPorcentaje('');
    setMensaje(`Fila agregada: ${fila.nombre} - ${fila.resultado} kg`);
    registrarActividad(`Agregó cálculo de peso para ${fila.nombre}`);
  };

  return (
    <>
      <Modal 
        titulo={modalTitulo} 
        contenido={derivada} 
        onClose={() => setModalVisible(false)}
        tipo={modalTipo}
        visible={modalVisible}
      />
      
      <section className={styles.practicePage}>
        <div className={styles.sectionCard}>
          <h1>Calculadora Matemática</h1>
          <p>Realiza diferentes operaciones matemáticas: derivadas, simplificación, factorización y resolución de ecuaciones.</p>

          <form className={styles.form} onSubmit={(e) => handleOperacion(e, operacion)}>
            <label>
              Expresión para calcular
              <input
                value={expresion}
                onChange={(e) => setExpresion(e.target.value)}
                placeholder="Ejemplo: x^2 + 3*x"
              />
            </label>
            
            <label>
              Tipo de operación
              <select value={operacion} onChange={(e) => setOperacion(e.target.value)}>
                <option value="derive">Derivada</option>
                <option value="simplify">Simplificar</option>
                <option value="factor">Factorizar</option>
                <option value="solve">Resolver ecuación</option>
              </select>
            </label>

            <div className={styles.buttonGroup}>
              <button className="global-button" type="button" onClick={(e) => handleOperacion(e, 'derive')}>
                Derivar
              </button>
              <button className="global-button" type="button" onClick={(e) => handleOperacion(e, 'simplify')}>
                Simplificar
              </button>
              <button className="global-button" type="button" onClick={(e) => handleOperacion(e, 'factor')}>
                Factorizar
              </button>
              <button className="global-button" type="button" onClick={(e) => handleOperacion(e, 'solve')}>
                Resolver
              </button>
            </div>
          </form>
        </div>

        <div className={styles.sectionCard}>
          <h2>Cálculo de peso de composición</h2>
          <form className={styles.form} onSubmit={handleAgregar}>
            <label>
              Nombre del componente
              <input value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Ejemplo: acero" />
            </label>
            <label>
              Peso total (kg)
              <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} placeholder="Ejemplo: 100" />
            </label>
            <label>
              Porcentaje (%)
              <input type="number" value={porcentaje} onChange={(e) => setPorcentaje(e.target.value)} placeholder="Ejemplo: 25" />
            </label>
            <button className="global-button" type="submit">Agregar a tabla</button>
          </form>

          {mensaje && <p className={styles.message}>{mensaje}</p>}

          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Componente</th>
                  <th>Peso total</th>
                  <th>%</th>
                  <th>Resultado (kg)</th>
                </tr>
              </thead>
              <tbody>
                {filas.map((fila, index) => (
                  <tr key={index}>
                    <td>{fila.nombre}</td>
                    <td>{fila.peso}</td>
                    <td>{fila.porcentaje}</td>
                    <td>{fila.resultado}</td>
                  </tr>
                ))}
                {filas.length === 0 && (
                  <tr>
                    <td colSpan="4">Agrega al menos una fila para ver el cálculo.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};
