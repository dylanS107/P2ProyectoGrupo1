📐 Aplicación Matemática — Proyecto G1
Aplicación web educativa e interactiva de matemáticas y ciencias, desarrollada con React + Vite. Permite calcular derivadas, simplificar expresiones, factorizar, calcular el peso de composición de materiales y registrar la actividad del usuario. Próximamente con conexión a base de datos mediante Supabase.
---
🗂 Páginas del sitio
Ruta	Descripción
`/`	Inicio — presentación del sitio y acceso rápido
`/noticias`	Noticias matemáticas recientes
`/nosotros`	Equipo de trabajo
`/practica`	Calculadora interactiva + tabla de composición
`/contactos`	Login de usuario y registro de actividades
---

🔌 APIs externas utilizadas
Newton API
Realiza operaciones simbólicas sobre expresiones matemáticas.
---
GET https://newton.vercel.app/api/v2/{operacion}/{expresion}
---
Operación	Endpoint ejemplo
Derivar	`/derive/x^2`
Simplificar	`/simplify/2x+3x`
Factorizar	`/factor/x^2-1`
Resolver	`/zeroes/x^2-4`
---

📁 Estructura del proyecto
---
src/
├── components/
│   ├── header/         # Barra de navegación
│   ├── footer/         # Pie de página
│   ├── layout/         # Contenedor general
│   ├── modal/          # Modal de resultados
│   └── concepto-card/  # Tarjeta de concepto
├── pages/
│   ├── inicio/         # Página principal
│   ├── noticias/       # Noticias matemáticas
│   ├── equipo-trabajo/ # Equipo del proyecto
│   ├── practica/       # Calculadora + tabla
│   └── contactos/      # Login y actividades
├── services/
│   └── newton-api.js   # Lógica de APIs y localStorage
└── App.jsx             # Rutas principales
---
📄 Licencia
Proyecto académico — Grupo 1. Todos los derechos reservados.
---
