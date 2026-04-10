import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Rocket, Globe, Server, Code2, ShieldCheck, Zap } from "lucide-react";

export const LaunchGuide: React.FC = () => {
  const steps = [
    {
      title: "1. Planejamento e Domínio",
      icon: <Globe className="w-5 h-5 text-blue-500" />,
      content: "O primeiro passo é escolher um nome para o seu site e registrar um domínio (ex: .com.br, .com). Utilize serviços como Registro.br ou Namecheap. Pense em um nome curto, memorável e que represente sua marca ou projeto."
    },
    {
      title: "2. Desenvolvimento Local",
      icon: <Code2 className="w-5 h-5 text-green-500" />,
      content: "Crie seu site no seu computador. Use ferramentas como VS Code, Git e frameworks modernos (React, Next.js, Vite). Certifique-se de que o site é responsivo (funciona bem em celulares) e rápido."
    },
    {
      title: "3. Escolha da Hospedagem",
      icon: <Server className="w-5 h-5 text-purple-500" />,
      content: "Você precisa de um servidor para colocar seus arquivos. Para sites estáticos (HTML/CSS/JS), serviços como Vercel, Netlify ou GitHub Pages são excelentes e gratuitos. Para aplicações mais complexas, considere AWS, Google Cloud ou DigitalOcean."
    },
    {
      title: "4. Configuração de Segurança (SSL)",
      icon: <ShieldCheck className="w-5 h-5 text-yellow-500" />,
      content: "Hoje em dia, o HTTPS é obrigatório. Ele garante que os dados entre o usuário e o servidor sejam criptografados. A maioria das hospedagens modernas (Vercel/Netlify) oferece certificados SSL gratuitos automaticamente."
    },
    {
      title: "5. Deploy e CI/CD",
      icon: <Zap className="w-5 h-5 text-orange-500" />,
      content: "Configure um pipeline de integração contínua. Sempre que você enviar código para o GitHub, o site deve ser atualizado automaticamente. Isso evita erros manuais e agiliza o processo de atualização."
    },
    {
      title: "6. Lançamento e Monitoramento",
      icon: <Rocket className="w-5 h-5 text-red-500" />,
      content: "Após o deploy, teste tudo! Verifique links quebrados, performance (use o Google Lighthouse) e configure ferramentas de análise como Google Analytics para entender quem está visitando seu site."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto h-full flex flex-col gap-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight flex items-center justify-center gap-3">
          <Rocket className="w-8 h-8 text-primary" />
          Guia de Lançamento Web
        </h2>
        <p className="text-muted-foreground">Siga estes passos para transformar seu código em um site operante no mundo real.</p>
      </div>

      <ScrollArea className="flex-grow pr-4">
        <div className="grid grid-cols-1 gap-4 pb-8">
          <Accordion className="w-full space-y-4">
            {steps.map((step, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-xl px-4 bg-card">
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex items-center gap-4 text-left">
                    <div className="p-2 rounded-lg bg-muted">
                      {step.icon}
                    </div>
                    <span className="font-bold text-lg">{step.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pl-14">
                  {step.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Card className="mt-8 border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Dica de Ouro
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm">
                Comece pequeno. Use o <strong>Vercel</strong> ou <strong>Netlify</strong> para seu primeiro deploy. Eles se conectam diretamente ao seu repositório Git e fazem todo o trabalho pesado de configuração de servidor e SSL para você em segundos.
              </p>
            </CardContent>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
};
