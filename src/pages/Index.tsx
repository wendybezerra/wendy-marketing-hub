import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import VideoShowcase from "@/components/VideoShowcase";
import Insights from "@/components/Insights";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Portfolio />
      <VideoShowcase />
      <Insights />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
