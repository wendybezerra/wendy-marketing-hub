import { Card } from "@/components/ui/card";
import { BarChart3, Eye, MousePointerClick, UserCheck } from "lucide-react";

const Insights = () => {
  const campaigns = [
    {
      image: "/lovable-uploads/portfolio-case-1.jpg",
      title: "Views vs Reach per Campaign",
      stats: [
        { icon: <Eye className="h-5 w-5" />, value: "20,553", label: "Views" },
        { icon: <MousePointerClick className="h-5 w-5" />, value: "570", label: "Interactions" },
        { icon: <UserCheck className="h-5 w-5" />, value: "5", label: "Profile Activity" },
      ],
      adViews: "36,664",
      adGoal: "1,373 Profile Visits",
    },
    {
      image: "/lovable-uploads/portfolio-case-2.jpg",
      title: "Campaign Performance Overview",
      stats: [
        { icon: <Eye className="h-5 w-5" />, value: "97K+", label: "Total Views" },
        { icon: <UserCheck className="h-5 w-5" />, value: "76K+", label: "Unique Users" },
        { icon: <MousePointerClick className="h-5 w-5" />, value: "482", label: "Peak Interactions" },
      ],
      adViews: "105,000",
      adGoal: "90,000 Reach",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Data & Insights
            </h2>
            <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Data and insights extracted from my own business social media account @USEFLOLOJA, where I successfully applied marketing strategy, ROI optimization, Google SEO, and Meta Ads.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {campaigns.map((campaign, index) => (
              <Card key={index} className="overflow-hidden shadow-card hover:shadow-glow transition-all duration-500">
                <div className="aspect-video bg-gray-50 flex items-center justify-center overflow-hidden">
                  <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-coral" />
                    {campaign.title}
                  </h3>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {campaign.stats.map((stat, idx) => (
                      <div key={idx} className="text-center p-3 bg-cream rounded-lg">
                        <div className="flex justify-center mb-1 text-coral">{stat.icon}</div>
                        <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                        <div className="text-xs text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 pt-3 border-t border-gray-100">
                    <span><strong className="text-gray-900">Ad Views:</strong> {campaign.adViews}</span>
                    <span><strong className="text-gray-900">Goal:</strong> {campaign.adGoal}</span>
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

export default Insights;
