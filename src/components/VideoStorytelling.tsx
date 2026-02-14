import { Film, Palette, Music, Scissors } from "lucide-react";

const VideoStorytelling = () => {
  const videos = [
    { src: "/videos/storytelling-1.mp4" },
    { src: "/videos/storytelling-2.mp4" },
    { src: "/videos/storytelling-3.mp4" },
  ];

  const skills = [
    { icon: <Film className="h-5 w-5" />, label: "Storytelling & Direction" },
    { icon: <Palette className="h-5 w-5" />, label: "Set Design & Styling" },
    { icon: <Scissors className="h-5 w-5" />, label: "Editing & Post-Production" },
    { icon: <Music className="h-5 w-5" />, label: "Soundtrack Selection" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Video Storytelling
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              As co-producer of these video campaigns, I was responsible for the full creative
              process: from choosing locations and styling wardrobe to crafting the narrative
              storytelling, editing, final post-production, and curating the perfect soundtrack
              for each piece.
            </p>
          </div>

          {/* Skills badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream text-foreground text-sm font-medium border border-border"
              >
                <span className="text-coral">{skill.icon}</span>
                {skill.label}
              </span>
            ))}
          </div>

          {/* Videos grid - 3 columns on desktop, stacked on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <div
                key={index}
                className="relative rounded-[2rem] overflow-hidden shadow-card hover:shadow-glow transition-all duration-500 bg-muted aspect-[9/16]"
              >
                <video
                  src={video.src}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover rounded-[2rem]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoStorytelling;
