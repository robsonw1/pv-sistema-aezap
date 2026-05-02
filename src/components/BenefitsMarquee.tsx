import { Shield, Clock, BookOpen, Zap, Lock, Headphones, Gift, TrendingUp } from "lucide-react";

const benefits = [
  { icon: Headphones, text: "Suporte no WhatsApp" },
  { icon: Clock, text: "7 Dias de Garantia" },
  { icon: BookOpen, text: "Aulas Detalhadas" },
  { icon: Zap, text: "Atualizações Grátis" },
  { icon: Gift, text: "Bônus Exclusivo" },
  { icon: Lock, text: "Acesso Imediato" },
  { icon: Headphones, text: "Suporte no WhatsApp" },
  { icon: TrendingUp, text: "7 Dias de Garantia" },
];

const BenefitsMarquee = () => {
  return (
    <div className="relative overflow-hidden bg-secondary/50 py-6 border-y border-primary/30">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* First set */}
        {benefits.map((benefit, index) => (
          <div
            key={`first-${index}`}
            className="flex items-center gap-3 mx-8 text-foreground"
          >
            <benefit.icon className="h-5 w-5 text-primary" />
            <span className="font-semibold text-sm uppercase tracking-wide">
              {benefit.text}
            </span>
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {benefits.map((benefit, index) => (
          <div
            key={`second-${index}`}
            className="flex items-center gap-3 mx-8 text-foreground"
          >
            <benefit.icon className="h-5 w-5 text-primary" />
            <span className="font-semibold text-sm uppercase tracking-wide">
              {benefit.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsMarquee;
