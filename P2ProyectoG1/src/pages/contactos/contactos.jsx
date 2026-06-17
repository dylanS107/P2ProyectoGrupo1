import { useEffect, useState } from 'react';
import styles from './contactos.module.css';
import { guardarLogin, leerLogin, leerActividades } from '../../services/newton-api';

export const Contacto = () => {
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [ultimoLogin, setUltimoLogin] = useState(null);
  const [actividades, setActividades] = useState([]);

  useEffect(() => {
    setUltimoLogin(leerLogin());
    setActividades(leerActividades());
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();

    if (!email.trim()) {
      setMensaje('Por favor ingresa tu correo.');
      return;
    }

    const resultado = await guardarLogin(email.trim(), nombre.trim() || email.trim());
    setUltimoLogin(resultado.data || resultado.login);
    setMensaje(resultado.message || 'Tu sesión ha sido guardada.');
    setPassword('');
  };

  return (
    <>
      <section className={styles.contactPage}>
        <h1>Login y registro de actividad</h1>
        <p>Registra tu acceso y guarda lo que haces en la aplicación para fines de seguimiento.</p>

        <form className={styles.loginForm} onSubmit={handleLogin}>
          <label>
            Correo electrónico
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="nombre@ejemplo.com"
            />
          </label>

          <label>
            Nombre o usuario
            <input
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Tu nombre"
            />
          </label>

          <label>
            Contraseña
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
            />
          </label>

          <button className="global-button" type="submit">Guardar login</button>
        </form>

        {mensaje && <p className={styles.message}>{mensaje}</p>}

        <div className={styles.summary}>
          <div>
            <h2>Último usuario registrado</h2>
            {ultimoLogin ? (
              <div>
                <p><strong>Usuario:</strong> {ultimoLogin.nombre}</p>
                <p><strong>Email:</strong> {ultimoLogin.email}</p>
                <p><strong>Fecha:</strong> {new Date(ultimoLogin.timestamp).toLocaleString()}</p>
                <p><strong>Origen:</strong> {ultimoLogin.source || 'local'}</p>
              </div>
            ) : (
              <p>No hay login guardado aún.</p>
            )}
          </div>

          <div>
            <h2>Acciones recientes</h2>
            {actividades.length > 0 ? (
              <ul className={styles.activityList}>
                {actividades.slice(-5).reverse().map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>Aún no se han registrado acciones.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
