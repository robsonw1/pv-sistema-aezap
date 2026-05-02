import { Search, Clock, Rocket, List, Flame, Users, Mic, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Search,
    title: "Buscador de Grupos",
    description: "Busque grupos com as palavras chaves do nicho que desejar o sistema encontrará como mágica!",
  },
  {
    icon: Clock,
    title: "Agendador De Envios",
    description: "Crie listas de envios e agende mensagens para serem enviadas automaticamente em uma data específica.",
  },
  {
    icon: Rocket,
    title: "Envio ilimitados",
    description: "Envie centenas de mensagens por dia, faça disparos quando quiser e sem cobranças adicionais para suas listas de contatos e os seus grupos favoritos.",
  },
  {
    icon: List,
    title: "Adicionador De Membros",
    description: "Adicione centenas de membros em seu grupo extraídos de sua agenda ou de grupos concorrentes com apenas alguns cliques.",
  },
  {
    icon: Flame,
    title: "Aquecedor De Números",
    description: "Sistema inteligente para fortalecer números de WhatsApp, dificultando possíveis bloqueios que podem ocorre.",
  },
  {
    icon: Users,
    title: "Adicionador De Membros",
    description: "Adicione centenas de membros extraídos de sua agenda ou de grupos concorrentes com apenas alguns cliques.",
  },
  {
    icon: Mic,
    title: "Envio Áudios",
    description: "Envio áudios automaticamente como se fossem gravados na hora!",
  },
  {
    icon: CheckCircle,
    title: "+10 Funções",
    description: "Para você completamente automatizar seu WhatsApp em todas as possibilidades",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Em uma só ferramenta, tudo que você precisa para{" "}
            <span className="text-primary">VENDER MAIS E MELHOR</span> no WhatsApp!
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 bg-gradient-card border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
            >
              <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
