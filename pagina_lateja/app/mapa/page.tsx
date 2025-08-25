import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { InteractiveMap } from "@/components/map/interactive-map"

export default function MapPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-card py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif font-black text-4xl md:text-5xl text-card-foreground mb-6">
                Mapa de Proyectos
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Visualiza la distribución geográfica de nuestros proyectos. Cada punto representa historias y
                comunidades con las que hemos trabajado.
              </p>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <InteractiveMap />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
