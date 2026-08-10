/**
 * Conteúdo institucional do SAED.
 * Fonte prioritária: APRESENTACAO_COMERCIAL_SAED.md e docs técnicas do MVP.
 * Não inventar clientes, métricas, contatos ou funcionalidades não documentadas.
 */

export const siteConfig = {
  name: "SAED",
  fullName: "Sistema de Apoio Educacional",
  tagline: "Copiloto Pedagógico Inteligente",
  domain: "https://saed.app.br",
  title: "SAED | Copiloto Pedagógico Inteligente",
  description:
    "SAED — Sistema de Apoio Educacional. Copiloto pedagógico com IA especializada em apoio pedagógico a alunos neurodivergentes: identificação de necessidades pedagógicas, estratégias e acompanhamento — sem diagnóstico. A IA sugere; o profissional decide.",
  principle: "IA como copiloto. Professor como decisor.",
  valueProposition:
    "O SAED foi desenhado para apoiar o acompanhamento pedagógico de alunos neurodivergentes. Transforma observações em informações estruturadas e sugestões de estratégias — com identificação de necessidades pedagógicas, não diagnósticos — mantendo o profissional no controle da decisão.",
} as const;

/** Contato: nenhum e-mail, WhatsApp ou rede social validado nos documentos consultados. */
export const contact = {
  // TODO: aguardando e-mail institucional validado
  email: null as string | null,
  // TODO: aguardando WhatsApp comercial validado
  whatsapp: null as string | null,
  // TODO: aguardando Instagram institucional validado
  instagram: null as string | null,
  // TODO: aguardando LinkedIn institucional validado
  linkedin: null as string | null,
  location: null as string | null,
} as const;

