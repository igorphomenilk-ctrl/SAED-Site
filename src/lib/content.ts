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

export const contact = {
  email: "contato@saed.app.br",
  phone: "(41) 9 9101-4889",
  phoneHref: "tel:+5541991014889",
  // TODO: aguardando Instagram institucional validado
  instagram: null as string | null,
  // TODO: aguardando LinkedIn institucional validado
  linkedin: null as string | null,
} as const;

/** Dados oficiais do comprovante de CNPJ (RFB). */
export const company = {
  legalName: "Incorpore Consultoria em Tecnologia da Informação Ltda",
  tradeName: "Incorpore Consultoria em TI",
  cnpj: "36.753.962/0001-69",
  city: "Curitiba",
  state: "PR",
} as const;

export const navItems = [
  { href: "#inicio", label: "Início" },
  { href: "#problema", label: "O Problema" },
  { href: "#solucao", label: "A Solução" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#produto", label: "O produto" },
  { href: "#beneficios", label: "Benefícios" },
  { href: "#faq", label: "Perguntas" },
  { href: "#contato", label: "Contato" },
] as const;

export const hero = {
  badge: "Especializado em apoio pedagógico a alunos neurodivergentes",
  headline:
    "Menos intuição, mais evidência: o copiloto de IA para o acompanhamento pedagógico de alunos neurodivergentes.",
  text: "Observação estruturada, estratégias sugeridas e evolução acompanhada — com o professor sempre no controle. Sem diagnóstico.",
  highlights: [
    "Identificação de necessidades de apoio — não diagnóstico",
    "Análise estruturada por eixos",
    "Estratégias pedagógicas sugeridas",
    "Acompanhamento de evolução",
  ],
  primaryCta: {
    href: "#contato",
    label: "Agendar demonstração para minha escola",
  },
  secondaryCta: { href: "#como-funciona", label: "Ver como funciona" },
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
    role: "Sugere, não decide",
    description:
      "Aprende com o histórico pedagógico para sugerir ordem de prioridade, efetividade prevista e contextos mais adequados. O Motor de Regras continua escolhendo as estratégias; o profissional mantém a decisão final.",
  },
] as const;

export const aiFlow = [
  "Motor de Regras decide as estratégias",
  "ML sugere a melhor ordem e o contexto",
  "IA gera explicações e relatórios",
  "O profissional decide e registra o resultado",
] as const;

export const mlSuggestions = [
  {
    title: "Ordem de prioridade",
    description:
      "Indica por qual estratégia começar, com base no que já funcionou para aquele aluno, na idade e nas tendências de evolução.",
  },
  {
    title: "Efetividade prevista",
    description:
      "Estima a probabilidade de cada estratégia funcionar naquele contexto — sempre como referência, nunca como garantia.",
  },
  {
    title: "Contextos ideais",
    description:
      "Aponta faixas etárias, combinações de estratégias e momentos em que o histórico mostra melhor resposta.",
  },
] as const;

export const mlSignals = [
  {
    title: "Observação atual",
    description: "Pontuações, idade e contexto da observação em andamento.",
  },
  {
    title: "Histórico de análises",
    description: "Médias, tendências e evolução ao longo do tempo.",
  },
  {
    title: "Estratégias aplicadas",
    description: "O que já foi usado e quais resultados o profissional registrou.",
  },
  {
    title: "Decisões anteriores",
    description: "Registro transparente das escolhas pedagógicas já feitas.",
  },
] as const;

export const mlGuarantees = [
  {
    title: "O ML sugere; o profissional decide",
    description:
      "O Motor de Regras escolhe quais estratégias apresentar. O aprendizado de máquina apenas otimiza prioridade, efetividade e contexto. A decisão pedagógica permanece humana.",
  },
  {
    title: "Limites éticos explícitos",
    description:
      "Não promete diagnóstico, não usa termos clínicos, não compara com “normalidade” e não tira a decisão do profissional.",
  },
  {
    title: "Transparente e opcional",
    description:
      "Toda sugestão informa o nível de confiança e pode ser compreendida. Sem dados históricos suficientes, o SAED segue funcionando normalmente — só sem essa camada de otimização.",
  },
] as const;

