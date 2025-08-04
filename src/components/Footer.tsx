import { Mail, Linkedin, Instagram, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Brand Column */}
            <div className="space-y-4">
              <div className="text-2xl font-bold text-coral">
                Wendy Bezerra
              </div>
              <p className="text-gray-300 leading-relaxed">
                Digital Marketing Strategist specialized in campaigns that generate exceptional 
                results through data-driven strategies.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-coral transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-coral transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="mailto:wendy@marketing.com" className="p-2 bg-gray-800 rounded-lg hover:bg-coral transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-coral">
                Services
              </h3>
              <ul className="space-y-2 text-gray-300">
                <li className="hover:text-white transition-colors cursor-pointer">
                  Email Marketing
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Social Media Strategy
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Content Creation
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Performance Analytics
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Brand Strategy
                </li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-coral">
                Contact
              </h3>
              <div className="space-y-3 text-gray-300">
                <p>
                  <span className="font-medium">Email:</span><br />
                  wendy@marketing.com
                </p>
                <p>
                  <span className="font-medium">Phone:</span><br />
                  +55 (11) 99999-9999
                </p>
                <p>
                  <span className="font-medium">Location:</span><br />
                  São Paulo, SP
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Wendy Bezerra. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="text-gray-400 text-sm">
                Available for new projects
              </div>
              <Button
                onClick={scrollToTop}
                size="sm"
                className="bg-coral hover:bg-coral-light text-white rounded-full p-2"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;