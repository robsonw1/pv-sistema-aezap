import { Button } from "@/components/ui/button";
import { Download, Play, Pause } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState, useRef } from "react";

const VideoDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const togglePause = () => {
    if (iframeRef.current) {
      const command = isPaused ? 'playVideo' : 'pauseVideo';
      iframeRef.current.contentWindow?.postMessage(
        JSON.stringify({ event: 'command', func: command, args: [] }),
        '*'
      );
      setIsPaused(!isPaused);
    }
  };

  return (
    <section id="video-demo" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Chega de perder{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-foreground">TEMPO</span>
              <span className="absolute inset-0 bg-primary/20 border-2 border-primary blur-sm" />
            </span>{" "}
            com o que pode ser automatizado!
          </h2>
          <p className="text-xl text-muted-foreground">
            Única ferramenta com{" "}
            <span className="text-primary font-semibold bg-primary/10 px-3 py-1 rounded">
              sistema anti-bloqueio.
            </span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Video Section */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full" />
            <div className="relative bg-gradient-card rounded-lg p-6 shadow-card border border-border/50">
              <div className="mb-4">
                <h3 className="text-2xl font-bold mb-2">
                  Entenda como o{" "}
                  <span className="text-primary">ÆZap</span>
                </h3>
                <p className="text-lg text-muted-foreground">Pode te ajudar!</p>
              </div>
              
              <div 
                className="relative rounded-lg overflow-hidden shadow-glow aspect-video bg-black/50 flex items-center justify-center cursor-pointer group"
                onClick={() => setIsOpen(true)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-primary/20 backdrop-blur-sm border-2 border-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-10 h-10 text-primary ml-1" fill="currentColor" />
                  </div>
                  <p className="text-white font-semibold text-lg">Assistir Vídeo</p>
                </div>
              </div>

              <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="max-w-4xl p-0 bg-black border-primary/20">
                  <div className="relative">
                    <iframe
                      ref={iframeRef}
                      className="w-full aspect-video"
                      src={`https://www.youtube.com/embed/teoN8o6c4cs?start=962&autoplay=1&controls=0&enablejsapi=1`}
                      title="Apresentação ÆZap"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    <button
                      onClick={togglePause}
                      className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-primary/80 hover:bg-primary flex items-center justify-center transition-colors z-10"
                    >
                      {isPaused ? (
                        <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                      ) : (
                        <Pause className="w-6 h-6 text-white" fill="currentColor" />
                      )}
                    </button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Features Card */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="bg-gradient-card rounded-lg p-8 shadow-card border border-primary/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl" />
              
              <div className="relative z-10">
                <p className="text-primary text-sm font-semibold mb-2 tracking-wider uppercase">
                  O Melhor do Mercado
                </p>
                <h3 className="text-3xl font-bold mb-6">
                  Nossa plataforma oferece uma{" "}
                  <span className="text-primary">AMPLA GAMA DE FUNÇÕES</span>{" "}
                  para extração de leads, distribuição de ofertas e fortalecimento de números, garantindo que você não precise se preocupar com bloqueios.
                </h3>
                
                <Button
                  variant="hero"
                  size="lg"
                  onClick={() => scrollToSection("pricing")}
                  className="w-full text-lg group"
                >
                  <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  BAIXAR AGORA!
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;