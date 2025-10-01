import { Instagram, Youtube, Mail, Plane } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Plane className="h-5 w-5 text-primary" />
              <span className="font-bold text-lg">Cod3 Drones</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Mapeamento, Imagens Aéreas e Shows Tecnológicos
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <a 
              href="mailto:contato@drones.cod3.team" 
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth"
            >
              <Mail className="h-4 w-4" />
              contato@drones.cod3.team
            </a>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center h-10 w-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center h-10 w-10 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Cod3 Drones. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
