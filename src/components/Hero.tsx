import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";

const Hero = () => {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-4 h-4 bg-white/20 rounded-full animate-float"></div>
      <div className="absolute top-40 right-32 w-6 h-6 bg-white/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-32 left-32 w-3 h-3 bg-white/20 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      <div className="absolute bottom-20 right-20 w-5 h-5 bg-white/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Wendy Bezerra
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 font-light tracking-wide">
            STRATEGIC SOCIAL MEDIA & MARKETING
          </p>
          <p className="text-lg mb-12 opacity-80 max-w-2xl mx-auto leading-relaxed">
            Specialist in data-driven campaigns that generate extraordinary results. 
            +97K views, +76K unique users reached.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToPortfolio}
              size="lg" 
              className="bg-white text-coral hover:bg-white/90 font-semibold text-lg px-8 py-6 rounded-full transition-all duration-300 hover:shadow-glow"
            >
              View Portfolio
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-coral text-white hover:bg-coral-light font-semibold text-lg px-8 py-6 rounded-full transition-all duration-300 hover:shadow-glow"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-white/60" />
      </div>
    </section>
  );
};

export default Hero;