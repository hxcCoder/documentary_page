<div align="center">

# 📸 Colectiva Gráfica Documentalista

### Plataforma web moderna para colectivas documentalistas

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![MIT License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

[Demo en Vivo](https://documentalistpage-git-main-benjaminmillalonc-6594s-projects.vercel.app?_vercel_share=DrsLy1zWyqAfZRazy5ffeNJ9CLhhJAIr) • [Documentación](./pagina_lateja/CUSTOMIZATION.md) • [👨‍💻Mi Portfolio](https://github.com/hxcCoder)

</div>

---

## 🎯 Descripción

Una plataforma web **editorial y minimalista** diseñada específicamente para colectivas documentalistas que buscan mostrar su trabajo profesional. Perfecta para organizaciones que trabajan en **narrativas visuales**, **periodismo de investigación** y **documentación social**.

### ✨ Características Principales

🎨 **Diseño Editorial Minimalista** - Interfaz limpia que prioriza el contenido visual  
📝 **Sistema de Contenido Configurable** - Gestión completa mediante archivos JSON  
🎬 **Showcase de Proyectos** - Documentales, crónicas y fotografía organizados  
🔍 **Archivo Interactivo** - Biblioteca searchable con filtros avanzados  
📅 **Timeline Cronológico** - Navegación temporal de proyectos  
🗺️ **Mapa Interactivo** - Visualización geográfica de trabajos  
📰 **Blog Integrado** - Plataforma para artículos y reflexiones  
🌙 **Modo Oscuro/Claro** - Experiencia visual adaptable  
🚀 **SEO Optimizado** - Metadatos y datos estructurados  
📱 **100% Responsive** - Adaptado para todos los dispositivos  

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **Next.js** | 14 | Framework React con App Router |
| **TypeScript** | 5.0 | Tipado estático |
| **Tailwind CSS** | 4.0 | Estilos utilitarios |
| **shadcn/ui** | Latest | Componentes accesibles |
| **Montserrat + Open Sans** | - | Tipografías editoriales |

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+ 
- npm, yarn o pnpm

### Instalación
---
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/colectiva-documentalista.git
cd colectiva-documentalista

# 2. Instalar dependencias
npm install

# 3. Ejecutar en desarrollo
npm run dev

# 4. Abrir en el navegador
# http://localhost:3000
\`\`\`

## ⚙️ Configuración de Contenido

### 🎛️ Sistema de Contenido JSON

Todo el contenido se gestiona mediante archivos JSON en `/content/`, permitiendo **actualizaciones sin código**:

\`\`\`json
// content/site.json - Configuración global
{
  "name": "Tu Colectiva",
  "tagline": "Narrativas visuales para el cambio social",
  "description": "Documentamos realidades para transformar sociedades",
  "contact": {
    "email": "contacto@tucolectiva.org",
    "phone": "+1234567890",
    "address": "Tu dirección"
  },
  "social": {
    "instagram": "https://instagram.com/tucolectiva",
    "twitter": "https://twitter.com/tucolectiva",
    "youtube": "https://youtube.com/@tucolectiva"
  }
}
\`\`\`

### 📝 Agregar Nuevo Proyecto

\`\`\`json
// content/projects.json
{
  "id": "mi-nuevo-documental",
  "title": "Voces del Territorio",
  "type": "documental",
  "year": 2024,
  "description": "Un viaje por las comunidades rurales...",
  "longDescription": "Descripción completa del proyecto...",
  "image": "/images/voces-territorio.jpg",
  "gallery": [
    "/images/gallery/img1.jpg",
    "/images/gallery/img2.jpg"
  ],
  "team": ["María González", "Carlos Ruiz"],
  "collaborators": ["Comunidad El Roble"],
  "location": "Valle del Cauca, Colombia",
  "coordinates": [3.4516, -76.5320],
  "tags": ["rural", "territorio", "comunidad"],
  "status": "completed",
  "featured": true,
  "videoUrl": "https://vimeo.com/123456789",
  "awards": ["Festival DocMontaña 2024"]
}
\`\`\`

## 🎨 Personalización de Diseño

### 🎨 Paleta de Colores

\`\`\`css
/* app/globals.css */
:root {
  --primary: 142 69% 58%;      /* Verde documentalista */
  --secondary: 210 40% 98%;    /* Gris editorial */
  --accent: 47 96% 89%;        /* Amarillo suave */
  --muted: 210 40% 96%;        /* Gris muy claro */
  --destructive: 0 84% 60%;    /* Rojo de alerta */
}

[data-theme="dark"] {
  --primary: 142 69% 58%;
  --secondary: 222 84% 5%;
  --accent: 47 96% 89%;
  /* ... más colores para modo oscuro */
}
\`\`\`

### 📝 Tipografías

- **Montserrat** (font-sans): Títulos y encabezados
- **Open Sans** (font-serif): Texto de cuerpo y párrafos

## 🚀 Deployment y Producción

### Otros Proveedores

Compatible con cualquier plataforma que soporte Next.js:

- **Netlify**: `npm run build && npm run export`
- **Railway**: Configuración automática
- **DigitalOcean**: App Platform
- **AWS Amplify**: Hosting serverless

### Variables de Entorno

.env.local (opcional)
NEXT_PUBLIC_SITE_URL=https://tucolectiva.org
NEXT_PUBLIC_ANALYTICS_ID=G-XXXXXXXXXX


## 📊 Performance y SEO

### ⚡ Optimizaciones Incluidas

- **Core Web Vitals** optimizados
- **Lazy loading** de imágenes
- **Metadatos dinámicos** por página
- **Datos estructurados** (JSON-LD)
- **Sitemap** automático
- **Robots.txt** configurado
- **Open Graph** y Twitter Cards

### 🔍 SEO Score

- **Lighthouse Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

## 🛠️ Scripts Disponibles


npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run start        # Servidor de producción
npm run lint         # ESLint
npm run type-check   # Verificación TypeScript
npm run analyze      # Análisis del bundle


## 🗺️ Roadmap

### 🚧 Próximas Funcionalidades

- [ ] **CMS Headless** (Strapi/Sanity integration)
- [ ] **Multiidioma** (i18n con next-intl)
- [ ] **Newsletter** (Mailchimp integration)
- [ ] **Comentarios** en blog posts
- [ ] **Búsqueda avanzada** (Algolia)
- [ ] **PWA** (Progressive Web App)
- [ ] **Analytics** dashboard
- [ ] **Donaciones** (Stripe integration)

### 📋 Guías de Contribución

- Seguir [Conventional Commits](https://conventionalcommits.org/)
- Escribir tests para nuevas funcionalidades
- Actualizar documentación
- Mantener compatibilidad con versiones anteriores

## 🐛 Troubleshooting

### Problemas Comunes

**Error de build en producción**
\`\`\`bash
# Limpiar cache y reinstalar
rm -rf .next node_modules
npm install
npm run build


**Imágenes no cargan**
- Verificar que estén en `/public/images/`
- Usar rutas absolutas: `/images/foto.jpg`

**Contenido no actualiza**
- Verificar sintaxis JSON en archivos `/content/`
- Reiniciar servidor de desarrollo

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**. Ver [LICENSE](LICENSE) para más detalles.

---

<div align="center">

</div>
