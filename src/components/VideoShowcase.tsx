import { Card } from "@/components/ui/card";

const VideoShowcase = () => {
  const videos = [
    {
      src: "/videos/portfolio-video-1.mp4",
      title: "Brand Campaign Strategy",
      description: "Full creative direction and execution for Use Flô's seasonal collection launch.",
    },
    {
      src: "/videos/portfolio-video-2.mp4",
      title: "Social Media Content",
      description: "Data-driven content strategy generating 97K+ views and 76K+ unique users.",
    },
    {
      src: "/videos/portfolio-video-3.mp4",
      title: "Performance Ad Creative",
      description: "ROI-optimized Meta Ads campaign with measurable engagement results.",
    },
  ];

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Campaign Videos
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              All advertising content — including videos, visuals, and campaign creatives — was fully developed and executed by Wendy Bezerra.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <Card key={index} className="overflow-hidden shadow-card hover:shadow-glow transition-all duration-500 group">
                <div className="aspect-[9/16] bg-gray-100">
                  <video
                    src={video.src}
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{video.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{video.description}</p>
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
