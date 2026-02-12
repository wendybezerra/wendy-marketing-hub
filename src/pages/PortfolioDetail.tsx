import { useParams, Link } from "react-router-dom";
import { portfolioProjects } from "@/data/portfolioProjects";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ImageLightbox from "@/components/ImageLightbox";

const PortfolioDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = portfolioProjects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <Link to="/#portfolio">
            <Button className="bg-coral hover:bg-coral-light text-white">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 pb-12 bg-cream">
        <div className="container mx-auto px-6 max-w-5xl">
          <Link
            to="/#portfolio"
            className="inline-flex items-center text-coral hover:text-coral-light transition-colors mb-8 font-medium"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-coral/10 rounded-lg text-coral">{project.icon}</div>
            <span className="text-sm font-medium text-coral uppercase tracking-wide">
              {project.platform}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
            {project.title}
          </h1>
          <h2 className="text-xl text-coral font-semibold mb-6">{project.subtitle}</h2>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Main content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Main image */}
              <div className="rounded-xl overflow-hidden shadow-card">
                <ImageLightbox
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-contain bg-muted"
                />
              </div>

              {/* Full description */}
              <div className="prose prose-lg max-w-none">
                {(project.fullDescription || project.description)
                  .split("\n\n")
                  .map((paragraph, idx) => (
                    <p key={idx} className="text-muted-foreground leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
              </div>

              {/* Gallery */}
              {project.galleryImages && project.galleryImages.length > 1 && (
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">Project Gallery</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {project.galleryImages.map((img, idx) => (
                      <div
                        key={idx}
                        className="rounded-xl overflow-hidden shadow-card"
                      >
                        <ImageLightbox
                          src={img}
                          alt={`${project.title} - image ${idx + 1}`}
                          className="w-full h-auto object-contain bg-muted"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              {/* Objective */}
              <div className="bg-cream rounded-xl p-6">
                <h4 className="font-semibold text-foreground mb-2">Objective</h4>
                <p className="text-muted-foreground">{project.target}</p>
              </div>

              {/* Results */}
              {project.results && project.results.length > 0 && (
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Results</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {project.results.map((result, idx) => (
                      <div key={idx} className="text-center p-4 bg-cream rounded-xl">
                        <div className="text-2xl font-bold text-coral mb-1">
                          {result.metric}
                        </div>
                        <div className="text-sm text-muted-foreground">{result.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Strategy Highlights */}
              <div>
                <h4 className="font-semibold text-foreground mb-4">Strategy Highlights</h4>
                <ul className="space-y-3">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-coral rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Note */}
              {project.note && (
                <div className="bg-coral/5 border border-coral/10 rounded-xl p-6">
                  <p className="text-sm text-muted-foreground italic leading-relaxed">
                    {project.note}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioDetail;
