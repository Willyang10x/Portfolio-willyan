import { Card, CardContent } from "@/components/ui/card"
import { MapPin, GraduationCap, Code, Heart } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sobre <span className="text-primary">Mim</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Conheça um pouco mais sobre minha jornada e paixão pela tecnologia
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sou um desenvolvedor front-end apaixonado por tecnologia,  sou formado em
              <strong className="text-foreground"> Técnico em TI pela Lourdinas</strong> e atualmente cursando
              <strong className="text-foreground"> Análise e Desenvolvimento de Sistemas na UEPB</strong>. Minha jornada
              na programação começou com curiosidade e se transformou em uma verdadeira paixão.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Especializo-me em desenvolvimento front-end moderno e também trabalho com backend utilizando MySQL. Foco
              em criar aplicações responsivas, intuitivas e completas, sempre buscando novos desafios e oportunidades
              para crescer profissionalmente.
            </p>

            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={20} className="text-primary" />
              <span>Campina Grande - PB</span>
            </div>
          </div>

          <div className="grid gap-4">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">Educação</h3>
                    <p className="text-muted-foreground">Técnico em TI - Lourdinas</p>
                    <p className="text-muted-foreground">ADS - UEPB (cursando)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Code className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">Foco</h3>
                    <p className="text-muted-foreground">Desenvolvimento Front-end & Backend</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Heart className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">Paixão</h3>
                    <p className="text-muted-foreground">Criar experiências digitais incríveis</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
