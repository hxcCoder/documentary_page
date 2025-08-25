# Guía de Personalización - Colectiva Documentalista

## 📝 Modificación de Contenido

### Configuración General
Edita `content/config.json` para cambiar:
- Información del sitio (título, descripción, contacto)
- Redes sociales
- Colores del tema
- Funcionalidades habilitadas

### Contenido por Sección

#### Homepage (`content/home.json`)
- Hero: título, subtítulo, imagen de fondo
- Proyecto destacado
- Sección de misión y valores

#### Proyectos (`content/projects.json`)
- Lista de proyectos con metadatos
- Imágenes, descripciones, equipos
- Estados y categorías

#### Equipo (`content/team.json`)
- Perfiles de miembros
- Metodología de trabajo
- Principios de la colectiva

#### Blog (`content/blog.json`)
- Artículos y posts
- Autores y fechas
- Categorías y etiquetas

#### Archivo (`content/archive.json`)
- Elementos del archivo
- Metadatos y filtros
- Estadísticas

## 🎨 Personalización Visual

### Colores
Los colores principales se definen en `app/globals.css`:
\`\`\`css
--primary: 45 69% 13%;        /* Verde documentalista */
--accent: 82 47% 41%;         /* Verde claro */
--background: 0 0% 100%;      /* Blanco */
--foreground: 240 10% 3.9%;   /* Gris oscuro */
\`\`\`

### Tipografías
Las fuentes se configuran en `app/layout.tsx`:
- Montserrat (headings): `font-serif`
- Open Sans (body): `font-sans`

### Imágenes
Reemplaza las imágenes en la carpeta `public/`:
- Logo: `public/logo.png`
- Favicon: `public/favicon.ico`
- Imágenes de proyectos: `public/projects/`
- Fotos del equipo: `public/team/`

## 🔧 Funcionalidades

### Agregar Nuevo Proyecto
1. Edita `content/projects.json`
2. Agrega las imágenes en `public/projects/`
3. El proyecto aparecerá automáticamente

### Agregar Miembro del Equipo
1. Edita `content/team.json`
2. Agrega la foto en `public/team/`
3. Actualiza la página automáticamente

### Agregar Artículo del Blog
1. Edita `content/blog.json`
2. Crea el archivo markdown en `content/blog/posts/`
3. Agrega imágenes en `public/blog/`

## 📱 Responsive Design
El sitio es completamente responsive:
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Todas las secciones se adaptan automáticamente

## 🌙 Modo Oscuro
El modo oscuro está habilitado por defecto:
- Toggle en el header
- Colores automáticos para todos los componentes
- Persistencia en localStorage

## 🚀 Deployment
Para desplegar el sitio:
1. Push a GitHub
2. Conecta con Vercel
3. Las variables de entorno se configuran automáticamente
4. Deploy automático en cada push

## 📞 Soporte
Para modificaciones avanzadas o soporte técnico:
- Revisa la documentación en `README.md`
- Consulta los comentarios en el código
- Contacta al desarrollador si necesitas ayuda
