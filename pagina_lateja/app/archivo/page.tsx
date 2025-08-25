import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ArchiveSearch } from "@/components/archive/archive-search"
import { ArchiveGrid } from "@/components/archive/archive-grid"
import { ArchiveStats } from "@/components/archive/archive-stats"

export default function ArchivePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-card py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif font-black text-4xl md:text-5xl text-card-foreground mb-6">Archivo Digital</h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Biblioteca de materiales documentales organizados por tema, fecha y autor/a. Un espacio para explorar y
                acceder a nuestro archivo de investigación y documentación.
              </p>
              <ArchiveStats />
            </div>
          </div>
        </section>

        {/* Search and Archive */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <ArchiveSearch />
            <ArchiveGrid />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
