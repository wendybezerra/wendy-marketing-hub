import { Card } from "@/components/ui/card";

const VideoShowcase = () => {
  const videos = [
    {
      src: "/videos/portfolio-video-1.mp4?v=4",
      title: "Brand Campaign Strategy",
      copy: "Full creative direction and execution for Use Flô's seasonal collection launch.",
      description: "Whether you're building a brand from scratch or scaling digital performance, I bring the strategic clarity and creative execution needed to achieve your goals. As a marketing strategist and content creator, I specialize in developing data-driven campaigns that not only reach but truly connect with audiences.",
    },
    {
      src: "/videos/portfolio-video-2.mp4?v=4",
      title: "Social Media Content",
      copy: "Full creative direction and execution for Use Flô's seasonal collection launch.",
      description: "With a strong foundation in branding, social media performance, and community engagement, I've successfully led digital campaigns that generated over 97,000 views, reached more than 76,000 unique users, and resulted in hundreds of organic followers, all while maintaining an authentic and consistent brand identity.",
    },
    {
      src: "/videos/portfolio-video-3.mp4?v=4",
      title: "Performance Ad Creative",
      copy: "Full creative direction and execution for Use Flô's seasonal collection launch.",
      description: "Data and insights were extracted from my own business social media account @USEFLOLOJA, where I successfully applied my knowledge in marketing strategy, ROI optimization, Google SEO, and Meta (Facebook and Instagram) Ads to achieve outstanding performance and measurable results.",
    },
  ];

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Campaign Videos
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              All advertising content, including videos, visuals, and campaign creatives, was fully developed and executed by Wendy Bezerra.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <Card key={index} className="overflow-hidden shadow-card hover:shadow-glow transition-all duration-500 group flex flex-col">
                <div className="px-5 pt-5 pb-2">
                  <p className="text-xs text-muted-foreground italic leading-relaxed">{video.copy}</p>
                </div>
                <div className="aspect-[4/5] bg-muted mx-3 rounded-lg overflow-hidden">
                  <video
                    src={`${video.src}#t=0.001`}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex-1">
                  <h3 className="text-lg font-bold text-foreground mb-2">{video.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{video.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
