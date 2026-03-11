# ScalePrints - 3D Printing Services Website

Este proyecto es un sitio web profesional construido con HTML5, CSS3 y JavaScript vanilla. Utiliza un contenedor Docker para desarrollo y está configurado para despliegue automático en Vercel mediante GitHub Actions.

## Estructura del Proyecto

```
my-website
├── src
│   ├── index.html              # Página principal responsiva
│   ├── css
│   │   └── styles.css          # Estilos (Tailwind CSS)
│   ├── js
│   │   └── main.js             # Lógica JavaScript
│   └── assets
│       └── fonts               # Fuentes tipográficas
├── stitch
│   ├── 01-scaleprints-violeta-neon.html
│   ├── 01-scaleprints-violeta-neon.png
│   ├── 02-scaleprints-mobile-whatsapp.html
│   └── 02-scaleprints-mobile-whatsapp.png
├── .github/workflows
│   └── build-and-deploy.yml    # Pipeline CI/CD para Vercel
├── Dockerfile                  # Configuración Docker
├── docker-compose.yml          # Orquestación Docker
├── vercel.json                 # Configuración Vercel
├── .vercelignore               # Archivos a ignorar en Vercel
├── Makefile                    # Comandos útiles
└── README.md                   # Este archivo
```

## Inicio Rápido

### Desarrollo Local con Docker

```bash
# Clonar el repositorio
git clone <repository-url>
cd my-website

# Iniciar contenedor con Nginx
make run

# Acceder al sitio
# http://localhost:3000
```

**Comandos disponibles:**
- `make run` - Inicia el contenedor nginx
- `make stop` - Detiene el contenedor
- `make clean` - Elimina el contenedor

### Desarrollo sin Docker

```bash
# Solo necesitas un servidor HTTP simple
python -m http.server 3000 -d src
# http://localhost:3000
```

## Despliegue en Vercel

### Opción 1: Conexión Git Automática (Recomendado)

1. **Ir a [Vercel](https://vercel.com)** y crear una cuenta
2. **Conectar tu repositorio GitHub**:
   - Click en "Add New..." → "Project"
   - Selecciona tu repositorio
   - Vercel detectará automáticamente la configuración de `vercel.json`
3. **Configurar variables de entorno** (si aplica)
4. **Desplegar**: Click en "Deploy"

**Despliegues automáticos**: Cada push a `main` o `feature/*` desplegará automáticamente.

### Opción 2: CLI de Vercel

```bash
# Instalar Vercel CLI
npm install -g vercel

# Desplegar desde el directorio del proyecto
vercel

# Desplegar en producción (necesita confirmación)
vercel --prod
```

### Opción 3: GitHub Actions

El archivo `.github/workflows/build-and-deploy.yml` despliega automáticamente en Vercel cuando haces push.

## Despliegue

La aplicación está configurada con GitHub Actions que automáticamente construye y despliega cuando haces push a las ramas principales. 

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.