import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp, Mail, Users } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Email Campaign Case Study",
      subtitle: "Weekly Newsletter Campaign for Use Flô",
      description: "Campanha de newsletter semanal com destaque para produtos, depoimentos, alertas de reestoque e códigos de desconto.",
      platform: "Flodesk",
      target: "Aumentar re-engajamento e conversões",
      results: [
        { metric: "+33%", label: "Aumento no engajamento" },
        { metric: "+17%", label: "Taxa de click-through" }
      ],
      highlights: [
        "Newsletters dinâmicas com destaques de produtos",
        "Layouts visualmente engajantes com CTAs",
        "Segmentação para visitantes recorrentes",
        "Recuperação automatizada de carrinho"
      ],
      image: "/lovable-uploads/1259b17e-2ac3-4cd0-8216-44df8107ec99.png",
      icon: <Mail className="h-6 w-6" />
    },
    {
      id: 2,
      title: "Email Marketing Impact",
      subtitle: "Comprehensive Email Campaign Strategy",
      description: "Estratégia completa de email marketing com templates diversos para diferentes objetivos de conversão.",
      platform: "Flodesk",
      target: "Maximizar conversões e engajamento",
      results: [
        { metric: "+33%", label: "Engajamento do usuário" },
        { metric: "+17%", label: "Taxa de conversão" }
      ],
      highlights: [
        "Templates de boas-vindas personalizados",
        "Campanhas de carrinho abandonado",
        "Alertas de reestoque segmentados",
        "Flash sales com senso de urgência"
      ],
      image: "/lovable-uploads/61846aec-e38e-4445-bf33-4cb069ab5e75.png",
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      id: 3,
      title: "Fashion Brand Product Clicks",
      subtitle: "Increasing Product Clicks for a Fashion Brand",
      description: "Campanha de email para impulsionar o engajamento com a mais nova coleção de vestidos da Use Flô.",
      platform: "Flodesk",
      target: "Aumentar cliques em produtos",
      results: [
        { metric: "+42%", label: "Taxa de click-through" },
        { metric: "+58%", label: "Engajamento do usuário" }
      ],
      highlights: [
        "Foco na nova coleção de vestidos",
        "Visual impactante com call-to-action",
        "Segmentação por interesse em moda",
        "Otimização para dispositivos móveis"
      ],
      image: "/lovable-uploads/4e281221-5d13-4cc4-99e8-6de3e03a9a78.png",
      icon: <Users className="h-6 w-6" />
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Portfolio de Casos
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Campanhas de sucesso que geraram resultados excepcionais através de estratégias data-driven
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card key={project.id} className={`overflow-hidden shadow-card hover:shadow-glow transition-all duration-500 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`lg:flex ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image Section */}
                  <div className="lg:w-1/2">
                    <div className="relative h-64 lg:h-full min-h-[400px]">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-coral/20 to-transparent"></div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:w-1/2 p-8 lg:p-12">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-coral/10 rounded-lg text-coral">
                        {project.icon}
                      </div>
                      <span className="text-sm font-medium text-coral uppercase tracking-wide">
                        {project.platform}
                      </span>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <h4 className="text-lg text-coral font-semibold mb-4">
                      {project.subtitle}
                    </h4>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Target */}
                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-900 mb-2">Objetivo:</h5>
                      <p className="text-gray-700">{project.target}</p>
                    </div>

                    {/* Results */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {project.results.map((result, idx) => (
                        <div key={idx} className="text-center p-4 bg-cream rounded-lg">
                          <div className="text-2xl font-bold text-coral mb-1">
                            {result.metric}
                          </div>
                          <div className="text-sm text-gray-600">
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Strategy Highlights */}
                    <div className="mb-8">
                      <h5 className="font-semibold text-gray-900 mb-3">Destaques da Estratégia:</h5>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-coral rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="bg-coral hover:bg-coral-light text-white font-semibold">
                      Ver Detalhes
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;