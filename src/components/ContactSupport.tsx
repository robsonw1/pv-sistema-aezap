import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const ContactSupport = () => {
  const whatsappNumber = "5521996643311";
  const message = "Olá, ainda tenho dúvidas sobre o *sistema aezap*";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="container mx-auto max-w-3xl relative z-10">
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border/50 shadow-card text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Possui uma Pergunta Geral?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Se você tiver uma pergunta geral e quiser falar com nossa equipe, pode entrar em contato conosco pelo WhatsApp.
          </p>
          
          <Button 
            size="lg" 
            className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-lg px-8"
            asChild
          >
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-6 w-6" />
              ENTRAR EM CONTATO
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSupport;
