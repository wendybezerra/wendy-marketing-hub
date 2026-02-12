import { Mail, TrendingUp, Users, Heart } from "lucide-react";
import { ReactNode } from "react";

export interface PortfolioProject {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription?: string;
  platform: string;
  target: string;
  category: "email-marketing" | "social-media" | "volunteer";
  results?: { metric: string; label: string }[];
  highlights: string[];
  image: string;
  galleryImages?: string[];
  icon: ReactNode;
  note?: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    slug: "weekly-newsletter-campaign",
    title: "Weekly Newsletter Campaign",
    subtitle: "Email Marketing Strategy for Use Flô",
    description:
      "Created dynamic newsletters featuring product highlights, testimonials, restock alerts, and discount codes to boost customer engagement and drive conversions.",
    platform: "Flodesk",
    target: "Increase re-engagement and conversions",
    category: "email-marketing",
    results: [
      { metric: "+33%", label: "User Engagement" },
      { metric: "+17%", label: "Click-Through Rate" },
    ],
    highlights: [
      "Dynamic newsletters with product highlights",
      "Visually engaging layouts with CTAs",
      "Segmentation for returning visitors",
      "Automated cart recovery campaigns",
    ],
    image: "/lovable-uploads/69d65d8d-bec7-4805-a25a-a09b872ffa07.png",
    icon: <Mail className="h-6 w-6" />,
  },
  {
    id: 2,
    slug: "fashion-brand-product-clicks",
    title: "Fashion Brand Product Clicks",
    subtitle: "Increasing Product Clicks for a Fashion Brand",
    description:
      "Built an email campaign to boost user engagement with Use Flô's latest dress collection, featuring strategic product showcases and compelling call-to-actions.",
    platform: "Flodesk",
    target: "Increase product clicks and engagement",
    category: "email-marketing",
    results: [
      { metric: "+42%", label: "Click-Through Rate" },
      { metric: "+58%", label: "User Engagement" },
    ],
    highlights: [
      "Focus on new dress collection",
      "Impactful visuals with clear CTAs",
      "Fashion-focused audience segmentation",
      "Mobile-optimized campaign design",
    ],
    image: "/lovable-uploads/9ef140f4-2d77-4331-92cf-6a7cb1d861a8.png",
    icon: <TrendingUp className="h-6 w-6" />,
  },
  {
    id: 3,
    slug: "customer-testimonial-integration",
    title: "Customer Testimonial Integration",
    subtitle: "Social Proof & User-Generated Content Strategy",
    description:
      "Integrated customer testimonials and user-generated content to build trust and showcase product quality through authentic customer experiences.",
    platform: "Flodesk",
    target: "Build trust and social proof",
    category: "email-marketing",
    results: [
      { metric: "+25%", label: "Customer Trust" },
      { metric: "+40%", label: "Content Engagement" },
    ],
    highlights: [
      "Authentic customer testimonials",
      "5-star review showcases",
      "User-generated content integration",
      "Social proof optimization",
    ],
    image: "/lovable-uploads/95c632c5-c0cf-4569-82b5-393f8a07872c.png",
    icon: <Users className="h-6 w-6" />,
  },
  {
    id: 4,
    slug: "volunteer-marketing-social-media",
    title: "Strategic Volunteer Marketing",
    subtitle: "Marketing & Social Media for Non-Profits",
    description:
      "Marketing and social media initiatives developed through volunteer collaborations with L'Arche Saskatoon and Lar de Maria, focusing on brand positioning, audience communication, and community engagement.",
    fullDescription:
      "This section presents marketing and social media initiatives developed through volunteer collaborations with non-profit organizations. The work is guided by strategic marketing principles, focusing on brand positioning, audience communication, content relevance, and consistency across digital touchpoints.\n\nThese projects were designed to support organizational visibility, strengthen community connection, and ensure clear, accessible communication of services, programs, and key updates. The approach prioritizes content planning, message clarity, visual alignment with brand identity, and sustainable posting rhythms to maintain ongoing audience engagement.\n\nDue to the nature of volunteer collaborations, access to advanced performance tracking tools, detailed analytics, and KPI reporting is limited. Therefore, the work showcased emphasizes strategic thinking, content architecture, storytelling, and brand stewardship rather than performance metrics.\n\nThese experiences demonstrate the ability to apply marketing strategy in resource-constrained environments while maintaining professional standards of communication, brand consistency, and audience-focused messaging.",
    platform: "Instagram / Social Media",
    target: "Community visibility and engagement",
    category: "volunteer",
    highlights: [
      "Brand positioning for non-profit organizations",
      "Content planning and sustainable posting rhythms",
      "Community member spotlights and storytelling",
      "Event promotion and audience communication",
      "Visual identity alignment across platforms",
      "Audience-focused messaging and accessibility",
    ],
    image: "/lovable-uploads/larche-gathering.png",
    galleryImages: [
      "/lovable-uploads/larche-gathering.png",
      "/lovable-uploads/larche-spotlight.png",
      "/lovable-uploads/larche-community.png",
      "/lovable-uploads/larche-vacation.png",
      "/lovable-uploads/lardemaria-profile.png",
    ],
    icon: <Heart className="h-6 w-6" />,
    note: "Due to the nature of volunteer collaborations, the work showcased emphasizes strategic thinking, content architecture, and brand stewardship rather than performance metrics.",
  },
];
