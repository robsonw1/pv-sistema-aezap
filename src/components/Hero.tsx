import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated glow effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-glow animate-glow-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-glow animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
      
      {/* Blue light edges */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
            A Chave para Potencializar Suas{" "}
            <span className="text-primary">Vendas no WhatsApp</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Em Uma Só Ferramenta{" "}
            <span className="text-primary font-semibold">Tudo Que Você Precisa</span>{" "}
            Para Vender Mais e Melhor No WhatsApp
          </p>
          
          <div className="relative max-w-4xl mx-auto mb-12 animate-float" style={{ animationDelay: "0.4s" }}>
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
            <img 
              src={heroMockup} 
              alt="Dashboard de Vendas WhatsApp" 
              className="relative z-10 w-full rounded-lg shadow-2xl"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection("video-demo")}
              className="text-lg"
            >
              Conhecer Ferramenta
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection("pricing")}
              className="text-lg"
            >
              Ver Planos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
