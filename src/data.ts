import { Motivo, QuizQuestion, Testimonial } from './types';

export const MOTIVOS: Motivo[] = [
  {
    id: 'cama',
    title: 'Sua cama não é mais sua',
    description: 'Os gatos desafiam todas as leis da física e da geometria bidimensional. Um pequeno felino de apenas 3 kg consegue se esticar de forma tão estratégica que passa a ocupar 95% do espaço de uma cama King Size, deixando você equilibrado de lado na quina do colchão.',
    category: 'casa',
    icon: 'Bed',
    quote: '"Se eu caibo, eu deito. Se você não caibe, a gravidade e o chão estão logo ali para te acolher."',
    gravityIndex: 4,
    catTip: 'Pratique posturas avançadas de ioga e alongamentos. Você vai precisar para sobreviver às noites dormindo em formato de letra "Z".'
  },
  {
    id: 'despertador',
    title: 'O despertador das 4h da manhã',
    description: 'Eles possuem um relógio biológico impecável e imutável, programado exatamente para a hora mais fria da madrugada. Os métodos de ativação do despertador felino incluem miados de ópera dramática, patadas rítmicas com garras semi-retraídas na sua bochecha e saltos acrobáticos no seu estômago.',
    category: 'rotina',
    icon: 'Clock',
    quote: '"O sol ainda não nasceu, mas minha pressa interna por ração úmida é urgente e existencial. Acorde, escravo corporal."',
    gravityIndex: 5,
    catTip: 'Deixe o sachê pronto na bancada na noite anterior. Tentar fingir que está dormindo só fará com que eles aumentem o volume do miau.'
  },
  {
    id: 'caixas',
    title: 'Caixas de papelão dominam o mundo',
    description: 'Você passa dias pesquisando sobre bem-estar animal, gasta R$ 300 em parcelas de um castelo arranhador de três andares com pelúcia antialérgica. O gato ignora o castelo solenemente, usa-o apenas como degrau e passa as próximas seis semanas habitando felizes a caixa de papelão amassada amarela em que ele foi entregue.',
    category: 'casa',
    icon: 'Package',
    quote: '"Esta estrutura cartonada possui propriedades térmicas e acústicas infinitamente superiores ao seu luxo capitalista esnobe, humano."',
    gravityIndex: 3,
    catTip: 'Aceite o minimalist-chic. Espalhe caixas pela casa e finja que é decoração moderna escandinava.'
  },
  {
    id: 'julgamento',
    title: 'Julgamento silencioso constante',
    description: 'Esqueça a privacidade ou a sensação de que você está fazendo as coisas certas. O gato vai se posicionar no topo do armário e encarar você com um par de olhos semicerrados de desprezo absoluto. Você vai questionar seu corte de cabelo, sua carreira, seu relacionamento e suas escolhas alimentares.',
    category: 'psicologico',
    icon: 'Eye',
    quote: '"Você realmente vai comer esse terceiro pedaço de pizza fria vestindo essa calça de moletom rasgada? Eu esperava mais de quem limpa minha areia."',
    gravityIndex: 5,
    catTip: 'Não mantenha contato visual por muito tempo. Curve ligeiramente a cabeça, peça desculpas formais e ofereça um petisco saboroso.'
  },
  {
    id: 'copos',
    title: 'Pesquisadores obcecados por gravidade',
    description: 'Gatos são físicos experimentais amadores. Eles têm uma necessidade compulsiva de testar se a lei da gravidade de Isaac Newton permanece ativa na sua sala de estar. Qualquer objeto longo ou copo de água cheio na beira da mesa será empurrado milímetro por milímetro, com direito a olhar dramático de plateia.',
    category: 'casa',
    icon: 'Wine',
    quote: '"Vejamos... força de empuxo aplicada... sim, a água cai e o vidro estilhaça. Excelente experimento. A física continua intacta."',
    gravityIndex: 3,
    catTip: 'Substitua absolutamente todos os copos de vidro da sua residência por canecas de metal pesado ou copos infantis à prova de impacto.'
  },
  {
    id: 'teclados',
    title: 'O teclado como travesseiro anatômico',
    description: 'A produtividade no home office cai em torno de 80% quando há um gato em casa. No exato instante em que você inicia uma chamada de vídeo crucial ou começa a redigir o relatório trimestral, seu felino decidirá que as teclas "A-S-D-W" e o botão de "Enviar" são o colchão ortopédico perfeito.',
    category: 'rotina',
    icon: 'Keyboard',
    quote: '"O calor emitido por este processador intel i7 estimula meus meridianos de sono mais profundos. Seu e-mail de finanças é irrelevante."',
    gravityIndex: 4,
    catTip: 'Mantenha um teclado antigo desconectado ao lado de onde você digita. Eles adoram o efeito "teclado espelho" e vão se deitar nele.'
  },
  {
    id: 'portas',
    title: 'A ofensa inadmissível da porta fechada',
    description: 'Uma porta fechada em uma residência habitada por felinos representa uma violação direta do Tratado de Schengen dos Gatos. É um mistério inaceitável. Eles vão chorar, arranhar a base e enfiar as patinhas por baixo até você abrir. No momento em que você abre, eles dão as costas e se retiram.',
    category: 'psicologico',
    icon: 'DoorClosed',
    quote: '"Eu não queria necessariamente entrar no quarto escuro com cheiro de mofo, eu apenas exigia civilmente o meu DIREITO de livre trânsito."',
    gravityIndex: 4,
    catTip: 'Esponjas de porta e trincos magnéticos são ótimos investimentos. Aceite que o banheiro agora é uma área de visitação pública compartilhada.'
  },
  {
    id: 'zoomies',
    title: 'Zoomies em alta velocidade às 3h',
    description: 'O gato dorme 22 horas por dia, parecendo um anjo peludo. Porém, exatamente às 3:45 da madrugada, o motor a jato invisível é ligado. Eles correm pela casa parecendo cavalos de corrida, subindo nas paredes, derrapando no carpete e atacando inimigos metafísicos que apenas eles enxergam.',
    category: 'rotina',
    icon: 'Zap',
    quote: '"Eles estão vindo do teto! As forças interdimensionais do mal precisam ser combatidas com drifts velozes na mesa de centro!"',
    gravityIndex: 4,
    catTip: 'Use tampões de ouvido industriais ou tente se convencer de que o ruído de patinhas galopando é um som ASMR relaxante.'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Você concorda em ter seus pertences pessoais empurrados de mesas para testar a gravidade?',
    yesDescription: 'Aceito de bom grado. Sou um servo da ciência e colecionador de copos de plástico.',
    noDescription: 'Não! Minhas canecas personalizadas são relíquias de família insubstituíveis.',
    catComment: 'Os copos vão cair de qualquer forma, querido humano. Apenas mude o material deles.'
  },
  {
    id: 2,
    question: 'Como você reage ao ser solenemente ignorado por alguém cujo sustento depende 100% de você?',
    yesDescription: 'Acho incrivelmente charmoso e misterioso. Conquisto as pessoas aos poucos.',
    noDescription: 'Prefiro atenção incondicional e bajulação constante (gosto de cachorros).',
    catComment: 'Nossos momentos de carinho são raros, logo, são de ouro puro. Valorize o silêncio.'
  },
  {
    id: 3,
    question: 'Qual a sua opinião sobre caixas vazias de compras espalhadas pela sua sala de estar como móvel permanente?',
    yesDescription: 'Perfeito. Decoração industrial contemporânea, muito conceitual.',
    noDescription: 'Absurdo. Minha casa precisa estar digna de revista de arquitetura clean.',
    catComment: 'A estética escandinava moderna de caixas amarrotadas é a última tendência felina mundial.'
  },
  {
    id: 4,
    question: 'Você aguenta acordar com uma bunda peluda colada a 5cm de distância do seu nariz às 5 da manhã?',
    yesDescription: 'É uma honra e um privilégio divino amanhecer desse jeito.',
    noDescription: 'Prefiro acordar ouvindo passarinhos cantando e com meu espaço intocado.',
    catComment: 'Esse é o nosso maior sinal de confiança e amor supremo. Não subestime esse presente.'
  },
  {
    id: 5,
    question: 'Você aceita que qualquer roupa escura que você possua agora passará a ter um revestimento extra de pelos finos?',
    yesDescription: 'Moda sustentável, as fibras de pelos felinos dão um brilho orgânico lindo.',
    noDescription: 'Detesto pelos. Compro rolinhos adesivos em caixa de atacado toda semana.',
    catComment: 'Agora você carrega um pedaço de mim em todas as suas reuniões corporativas importantes.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Mariana Silva',
    role: 'Ex-dona de uma cama de casal',
    content: 'Comprei uma cama queen size achando que ia dormir de braços abertos. Hoje durmo encolhida em posição fetal num quadrado de 30 centímetros no canto esquerdo, enquanto o Floquinho (um gato magro) dorme em cruz bem no meio. Nota 10/10, recomendo muito.',
    rating: 5
  },
  {
    id: '2',
    author: 'Rodrigo Medeiros',
    role: 'Engenheiro de Software sem home-office pacífico',
    content: 'O teclado do meu computador agora é um território conquistado. Meu gato enviou um código bizarro pro repositório principal no trabalho e o projeto compilou mais rápido! Acho que ele coda melhor do que eu.',
    rating: 5
  },
  {
    id: '3',
    author: 'Beatriz Costa',
    role: 'Especialista em limpeza de copos quebrados',
    content: 'Minha coleção de taças de cristal foi totalmente dizimada pelo Bartolomeu. Ele estica a patinha, olha fixo no meu olho, desce o copinho e dá tchauzinho. Agora só tomo refrigerante em latas e água na garrafa pet.',
    rating: 4
  }
];
