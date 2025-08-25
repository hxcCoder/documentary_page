# Guía de Contribución

¡Gracias por tu interés en contribuir a la Colectiva Gráfica Documentalista! Esta guía te ayudará a entender cómo participar en el desarrollo del proyecto.

## 🚀 Primeros Pasos

### Configuración del Entorno

1. **Fork** el repositorio
2. **Clona** tu fork localmente
3. **Instala** las dependencias: `npm install`
4. **Crea** una rama para tu contribución: `git checkout -b feature/mi-contribucion`

### Estructura del Proyecto

Familiarízate con la estructura del proyecto:
- `/app` - Páginas y rutas de Next.js
- `/components` - Componentes reutilizables
- `/content` - Archivos de configuración JSON
- `/lib` - Utilidades y helpers

## 📝 Tipos de Contribución

### 1. Reportar Bugs

- Usa el template de issue para bugs
- Incluye pasos para reproducir el problema
- Proporciona información del entorno (browser, OS)
- Adjunta capturas de pantalla si es relevante

### 2. Sugerir Funcionalidades

- Usa el template de issue para features
- Describe claramente la funcionalidad propuesta
- Explica por qué sería útil para el proyecto
- Considera el impacto en la experiencia de usuario

### 3. Contribuir Código

#### Antes de Empezar
- Revisa los issues existentes
- Comenta en el issue que planeas trabajar
- Espera confirmación antes de empezar

#### Estándares de Código

**TypeScript**
- Usa tipos explícitos cuando sea necesario
- Evita `any`, prefiere tipos específicos
- Documenta interfaces complejas

**React/Next.js**
- Usa componentes funcionales con hooks
- Implementa Server Components cuando sea apropiado
- Mantén componentes pequeños y enfocados

**Estilos**
- Usa Tailwind CSS para estilos
- Sigue el sistema de diseño establecido
- Mantén consistencia visual

**Estructura de Archivos**
- Usa kebab-case para nombres de archivos
- Agrupa componentes relacionados
- Mantén imports organizados

#### Proceso de Desarrollo

1. **Desarrollo**
   \`\`\`bash
   npm run dev
   \`\`\`

2. **Linting**
   \`\`\`bash
   npm run lint
   \`\`\`

3. **Type Checking**
   \`\`\`bash
   npm run type-check
   \`\`\`

4. **Build**
   \`\`\`bash
   npm run build
   \`\`\`

### 4. Mejorar Documentación

- Corrige errores tipográficos
- Mejora explicaciones existentes
- Agrega ejemplos de uso
- Traduce contenido (si aplica)

## 🎨 Guías de Diseño

### Principios de Diseño

- **Minimalismo**: Menos es más, enfoque en el contenido
- **Accesibilidad**: Cumplir estándares WCAG AA
- **Responsividad**: Mobile-first design
- **Performance**: Optimizar carga y interacciones

### Sistema de Colores

Mantén consistencia con la paleta establecida:
- Verde documentalista (primary)
- Grises neutros (secondary/muted)
- Amarillo suave (accent)

### Tipografía

- **Montserrat**: Títulos y encabezados
- **Open Sans**: Texto de cuerpo
- Mantén jerarquía visual clara

## 📋 Checklist para Pull Requests

Antes de enviar tu PR, verifica:

- [ ] El código compila sin errores
- [ ] Pasa todos los lints
- [ ] Los tipos TypeScript son correctos
- [ ] Los estilos son consistentes
- [ ] La funcionalidad funciona en mobile
- [ ] Se mantiene la accesibilidad
- [ ] La documentación está actualizada
- [ ] Los commits tienen mensajes descriptivos

## 📝 Convenciones de Commits

Usa el formato conventional commits:

\`\`\`
tipo(scope): descripción

[cuerpo opcional]

[footer opcional]
\`\`\`

**Tipos:**
- `feat`: Nueva funcionalidad
- `fix`: Corrección de bug
- `docs`: Cambios en documentación
- `style`: Cambios de formato/estilo
- `refactor`: Refactoring de código
- `test`: Agregar o modificar tests
- `chore`: Tareas de mantenimiento

**Ejemplos:**
\`\`\`
feat(projects): agregar filtro por año en timeline
fix(archive): corregir búsqueda por tags
docs(readme): actualizar guía de instalación
\`\`\`

## 🔍 Proceso de Review

### Para Contribuidores

1. **Crea** el PR con descripción clara
2. **Vincula** issues relacionados
3. **Responde** a comentarios de review
4. **Actualiza** el PR según feedback

### Para Reviewers

1. **Revisa** funcionalidad y código
2. **Verifica** estándares y convenciones
3. **Prueba** la funcionalidad localmente
4. **Proporciona** feedback constructivo

## 🚀 Deployment y Release

### Proceso de Release

1. **Merge** a rama `main`
2. **Deploy automático** a staging
3. **Testing** en ambiente de staging
4. **Deploy** a producción
5. **Tag** de versión

### Versionado

Seguimos [Semantic Versioning](https://semver.org/):
- `MAJOR`: Cambios incompatibles
- `MINOR`: Nuevas funcionalidades compatibles
- `PATCH`: Correcciones de bugs

## 🤝 Código de Conducta

### Nuestro Compromiso

Nos comprometemos a hacer de la participación en nuestro proyecto una experiencia libre de acoso para todos, independientemente de edad, tamaño corporal, discapacidad, etnia, identidad y expresión de género, nivel de experiencia, nacionalidad, apariencia personal, raza, religión o identidad y orientación sexual.

### Estándares

**Comportamientos que contribuyen a crear un ambiente positivo:**
- Usar lenguaje acogedor e inclusivo
- Respetar diferentes puntos de vista y experiencias
- Aceptar críticas constructivas con gracia
- Enfocarse en lo que es mejor para la comunidad
- Mostrar empatía hacia otros miembros

**Comportamientos inaceptables:**
- Uso de lenguaje o imágenes sexualizadas
- Comentarios despectivos, insultos o ataques personales
- Acoso público o privado
- Publicar información privada de otros sin permiso
- Otras conductas que podrían considerarse inapropiadas

## 📞 Contacto

¿Tienes preguntas sobre cómo contribuir?

- **Email**: dev@colectiva.org
- **Discord**: [Servidor de la comunidad]
- **Issues**: Para preguntas técnicas específicas

## 🙏 Reconocimientos

Agradecemos a todos los contribuidores que hacen posible este proyecto. Cada contribución, por pequeña que sea, es valiosa para la comunidad documentalista.

---

¡Esperamos tu contribución! 🎬📸