export const navItems = [
  { href: "#inicio", label: "Início" },
  { href: "#problema", label: "O Problema" },
  { href: "#solucao", label: "A Solução" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#ia", label: "IA especializada" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#instituicoes", label: "Para Instituições" },
  { href: "#contato", label: "Contato" },
] as const;

export const hero = {
  badge: "Especializado em apoio pedagógico a alunos neurodivergentes",
  headline:
    "Copiloto Pedagógico Inteligente. IA como copiloto. Professor como decisor.",
  text: "Transforme observações pedagógicas em informações estruturadas, estratégias de acompanhamento e evolução mensurável — com IA especializada em apoio pedagógico a alunos neurodivergentes, e o profissional sempre no controle.",
  highlights: [
    "IA especializada em apoio pedagógico a alunos neurodivergentes",
    "Análise estruturada por eixos",
    "Estratégias pedagógicas",
    "Acompanhamento de evolução",
  ],
  primaryCta: { href: "#solucao", label: "Conheça o SAED" },
  secondaryCta: { href: "#contato", label: "Agende uma demonstração" },
} as const;

export const problemIntro =
  "Na educação inclusiva, a falta de dados estruturados dificulta especialmente o acompanhamento pedagógico de alunos neurodivergentes — e aumenta o risco de decisões baseadas só em intuição.";

export const problems = [
  {
    title: "Decisões por intuição",
    description:
      "Sem dados estruturados, fica mais difícil embasar o acompanhamento pedagógico de alunos neurodivergentes e identificar necessidades específicas de apoio — sem recorrer a rótulos clínicos.",
  },
  {
    title: "Sobrecarga profissional",
    description:
      "Múltiplos alunos com necessidades diversas, pouco tempo para análise detalhada e desgaste emocional e profissional no dia a dia.",
  },
  {
    title: "Riscos éticos e jurídicos",
    description:
      "Uso indevido de termos clínicos no ambiente pedagógico, risco de diagnóstico não autorizado e necessidade de conformidade com a LGPD.",
  },
  {
    title: "Falta de padronização",
    description:
      "Observações não estruturadas, dificuldade para acompanhar evolução ao longo do tempo e ausência de histórico organizado.",
  },
] as const;

export const solutionFlow = [
  "Observar",
  "Analisar",
  "Sugerir",
  "Aplicar",
  "Acompanhar",
  "Evoluir",
] as const;

export const axes = [
  {
    letter: "A",
    title: "Atenção e Engajamento",
    items: [
      "Tempo de foco sustentado",
      "Frequência de distrações",
      "Manutenção de tarefa",
    ],
  },
  {
    letter: "B",
    title: "Autorregulação Emocional",
    items: [
      "Reação à frustração",
      "Adaptação a mudanças de rotina",
      "Nível de impulsividade",
    ],
  },
  {
    letter: "C",
    title: "Comunicação",
    items: [
      "Comunicação verbal",
      "Comunicação não verbal",
      "Compreensão de instruções",
    ],
  },
  {
    letter: "D",
    title: "Interação Social",
    items: [
      "Iniciativa social",
      "Resposta a pares",
      "Brincadeira cooperativa",
    ],
  },
  {
    letter: "E",
    title: "Processamento Pedagógico",
    items: [
      "Ritmo de aprendizado",
      "Preferências sensoriais (visual/auditivo)",
      "Forma de processar informações",
    ],
  },
] as const;

export const ageSensitivity = {
  title: "Sensibilidade etária",
  description:
    "O sistema ajusta automaticamente limiares de avaliação com base na idade, com faixas ≤6, 7–10 e ≥11 anos, para avaliações mais adequadas a cada etapa do desenvolvimento.",
} as const;

export const journeySteps = [
  {
    title: "Observação",
    description:
      "Perguntas objetivas por eixo pedagógico, com escalas simplificadas (1–5) e exemplos práticos que guiam o educador passo a passo.",
  },
  {
    title: "Análise",
    description:
      "Conversão automática das escalas, cálculo de scores por eixo com pesos ajustados por idade e classificação em níveis de acompanhamento.",
  },
  {
    title: "Necessidades pedagógicas",
    description:
      "Identificação de necessidades por eixo e contexto ambiental, com alertas éticos — sem diagnóstico clínico.",
  },
  {
    title: "Estratégias",
    description:
      "Sugestões a partir de um banco de estratégias pedagógicas, considerando scores, idade, contexto e histórico de aplicação.",
  },
  {
    title: "Aplicação",
    description:
      "O profissional decide o que aplicar e registra as estratégias utilizadas e os resultados observados.",
  },
  {
    title: "Acompanhamento",
    description:
      "Histórico de análises, identificação de progressos e regressões e suporte a reuniões com a equipe pedagógica.",
  },
  {
    title: "Evolução",
    description:
      "Acompanhamento contínuo do desenvolvimento com evidências para orientar as próximas decisões pedagógicas.",
  },
] as const;

export const aiLayers = [
  {
    layer: "1",
    title: "Motor de Regras",
    role: "Core decisório",
    description:
      "Decide quais estratégias sugerir com base em regras claras, transparentes e auditáveis. É a camada responsável pelas decisões do sistema.",
  },
  {
    layer: "2",
    title: "IA Generativa",
    role: "Explicações e comunicação",
    description:
      "Gera explicações humanizadas, resumos de análises, sugestões textuais e relatórios profissionais — sempre a partir do que o Motor de Regras já estruturou.",
  },
  {
    layer: "3",
    title: "Machine Learning",
    role: "Otimização por histórico",
    description:
      "Sugere otimizações com base no histórico (priorização e contextos), sem substituir o Motor de Regras nem decidir pelo profissional.",
  },
] as const;

export const aiFlow = [
  "Dados pedagógicos",
  "Motor de Regras",
  "IA / ML",
  "Insights",
  "Profissional",
  "Ação",
  "Histórico",
] as const;

export const differentials = [
  {
    title: "Especialização em neurodivergência",
    description:
      "IA voltada ao contexto pedagógico de alunos neurodivergentes, com identificação de necessidades de apoio — não diagnóstico — e o profissional sempre no controle.",
  },
  {
    title: "Linguagem pedagógica",
    description:
      "Comunicação 100% pedagógica, adequada ao ambiente escolar, sem termos clínicos ou siglas médicas.",
  },
  {
    title: "IA explicável",
    description:
      "Regras documentadas e auditáveis: as sugestões podem ser compreendidas e verificadas.",
  },
  {
    title: "Sensibilidade etária",
    description:
      "Limiares ajustados automaticamente por faixa etária para maior precisão pedagógica.",
  },
  {
    title: "Observação guiada",
    description:
      "Perguntas objetivas, escalas simples e interface que reduz ambiguidades no registro.",
  },
  {
    title: "Acompanhamento contínuo",
    description:
      "Histórico organizado de análises e estratégias para acompanhar a evolução ao longo do tempo.",
  },
  {
    title: "Profissional no controle",
    description:
      "A IA apoia a decisão; o profissional permanece responsável pela decisão pedagógica.",
  },
] as const;

export const benefits = {
  teachers: [
    "Observações estruturadas",
    "Redução do tempo de análise",
    "Apoio à decisão pedagógica",
    "Estratégias práticas",
    "Acompanhamento de evolução",
    "Menos sobrecarga operacional",
  ],
  coordination: [
    "Visão consolidada",
    "Priorização de intervenções",
    "Histórico organizado",
    "Relatórios profissionais",
    "Apoio a reuniões",
    "Acompanhamento institucional",
  ],
  institutions: [
    "Padronização de práticas",
    "Educação inclusiva estruturada",
    "Acompanhamento sistemático",
    "Maior transparência nas decisões",
    "Diferencial tecnológico",
  ],
} as const;

export const benefitProfiles = [
  {
    id: "professores",
    title: "Professores",
    items: benefits.teachers,
    image: {
      src: "/photos/benefit-teacher.jpg",
      alt: "Educador apoiando um aluno em atividade de aprendizado com notebook e caderno",
    },
  },
  {
    id: "coordenacao",
    title: "Coordenação pedagógica",
    items: benefits.coordination,
    image: {
      src: "/photos/benefit-coordination.jpg",
      alt: "Equipe pedagógica colaborando em reunião com tecnologia e planejamento",
    },
  },
  {
    id: "instituicoes",
    title: "Instituições",
    items: benefits.institutions,
    image: {
      src: "/photos/benefit-institution.jpg",
      alt: "Fachada de instituição de ensino em ambiente amplo e acolhedor",
    },
  },
] as const;

/** Casos de uso ilustrativos do produto — não são depoimentos reais. */
export const useCases = [
  {
    title: "Identificação de necessidade de apoio",
    situation:
      "O professor observa dificuldade em manter atenção durante atividades.",
    withSaed:
      "Preenche a observação guiada, recebe análise por eixos, estratégias sugeridas e registra a aplicação para acompanhar a evolução.",
    image: {
      src: "/photos/usecase-observation.jpg",
      alt: "Registro e planejamento pedagógico em caderno",
    },
  },
  {
    title: "Acompanhamento de evolução",
    situation:
      "A equipe precisa apresentar a evolução do aluno em reunião com a família.",
    withSaed:
      "Acessa o histórico, visualiza a evolução dos scores por eixo e gera relatório profissional em PDF.",
    image: {
      src: "/photos/usecase-evolution.jpg",
      alt: "Profissionais analisando registros e planejando acompanhamento",
    },
  },
  {
    title: "Priorização de intervenções",
    situation:
      "A coordenação precisa decidir onde concentrar atenção e recursos.",
    withSaed:
      "Visualiza o status dos alunos (acompanhamento leve, atenção pedagógica ou prioritária) e direciona o foco com base em dados estruturados.",
    image: {
      src: "/photos/usecase-priority.jpg",
      alt: "Colaboração em notebook para priorizar decisões pedagógicas",
    },
  },
] as const;

export const securityItems = [
  {
    title: "Autenticação",
    description: "Acesso autenticado com JWT para proteger a plataforma.",
  },
  {
    title: "Proteção de endpoints",
    description:
      "Endpoints pedagógicos e de consentimento protegidos por autenticação.",
  },
  {
    title: "Logs e rastreabilidade",
    description:
      "Registros de decisão para auditoria e transparência do processo pedagógico.",
  },
  {
    title: "Disclaimer e consentimento",
    description:
      "Disclaimer público sobre limites do sistema e registro de consentimento de uso de dados.",
  },
  {
    title: "Orientação à LGPD",
    description:
      "Controles documentados de proteção de dados e consentimento. O SAED não afirma garantia absoluta de segurança jurídica — a conformidade depende também da operação da instituição.",
  },
] as const;

export const mvpFeatures = [
  "Observação guiada",
  "Análise automática por eixos",
  "Sugestão de estratégias",
  "Acompanhamento de evolução",
  "Relatórios profissionais (incluindo PDF)",
  "IA generativa (explicações e resumos)",
  "ML para otimização por histórico",
  "Sensibilidade etária",
  "Disclaimer, consentimento e controles alinhados à LGPD",
] as const;

export const roadmapFeatures = [
  "Gráficos de evolução interativos",
  "Colaboração entre professores",
  "Aplicativo mobile",
  "Notificações inteligentes",
  "Biblioteca de estratégias expandida",
  "Treinamentos integrados",
  "Analytics institucional",
  "Integração com sistemas escolares",
] as const;
