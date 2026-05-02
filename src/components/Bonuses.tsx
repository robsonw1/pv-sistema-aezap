import { Gift } from "lucide-react";
import bonusTutorial from "@/assets/bonus-tutorial.png";
import bonusParceiro from "@/assets/bonus-parceiro.png";

const Bonuses = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Gift className="w-5 h-5" />
            <span className="text-sm font-semibold">BÔNUS EXCLUSIVOS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ganhe Estes Bônus Incríveis
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ao adquirir qualquer um dos nossos planos, você recebe acesso imediato a estes bônus especiais
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Bônus 1 */}
          <div className="group relative bg-gradient-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-fade-in-up">
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-glow">
              1
            </div>
            
            <div className="mb-6 rounded-xl overflow-hidden">
              <img 
                src={bonusTutorial} 
                alt="Tutorial completo em vídeo aula" 
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <h3 className="text-2xl font-bold mb-3">
              Tutorial Completo em Vídeo Aula
            </h3>
            <p className="text-muted-foreground">
              Aprenda a usar cada função da ferramenta com vídeo aulas detalhadas e passo a passo completo
            </p>
          </div>

          {/* Bônus 2 */}
          <div className="group relative bg-gradient-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-glow">
              2
            </div>
            
            <div className="mb-6 rounded-xl overflow-hidden">
              <img 
                src={bonusParceiro} 
                alt="Seja nosso parceiro" 
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <h3 className="text-2xl font-bold mb-3">
              Seja Nosso Parceiro
            </h3>
            <p className="text-muted-foreground">
              Ganhe comissões indicando novos clientes e receba notificações a cada nova indicação realizada
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bonuses;
