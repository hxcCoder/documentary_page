import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User } from "lucide-react"

const blogPosts = [
  {
    id: "archivo-como-memoria-colectiva",
    title: "El archivo como construcción de memoria colectiva",
    slug: "archivo-como-memoria-colectiva",
    excerpt:
      "La importancia de preservar y organizar los materiales documentales como herramienta de memoria histórica y resistencia.",
    author: "María Torres",
    date: "2024-01-20",
    readTime: "6 min",
    tags: ["archivo", "memoria", "historia", "preservación"],
    image: "/rural-community-documentary-scene-with-people-shar.png",
  },
  {
    id: "fotografia-territorio-resistencia",
    title: "Fotografía, territorio y resistencia",
    slug: "fotografia-territorio-resistencia",
    excerpt:
      "Cómo la imagen fotográfica se convierte en herramienta de denuncia y visibilización de las luchas territoriales.",
    author: "Carlos Mendoza",
    date: "2023-12-10",
    readTime: "10 min",
    tags: ["fotografía", "territorio", "resistencia", "visual"],
    image: "/documentary-collective-working-in-field-with-camer.png",
  },
  {
    id: "narrativas-audiovisuales-transformacion",
    title: "Narrativas audiovisuales para la transformación social",
    slug: "narrativas-audiovisuales-transformacion",
    excerpt: "El potencial transformador del video documental cuando se construye desde y con las comunidades.",
    author: "Colectiva Documentalista",
    date: "2023-11-05",
    readTime: "7 min",
    tags: ["video", "transformación", "social", "participativo"],
    image: "/rural-community-documentary-scene-with-people-shar.png",
  },
]

export function BlogGrid() {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-2xl md:text-3xl text-card-foreground mb-4">Más artículos</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group">
                <article className="bg-background rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                  {/* Post Image */}
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Post Content */}
                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString("es-ES")}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="font-serif font-semibold text-lg text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {post.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{post.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
