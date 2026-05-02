import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Em qual sistema operacional roda a ferramenta?",
      answer: "Nosso software foi desenvolvido exclusivamente para dispositivos com sistema operacional Windows. Ele não é compatível com MacBooks, smartphones ou qualquer outra plataforma que não utilize Windows."
    },
    {
      question: "É fácil de configurar?",
      answer: "Sim. Em poucos passos você realiza toda instalação e ativação do produto. Nossos vídeos tutoriais mostram o passo a passo e permite que qualquer pessoa possa utilizar e configurar sua máquina de vendas."
    },
    {
      question: "Para qual segmento é recomendado?",
      answer: "Todos. Negócios físicos ou digitais experimentam excelentes resultados com a plataforma. Hoje, 9 entre 10 brasileiros com acesso a internet utilizam o Whatsapp (segundo a Folha de S.P). E sua grande maioria afirma utilizar o WhatsApp para negociar e comprar sempre que possível, pela enorme facilidade e agilidade nas negociações."
    },
    {
      question: "Qual versão do windows é compatível?",
      answer: "Recomendamos o Windows 7 a 11 em um computador com no mínimo 4GB de memória ram e uma conexão com a internet de no mínimo 5MB. A maioria dos computadores atuais já atendem a este pré-requisito. Ele pode rodar em outras versões anteriores do Windows também, mas não podemos garantir."
    },
    {
      question: "Qual a garantia de compra?",
      answer: "Conforme o código de defesa do consumidor, você tem 7 dias de garantia para desistir da compra caso você tenha algum problema! Esperamos que não tenha nenhum, se Deus quiser 🙂 Mas, se acontecer, basta manter contato pelo canal oficial de suporte."
    },
    {
      question: "Como sei se minha compra foi realizada com êxito?",
      answer: "Após compensação do pagamento da sua licença do ÆZap, você receberá um e-mail automático da plataforma Kiwify com os seus dados de acesso para a sua área de membros. Caso não encontre esta mensagem na caixa de entrada do seu e-mail cadastrado no ato da compra da ferramenta, verifique no spam ou lixo eletrônico ou faça uma busca na barra de pesquisa do seu e-mail pela palavra Kiwify para localizar a mensagem."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-glow to-primary bg-clip-text text-transparent">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas sobre o ÆZap
          </p>
        </div>

        <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-border/50 shadow-card">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                <AccordionTrigger className="text-left text-foreground hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
