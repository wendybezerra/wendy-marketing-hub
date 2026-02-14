import { Mail, TrendingUp, Users, Heart, Palette, Calculator } from "lucide-react";
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
  category: "email-marketing" | "social-media" | "volunteer" | "branding";
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
  {
    id: 5,
    slug: "psychologist-branding",
    title: "Psychologist Branding",
    subtitle: "Complete Visual Identity for Maiza Dias Psychologist",
    description:
      "Developed a full branding package for a psychologist, including logo design, business cards, social media posts, and moodboarding — building a cohesive and professional visual identity.",
    fullDescription:
      "This project involved creating a complete visual identity for Maiza Dias, a psychologist seeking to establish a professional and welcoming brand presence. The branding process began with moodboarding to define the visual direction — incorporating soft, warm tones of rose, lavender, and cream to evoke feelings of trust, care, and emotional safety.\n\nThe logo features a butterfly-brain symbol, representing transformation, mental health, and personal growth. Alternative logo versions were created for different applications and contexts.\n\nThe brand was extended into business card designs showcasing both the logo and contact information in a clean, elegant layout. Social media content was also developed for Instagram, featuring motivational and educational posts aligned with the brand's visual language and tone of voice.\n\nThe color palette (#FFFCF9, #D6CCE1, #A7727D, #684235, #BD655E) was carefully selected to communicate warmth, professionalism, and approachability — key attributes for a psychology practice.",
    platform: "Canva / Adobe Illustrator / Figma",
    target: "Establish professional visual identity",
    category: "branding",
    highlights: [
      "Logo design with butterfly-brain concept",
      "Alternative logo versions for different contexts",
      "Business card design (front and back)",
      "Social media content for Instagram",
      "Moodboarding and color palette definition",
      "Cohesive brand identity across all touchpoints",
    ],
    image: "/lovable-uploads/maiza-logo.png",
    galleryImages: [
      "/lovable-uploads/maiza-logo.png",
      "/lovable-uploads/maiza-moodboard.png",
      "/lovable-uploads/maiza-brand-guidelines.png",
      "/lovable-uploads/maiza-business-card.png",
      "/lovable-uploads/maiza-business-card-2.png",
      "/lovable-uploads/maiza-letterhead.png",
      "/lovable-uploads/maiza-story.png",
      "/lovable-uploads/maiza-post-1.png",
      "/lovable-uploads/maiza-post-2.png",
      "/lovable-uploads/maiza-post-3.png",
    ],
    icon: <Palette className="h-6 w-6" />,
    note: "This project was developed as a freelance branding service, showcasing the full creative process from moodboarding to final deliverables.",
  },
  {
    id: 6,
    slug: "wb-accounting-branding",
    title: "WB Accounting Branding",
    subtitle: "Complete Visual Identity for WB Accounting",
    description:
      "Developed a full branding package for an accounting firm, including logo design, business cards, social media content, and moodboarding — building a trustworthy and professional visual identity.",
    fullDescription:
      "This project involved creating a complete visual identity for WB Accounting, a modern accounting firm seeking to establish a strong, trustworthy brand presence in the financial services market.\n\nThe branding process began with extensive moodboarding to define the visual direction — incorporating a sophisticated palette of deep navy blue and gold to evoke trust, professionalism, and financial expertise. The textures of marble and linen were chosen to add a premium feel to the brand materials.\n\nThe logo features a bold WB monogram with gold accent elements, representing stability and growth. The intertwined letters symbolize the partnership between the firm and its clients. Alternative logo versions were created for different applications and digital contexts.\n\nThe brand was extended into elegant business card designs with a navy blue base and gold foil details, communicating luxury and reliability. Social media content was developed for Instagram, featuring financial tips, motivational quotes, and service announcements — all aligned with the brand's visual language.\n\nThe color palette (#1B2A4A, #C8A961, #F5F5F0, #2C3E6B, #8B7339) was carefully selected to communicate authority, trustworthiness, and sophistication — essential attributes for an accounting practice.",
    platform: "Canva / Adobe Illustrator / Figma",
    target: "Establish trustworthy corporate visual identity",
    category: "branding",
    highlights: [
      "Logo design with WB monogram concept",
      "Navy blue and gold premium color palette",
      "Business card design with gold foil effect",
      "Social media content strategy for Instagram",
      "Moodboarding with marble and linen textures",
      "Cohesive brand identity across all touchpoints",
    ],
    image: "/lovable-uploads/wb-accounting-logo.png",
    galleryImages: [
      "/lovable-uploads/wb-accounting-logo.png",
      "/lovable-uploads/wb-accounting-moodboard.png",
      "/lovable-uploads/wb-accounting-business-card.png",
      "/lovable-uploads/wb-accounting-post-1.png",
      "/lovable-uploads/wb-accounting-post-2.png",
      "/lovable-uploads/wb-accounting-post-3.png",
    ],
    icon: <Calculator className="h-6 w-6" />,
    note: "This project was developed as a branding case study, showcasing the full creative process from moodboarding to final deliverables for the financial services sector.",
  },
];
