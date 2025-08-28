<div align="center">

# 📸 Documental Graphic Collective

### Modern web platform for documentary collectives

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![MIT License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

[Live Demo](https://documentalistpage-git-main-benjaminmillalonc-6594s-projects.vercel.app?_vercel_share=DrsLy1zWyqAfZRazy5ffeNJ9CLhhJAIr) • [Documentation](./pagina_lateja/CUSTOMIZATION.md) • [👨‍💻My Portfolio](https://github.com/hxcCoder)

</div>

---

## 🎯 Description

An **editorial and minimalist** web platform designed specifically for documentary collectives looking to showcase their professional work. Perfect for organizations working in **visual narratives**, **investigative journalism**, and **social documentation**.

### ✨ Main Features

🎨 **Minimalist Editorial Design** - Clean interface that prioritizes visual content
📝 **Configurable Content System** - Complete management through JSON files
🎬 **Project Showcase** - Organized documentaries, chronicles, and photography
🔍 **Interactive Archive** - Searchable library with advanced filters
📅 **Chronological Timeline** - Temporal navigation of projects
🗺️ **Interactive Map** - Geographic visualization of work
📰 **Integrated Blog** - Platform for articles and reflections
🌙 **Dark/Light Mode** - Adaptive visual experience
🚀 **SEO Optimized** - Metadata and structured data
📱 **100% Responsive** - Adapted for all devices

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|----------|-----------|
| **Next.js** | 14 | React Framework with App Router |
| **TypeScript** | 5.0 | Static Typing |
| **Tailwind CSS** | 4.0 | Utility Styles |
| **shadcn/ui** | Latest | Accessible Components |
| **Montserrat + Open Sans** | - | Editorial Fonts |

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation
---
# 1. Clone the repository
git clone https://github.com/your-user/colectiva-documentalista.git
cd colectiva-documentalista

# 2. Install dependencies
npm install

# 3. Run in development
npm run dev

# 4. Open in browser
# http://localhost:3000
\`\`\`

## ⚙️ Content Configuration

### 🎛️ JSON Content System

All content is managed using JSON files in `/content/`, allowing **code-free updates**:

\`\`\`json
// content/site.json - Global Configuration
{
"name": "Your Collective",
"tagline": "Visual narratives for social change",
"description": "We document realities to transform societies",
"contact": {
"email": "contacto@tucolectiva.org",
"phone": "+1234567890",
"address": "Your address"
},
"social": {
"instagram": "https://instagram.com/tucolectiva",
"twitter": "https://twitter.com/tucolectiva",
"youtube": "https://youtube.com/@tucolectiva"
}
}
\`\`\`

### 📝 Add New Project

\`\`\`json
// content/projects.json
{
"id": "my-new-documentary",
"title": "Voices of the Territory",
"type": "documentary",
"year": 2024,
"description": "A journey through rural communities...",
"longDescription": "Full description of the project...",
"image": "/images/voces-territorio.jpg",
"gallery": [
"/images/gallery/img1.jpg",
"/images/gallery/img2.jpg"
],
"team": ["María González", "Carlos Ruiz"],
"collaborators": ["El Roble Community"],
"location": "Valle del Cauca, Colombia",
"coordinates": [3.4516, -76.5320],
"tags": ["rural", "territory", "community"],
"status": "completed",
"featured": true,
"videoUrl": "https://vimeo.com/123456789",
"awards": ["DocMontaña Festival 2024"]
}
\`\`\`

## 🎨 Design Customization

### 🎨 Color Palette

\`\`\`css
/* app/globals.css */
:root {
--primary: 142 69% 58%; /* Documentary Green */
--secondary: 210 40% 98%; /* Editorial Gray */
--accent: 47 96% 89%; /* Soft Yellow */
--muted: 210 40% 96%; /* Very Light Gray */
--destructive: 0 84% 60%; /* Alert Red */
}

[data-theme="dark"] {
--primary: 142 69% 58%;
--secondary: 222 84% 5%;
--accent: 47 96% 89%;
/* ... more colors for dark mode */
}
\`\`\`

### 📝 Fonts

- **Montserrat** (font-sans): Titles and headings
- **Open Sans** (font-serif): Body text and paragraphs

## 🚀 Deployment and Production

### Other Providers

Compatible with any platform that supports Next.js:

- **Netlify**: `npm run build && npm run export`
- **Railway**: Automatic configuration
- **DigitalOcean**: App Platform
- **AWS Amplify**: Serverless hosting

### Environment Variables

.env.local (optional)
NEXT_PUBLIC_SITE_URL=https://tucolectiva.org
NEXT_PUBLIC_ANALYTICS_ID=G-XXXXXXXXXX

## 📊 Performance and SEO

### ⚡ Included Optimizations

- **Core Web Vitals** optimized
- **Lazy loading** of images
- **Dynamic metadata** per page
- **Structured data** (JSON-LD)
- **Automatic sitemap**
- **Robots.txt** configured
- **Open Graph** and Twitter Cards
  
### 🔍 SEO Score

- **Lighthouse Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

## 🛠️ Available Scripts

npm run dev # Development server
npm run build # Production build
npm run start # Production server
npm run lint # ESLint
npm run type-check # TypeScript verification
npm run analyze # Bundle analysis

## 🗺️ Roadmap

### 🚧 Upcoming Features

- [ ] **Headless CMS** (Strapi/Sanity integration)
- [ ] **Multilingual** (i18n with next-intl)
- [ ] **Newsletter** (Mailchimp integration)
- [ ] **Comments** on blog posts
- [ ] **Advanced search** (Algolia)
- [ ] **PWA** (Progressive Web App)
- [ ] **Analytics** dashboard
- [ ] **Donations** (Stripe integration)
- [ ] 
## 🐛 Troubleshooting

### Common Issues

**Build Error in Production**
\`\`\`bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build

**Images not loading**
- Check they are in `/public/images/`
- Use absolute paths: `/images/foto.jpg`

**Content not updating**
- Check JSON syntax in `/content/` files
- Restart development server
  
## 📄 License

This project is licensed under the **MIT License**. See [LICENSE](LICENSE) for details.

---

<div align="center">

</div>
