import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { InteractiveTimeline } from "@/components/timeline/interactive-timeline"

export default function TimelinePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-card py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif font-black text-4xl md:text-5xl text-card-foreground mb-6">
                Timeline de Proyectos
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Explora la evolución de nuestro trabajo a través del tiempo. Cada proyecto marca un hito en nuestro
                camino de documentación colaborativa.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <InteractiveTimeline />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
