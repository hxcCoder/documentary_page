import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BlogGrid } from "@/components/blog/blog-grid"
import { FeaturedPost } from "@/components/blog/featured-post"

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-card py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif font-black text-4xl md:text-5xl text-card-foreground mb-6">Reflexiones</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Artículos y reflexiones sobre documentalismo, metodologías colaborativas y narrativas visuales que
                transforman realidades.
              </p>
            </div>
          </div>
        </section>

        <FeaturedPost />
        <BlogGrid />
      </main>
      <Footer />
    </div>
  )
}
