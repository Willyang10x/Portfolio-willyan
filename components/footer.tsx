import { Github, Linkedin, Instagram, ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative py-12 px-4 bg-black overflow-hidden">
      {/* Linha Gradient no topo */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-white mb-2">WG</h3>
          <p className="text-muted-foreground text-sm max-w-xs">
            Construindo interfaces digitais com paixão, código limpo e design centrado no usuário.
          </p>
        </div>

        <div className="flex gap-6">
          {[
            { icon: Github, href: "https://github.com/Willyang10x" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/willyan-gabriel-70b53b344" },
            { icon: Instagram, href: "https://www.instagram.com/willdsg07/" },
            { icon: ExternalLink, href: "https://wg-designer.netlify.app/" }
          ].map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/5 rounded-full hover:bg-primary hover:text-white hover:-translate-y-1 transition-all duration-300 text-muted-foreground"
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
      </div>

      <div className="container mx-auto mt-12 pt-8 border-t border-white/5 text-center text-sm text-gray-500">
        <p>© 2026 Willyan Gabriel. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}