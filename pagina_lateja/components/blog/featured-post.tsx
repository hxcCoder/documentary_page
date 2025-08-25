import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User } from "lucide-react"

const featuredPost = {
  id: "metodologia-colaborativa-documental",
  title: "Hacia una metodología colaborativa en el documentalismo",
  slug: "metodologia-colaborativa-documental",
  excerpt:
    "Reflexiones sobre cómo construir narrativas documentales desde la horizontalidad y el respeto por las comunidades protagonistas.",
  author: "Ana García",
  date: "2024-02-15",
  readTime: "8 min",
  tags: ["metodología", "colaboración", "ética", "documentalismo"],
  image: "/documentary-collective-working-in-field-with-camer.png",
}

export function FeaturedPost() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-2xl md:text-3xl text-foreground mb-4">Artículo destacado</h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </div>

          <Link href={`/blog/${featuredPost.slug}`} className="group">
            <article className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="aspect-video lg:aspect-square relative overflow-hidden">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">Destacado</Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString("es-ES")}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  <h3 className="font-serif font-bold text-2xl md:text-3xl text-card-foreground mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6">{featuredPost.excerpt}</p>

                  <div className="flex flex-wrap gap-2">
                    {featuredPost.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </Link>
        </div>
      </div>
    </section>
  )
}
