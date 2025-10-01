import { Link, useLocation } from "react-router-dom";
import { Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 transition-smooth hover:opacity-80">
          <Plane className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold gradient-primary bg-clip-text text-transparent">
            Cod3 Drones
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-smooth hover:text-primary ${
              isActive("/") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Home
          </Link>
          <Link 
            to="/shows" 
            className={`text-sm font-medium transition-smooth hover:text-primary ${
              isActive("/shows") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Shows de Drones
          </Link>
          <Button asChild size="sm" variant="hero">
            <a href="#contato">Contato</a>
          </Button>
        </nav>

        <div className="md:hidden">
          <Button asChild size="sm" variant="hero">
            <a href="#contato">Contato</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
