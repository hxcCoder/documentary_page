import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ProjectsGrid } from "@/components/projects/projects-grid"

export default function DocumentalesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-card py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif font-black text-4xl md:text-5xl text-card-foreground mb-6">Documentales</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Narrativas audiovisuales que profundizan en historias de resistencia, memoria y transformación social
                desde una perspectiva colaborativa y ética.
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <ProjectsGrid />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
