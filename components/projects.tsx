"use client"

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Code2 } from "lucide-react"
import { motion } from "framer-motion"

export function Projects() {
  const projects = [
    {
      title: "WG-DESIGN Portfolio",
      description: "Meu espaço pessoal na web. Design moderno com animações fluidas, Next.js 14 e Tailwind CSS.",
      tags: ["React", "Next.js", "Framer Motion", "Tailwind"],
      github: "https://github.com/Willyang10x/WG-DESIGN",
      demo: "https://wg-designer.netlify.app/",
      featured: true,
    },
    {
      title: "Physio Track",
      description: "Plataforma completa para gestão de clínicas de fisioterapia. Prontuários, agendamentos e financeiro.",
      tags: ["TypeScript", "React", "Node.js", "MySQL"], 
      github: "https://github.com/Willyang10x/PhysioTrack", 
      demo: "https://physiotrack-web.vercel.app/",
      featured: true,
    },
    {
      title: "ColorBot",
      description: "Ferramenta essencial para designers gerarem paletas de cores harmônicas instantaneamente.",
      tags: ["JavaScript", "Algorithm", "CSS3"],
      github: "https://github.com/Willyang10x/ColorBot",
      featured: false,
    },
    {
      title: "WhatsApp Bot",
      description: "Automação inteligente para atendimento ao cliente via WhatsApp rodando localmente.",
      tags: ["Node.js", "WPPConnect", "Automation"],
      github: "https://github.com/Willyang10x/Bot-WhatsApp",
      featured: false,
    },
    {
      title: "New Start Agência",
      description: "Landing page institucional de alta conversão para agência de marketing digital.",
      tags: ["HTML5", "Sass", "JavaScript"],
      github: "https://github.com/Willyang10x/Site-New-Start",
      featured: false,
    },
    {
      title: "TecInfo Final",
      description: "Sistema acadêmico desenvolvido como projeto de conclusão de curso técnico.",
      tags: ["Fullstack", "js", "MySQL"],
      github: "https://github.com/Willyang10x/Projeto-Final-Tecinfo",
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Projetos <span className="text-primary text-glow">Em Destaque</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Uma seleção de trabalhos que demonstram minha paixão por resolver problemas.
          </p>
        </motion.div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="flex flex-col h-full bg-white/5 border-white/10 backdrop-blur-md overflow-hidden group hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_rgba(var(--primary-rgb),0.15)]">
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <span className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </span>
                    <Code2 className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="bg-primary/5 border-primary/20 text-primary/80">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-4 pt-4">
                  <Button variant="outline" className="flex-1 bg-transparent border-white/20 hover:bg-white/10 hover:text-white group-hover:border-primary/50" asChild>
                    <a href={project.github} target="_blank"><Github size={18} className="mr-2"/> Código</a>
                  </Button>
                  {project.demo && (
                    <Button className="flex-1 bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20" asChild>
                      <a href={project.demo} target="_blank"><ExternalLink size={18} className="mr-2"/> Demo</a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (index * 0.1) }}
            >
              <Card className="h-full bg-white/5 border-white/10 hover:bg-white/10 transition-colors flex flex-col justify-between p-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                </div>
                <div className="flex justify-between items-center mt-auto pt-4 border-t border-white/5">
                  <div className="text-xs text-muted-foreground">{project.tags[0]}</div>
                  <a href={project.github} target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github size={18} />
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="link" className="text-muted-foreground hover:text-primary text-lg" asChild>
            <a href="https://github.com/Willyang10x?tab=repositories" target="_blank">
              Ver repositório completo no GitHub &rarr;
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}