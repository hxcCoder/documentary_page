"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Sun, Moon } from "@/lib/icons"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const siteConfig = {
    site: { title: "Colectiva Documentalista" },
    navigation: {
      main: [
        { label: "Inicio", href: "/" },
        {
          label: "Proyectos",
          href: "/proyectos",
          submenu: [
            { label: "Todos los proyectos", href: "/proyectos" },
            { label: "Documentales", href: "/proyectos/documentales" },
            { label: "Crónicas", href: "/proyectos/cronicas" },
            { label: "Fotografía", href: "/proyectos/fotografia" },
            { label: "Timeline", href: "/timeline" },
            { label: "Mapa", href: "/mapa" },
          ],
        },
        { label: "Archivo", href: "/archivo" },
        { label: "Nosotrxs", href: "/nosotros" },
        { label: "Blog", href: "/blog" },
        { label: "Contacto", href: "/contacto" },
      ],
    },
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-6">
            <div className="w-8 h-8 bg-primary/10 rounded-md flex items-center justify-center">
              {/* Placeholder for logo - replace with actual logo image */}
              <div className="w-6 h-6 bg-primary/20 rounded"></div>
            </div>
            <span className="font-serif font-bold text-xl text-primary">{siteConfig.site.title}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {siteConfig.navigation.main.map((item) => (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-card border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-card-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 h-9"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="sm" className="md:hidden w-9 h-9" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-card">
            <nav className="py-4 space-y-2">
              {siteConfig.navigation.main.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className="block px-4 py-2 text-sm font-medium text-card-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.submenu && (
                    <div className="pl-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
