import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "WG-DESIGN",
      description:
        "Site dedicado ao meu portfólio, desenvolvido em 2 meses usando HTML, CSS e JavaScript puro. Projeto focado em demonstrar habilidades de design e desenvolvimento frontend.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/Willyang10x/WG-DESIGN",
      demo: "https://wg-designer.netlify.app/",
      featured: true,
    },
    {
      title: "Gerenciador de Tarefas",
      description:
        "Lista de Tarefas (To-Do List) minimalista desenvolvida em React. Projeto focado em praticar conceitos fundamentais como componentes, estados e hooks.",
      technologies: ["React", "TypeScript", "CSS"],
      github: "https://github.com/Willyang10x/Gerenciador-de-tarefas",
      demo: "https://tasks-in-list.netlify.app/",
      featured: true,
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
            Alguns dos projetos que desenvolvi para aprimorar minhas habilidades
          </p>
        </div>

        <div className="grid gap-8">
          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors group">
                  <CardHeader>
                    <CardTitle className="text-card-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-2">
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github size={16} className="mr-2" />
                          Código
                        </a>
                      </Button>
                      {project.demo && (
                        <Button size="sm" asChild>
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
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Outros Projetos</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {projects
                .filter((project) => !project.featured)
                .map((project, index) => (
                  <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-lg font-semibold text-card-foreground">{project.title}</h4>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Github size={20} />
                        </a>
                      </div>

                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary" className="text-xs">
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

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/Willyang10x" target="_blank" rel="noopener noreferrer">
              <Github size={20} className="mr-2" />
              Ver Mais no GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
