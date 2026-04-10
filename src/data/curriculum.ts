export interface Subject {
  id: string;
  title: string;
  totalHours: number;
  presencialHours: number;
  googleClassroomHours: number;
  description: string;
  topics?: string[];
}

export const curriculum: Subject[] = [
  {
    id: "ind-4-0",
    title: "Introdução à Indústria 4.0",
    totalHours: 18.75,
    presencialHours: 0,
    googleClassroomHours: 18.75,
    description: "Conceitos fundamentais da quarta revolução industrial, IoT, Big Data e automação.",
    topics: [
      "O que define a Indústria 4.0?",
      "Como o Big Data influencia a tomada de decisão?",
      "Quais os desafios da cibersegurança na indústria?",
      "Explique o conceito de Gêmeos Digitais (Digital Twins).",
      "Integração de IoT e IA em ambientes industriais.",
      "Monitoramento em tempo real e predição de falhas."
    ]
  },
  {
    id: "saude-seguranca",
    title: "Saúde, Segurança e Meio Ambiente",
    totalHours: 18.75,
    presencialHours: 0,
    googleClassroomHours: 18.75,
    description: "Normas de segurança no trabalho, ergonomia e práticas sustentáveis no ambiente de TI.",
    topics: [
      "PCMSO (NR-7) e exames ocupacionais.",
      "Ergonomia (NR-17) e adaptação do posto de trabalho.",
      "PGR (NR-1) e Inventário de Riscos.",
      "CIPA (NR-5) e prevenção de acidentes e assédio.",
      "Trabalho em Altura (NR-35) e medidas de proteção.",
      "PGRS e gerenciamento de resíduos sólidos.",
      "ISO 14001 e Sistemas de Gestão Ambiental.",
      "Licenciamento Ambiental e legislação (IBAMA/CONAMA).",
      "Indicadores de SSMA (Reativos e Proativos).",
      "DDS (Diálogo Diário de Segurança) e conscientização."
    ]
  },
  {
    id: "inovacao",
    title: "Projeto de Inovação",
    totalHours: 75,
    presencialHours: 45,
    googleClassroomHours: 30,
    description: "Desenvolvimento de soluções criativas e projetos práticos aplicando tecnologia.",
    topics: [
      "Como aplicar o Design Thinking em um projeto?",
      "O que é um MVP (Minimum Viable Product)?",
      "Como validar uma ideia de negócio com usuários reais?",
      "Quais ferramentas usar para prototipagem rápida?"
    ]
  },
  {
    id: "gestao-agil",
    title: "Gestão Ágil e Governança de TI",
    totalHours: 30,
    presencialHours: 0,
    googleClassroomHours: 30,
    description: "Metodologias ágeis (Scrum, Kanban) e boas práticas de governança corporativa.",
    topics: [
      "Diferença entre Scrum e Kanban.",
      "O papel do Product Owner e do Scrum Master.",
      "O que é o framework COBIT e sua importância?",
      "Como medir a performance de um time ágil?"
    ]
  },
  {
    id: "fundamentos-ti",
    title: "Fundamentos de TI",
    totalHours: 90,
    presencialHours: 30,
    googleClassroomHours: 60,
    description: "Hardware, sistemas operacionais, redes e infraestrutura básica.",
    topics: [
      "Diferença entre arquitetura RISC e CISC.",
      "Como funciona o modelo OSI de redes?",
      "Principais comandos de terminal Linux.",
      "O que é virtualização e como ela funciona?"
    ]
  },
  {
    id: "logica",
    title: "Lógica de Programação",
    totalHours: 150,
    presencialHours: 135,
    googleClassroomHours: 15,
    description: "Algoritmos, estruturas de dados e pensamento computacional.",
    topics: [
      "Como funcionam as estruturas de repetição (loops)?",
      "O que são funções recursivas?",
      "Diferença entre arrays e listas encadeadas.",
      "Como analisar a complexidade de um algoritmo (Big O)?"
    ]
  },
  {
    id: "design",
    title: "Fundamentos de Design",
    totalHours: 90,
    presencialHours: 82.5,
    googleClassroomHours: 7.5,
    description: "UX/UI, teoria das cores, tipografia e prototipação.",
    topics: [
      "Os 10 princípios de usabilidade de Nielsen.",
      "Como escolher uma paleta de cores acessível?",
      "Diferença entre UI (Interface) e UX (Experiência).",
      "O que é hierarquia visual e como aplicá-la?"
    ]
  },
  {
    id: "frontend",
    title: "Desenvolvimento de Front-End",
    totalHours: 176.25,
    presencialHours: 165,
    googleClassroomHours: 11.25,
    description: "HTML5, CSS3, JavaScript e frameworks modernos.",
    topics: [
      "Como funciona o Flexbox e o CSS Grid?",
      "O que é o DOM e como manipulá-lo com JS?",
      "Diferença entre frameworks (React, Vue, Angular).",
      "Como otimizar a performance de carregamento de um site?"
    ]
  },
  {
    id: "banco-dados",
    title: "Banco de Dados",
    totalHours: 120,
    presencialHours: 108.75,
    googleClassroomHours: 11.25,
    description: "Modelagem de dados, SQL e bancos NoSQL.",
    topics: [
      "O que são as Formas Normais em bancos relacionais?",
      "Diferença entre INNER JOIN e LEFT JOIN.",
      "Quando usar um banco NoSQL (ex: MongoDB)?",
      "Como criar índices para otimizar consultas?"
    ]
  },
  {
    id: "backend",
    title: "Desenvolvimento de Back-End",
    totalHours: 150,
    presencialHours: 142.5,
    googleClassroomHours: 7.5,
    description: "Lógicas de servidor, autenticação e processamento de dados.",
    topics: [
      "Como funciona o protocolo HTTP/HTTPS?",
      "O que é autenticação JWT e como implementar?",
      "Diferença entre processamento síncrono e assíncrono.",
      "Como gerenciar variáveis de ambiente de forma segura?"
    ]
  },
  {
    id: "apis",
    title: "Desenvolvimento de APIs",
    totalHours: 120,
    presencialHours: 112.5,
    googleClassroomHours: 7.5,
    description: "Criação e consumo de serviços RESTful e documentação.",
    topics: [
      "Os princípios da arquitetura REST.",
      "Como documentar uma API com Swagger/OpenAPI?",
      "O que são Webhooks e quando utilizá-los?",
      "Como implementar versionamento em uma API?"
    ]
  },
  {
    id: "testes",
    title: "Teste de Softwares",
    totalHours: 90,
    presencialHours: 75,
    googleClassroomHours: 15,
    description: "Garantia de qualidade, testes unitários, integração e automação.",
    topics: [
      "Diferença entre testes unitários e testes de integração.",
      "O que é TDD (Test Driven Development)?",
      "Como realizar testes de carga e estresse?",
      "Ferramentas populares para automação de testes (Cypress, Jest)."
    ]
  },
  {
    id: "implantacao",
    title: "Implantação de Sistema Web",
    totalHours: 71.25,
    presencialHours: 63.75,
    googleClassroomHours: 7.5,
    description: "Cloud computing, CI/CD e publicação de aplicações.",
    topics: [
      "O que é um pipeline de CI/CD?",
      "Diferença entre IaaS, PaaS e SaaS.",
      "Como configurar um container Docker?",
      "Estratégias de deploy (Blue-Green, Canary)."
    ]
  }
];
