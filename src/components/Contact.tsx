import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";
const Contact = () => {
  const contactInfo = [{
    icon: <Mail className="h-6 w-6" />,
    title: "Email",
    content: "wendy@marketing.com",
    link: "mailto:wendy@marketing.com"
  }, {
    icon: <Phone className="h-6 w-6" />,
    title: "Telefone",
    content: "+55 (11) 99999-9999",
    link: "tel:+5511999999999"
  }, {
    icon: <MapPin className="h-6 w-6" />,
    title: "Localização",
    content: "São Paulo, SP",
    link: null
  }];
  const socialLinks = [{
    icon: <Linkedin className="h-5 w-5" />,
    name: "LinkedIn",
    link: "#"
  }, {
    icon: <Instagram className="h-5 w-5" />,
    name: "Instagram",
    link: "#"
  }];
  return <section id="contact" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Vamos Conversar?
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Pronta para criar campanhas que geram resultados excepcionais? 
              Entre em contato e vamos transformar sua estratégia de marketing.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                Envie uma Mensagem
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input placeholder="Seu Nome" className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-white" />
                  </div>
                  <div>
                    <Input type="email" placeholder="Seu Email" className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-white" />
                  </div>
                </div>
                <div>
                  <Input placeholder="Assunto" className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-white" />
                </div>
                <div>
                  <Textarea placeholder="Sua Mensagem" rows={5} className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:border-white resize-none" />
                </div>
                <Button className="w-full bg-white text-coral hover:bg-white/90 font-semibold text-lg py-6">
                  Enviar Mensagem
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Informações de Contato
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => <div key={index} className="flex items-center space-x-4">
                      
                      
                    </div>)}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Redes Sociais
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {})}
                </div>
              </div>

              <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
                <h4 className="font-semibold text-white mb-2">
                  Disponibilidade
                </h4>
                <p className="text-white/80 text-sm">
                  Segunda a Sexta: 9h às 18h<br />
                  Resposta em até 24 horas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;