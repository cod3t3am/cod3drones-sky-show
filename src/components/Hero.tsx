import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-drone-view.jpg";

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("servicos");
    servicesSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden gradient-hero">
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      <div className="container mx-auto px-4 z-10 text-center animate-fade-in-up">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-primary bg-clip-text text-transparent">
            Cod3 Drones
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Mapeamento, Imagens Aéreas e Shows Tecnológicos
          </p>
          <Button 
            size="lg" 
            variant="hero" 
            onClick={scrollToServices}
            className="text-lg px-8 py-6 h-auto"
          >
            Saiba Mais
          </Button>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
