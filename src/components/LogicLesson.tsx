import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Code2, Play, RotateCcw, Terminal, Info, Lightbulb, Database, BarChart3 } from "lucide-react";

interface Movie {
  titulo: string;
  ano: number;
  nota: number;
  genero: string;
}

const bancoDeFilmes: Movie[] = [
  { titulo: "O Poderoso Chefão", ano: 1972, nota: 9.2, genero: "Drama" },
  { titulo: "Matrix", ano: 1999, nota: 8.7, genero: "Ficção Científica" },
  { titulo: "Vingadores", ano: 2012, nota: 8.0, genero: "Ação" },
  { titulo: "O Senhor dos Anéis", ano: 2001, nota: 8.9, genero: "Fantasia" },
  { titulo: "Parasita", ano: 2019, nota: 8.6, genero: "Drama" },
  { titulo: "Interestelar", ano: 2014, nota: 8.6, genero: "Ficção Científica" }
];

export const LogicLesson: React.FC = () => {
  const [output1, setOutput1] = React.useState<string[]>([]);
  const [output2, setOutput2] = React.useState<string[]>([]);
  const [output3, setOutput3] = React.useState<string[]>([]);

  const executarDesafio1 = () => {
    const results: string[] = [];
    for (let i = 0; i < bancoDeFilmes.length; i++) {
      results.push(`• ${bancoDeFilmes[i].titulo}`);
    }
    setOutput1(results);
  };

  const executarDesafio2 = () => {
    const results: string[] = ["Filmes Excelentes (Nota > 8.8):", "--------------------------------"];
    for (let i = 0; i < bancoDeFilmes.length; i++) {
      if (bancoDeFilmes[i].nota > 8.8) {
        results.push(`★ ${bancoDeFilmes[i].titulo} (Nota: ${bancoDeFilmes[i].nota})`);
      }
    }
    setOutput2(results);
  };

  const executarDesafio3 = () => {
    let somaDasNotas = 0;
    for (let i = 0; i < bancoDeFilmes.length; i++) {
      somaDasNotas += bancoDeFilmes[i].nota;
    }
    const media = somaDasNotas / bancoDeFilmes.length;
    setOutput3([
      `Total da soma de todas as notas: ${somaDasNotas.toFixed(1)}`,
      `Quantidade de filmes analisados: ${bancoDeFilmes.length}`,
      "--------------------------------",
      `A média de notas dos filmes é: ${media.toFixed(2)}`
    ]);
  };

  const resetOutputs = () => {
    setOutput1([]);
    setOutput2([]);
    setOutput3([]);
  };

  return (
    <div className="max-w-4xl mx-auto h-full flex flex-col gap-6">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold tracking-tight flex items-center justify-center gap-3">
          <Code2 className="w-8 h-8 text-blue-500" />
          Aula Prática: Lógica de Programação
        </h2>
        <p className="text-muted-foreground">
          Aprenda como a Lógica de Programação é usada no mundo real para analisar dados usando JavaScript.
        </p>
      </div>

      <ScrollArea className="flex-grow pr-4">
        <div className="space-y-12 pb-12">
          {/* Section 1: Database */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 border-b-2 border-blue-500/20 pb-2">
              <Database className="w-6 h-6 text-blue-500" />
              <h3 className="text-2xl font-bold">1. A Nossa Base de Dados</h3>
            </div>
            <p className="text-muted-foreground">
              Imagine que descarregou uma lista de filmes de uma API da internet. Os dados chegaram num formato de Lista (Array) de Objetos.
            </p>
            <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl text-blue-400 font-medium">
              O seu objetivo: Extrair informações valiosas desta lista resolvendo desafios lógicos.
            </div>
            <pre className="bg-slate-950 p-4 rounded-xl overflow-x-auto border border-border">
              <code className="text-sm font-mono text-blue-400">
{`const bancoDeFilmes = [
  { titulo: "O Poderoso Chefão", ano: 1972, nota: 9.2, genero: "Drama" },
  { titulo: "Matrix", ano: 1999, nota: 8.7, genero: "Ficção Científica" },
  { titulo: "Vingadores", ano: 2012, nota: 8.0, genero: "Ação" },
  { titulo: "O Senhor dos Anéis", ano: 2001, nota: 8.9, genero: "Fantasia" },
  { titulo: "Parasita", ano: 2019, nota: 8.6, genero: "Drama" },
  { titulo: "Interestelar", ano: 2014, nota: 8.6, genero: "Ficção Científica" }
];`}
              </code>
            </pre>
          </section>

          {/* Section 2: Challenge 1 */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 border-b-2 border-blue-500/20 pb-2">
              <RotateCcw className="w-6 h-6 text-blue-500" />
              <h3 className="text-2xl font-bold">2. Desafio 1: Listar Títulos (Loops)</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  <strong>O Problema:</strong> Como fazemos para o computador ler esta lista e imprimir apenas o nome de cada filme?
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>A Lógica:</strong> Precisamos de uma estrutura que "ande" item por item na nossa lista. Chamamos a isto um <strong>Loop</strong>.
                </p>
                <pre className="bg-slate-950 p-4 rounded-xl border border-border overflow-x-auto">
                  <code className="text-xs font-mono text-green-400">
{`for (let i = 0; i < bancoDeFilmes.length; i++) {
    let filmeAtual = bancoDeFilmes[i];
    console.log(filmeAtual.titulo); 
}`}
                  </code>
                </pre>
              </div>
              <Card className="bg-muted/30 border-dashed">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-sm flex items-center gap-2">
                      <Terminal className="w-4 h-4" />
                      Console Output
                    </CardTitle>
                    <Button size="sm" variant="outline" onClick={executarDesafio1} className="gap-2">
                      <Play className="w-3 h-3" /> Executar
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-black/40 rounded-lg p-4 font-mono text-xs min-h-[120px] text-green-500">
                    {output1.length > 0 ? output1.map((line, i) => <div key={i}>{line}</div>) : "Aguardando execução..."}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 3: Challenge 2 */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 border-b-2 border-blue-500/20 pb-2">
              <Play className="w-6 h-6 text-blue-500" />
              <h3 className="text-2xl font-bold">3. Desafio 2: Filtrar Melhores (Condicionais)</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  <strong>O Problema:</strong> O seu chefe quer saber quais filmes têm nota <strong>maior que 8.8</strong>.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>A Lógica:</strong> Agora, além do Loop, precisamos de um "guarda-sinal" para testar uma condição. Usamos o <strong>If</strong>.
                </p>
                <pre className="bg-slate-950 p-4 rounded-xl border border-border overflow-x-auto">
                  <code className="text-xs font-mono text-yellow-400">
{`for (let i = 0; i < bancoDeFilmes.length; i++) {
    let filme = bancoDeFilmes[i];
    if (filme.nota > 8.8) {
        console.log(filme.titulo + " - " + filme.nota);
    }
}`}
                  </code>
                </pre>
              </div>
              <Card className="bg-muted/30 border-dashed">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-sm flex items-center gap-2">
                      <Terminal className="w-4 h-4" />
                      Console Output
                    </CardTitle>
                    <Button size="sm" variant="outline" onClick={executarDesafio2} className="gap-2">
                      <Play className="w-3 h-3" /> Executar
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-black/40 rounded-lg p-4 font-mono text-xs min-h-[120px] text-yellow-500">
                    {output2.length > 0 ? output2.map((line, i) => <div key={i}>{line}</div>) : "Aguardando execução..."}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 4: Challenge 3 */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 border-b-2 border-blue-500/20 pb-2">
              <BarChart3 className="w-6 h-6 text-blue-500" />
              <h3 className="text-2xl font-bold">4. Desafio 3: Média de Notas (Acumuladores)</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  <strong>O Problema:</strong> Precisamos descobrir a nota média de todos os filmes da nossa base.
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>A Lógica:</strong> Criamos uma variável a zeros, fazemos um loop para adicionar todas as notas, e no final dividimos pela quantidade.
                </p>
                <pre className="bg-slate-950 p-4 rounded-xl border border-border overflow-x-auto">
                  <code className="text-xs font-mono text-purple-400">
{`let soma = 0; 
for (let i = 0; i < bancoDeFilmes.length; i++) {
    soma += bancoDeFilmes[i].nota;
}
let media = soma / bancoDeFilmes.length;
console.log("Média: " + media);`}
                  </code>
                </pre>
              </div>
              <Card className="bg-muted/30 border-dashed">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-sm flex items-center gap-2">
                      <Terminal className="w-4 h-4" />
                      Console Output
                    </CardTitle>
                    <Button size="sm" variant="outline" onClick={executarDesafio3} className="gap-2">
                      <Play className="w-3 h-3" /> Executar
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-black/40 rounded-lg p-4 font-mono text-xs min-h-[120px] text-purple-500">
                    {output3.length > 0 ? output3.map((line, i) => <div key={i}>{line}</div>) : "Aguardando execução..."}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Section 5: Tips */}
          <Card className="border-orange-500/20 bg-orange-500/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-500">
                <Info className="w-5 h-5" />
                Plano de Emergência: Como Tirar Dúvidas?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                <li><strong>A Técnica do Pato de Borracha:</strong> Explique o seu código linha a linha em voz alta. O cérebro humano muitas vezes deteta o erro ao ouvir a lógica!</li>
                <li><strong>MDN Web Docs:</strong> A documentação oficial. Pesquise no Google: <code>MDN for loop javascript</code>.</li>
                <li><strong>Pergunte ao seu Tutor IA:</strong> Pode sempre enviar uma mensagem no chat com a sua dúvida específica.</li>
              </ul>
              <div className="mt-6 bg-background/50 p-4 rounded-xl border border-orange-500/20">
                <h4 className="font-bold text-orange-500 flex items-center gap-2 mb-2">
                  <Lightbulb className="w-4 h-4" />
                  Exercício de Fixação:
                </h4>
                <p className="text-sm text-muted-foreground">
                  Tente criar mentalmente a lógica para listar apenas os filmes lançados <strong>antes dos anos 2000</strong>. Como ficaria o <code>if</code>?
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
};
