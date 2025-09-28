"use client"

import { Download, FileText, Award, Briefcase, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Resume() {
  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/curriculo-willyan.pdf"
    link.download = "Curriculo-Willyan-Gabriel.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const experiences = [
    {
      title: "Designer Gráfico",
      company: "New Start - Agência de Mídia Digital",
      period: "2022-2025 - Atual",
      description: "Criação de identidades visuais e materiais gráficos digitais",
    },
  ]

  const projects = [
    {
      name: "Cardápio Online",
      year: "2023",
      description:
        "Sistema completo com back-end em Node.js e front-end em HTML/CSS/JS, para gerenciamento de cardápio digital",
    },
    {
      name: "To-Do List com React",
      year: "2024",
      description: "Lista de tarefas desenvolvida com React e TypeScript, praticando componentização",
    },
    {
      name: "WG DESIGN – Portfólio Pessoal",
      year: "2024",
      description: "Site com identidade visual própria e layout responsivo para apresentar trabalhos",
    },
    {
      name: "ColorBot – Gerador de Paleta de Cores",
      year: "2024",
      description: "Ferramenta visual para criar paletas a partir de uma cor base, voltada para web design",
    },
    {
      name: "Bot de WhatsApp",
      year: "2024",
      description: "Automação de respostas e comandos via WhatsApp rodando localmente",
    },
  ]

  const education = [
    {
      degree: "Análise e Desenvolvimento de Sistemas",
      institution: "UEPB",
      period: "2023 - Atual",
    },
    {
      degree: "Técnico em Tecnologia da Informação",
      institution: "Lourdinas",
      period: "2023 - 2024",
    },
    {
      degree: "Ensino Médio",
      institution: "ECI Francisco Apolinário da Silva",
      period: "2021 - 2024",
    },
  ]

  return (
    <section id="resume" className="py-20 px-4 bg-black/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Currículo</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Confira minha trajetória profissional, projetos e formação acadêmica
          </p>
          <Button onClick={handleDownloadResume} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
            <Download className="mr-2 h-5 w-5" />
            Download PDF
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Experiência */}
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Briefcase className="mr-2 h-5 w-5 text-blue-400" />
                Experiência
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-2 border-blue-400 pl-4">
                  <h3 className="text-white font-semibold">{exp.title}</h3>
                  <p className="text-blue-400 text-sm">{exp.company}</p>
                  <p className="text-gray-400 text-sm">{exp.period}</p>
                  <p className="text-gray-300 text-sm mt-2">{exp.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Educação */}
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <GraduationCap className="mr-2 h-5 w-5 text-blue-400" />
                Educação
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-blue-400 pl-4">
                  <h3 className="text-white font-semibold">{edu.degree}</h3>
                  <p className="text-blue-400 text-sm">{edu.institution}</p>
                  <p className="text-gray-400 text-sm">{edu.period}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Projetos Destacados */}
          <Card className="bg-gray-900/50 border-gray-800 md:col-span-2 lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Award className="mr-2 h-5 w-5 text-blue-400" />
                Projetos Destacados
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {projects.slice(0, 3).map((project, index) => (
                <div key={index} className="border-l-2 border-blue-400 pl-4">
                  <h3 className="text-white font-semibold">{project.name}</h3>
                  <p className="text-blue-400 text-sm">{project.year}</p>
                  <p className="text-gray-300 text-sm mt-1">{project.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Resumo das Habilidades */}
        <div className="mt-12 text-center">
          <Card className="bg-gray-900/50 border-gray-800 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-white flex items-center justify-center">
                <FileText className="mr-2 h-5 w-5 text-blue-400" />
                Resumo Profissional
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 text-lg leading-relaxed">
                Aplicar minhas habilidades em design
                gráfico e desenvolvimento front-end na criação de soluções digitais modernas, funcionais e centradas na
                experiência do usuário. Busco uma oportunidade para contribuir com criatividade, inovação e tecnologia.
                Perfil criativo e inovador com facilidade para aprender novas tecnologias.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