export const differentials = [
  {
    title: "Especialização em neurodivergência",
    description:
      "IA voltada ao contexto pedagógico de alunos neurodivergentes, com identificação de necessidades de apoio — não diagnóstico.",
  },
  {
    title: "Linguagem pedagógica",
    description:
      "Comunicação adequada ao ambiente escolar, sem termos clínicos ou siglas médicas.",
  },
  {
    title: "Sensibilidade etária",
    description:
      "Limiares ajustados automaticamente por faixa etária (≤6, 7–10 e ≥11 anos) para avaliações mais adequadas a cada etapa.",
  },
  {
    title: "Observação guiada",
    description:
      "Perguntas objetivas, escalas simples e registro que reduz ambiguidades no dia a dia do professor.",
  },
  {
    title: "Acompanhamento contínuo",
    description:
      "Histórico organizado de análises e estratégias para acompanhar a evolução ao longo do tempo.",
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

export const productScreens = [
  {
    src: "/product/dashboard.png",
    title: "Dashboard",
    description:
      "Visão do acompanhamento: o que fazer agora, ciclos em andamento e relatórios recentes.",
  },
  {
    src: "/product/observacao-escala.png",
    title: "Observação guiada",
    description:
      "Perguntas por eixo, escalas simples e exemplos de referência — etapa a etapa.",
  },
  {
    src: "/product/analise.png",
    title: "Análise por eixos",
    description:
      "Prioridade pedagógica por eixo, com linguagem de apoio — sem diagnóstico clínico.",
  },
  {
    src: "/product/estrategias.png",
    title: "Estratégias sugeridas",
    description:
      "O motor sugere; o educador confirma o que aplicar e em qual período.",
  },
] as const;

export const useCases = [
  {
    title: "Identificação de necessidade de apoio",
    situation:
      "O professor observa dificuldade em manter atenção durante atividades.",
    withSaed:
      "Preenche a observação guiada, recebe análise por eixos, estratégias sugeridas e registra a aplicação para acompanhar a evolução.",
    image: {
      src: "/product/observacao-escala.png",
      alt: "Tela do SAED com observação guiada e escala de 1 a 5 em autorregulação emocional",
    },
  },
  {
    title: "Acompanhamento de evolução",
    situation:
      "A equipe precisa apresentar a evolução do aluno em reunião com a família.",
    withSaed:
      "Acessa o histórico, visualiza a evolução dos scores por eixo e gera relatório profissional em PDF.",
    image: {
      src: "/product/analise.png",
      alt: "Tela do SAED com análise pedagógica e pontuação por eixos",
    },
  },
  {
    title: "Priorização de intervenções",
    situation:
      "A coordenação precisa decidir onde concentrar atenção e recursos.",
    withSaed:
      "Visualiza o status dos alunos (acompanhamento leve, atenção pedagógica ou prioritária) e direciona o foco com base em dados estruturados.",
    image: {
      src: "/product/alunos.png",
      alt: "Tela do SAED com lista de alunos e status de acompanhamento",
    },
  },
] as const;

export const securityItems = [
  {
    title: "Acesso protegido",
    description:
      "Somente pessoas autorizadas entram na plataforma. Os registros pedagógicos não ficam abertos na internet.",
  },
  {
    title: "Dados pedagógicos restritos",
    description:
      "Observações, análises e registros de consentimento ficam em áreas internas, acessíveis só com permissão.",
  },
  {
    title: "Rastreabilidade",
    description:
      "As decisões ficam registradas para auditoria e transparência do processo pedagógico — dá para saber o que foi sugerido e o que o profissional registrou.",
  },
  {
    title: "Limites claros e consentimento",
    description:
      "O site informa publicamente o que o sistema não faz (como diagnosticar). O uso de dados exige registro de consentimento.",
  },
  {
    title: "Orientação à LGPD",
    description:
      "Há controles documentados de proteção de dados e consentimento. O SAED não afirma garantia absoluta de segurança jurídica — a conformidade depende também da operação da instituição.",
  },
] as const;

export const faqItems = [
  {
    question: "O SAED diagnostica alunos?",
    answer:
      "Não. O SAED identifica necessidades pedagógicas de apoio e sugere estratégias. Não realiza diagnóstico clínico e não usa termos clínicos no ambiente escolar.",
  },
  {
    question: "A inteligência artificial decide no lugar do professor?",
    answer:
      "Não. O Motor de Regras indica estratégias com base em critérios auditáveis. A camada de Machine Learning só sugere prioridade, efetividade prevista e contexto. A decisão pedagógica permanece com o profissional.",
  },
  {
    question: "O que o Machine Learning faz, na prática?",
    answer:
      "Depois que as estratégias já foram escolhidas pelas regras, o ML olha o histórico daquele aluno e da faixa etária para sugerir por onde começar, o que tende a funcionar melhor e em qual contexto. Sem histórico suficiente, essa camada simplesmente não gera sugestão — e o restante do sistema continua funcionando.",
  },
  {
    question: "Para quem o SAED foi feito?",
    answer:
      "Para escolas e equipes pedagógicas que acompanham alunos neurodivergentes: professores no dia a dia, coordenação na visão consolidada e a instituição na padronização do acompanhamento.",
  },
  {
    question: "Como ficam os dados dos alunos?",
    answer:
      "O acesso é autenticado, há registro de consentimento e disclaimer sobre os limites do sistema. Há orientação à LGPD, mas a conformidade jurídica também depende da operação da instituição — o SAED não promete garantia absoluta nesse ponto.",
  },
  {
    question: "Como conhecer o SAED na prática?",
    answer:
      "Agende uma demonstração pelo formulário desta página, pelo e-mail contato@saed.app.br ou pelo telefone (41) 9 9101-4889. Não há checkout automático no site.",
  },
] as const;
