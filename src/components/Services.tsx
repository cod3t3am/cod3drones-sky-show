import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Map, Building2, Video, Sparkles } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Shows de Drones",
    description: "Performances aéreas coreografadas com música e luzes. Show completo + filmagem profissional + edição do vídeo. Uma experiência inesquecível e sustentável.",
    featured: true,
  },
  {
    icon: Video,
    title: "Filmagem & Edição",
    description: "Registramos seu show com drones de filmagem profissional e entregamos um vídeo exclusivo que eterniza o momento.",
  },
  {
    icon: Map,
    title: "Mapeamento Territorial",
    description: "Soluções precisas para agricultura, topografia e meio ambiente com tecnologia de ponta.",
  },
  {
    icon: Building2,
    title: "Produção Audiovisual",
    description: "Capturas aéreas profissionais para eventos, publicidade e cinema.",
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`gradient-card border-border shadow-elegant hover:shadow-hover transition-smooth hover:scale-105 ${
                service.featured ? 'md:col-span-2 border-2 border-primary/30' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className={service.featured ? 'text-center' : ''}>
                <div className={`${service.featured ? 'h-16 w-16' : 'h-12 w-12'} rounded-lg gradient-primary flex items-center justify-center mb-4 ${service.featured ? 'mx-auto' : ''}`}>
                  <service.icon className={`${service.featured ? 'h-8 w-8' : 'h-6 w-6'} text-primary-foreground`} />
                </div>
                {service.featured && (
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-2">
                    Nosso Destaque
                  </div>
                )}
                <CardTitle className={service.featured ? 'text-2xl' : 'text-xl'}>{service.title}</CardTitle>
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
