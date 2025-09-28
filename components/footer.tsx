import { Github, Linkedin, Instagram, ExternalLink, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-primary mb-2">WG</div>
            <p className="text-muted-foreground">Desenvolvedor Front-End apaixonado por tecnologia</p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/Willyang10x"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/willyan-gabriel-70b53b344"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/willdsg07/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://wg-designer.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Portfólio Anterior"
            >
              <ExternalLink size={24} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Feito por <a href="https://github.com/Willyang10x">Willyan Gabriel</a> © 2025
          </p>
        </div>
      </div>
    </footer>
  )
}
