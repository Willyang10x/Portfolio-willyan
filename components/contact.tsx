"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"
import { toast } from "@/hooks/use-toast"

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Olá Willyan! Me chamo ${formData.name}.%0A%0A${formData.message}%0A%0AContato: ${formData.email}`
    window.open(`https://wa.me/5583988688864?text=${message}`, "_blank")
    toast({ title: "Redirecionando para o WhatsApp...", description: "Aguarde um instante." })
  }

  return (
    <section id="contact" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Vamos criar algo <br/><span className="text-primary text-glow">Incrível?</span></h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Estou disponível para projetos freelance e oportunidades full-time. 
                Se você tem uma ideia, eu tenho o código.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { icon: Phone, title: "WhatsApp", value: "+55 (83) 98868-8864", link: "https://wa.me/5583988688864" },
                { icon: Mail, title: "Email", value: "willyangabrielfxt@gmail.com", link: "mailto:willyangabrielfxt@gmail.com" },
                { icon: MapPin, title: "Localização", value: "Campina Grande - PB", link: null }
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.link || "#"} 
                  target={item.link ? "_blank" : "_self"}
                  className="flex items-center gap-5 p-4 rounded-2xl hover:bg-white/5 transition-colors group cursor-pointer"
                >
                  <div className="p-4 bg-white/5 rounded-xl text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-muted-foreground">{item.title}</h4>
                    <p className="text-lg font-semibold text-foreground">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm p-2">
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium ml-1">Seu Nome</label>
                    <Input 
                      placeholder="Ex: João Silva" 
                      className="bg-black/20 border-white/10 h-12 focus:border-primary/50 focus:ring-primary/20 transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium ml-1">Seu Email</label>
                    <Input 
                      type="email" 
                      placeholder="Ex: joao@email.com" 
                      className="bg-black/20 border-white/10 h-12 focus:border-primary/50 focus:ring-primary/20 transition-all"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium ml-1">Mensagem</label>
                    <Textarea 
                      placeholder="Conte-me sobre seu projeto..." 
                      className="bg-black/20 border-white/10 min-h-[150px] resize-none focus:border-primary/50 focus:ring-primary/20 transition-all"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full h-14 text-lg bg-primary hover:bg-primary/90 shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] hover:scale-[1.02] transition-all">
                    <Send className="mr-2 h-5 w-5" /> Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  )
}