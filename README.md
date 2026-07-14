# Inversiones Jojo - Impresión 3D y Corte Láser

Este proyecto es el sitio web profesional de **Inversiones Jojo** (también conocido como Creaciones Jojo), construido con HTML5, Tailwind CSS (cargado vía CDN) y JavaScript vanilla con animaciones interactivas en WebGL/Three.js. Utiliza un contenedor Docker para el entorno de desarrollo local y está configurado para desplegarse de manera directa y automática en Vercel.

## Estructura del Proyecto

```
creacionesjojo-website
├── src
│   ├── index.html              # Página principal responsiva (Inversiones Jojo)
│   ├── contact.md              # Información de contacto y enlaces a redes sociales
│   ├── assets
│   │   └── creaciones.png      # Logo oficial del sitio
│   └── stitch
│       └── landing_screenshot.png # Captura de pantalla de la landing page
├── Dockerfile                  # Configuración de Docker (servidor Nginx)
├── docker-compose.yml          # Configuración de Docker Compose
├── vercel.json                 # Configuración de despliegue para Vercel
├── .vercelignore               # Archivos y carpetas ignorados en Vercel
├── .dockerignore               # Archivos y carpetas ignorados en Docker
├── .gitignore                  # Configuración de archivos ignorados por Git
├── Makefile                    # Comandos útiles para automatizar tareas de desarrollo
└── README.md                   # Este archivo de documentación
```

## Inicio Rápido

### Desarrollo Local con Docker

Tienes dos alternativas para levantar el proyecto localmente usando Docker:

#### Alternativa 1: Usando el Makefile (Puerto 3500)

```bash
# Iniciar el contenedor con Nginx montando el directorio 'src'
make run

# Acceder al sitio en tu navegador
# http://localhost:3500
```

**Comandos disponibles en el Makefile:**
- `make run` - Construye e inicia el contenedor Nginx en el puerto `3500`.
- `make stop` - Detiene el contenedor Nginx en ejecución.
- `make clean` - Detiene y elimina el contenedor.

#### Alternativa 2: Usando Docker Compose (Puerto 8080)

```bash
# Iniciar los servicios en segundo plano
docker-compose up -d

# Acceder al sitio en tu navegador
# http://localhost:8080

# Detener los servicios
docker-compose down
```

### Desarrollo sin Docker

Si no tienes Docker instalado, puedes servir el contenido estático con cualquier servidor web simple. Por ejemplo, usando Python:

```bash
# Iniciar un servidor HTTP simple apuntando a la carpeta 'src'
python -m http.server 3500 -d src

# Acceder al sitio en tu navegador
# http://localhost:3500
```

---

## Despliegue en Vercel

### Opción 1: Conexión Git Automática (Recomendado)

1. Ve a [Vercel](https://vercel.com) e inicia sesión.
2. Conecta tu cuenta de GitHub y crea un nuevo proyecto:
   - Haz clic en **"Add New..."** → **"Project"**
   - Selecciona el repositorio `creacionesjojo-website`.
   - Vercel detectará la configuración en `vercel.json` y desplegará la carpeta `src` automáticamente.
3. Haz clic en **"Deploy"**.

**Despliegues continuos**: Cada push realizado a las ramas principales o de características (`feature/*`) desencadenará un despliegue automático en Vercel.

### Opción 2: CLI de Vercel

También puedes realizar el despliegue de forma manual utilizando la interfaz de línea de comandos de Vercel:

```bash
# Instalar la CLI de Vercel globalmente (si no la tienes)
npm install -g vercel

# Desplegar el proyecto en modo preview
vercel

# Desplegar directamente a producción
vercel --prod
```

---

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar el sitio web o reportar algún problema, por favor abre un *Issue* o envía un *Pull Request*.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` (si está presente) para más detalles.