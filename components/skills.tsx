"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React / Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 95 },
        { name: "HTML5 & CSS3", level: 95 },
      ],
    },
    {
      title: "Backend & Ferramentas",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "MySQL", level: 80 },
        { name: "Git & GitHub", level: 85 },
        { name: "Figma (UI/UX)", level: 70 },
      ],
    },
  ]

  const technologies = [
    "React", "TypeScript", "Next.js", "Tailwind", "Node.js", "MySQL", 
    "Git", "Figma", "Vercel", "Responsividade"
  ]

  return (
    <section id="skills" className="py-24 px-4 bg-black/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Arsenal <span className="text-primary text-glow">Tecnológico</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            As ferramentas que utilizo para construir o futuro.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm h-full hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.15)] transition-shadow duration-500">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-8 text-foreground border-l-4 border-primary pl-4">
                    {category.title}
                  </h3>
                  <div className="space-y-6">
                    {category.skills.map((skill, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between mb-2 text-sm font-medium">
                          <span className="text-foreground">{skill.name}</span>
                          <span className="text-primary">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="bg-gradient-to-r from-primary to-purple-500 h-full rounded-full shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                className="text-sm py-2 px-6 bg-white/5 hover:bg-primary hover:scale-110 text-foreground transition-all duration-300 border-white/10 cursor-default"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}