export type Status = 'Production' | 'Beta' | 'MVP' | 'Em Desenvolvimento' | 'Planejamento' | 'Ideação'
export type Category = 'enterprise' | 'app' | 'lab' | 'planning'

export interface Product {
  id: string
  name: string
  tagline: string
  description: string
  features: string[]
  status: Status
  category: Category
  productColor: string
  gradient: string
  icon: string
  href: string
  openSource?: true
  repo?: string
}

export const products: Product[] = [
  {
    id: 'erp-controll',
    name: 'ERP CONTROLL',
    tagline: 'Gestão empresarial adaptativa',
    description: 'Sistema de gestão empresarial que integra financeiro, estoque, clientes e serviços em um só lugar. Adaptável a advogados, oficinas, assistências técnicas e mais.',
    features: ['Financeiro', 'Estoque', 'Clientes', 'Serviços', 'Relatórios'],
    status: 'Beta',
    category: 'enterprise',
    productColor: 'bg-product-blue',
    gradient: 'from-product-blue/10 via-product-blue/5 to-transparent',
    icon: 'LayoutDashboard',
    href: 'https://erpcontroll.com.br',
  },
  {
    id: 'ponto-facil',
    name: 'PONTO FÁCIL',
    tagline: 'Registro de ponto digital',
    description: 'Sistema de ponto eletrônico com registro de horas extras, banco de horas e espelho de ponto.',
    features: ['Registro de Ponto', 'Horas Extras', 'Banco de Horas', 'Espelho de Ponto'],
    status: 'MVP',
    category: 'enterprise',
    productColor: 'bg-product-green',
    gradient: 'from-product-green/10 via-product-green/5 to-transparent',
    icon: 'Clock',
    href: '#',
  },
  {
    id: 'vigia-de-posto',
    name: 'VIGIA DE POSTO',
    tagline: 'Observatório colaborativo de combustíveis',
    description: 'Plataforma para acompanhar preços, reputação e segurança de postos de combustível em todo o Brasil.',
    features: ['Mapa Colaborativo', 'Preços', 'Reputação', 'Denúncias'],
    status: 'Em Desenvolvimento',
    category: 'app',
    productColor: 'bg-product-orange',
    gradient: 'from-product-orange/10 via-product-orange/5 to-transparent',
    icon: 'Shield',
    href: 'https://vigiadeposto.vercel.app',
    openSource: true,
    repo: 'https://github.com/jamesismos/vigia-de-posto',

  },
  {
    id: 'vai-comigo',
    name: 'VAI COMIGO',
    tagline: 'Mobilidade compartilhada inteligente',
    description: 'Plataforma de caronas e rotas inteligentes para empresas e comunidades.',
    features: ['Rotas', 'Caronas', 'Motoristas', 'Agendamento'],
    status: 'Em Desenvolvimento',
    category: 'app',
    productColor: 'bg-product-purple',
    gradient: 'from-product-purple/10 via-product-purple/5 to-transparent',
    icon: 'Car',
    href: 'https://vai-comigo.vercel.app',
  },
  {
    id: 'onze-vidas',
    name: 'ONZEVIDAS FC',
    tagline: 'Gestão esportiva e estatísticas',
    description: 'Plataforma para gerenciamento de times, partidas, estatísticas e desempenho de jogadores.',
    features: ['Times', 'Partidas', 'Estatísticas', 'Desempenho'],
    status: 'Ideação',
    category: 'lab',
    productColor: 'bg-product-blue',
    gradient: 'from-product-blue/10 via-product-blue/5 to-transparent',
    icon: 'Trophy',
    href: '#',
  },
  {
    id: 'skills-v1',
    name: 'SKILLS V1',
    tagline: 'Plataforma de aprendizado contínuo',
    description: 'Sistema de gerenciamento de habilidades, cursos e certificações para equipes e indivíduos.',
    features: ['Trilhas', 'Cursos', 'Certificações', 'Progresso'],
    status: 'Ideação',
    category: 'lab',
    productColor: 'bg-product-purple',
    gradient: 'from-product-purple/10 via-product-purple/5 to-transparent',
    icon: 'Brain',
    href: '#',
  },
  {
    id: 'controll-market',
    name: 'CONTROLL MARKET',
    tagline: 'Marketplace empresarial',
    description: 'Marketplace para conectar fornecedores e compradores do segmento de combustíveis.',
    features: ['Catálogo', 'Pedidos', 'Pagamentos', 'Fornecedores'],
    status: 'Planejamento',
    category: 'planning',
    productColor: 'bg-product-red',
    gradient: 'from-product-red/10 via-product-red/5 to-transparent',
    icon: 'ShoppingCart',
    href: '#',
  },
  {
    id: 'controll-oficina',
    name: 'CONTROLL OFICINA',
    tagline: 'Gestão de oficinas mecânicas',
    description: 'Sistema para gestão de ordens de serviço, estoque de peças e agendamento de oficinas.',
    features: ['Ordens de Serviço', 'Estoque de Peças', 'Agendamento', 'Clientes'],
    status: 'Ideação',
    category: 'planning',
    productColor: 'bg-product-slate',
    gradient: 'from-product-slate/10 via-product-slate/5 to-transparent',
    icon: 'Wrench',
    href: '#',
  },
]
