import { Card, CardContent } from "@/components/ui/card";
import { Zap, Code, Palette } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre a Cod3 Drones
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Somos uma empresa inovadora que une tecnologia de ponta, criatividade e 
              compromisso com soluções sustentáveis. Utilizamos software livre e hardware 
              de última geração para entregar resultados excepcionais em todos os nossos projetos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card className="text-center shadow-elegant hover:shadow-hover transition-smooth">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full gradient-primary mx-auto flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Inovação</h3>
                <p className="text-sm text-muted-foreground">
                  Tecnologia de ponta aplicada em cada projeto
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-elegant hover:shadow-hover transition-smooth">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full gradient-primary mx-auto flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Open Source</h3>
                <p className="text-sm text-muted-foreground">
                  Comprometidos com software livre e colaborativo
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-elegant hover:shadow-hover transition-smooth">
              <CardContent className="pt-6">
                <div className="h-12 w-12 rounded-full gradient-primary mx-auto flex items-center justify-center mb-4">
                  <Palette className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Criatividade</h3>
                <p className="text-sm text-muted-foreground">
                  Soluções únicas e personalizadas para cada cliente
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
