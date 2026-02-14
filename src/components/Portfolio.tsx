import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { portfolioProjects } from "@/data/portfolioProjects";

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Case Study Portfolio
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Successful campaigns that generated exceptional results through data-driven strategies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolioProjects.map((project) => (
              <Link key={project.id} to={`/portfolio/${project.slug}`}>
                <Card className="overflow-hidden shadow-card hover:shadow-glow transition-all duration-500 group h-full">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="text-xs font-medium text-white/90 bg-coral/80 px-3 py-1 rounded-full uppercase tracking-wide">
                        {project.platform}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-1.5 bg-coral/10 rounded-lg text-coral">
                        {project.icon}
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {project.results && project.results.length > 0 && (
                      <div className="flex gap-4 mb-4">
                        {project.results.map((result, idx) => (
                          <div key={idx} className="text-center px-3 py-2 bg-cream rounded-lg flex-1">
                            <div className="text-lg font-bold text-coral">{result.metric}</div>
                            <div className="text-xs text-muted-foreground">{result.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center text-coral font-semibold text-sm group-hover:gap-3 gap-1 transition-all">
                      View Details <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
