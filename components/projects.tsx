import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "WG-DESIGN",
      description:
        "Site dedicado ao meu portfólio (este site!), desenvolvido para demonstrar habilidades de design e desenvolvimento frontend moderno com React e Tailwind.",
      technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
      github: "https://github.com/Willyang10x/WG-DESIGN",
      demo: "https://wg-designer.netlify.app/",
      featured: true,
    },
    {
      title: "Physio Track",
      description:
        "Sistema de acompanhamento e gestão para fisioterapia. Permite o cadastro de pacientes, monitoramento de sessões e evolução do tratamento, focado em usabilidade e eficiência.",
      technologies: ["React", "TypeScript", "Node.js", "Tailwind CSS"], // Tecnologias prováveis; ajuste se necessário
      github: "https://github.com/Willyang10x/PhysioTrack", // Link ajustado para o padrão do seu GitHub
      demo: null,
      featured: true,
    },
    {
      title: "ColorBot",
      description:
        "Ferramenta visual para designers e desenvolvedores criarem paletas de cores harmônicas a partir de uma cor base.",
      technologies: ["JavaScript", "CSS3", "HTML5"],
      github: "https://github.com/Willyang10x/ColorBot",
      featured: false,
    },
    {
      title: "Bot de WhatsApp",
      description:
        "Automação de respostas e comandos para WhatsApp rodando localmente. Facilita o atendimento e interação automatizada.",
      technologies: ["JavaScript", "Node.js", "Automação"],
      github: "https://github.com/Willyang10x/Bot-WhatsApp",
      featured: false,
    },
    {
      title: "Site New Start",
      description:
        "Website desenvolvido para uma agência de mídia digital, focado na divulgação de trabalhos e serviços oferecidos pela empresa.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/Willyang10x/Site-New-Start",
      featured: false,
    },
    {
      title: "Projeto Final Tecinfo",
      description:
        "Projeto final do curso técnico, demonstrando conhecimentos adquiridos em desenvolvimento web e boas práticas de programação.",
      technologies: ["JavaScript", "HTML5", "CSS3"],
      github: "https://github.com/Willyang10x/Projeto-Final-Tecinfo",
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meus <span className="text-primary">Projetos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Alguns dos projetos que desenvolvi para aprimorar minhas habilidades em Front-end e Back-end
          </p>
        </div>

        <div className="grid gap-8">
          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors group flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-card-foreground group-hover:text-primary transition-colors text-2xl">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 flex-1 flex flex-col">
                    <p className="text-muted-foreground leading-relaxed flex-1">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-2">
                      <Button variant="outline" size="sm" asChild className="w-full sm:w-auto">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github size={16} className="mr-2" />
                          Código
                        </a>
                      </Button>
                      {project.demo && (
                        <Button size="sm" asChild className="w-full sm:w-auto">
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={16} className="mr-2" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>

          {/* Other Projects */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-8 text-center flex items-center justify-center gap-2">
              <span className="bg-primary/10 px-4 py-1 rounded-full text-primary text-sm uppercase tracking-wider">Outros Projetos</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              {projects
                .filter((project) => !project.featured)
                .map((project, index) => (
                  <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors h-full flex flex-col">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-semibold text-card-foreground">{project.title}</h4>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors p-1"
                        >
                          <Github size={22} />
                        </a>
                      </div>

                      <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-1">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs bg-background/50">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Button variant="outline" size="lg" asChild className="px-8">
            <a href="https://github.com/Willyang10x?tab=repositories" target="_blank" rel="noopener noreferrer">
              <Github size={20} className="mr-2" />
              Ver Todos no GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}