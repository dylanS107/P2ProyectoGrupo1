const NEWTON_API_BASE = 'https://newton.vercel.app/api/v2';

const llamarAPI = async (endpoint, expresion) => {
    try {
        // Asegurarse de que la expresión sea válida
        if (!expresion || typeof expresion !== 'string') {
            return { 
                success: false, 
                error: 'La expresión debe ser un texto válido' 
            };
        }

        // Codificar la expresión para la URL
        const expresionCodificada = encodeURIComponent(expresion.trim());
        const url = `${NEWTON_API_BASE}/${endpoint}/${expresionCodificada}`;
        
        console.log('Llamando API:', url);
        console.log('Endpoint:', endpoint);
        console.log('Expresión:', expresion);

        // Realizar la llamada con configuración adecuada
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            mode: 'cors'
        });

        console.log('Status:', response.status);
        console.log('OK:', response.ok);

        // Intentar leer la respuesta como JSON
        let data;
        try {
            data = await response.json();
            console.log('Respuesta completa:', data);
        } catch (e) {
            console.error('No se pudo parsear JSON:', e);
            const texto = await response.text();
            console.error('Texto de respuesta:', texto);
            throw new Error('Respuesta inválida de la API');
        }

        // Verificar si la respuesta fue exitosa
        if (!response.ok) {
            console.error('Error HTTP:', response.status, data);
            
            if (response.status === 404) {
                return { 
                    success: false, 
                    error: `Endpoint '${endpoint}' no encontrado o expresión inválida: ${expresion}` 
                };
            }
            
            return { 
                success: false, 
                error: `Error del servidor (${response.status}): ${data.error || 'Error desconocido'}` 
            };
        }

        // Procesar la respuesta exitosa
        if (data.result) {
            return { success: true, result: data.result };
        } else if (data.expression) {
            return { success: true, result: data.expression };
        } else if (data.error) {
            return { success: false, error: data.error };
        } else if (Object.keys(data).length > 0) {
            return { success: true, result: JSON.stringify(data) };
        } else {
            return { success: false, error: 'Respuesta vacía de la API' };
        }

    } catch (error) {
        console.error(`Error en ${endpoint}:`, error);
        
        let errorMsg = error.message;
        if (error.message.includes('Failed to fetch')) {
            errorMsg = 'Error de conexión. Verifica tu internet o la disponibilidad de la API.';
        } else if (error.message.includes('CORS')) {
            errorMsg = 'Error de CORS. La API podría estar bloqueada.';
        } else if (error.message.includes('Syntax')) {
            errorMsg = 'Error en la sintaxis de la expresión. Intenta con: x^2, x^3 + 2*x, sin(x), etc.';
        }
        
        return { success: false, error: errorMsg };
    }
};

export const derivar = async (expresion = 'x^2') => {
    console.log('Derivando:', expresion);
    return llamarAPI('derive', expresion);
};

export const simplificar = async (expresion) => {
    console.log('Simplificando:', expresion);
    return llamarAPI('simplify', expresion);
};

export const factorizar = async (expresion) => {
    console.log('Factorizando:', expresion);
    return llamarAPI('factor', expresion);
};

export const resolver = async (ecuacion) => {
    console.log('Resolviendo:', ecuacion);
    return llamarAPI('solve', ecuacion);
};

export const calcularPesoComposicion = (pesoTotal, porcentaje) => {
    const peso = Number(pesoTotal);
    const porcentajeNum = Number(porcentaje);
    if (Number.isNaN(peso) || Number.isNaN(porcentajeNum)) return null;
    return Number(((peso * porcentajeNum) / 100).toFixed(4));
};

export const crearFilaDePeso = (nombre, peso, porcentaje) => ({
    nombre,
    peso: Number(peso) || 0,
    porcentaje: Number(porcentaje) || 0,
    resultado: calcularPesoComposicion(peso, porcentaje) || 0,
});

// ── Login local ──────────────────────────────────────────────
export const guardarLogin = (email, nombre) => {
    const login = { email, nombre, timestamp: new Date().toISOString(), source: 'local' };
    localStorage.setItem('loginData', JSON.stringify(login));
    return { login, message: 'Login guardado correctamente.' };
};

export const leerLogin = () => {
    const data = localStorage.getItem('loginData');
    return data ? JSON.parse(data) : null;
};

// ── Actividades ───────────────────────────────────────────────
export const registrarActividad = (accion) => {
    const actividades = leerActividades();
    actividades.push(`${new Date().toLocaleTimeString()} — ${accion}`);
    localStorage.setItem('actividades', JSON.stringify(actividades));
};

export const leerActividades = () => {
    const data = localStorage.getItem('actividades');
    return data ? JSON.parse(data) : [];
};