import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { TeamSection } from "@/components/team/team-section"
import { MethodologySection } from "@/components/team/methodology-section"
import { ContactSection } from "@/components/team/contact-section"

export default function TeamPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-card py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-serif font-black text-4xl md:text-5xl text-card-foreground mb-6">Nosotrxs</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Somos un grupo interdisciplinario de documentalistas, fotógrafxs y narrativxs comprometidxs con la
                justicia social y la construcción de memoria colectiva.
              </p>
            </div>
          </div>
        </section>

        <MethodologySection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
