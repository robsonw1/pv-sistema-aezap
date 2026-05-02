import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
    {
    name: "Plano Mensal",
    price: "49,90",
    period: "mês",
    features: [
      "1 Licença",
      "Acesso completo à plataforma",
      "Suporte no WhatsApp",
      "Atualizações grátis",
      "Múltiplos atendentes",
      "Sistema anti-bloqueio",
      "Treinamento exclusivo",
      "Relatórios em tempo real",
    ],
    popular: false,
    link: "https://pay.kiwify.com.br/0MQPeqa",
  },

  {
    name: "Plano Anual",
    price: "27,90",
    period: "mês",
    originalPrice: "R$ 598",
    features: [
      "2 Licenças",
      "Use em 2 computadores",
      "Tudo do plano semestral",
      "Economize mais de 70%",
      "Acesso por 12 meses",
    ],
    popular: true,
    link: "https://pay.kiwify.com.br/B6dMI0Z",
  },
 {
    name: "Plano Semestral",
    price: "39,90",
    period: "mês",
    originalPrice: "R$ 299",
    features: [
      "1 Licença",
      "Tudo do plano mensal",
      "Bônus especiais",
      "Acesso por 6 meses",
    ],
    popular: false,
    link: "https://pay.kiwify.com.br/a5siD5s",
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Escolha Seu <span className="text-primary">Plano</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Invista no crescimento do seu negócio com a ferramenta mais completa do mercado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 bg-gradient-card border-primary/20 hover:shadow-glow transition-all duration-300 relative ${
                plan.popular ? "ring-2 ring-primary scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold uppercase">
                    Mais Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                {plan.originalPrice && (
                  <p className="text-muted-foreground line-through text-sm">
                    De {plan.originalPrice}
                  </p>
                )}
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-5xl font-bold text-primary">R$ {plan.price}</span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.popular ? "hero" : "outline"} 
                size="lg"
                className="w-full"
                asChild
              >
                <a href={plan.link} target="_blank" rel="noopener noreferrer">
                  Começar Agora
                </a>
              </Button>
              
              <p className="text-center text-sm text-muted-foreground mt-4">
                🔒 Garantia de 7 dias
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
