import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "@/lib/icons"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/documentary-collective-working-in-field-with-camer.png"
          alt="Colectiva trabajando en campo documentando una historia"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="font-serif font-black text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
          Documentando realidades, <span className="text-accent">construyendo memoria</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Somos una colectiva que utiliza la fotografía, el video y la narrativa para visibilizar historias que
          transforman.
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href="/proyectos" className="inline-flex items-center gap-2">
            Conoce nuestro trabajo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
