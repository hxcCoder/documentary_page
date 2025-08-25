import { Users, Search, Camera, Share } from "lucide-react"

const methodologySteps = [
  {
    icon: Users,
    title: "Acercamiento",
    description:
      "Establecemos vínculos de confianza con las comunidades, respetando sus tiempos y procesos organizativos.",
  },
  {
    icon: Search,
    title: "Co-creación",
    description:
      "Desarrollamos los proyectos junto a lxs protagonistas, definiendo colaborativamente los objetivos y metodologías.",
  },
  {
    icon: Camera,
    title: "Documentación",
    description: "Registramos historias con respeto y ética, priorizando las voces y perspectivas de las comunidades.",
  },
  {
    icon: Share,
    title: "Devolución",
    description:
      "Compartimos los resultados con las comunidades y garantizamos que tengan control sobre sus narrativas.",
  },
]

export function MethodologySection() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-card-foreground mb-6">Nuestra metodología</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Trabajamos desde una perspectiva colaborativa y horizontal, donde las comunidades son protagonistas de sus
              propias narrativas. Nuestro proceso incluye:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {methodologySteps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-xl text-card-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Principles */}
          <div className="bg-background rounded-lg p-8">
            <h3 className="font-serif font-bold text-2xl text-foreground mb-6 text-center">Nuestros principios</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-serif font-semibold text-lg text-foreground mb-2">Horizontalidad</h4>
                <p className="text-sm text-muted-foreground">
                  Construimos relaciones de igualdad y respeto mutuo con las comunidades.
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-serif font-semibold text-lg text-foreground mb-2">Ética</h4>
                <p className="text-sm text-muted-foreground">
                  Priorizamos el bienestar y la autonomía de las personas y comunidades documentadas.
                </p>
              </div>
              <div className="text-center">
                <h4 className="font-serif font-semibold text-lg text-foreground mb-2">Transformación</h4>
                <p className="text-sm text-muted-foreground">
                  Buscamos que nuestro trabajo contribuya a procesos de cambio social positivo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
