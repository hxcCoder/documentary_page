<div align="center">

# 📸 Documental Graphic Collective

### Web platform for documentary collectives

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![MIT License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

[Live Demo](https://documentalistpage-git-main-benjaminmillalonc-6594s-projects.vercel.app?_vercel_share=DrsLy1zWyqAfZRazy5ffeNJ9CLhhJAIr) • [Documentation](./pagina_lateja/CUSTOMIZATION.md) • [👨‍💻My Portfolio](https://github.com/hxcCoder)

</div>

---

## 🎯 Description
A website designed for a graphic documentary company.

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|----------|-----------|
| **Next.js** | 14 | React Framework with App Router |
| **TypeScript** | 5.0 | Static Typing |
| **Tailwind CSS** | 4.0 | Utility Styles |
| **shadcn/ui** | Latest | Accessible Components |
| **Montserrat + Open Sans** | - | Editorial Fonts |

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

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

**Build Error in Production**

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
