import { Heart, Users, Archive } from "@/lib/icons"

export function MissionSection() {
  const values = [
    {
      icon: Users,
      title: "Colaboración",
      description: "Trabajamos junto a las comunidades, no sobre ellas",
    },
    {
      icon: Heart,
      title: "Ética",
      description: "Respetamos los tiempos y decisiones de quienes documentamos",
    },
    {
      icon: Archive,
      title: "Memoria",
      description: "Preservamos historias para las generaciones futuras",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Mission Statement */}
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-6">Nuestra misión</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Creemos en el poder transformador de la narrativa visual. Trabajamos de manera colaborativa con
              comunidades para documentar sus realidades, preservar su memoria y amplificar sus voces.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-xl text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-card rounded-lg p-8 md:p-12">
              <h3 className="font-serif font-bold text-2xl md:text-3xl text-card-foreground mb-4">
                ¿Quieres colaborar con nosotros?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Si tienes una historia que contar o quieres ser parte de nuestros proyectos, nos encantaría conocerte.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contacto"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
                >
                  Contáctanos
                </a>
                <a
                  href="/nosotros"
                  className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground rounded-md hover:bg-accent hover:text-accent-foreground transition-colors font-medium"
                >
                  Conoce al equipo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
