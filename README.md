# 📐 Aplicación Matemática — Proyecto G1

¡Bienvenido a **Aplicación Matemática**! Una plataforma web educativa e interactiva diseñada para el aprendizaje y la resolución de problemas de matemáticas y ciencias. Este proyecto permite realizar operaciones simbólicas complejas (como derivadas, factorizaciones y simplificaciones), calcular el peso de composición de materiales y mantener un registro local de la actividad del usuario.

Actualmente, la aplicación se encuentra en desarrollo activo, con próximas integraciones para la persistencia de datos y autenticación en la nube.

---

## 🚀 Características Principales

* **Cálculo Simbólico Avanzado:** Resolución de derivadas, simplificación de expresiones algebraicas y factorización en tiempo real.
* **Herramientas Científicas:** Tabla de composición interactiva para calcular el peso de materiales.
* **Historial de Actividad:** Registro local de operaciones y consultas realizadas para el seguimiento del usuario.
* **Arquitectura SPA Moderna:** Navegación fluida y rápida sin recargas de página.

---

## 🗂 Estructura de Navegación (Rutas)

El sitio utiliza un sistema de enrutamiento dinámico estructurado de la siguiente manera:

| Ruta | Descripción |
| :--- | :--- |
| `/` | **Inicio** — Presentación general del sitio y accesos rápidos a los módulos. |
| `/noticias` | **Noticias** — Artículos y novedades recientes del mundo matemático. |
| `/nosotros` | **Nosotros** — Información sobre el equipo de trabajo detrás del proyecto. |
| `/practica` | **Práctica** — Módulo de calculadora interactiva y tabla de composición. |
| `/contactos` | **Contactos** — Login de usuario y panel de registro de actividades. |


## 🔌 APIs Externas Utilizadas

### Newton API
Se utiliza para computar las operaciones simbólicas directamente desde el cliente. Las peticiones se realizan mediante el método `GET` utilizando la siguiente estructura base:

```http
GET [https://newton.vercel.app/api/v2/](https://newton.vercel.app/api/v2/){operacion}/{expresion}
