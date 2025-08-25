import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ProjectsGrid } from "@/components/projects/projects-grid"

export default function FotografiaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-card py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif font-black text-4xl md:text-5xl text-card-foreground mb-6">Fotografía</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Series fotográficas que capturan momentos, espacios y personas, construyendo archivo visual de las
                realidades que documentamos.
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
