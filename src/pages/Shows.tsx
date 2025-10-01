import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Music, Leaf, Lightbulb, Check } from "lucide-react";
import droneShowImage from "@/assets/drone-show.jpg";
import { Link } from "react-router-dom";

const Shows = () => {
  const features = [
    "Coreografias customizáveis para cada evento",
    "Sincronização perfeita com música e luzes",
    "Alternativa sustentável aos fogos de artifício",
    "Zero poluição sonora e ambiental",
    "Performances seguras e controladas",
    "Criação de formas, logos e mensagens no céu",
  ];

  const specs = [
    { label: "Drones Utilizados", value: "10 unidades sincronizadas" },
    { label: "Modelos", value: "DJI Tello e DJI Mini 3 Pro" },
    { label: "Software", value: "DroneShow + QGroundControl" },
    { label: "Área de Cobertura", value: "Até 100m x 100m" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${droneShowImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
          </div>
          
          <div className="container mx-auto px-4 z-10 text-center animate-fade-in-up">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Sparkles className="h-8 w-8 text-primary animate-pulse" />
                <h1 className="text-4xl md:text-6xl font-bold gradient-primary bg-clip-text text-transparent">
                  Shows de Drones Cod3
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Uma experiência única que substitui os fogos de artifício por performances aéreas coreografadas
              </p>
              <Button asChild size="lg" variant="hero" className="text-lg px-8 py-6 h-auto">
                <Link to="/#contato">Solicitar Orçamento</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Por que escolher Shows de Drones?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <Card className="text-center shadow-elegant hover:shadow-hover transition-smooth">
                  <CardContent className="pt-6">
                    <div className="h-14 w-14 rounded-full gradient-primary mx-auto flex items-center justify-center mb-4">
                      <Leaf className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Sustentável</h3>
                    <p className="text-sm text-muted-foreground">
                      Sem poluição ambiental, sonora ou resíduos
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center shadow-elegant hover:shadow-hover transition-smooth">
                  <CardContent className="pt-6">
                    <div className="h-14 w-14 rounded-full gradient-primary mx-auto flex items-center justify-center mb-4">
                      <Music className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Sincronizado</h3>
                    <p className="text-sm text-muted-foreground">
                      Perfeitamente coreografado com música e luzes
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center shadow-elegant hover:shadow-hover transition-smooth">
                  <CardContent className="pt-6">
                    <div className="h-14 w-14 rounded-full gradient-primary mx-auto flex items-center justify-center mb-4">
                      <Lightbulb className="h-7 w-7 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">Customizável</h3>
                    <p className="text-sm text-muted-foreground">
                      Formas, logos e mensagens personalizadas
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="shadow-elegant">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Diferenciais das nossas performances:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Especificações Técnicas */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Especificações Técnicas
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {specs.map((spec, index) => (
                  <Card key={index} className="shadow-elegant hover:shadow-hover transition-smooth">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="h-3 w-3 rounded-full gradient-primary shrink-0 mt-2" />
                        <div>
                          <h3 className="font-semibold mb-1">{spec.label}</h3>
                          <p className="text-muted-foreground">{spec.value}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="mt-8 shadow-elegant gradient-primary">
                <CardContent className="pt-6">
                  <div className="text-center text-primary-foreground">
                    <h3 className="text-2xl font-bold mb-3">Software Livre</h3>
                    <p className="text-primary-foreground/90 max-w-2xl mx-auto">
                      Utilizamos o <strong>DroneShow</strong> integrado com <strong>QGroundControl</strong>, 
                      plataformas open source que garantem total controle e customização das performances.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pronto para criar um show inesquecível?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Entre em contato e descubra como podemos transformar seu evento em uma experiência única
              </p>
              <Button asChild size="lg" variant="hero" className="text-lg px-8 py-6 h-auto">
                <Link to="/#contato">Fale Conosco</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Shows;
