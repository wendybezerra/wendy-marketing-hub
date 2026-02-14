import { Card } from "@/components/ui/card";
import { TrendingUp, Users, Target, Award } from "lucide-react";
const About = () => {
  const stats = [{
    icon: <TrendingUp className="h-8 w-8 text-coral" />,
    number: "97K+",
    label: "Views",
    description: "Generated in campaigns"
  }, {
    icon: <Users className="h-8 w-8 text-coral" />,
    number: "76K+",
    label: "Unique users",
    description: "Reached organically"
  }, {
    icon: <Target className="h-8 w-8 text-coral" />,
    number: "+58%",
    label: "Engagement",
    description: "Average increase"
  }, {
    icon: <Award className="h-8 w-8 text-coral" />,
    number: "+42%",
    label: "Click-through",
    description: "Conversion rate"
  }];
  return <section className="py-20 bg-cream">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About me:</h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          </div>

          {/* Photo + Text */}
          <div className="grid lg:grid-cols-5 gap-12 items-center mb-16">
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-card border-4 border-white">
                  <img
                    src="/lovable-uploads/wendy-profile.png"
                    alt="Wendy Bezerra"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-coral rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xs text-center leading-tight">Full Stack<br/>& AI Dev</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">As a marketing strategist, content creator, and Full Stack & AI Developer, I specialize in developing data-driven campaigns that not only reach but genuinely connect with audiences.

With a strong background in Full Stack and AI Development, combined with fashion branding, digital storytelling, and performance-based email marketing, I transform content into strategic assets — from concept to conversion.</p>
              <p className="text-lg text-gray-700 leading-relaxed">With a strong foundation in branding, social media performance, and community engagement, I've successfully led digital campaigns that delivered outstanding results — all while maintaining a consistent and authentic brand identity.</p>
              <div className="pt-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Specialties:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-coral rounded-full mr-3"></div>
                    Email Marketing & Automation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-coral rounded-full mr-3"></div>
                    Social Media Strategy
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-coral rounded-full mr-3"></div>
                    Content Creation & Branding
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-coral rounded-full mr-3"></div>
                    Performance Analytics
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => <Card key={index} className="p-6 text-center bg-white shadow-card hover:shadow-glow transition-all duration-300 group">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold text-coral mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.description}
                  </div>
                </Card>)}
          </div>
        </div>
      </div>
    </section>;
};
export default About;