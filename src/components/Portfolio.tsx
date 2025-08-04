import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp, Mail, Users } from "lucide-react";
const Portfolio = () => {
  const projects = [{
    id: 1,
    title: "Weekly Newsletter Campaign",
    subtitle: "Email Marketing Strategy for Use Flô",
    description: "Created dynamic newsletters featuring product highlights, testimonials, restock alerts, and discount codes to boost customer engagement and drive conversions.",
    platform: "Flodesk",
    target: "Increase re-engagement and conversions",
    results: [{
      metric: "+33%",
      label: "User Engagement"
    }, {
      metric: "+17%",
      label: "Click-Through Rate"
    }],
    highlights: ["Dynamic newsletters with product highlights", "Visually engaging layouts with CTAs", "Segmentation for returning visitors", "Automated cart recovery campaigns"],
    image: "/lovable-uploads/69d65d8d-bec7-4805-a25a-a09b872ffa07.png",
    icon: <Mail className="h-6 w-6" />
  }, {
    id: 2,
    title: "Fashion Brand Product Clicks",
    subtitle: "Increasing Product Clicks for a Fashion Brand",
    description: "Built an email campaign to boost user engagement with Use Flô's latest dress collection, featuring strategic product showcases and compelling call-to-actions.",
    platform: "Flodesk",
    target: "Increase product clicks and engagement",
    results: [{
      metric: "+42%",
      label: "Click-Through Rate"
    }, {
      metric: "+58%",
      label: "User Engagement"
    }],
    highlights: ["Focus on new dress collection", "Impactful visuals with clear CTAs", "Fashion-focused audience segmentation", "Mobile-optimized campaign design"],
    image: "/lovable-uploads/9ef140f4-2d77-4331-92cf-6a7cb1d861a8.png",
    icon: <TrendingUp className="h-6 w-6" />
  }, {
    id: 3,
    title: "Customer Testimonial Integration",
    subtitle: "Social Proof & User-Generated Content Strategy",
    description: "Integrated customer testimonials and user-generated content to build trust and showcase product quality through authentic customer experiences.",
    platform: "Flodesk",
    target: "Build trust and social proof",
    results: [{
      metric: "+25%",
      label: "Customer Trust"
    }, {
      metric: "+40%",
      label: "Content Engagement"
    }],
    highlights: ["Authentic customer testimonials", "5-star review showcases", "User-generated content integration", "Social proof optimization"],
    image: "/lovable-uploads/95c632c5-c0cf-4569-82b5-393f8a07872c.png",
    icon: <Users className="h-6 w-6" />
  }];
  return <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Case Study Portfolio
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Successful campaigns that generated exceptional results through data-driven strategies
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project, index) => <Card key={project.id} className={`overflow-hidden shadow-card hover:shadow-glow transition-all duration-500 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`lg:flex ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Image Section */}
                  <div className="lg:w-1/2">
                    <div className="relative h-64 lg:h-full min-h-[400px] flex items-center justify-center">
                      <img src={project.image} alt={project.title} className="w-full h-full object-contain bg-gray-50" />
                      <div className="absolute inset-0 bg-gradient-to-t from-coral/10 to-transparent mx-0 my-0 px-0"></div>
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
                      <h5 className="font-semibold text-gray-900 mb-2">Objective:</h5>
                      <p className="text-gray-700">{project.target}</p>
                    </div>

                    {/* Results */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {project.results.map((result, idx) => <div key={idx} className="text-center p-4 bg-cream rounded-lg">
                          <div className="text-2xl font-bold text-coral mb-1">
                            {result.metric}
                          </div>
                          <div className="text-sm text-gray-600">
                            {result.label}
                          </div>
                        </div>)}
                    </div>

                    {/* Strategy Highlights */}
                    <div className="mb-8">
                      <h5 className="font-semibold text-gray-900 mb-3">Strategy Highlights:</h5>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, idx) => <li key={idx} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-coral rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm">{highlight}</span>
                          </li>)}
                      </ul>
                    </div>

                    <Button className="bg-coral hover:bg-coral-light text-white font-semibold">
                      View Details
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};
export default Portfolio;