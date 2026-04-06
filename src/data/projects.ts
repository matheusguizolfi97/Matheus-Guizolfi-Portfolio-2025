export interface ProjectData {
  id: string;
  title: string;
  year: string;
  description: string[];
  type: 'images' | 'website' | 'both';
  heroImage: string;
  thumbnail: string;
  assets?: string[];
  websiteImage?: string;
}

export const projects: ProjectData[] = [
  {
    id: 'benjamin-peret',
    title: 'Benjamin Perét',
    year: '2025',
    type: 'images',
    heroImage: '/assets/projects/content/projeto-1/cover.png',
    thumbnail: '/assets/projects/thumbnails/projeto-01.png',
    description: [
      'Este projeto homenageia a obra poética de Benjamin Péret, ícone do surrealismo francês. Inspirada por seu espírito provocador e experimental, a proposta gráfica adota uma linguagem visual dinâmica e livre, rompendo com estruturas rígidas.',
      'A identidade aposta em composições tipográficas ousadas, contrastes fortes e elementos gráficos ligados ao automatismo e à liberdade criativa. Em vez de seguir um padrão fixo, o sistema visual é mutável, permitindo múltiplas interpretações e aplicações. O resultado é uma identidade viva, que reflete o caráter irreverente de Péret'
    ],
    assets: [
      '/assets/projects/content/projeto-1/1.gif',
      '/assets/projects/content/projeto-1/2.png',
      '/assets/projects/content/projeto-1/3.png',
      '/assets/projects/content/projeto-1/4.gif',
      '/assets/projects/content/projeto-1/5.png',
      '/assets/projects/content/projeto-1/6.png',
      '/assets/projects/content/projeto-1/7.png',
      '/assets/projects/content/projeto-1/8.png',
      '/assets/projects/content/projeto-1/9.gif',
      '/assets/projects/content/projeto-1/10.png',
      '/assets/projects/content/projeto-1/11.png',
      '/assets/projects/content/projeto-1/12.png',
      '/assets/projects/content/projeto-1/13.png',
      '/assets/projects/content/projeto-1/14.png',
    ]
  },
  {
    id: 'cristiane-lucas',
    title: 'Cristiane Lucas Podóloga',
    year: '2025',
    type: 'images',
    heroImage: 'assets/projects/content/projeto-2/cover.png',
    thumbnail: 'assets/projects/thumbnails/projeto-02.png',
    description: [
      'Este projeto de identidade visual foi desenvolvido para Cristiane Lucas, podóloga especializada em cuidados com a saúde e bem-estar dos pés. A proposta busca alinhar a marca pessoal da profissional com uma comunicação visual que transmita confiança, acolhimento e excelência técnica.',
      'A paleta de cores suaves, a tipografia limpa e os elementos gráficos delicados foram escolhidos para criar uma atmosfera serena e acessível, refletindo a experiência acolhedora que a profissional oferece em seu atendimento.'
    ],
    assets: [
      '/assets/projects/content/projeto-2/1.png',
      '/assets/projects/content/projeto-2/2.png',
      '/assets/projects/content/projeto-2/3.png',
      '/assets/projects/content/projeto-2/4.png',
    ]
  },
  {
    id: 'burrico-dorada',
    title: 'Burrico D\'Orada',
    year: '2022',
    type: 'website',
    heroImage: '/assets/projects/content/projeto-3/cover.png',
    thumbnail: '/assets/projects/thumbnails/projeto-03.png',
    websiteImage: '/assets/projects/content/projeto-3/2.jpg',
    description: [
      'O Burrico D\'Orada é um espaço de turismo rural que valoriza a natureza, o sossego e as conexões autênticas. O projeto do website foi pensado para traduzir visualmente essa essência, criando uma experiência digital acolhedora, intuitiva e sensorial.',
      'A navegação limpa, as cores terrosas e as imagens em destaque convidam o visitante a desacelerar, explorando o conteúdo com calma e curiosidade — assim como se percorre uma trilha no campo. Cada elemento da interface foi desenhado para reforçar o conceito de refúgio natural: orgânico, simples e verdadeiro.'
    ]
  },
  {
    id: 'evlos',
    title: 'Evlos',
    year: '2022',
    type: 'website',
    heroImage: '/assets/projects/content/projeto-4/cover.png',
    thumbnail: '/assets/projects/thumbnails/projeto-04.png',
    websiteImage: '/assets/projects/content/projeto-4/1.jpg',
    description: [
      'A Evlos é uma plataforma B2B que conecta tecnologia e inteligência de mercado para transformar a experiência financeira. A landing page foi criada para traduzir essa proposta com um design direto, moderno e funcional.',
      'Cada elemento foi pensado para reforçar a credibilidade da marca e destacar seu papel como parceira estratégica no ecossistema financeiro, unindo soluções e pessoas para criar novas possibilidades na nova economia.'
    ]
  },
  {
    id: 'studio-yoda',
    title: 'Studio Yoda',
    year: '2022',
    type: 'website',
    heroImage: '/assets/projects/content/projeto-5/cover.png',
    thumbnail: '/assets/projects/thumbnails/projeto-05.png',
    websiteImage: '/assets/projects/content/projeto-5/2.jpg',
    description: [
      'O Studio Yoda é um estúdio de animação 3D que transforma ideias em experiências visuais memoráveis. O projeto do website foi desenvolvido para refletir essa essência criativa, destacando o portfólio com dinamismo, leveza e identidade.',
      'Com uma navegação fluida e foco nas imagens, o site convida o visitante a explorar cada projeto como quem assiste a uma boa história. A estrutura valoriza o impacto visual e reforça a missão do estúdio: emocionar, comunicar e agregar valor por meio da animação.'
    ]
  },
  {
    id: 'faros-private',
    title: 'Faros Private',
    year: '2022',
    type: 'website',
    heroImage: '/assets/projects/content/projeto-6/cover.png',
    thumbnail: '/assets/projects/thumbnails/projeto-06.png',
    websiteImage: '/assets/projects/content/projeto-6/1.jpg',
    description: [
      'A Faros Private é o maior escritório Private contratado pela XP Investimentos, referência em assessoria patrimonial de alto nível. O projeto do website foi desenvolvido para comunicar essa posição de liderança com sofisticação, clareza e solidez.',
      'A navegação objetiva, o design sóbrio e os elementos visuais bem definidos reforçar a confiança e exclusividade que a marca oferece. Cada detalhe da interface foi pensado para refletir os valores da Faros: proximidade e total compromisso com a preservação e crescimento do patrimônio de seus clientes.'
    ]
  },
  {
    id: 'cotripal-lipocel',
    title: 'Cotripal Lipocel',
    year: '2022',
    type: 'website',
    heroImage: '/assets/projects/content/projeto-7/cover.png',
    thumbnail: '/assets/projects/thumbnails/projeto-07.png',
    websiteImage: '/assets/projects/content/projeto-7/1.jpg',
    description: [
      'A Cotripal é uma cooperativa que une tradição, inovação e responsabilidade socioambiental. O projeto da landing page do Lipocel foi criado para comunicar de forma clara e confiável os benefícios do produto, refletindo o compromisso da marca com a saúde e o bem-estar.',
      'Com uma abordagem direta e visual, a página destaca o Dimpless como ativo principal, evidenciando seus efeitos comprovados no combate à celulite. O design limpo e funcional guia o usuário pela informação de forma fluida, reforçando a credibilidade da Cotripal e o valor do Lipocel como solução eficaz e segura.'
    ]
  },
  {
    id: 'masi-laboratorio',
    title: 'Masi Laboratório',
    year: '2024',
    type: 'images',
    heroImage: '/assets/projects/content/projeto-8/cover.png',
    thumbnail: '/assets/projects/thumbnails/projeto-08.png',
    description: [
      'O Masi Laboratório é referência em bioanálises precisas e confiáveis, dedicando-se a oferecer resultados que fazem a diferença na saúde e bem-estar. Nossos posts foram criados para levar informação relevante, desmistificar exames e aproximar ciência e pessoas com clareza e transparência.'
    ],
    assets: [
      '/assets/projects/content/projeto-8/1.jpg',
      '/assets/projects/content/projeto-8/2.jpg',
      '/assets/projects/content/projeto-8/3.jpg',
      '/assets/projects/content/projeto-8/4.jpg',
      '/assets/projects/content/projeto-8/5.jpg',
      '/assets/projects/content/projeto-8/6.jpg',
      '/assets/projects/content/projeto-8/7.jpg',
      '/assets/projects/content/projeto-8/8.jpg',
      '/assets/projects/content/projeto-8/9.jpg',
      '/assets/projects/content/projeto-8/10.jpg',
      '/assets/projects/content/projeto-8/11.jpg',
      '/assets/projects/content/projeto-8/12.jpg',
      '/assets/projects/content/projeto-8/13.jpg',
      '/assets/projects/content/projeto-8/14.jpg',
      '/assets/projects/content/projeto-8/15.jpg',
      '/assets/projects/content/projeto-8/16.jpg',
      '/assets/projects/content/projeto-8/17.jpg',
      '/assets/projects/content/projeto-8/18.jpg',
      '/assets/projects/content/projeto-8/19.jpg',
      '/assets/projects/content/projeto-8/20.jpg',
      '/assets/projects/content/projeto-8/21.jpg',
      '/assets/projects/content/projeto-8/22.jpg',
      '/assets/projects/content/projeto-8/23.jpg',
      '/assets/projects/content/projeto-8/24.jpg',
      '/assets/projects/content/projeto-8/25.jpg',
      '/assets/projects/content/projeto-8/26.jpg',
      '/assets/projects/content/projeto-8/27.jpg',
      '/assets/projects/content/projeto-8/28.jpg',
      '/assets/projects/content/projeto-8/29.jpg',
    ]
  },
  {
    id: 'cotripal-ansiedade',
    title: 'Cotripal Ansiedade',
    year: '2022',
    type: 'website',
    heroImage: '/assets/projects/content/projeto-9/cover.png',
    thumbnail: '/assets/projects/thumbnails/projeto-09.png',
    websiteImage: '/assets/projects/content/projeto-9/1.jpg',
    description: [
      'A Cotripal é movida pelo propósito de cuidar das pessoas, promovendo qualidade de vida com responsabilidade e confiança. A landing page do ansiolítico natural foi desenvolvida para apresentar o produto de forma acolhedora, clara e informativa.',
      'Com design leve e comunicação direta, a página destaca os benefícios da fórmula natural, que combina ativos com ação calmante e antioxidante. A experiência convida o usuário a descobrir uma solução eficaz para ansiedade e insônia, reforçando o compromisso da Cotripal com o bem-estar físico e emocional.'
    ]
  },
  {
    id: 'gp-temporarios',
    title: 'GP Temporários',
    year: '2020',
    type: 'both',
    heroImage: '/assets/projects/content/projeto-10/cover.png',
    thumbnail: '/assets/projects/thumbnails/projeto-10.png',
    websiteImage: '/assets/projects/content/projeto-10/1.png',
    description: [
      'A GP Temporários é especialista em soluções ágeis para contratação de mão de obra temporária, conectando empresas e profissionais com rapidez e eficiência. O projeto de comunicação foi desenvolvido para transmitir confiança, agilidade e segurança em cada etapa do processo.'
    ],
    assets: [
      '/assets/projects/content/projeto-10/2.png',
      '/assets/projects/content/projeto-10/3.png',
      '/assets/projects/content/projeto-10/4.png',
      '/assets/projects/content/projeto-10/5.png',
      '/assets/projects/content/projeto-10/6.png',
      '/assets/projects/content/projeto-10/7.png',
      '/assets/projects/content/projeto-10/8.png',
      '/assets/projects/content/projeto-10/9.png',
      '/assets/projects/content/projeto-10/10.png',
      '/assets/projects/content/projeto-10/11.png',
      '/assets/projects/content/projeto-10/12.png',
      '/assets/projects/content/projeto-10/13.png',
      '/assets/projects/content/projeto-10/14.png',
      '/assets/projects/content/projeto-10/15.png',
      '/assets/projects/content/projeto-10/16.png',
    ]
  }
];
