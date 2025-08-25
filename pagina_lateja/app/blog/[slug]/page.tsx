import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react"

// Mock data - in real app this would come from content/blog.json
const blogPosts = [
  {
    id: "metodologia-colaborativa-documental",
    title: "Hacia una metodología colaborativa en el documentalismo",
    slug: "metodologia-colaborativa-documental",
    excerpt:
      "Reflexiones sobre cómo construir narrativas documentales desde la horizontalidad y el respeto por las comunidades protagonistas.",
    content: `El documentalismo tradicional ha estado marcado por una relación vertical entre quien documenta y quien es documentado. En nuestra experiencia como colectiva, hemos encontrado que las narrativas más potentes emergen cuando esta relación se transforma en un diálogo horizontal.

## La importancia del proceso

Cuando hablamos de metodología colaborativa, no nos referimos únicamente al resultado final, sino fundamentalmente al proceso. Es en el camino donde se construyen las relaciones de confianza que permiten que las historias emerjan de manera auténtica.

### Principios fundamentales

1. **Tiempo comunitario**: Respetar los tiempos de las comunidades, no imponer agendas externas.
2. **Decisión colectiva**: Las comunidades deciden qué aspectos de sus historias quieren compartir.
3. **Beneficio mutuo**: Los proyectos deben generar valor para las comunidades, no solo para quienes documentan.

## Desafíos y aprendizajes

Este enfoque no está exento de desafíos. Requiere más tiempo, recursos y una constante reflexión sobre nuestro rol como documentalistas. Sin embargo, los resultados hablan por sí solos: narrativas más ricas, relaciones más profundas y un impacto real en las comunidades.

La metodología colaborativa no es solo una técnica, es una postura ética y política que reconoce la agencia de las comunidades y su derecho a controlar sus propias narrativas.`,
    author: "Ana García",
    date: "2024-02-15",
    readTime: "8 min",
    tags: ["metodología", "colaboración", "ética", "documentalismo"],
    image: "/documentary-collective-working-in-field-with-camer.png",
  },
]

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Back Navigation */}
        <div className="container mx-auto px-4 py-6">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/blog" className="inline-flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Volver al blog
            </Link>
          </Button>
        </div>

        {/* Article Header */}
        <article className="pb-12">
          <header className="relative">
            {/* Hero Image */}
            <div className="aspect-video md:aspect-[21/9] relative">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
              <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Article Meta */}
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto -mt-32 relative z-10">
                <div className="bg-card rounded-lg p-8 md:p-12 shadow-lg">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString("es-ES")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="ml-auto">
                      <Share2 className="h-4 w-4 mr-2" />
                      Compartir
                    </Button>
                  </div>

                  <h1 className="font-serif font-black text-3xl md:text-4xl lg:text-5xl text-card-foreground mb-6 leading-tight">
                    {post.title}
                  </h1>

                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">{post.excerpt}</p>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Article Content */}
          <div className="container mx-auto px-4 mt-12">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <div className="text-foreground leading-relaxed space-y-6">
                  {post.content.split("\n\n").map((paragraph, index) => {
                    if (paragraph.startsWith("## ")) {
                      return (
                        <h2 key={index} className="font-serif font-bold text-2xl text-foreground mt-8 mb-4">
                          {paragraph.replace("## ", "")}
                        </h2>
                      )
                    }
                    if (paragraph.startsWith("### ")) {
                      return (
                        <h3 key={index} className="font-serif font-semibold text-xl text-foreground mt-6 mb-3">
                          {paragraph.replace("### ", "")}
                        </h3>
                      )
                    }
                    if (paragraph.startsWith("1. ") || paragraph.startsWith("2. ") || paragraph.startsWith("3. ")) {
                      const items = paragraph.split("\n").filter((item) => item.match(/^\d+\./))
                      return (
                        <ol key={index} className="list-decimal list-inside space-y-2 ml-4">
                          {items.map((item, itemIndex) => (
                            <li key={itemIndex} className="text-muted-foreground">
                              {item.replace(/^\d+\.\s*\*\*(.*?)\*\*:\s*/, "").replace(/^\d+\.\s*/, "")}
                            </li>
                          ))}
                        </ol>
                      )
                    }
                    return (
                      <p key={index} className="text-muted-foreground leading-relaxed">
                        {paragraph}
                      </p>
                    )
                  })}
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-12 pt-8 border-t">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <div>
                    <h4 className="font-serif font-semibold text-lg text-foreground mb-1">{post.author}</h4>
                    <p className="text-sm text-muted-foreground">
                      Miembro de la Colectiva Documentalista, especializada en metodologías colaborativas y narrativas
                      de género y territorio.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  )
}
