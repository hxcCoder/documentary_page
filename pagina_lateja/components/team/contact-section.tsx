import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Send, Heart } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="h-8 w-8 text-primary" />
          </div>

          <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-6">
            ¿Quieres trabajar con nosotrxs?
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Si tienes una historia que contar, quieres colaborar en nuestros proyectos, o simplemente quieres conocer
            más sobre nuestro trabajo, nos encantaría conversar contigo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg">
              <Link href="/contacto" className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Escríbenos
              </Link>
            </Button>

            <Button variant="outline" size="lg" asChild>
              <a href="https://t.me/colectivadoc" className="inline-flex items-center gap-2">
                <Send className="h-4 w-4" />
                Telegram
              </a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            También puedes seguir nuestro trabajo en redes sociales y estar al tanto de nuestros proyectos.
          </p>
        </div>
      </div>
    </section>
  )
}
