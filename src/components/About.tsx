import { Card, CardContent } from "@/components/ui/card";
import { Zap, Code, Palette } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre a Cod3 Drones Show
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nascemos para transformar eventos em experiências inesquecíveis. Substituímos os fogos 
              de artifício por <strong className="text-primary">shows coreografados de drones</strong>, 
              sincronizados com música e luzes. Oferecemos uma solução completa: 
              <strong className="text-primary"> show + filmagem + edição</strong>, unindo tecnologia, 
              arte e emoção. Com criatividade e software livre, tornamos esse tipo de espetáculo 
              acessível para casamentos, festas, feiras, prefeituras e grandes eventos. 
              Com a Cod3 Drones Show, <strong className="text-accent">o céu vira palco</strong> e 
              sua história ganha uma nova forma de ser contada.
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
