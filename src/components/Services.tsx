import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Map, Building2, Video, Sparkles } from "lucide-react";

const services = [
  {
    icon: Map,
    title: "Mapeamento Territorial",
    description: "Soluções precisas para agricultura, topografia e meio ambiente com tecnologia de ponta.",
  },
  {
    icon: Building2,
    title: "Mapeamento Imobiliário",
    description: "Modelos 3D e acompanhamento de obras para construção civil e mercado imobiliário.",
  },
  {
    icon: Video,
    title: "Produção Audiovisual",
    description: "Capturas aéreas profissionais para eventos, publicidade e cinema.",
  },
  {
    icon: Sparkles,
    title: "Shows de Drones",
    description: "Performances aéreas coreografadas com 10 drones sincronizados por software livre.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos soluções completas com tecnologia de drones para diversos segmentos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="gradient-card border-border shadow-elegant hover:shadow-hover transition-smooth hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
