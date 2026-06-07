export type Status = 'Production' | 'Beta' | 'MVP' | 'Em Desenvolvimento' | 'Planejamento' | 'Ideação'

export interface Product {
  id: string
  name: string
  tagline: string
  description: string
  features: string[]
  status: Status
  statusColor: string
  gradient: string
  icon: string
  href: string
}

export const products: Product[] = [
  {
    id: 'erp-controll',
    name: 'ERP CONTROLL',
    tagline: 'Gestão empresarial completa',
    description: 'Sistema de gestão empresarial que integra financeiro, estoque, vendas e clientes em um só lugar.',
    features: ['Financeiro', 'Estoque', 'Vendas', 'Clientes', 'Relatórios'],
    status: 'Beta',
    statusColor: 'text-amber-400',
    gradient: 'from-indigo-600/20 to-blue-600/20',
    icon: 'LayoutDashboard',
    href: 'https://erp.jamesystem.com.br',
  },
  {
    id: 'vigia-de-posto',
    name: 'VIGIA DE POSTO',
    tagline: 'Gestão operacional de postos',
    description: 'Controle de turnos, checklist de conformidade e registro de ocorrências para postos de combustível.',
    features: ['Turnos', 'Checklist', 'Ocorrências', 'Relatórios Diários'],
    status: 'Em Desenvolvimento',
    statusColor: 'text-cyan-400',
    gradient: 'from-cyan-600/20 to-teal-600/20',
    icon: 'Shield',
    href: '#',
  },
  {
    id: 'vai-comigo',
    name: 'VAI COMIGO',
    tagline: 'Mobilidade compartilhada',
    description: 'Plataforma de caronas e rotas inteligentes para empresas e comunidades.',
    features: ['Rotas', 'Caronas', 'Motoristas', 'Agendamento'],
    status: 'Em Desenvolvimento',
    statusColor: 'text-cyan-400',
    gradient: 'from-emerald-600/20 to-green-600/20',
    icon: 'Car',
    href: '#',
  },
  {
    id: 'ponto-facil',
    name: 'PONTO FÁCIL',
    tagline: 'Registro de ponto digital',
    description: 'Sistema de ponto eletrônico com registro de horas extras e banco de horas.',
    features: ['Registro de Ponto', 'Horas Extras', 'Banco de Horas', 'Espelho de Ponto'],
    status: 'MVP',
    statusColor: 'text-green-400',
    gradient: 'from-green-600/20 to-emerald-600/20',
    icon: 'Clock',
    href: '#',
  },
  {
    id: 'controll-market',
    name: 'CONTROLL MARKET',
    tagline: 'Marketplace empresarial',
    description: 'Marketplace para conectar fornecedores e compradores do segmento de combustíveis.',
    features: ['Catálogo', 'Pedidos', 'Pagamentos', 'Fornecedores'],
    status: 'Planejamento',
    statusColor: 'text-purple-400',
    gradient: 'from-purple-600/20 to-pink-600/20',
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
    statusColor: 'text-slate-400',
    gradient: 'from-slate-600/20 to-zinc-600/20',
    icon: 'Wrench',
    href: '#',
  },
  {
    id: 'james-tech',
    name: 'JAMES TECH',
    tagline: 'Suporte técnico especializado',
    description: 'Suporte técnico, manutenção e consultoria em TI para empresas.',
    features: ['Suporte Técnico', 'Manutenção', 'Consultoria TI', 'Infraestrutura'],
    status: 'Production',
    statusColor: 'text-blue-400',
    gradient: 'from-blue-600/20 to-indigo-600/20',
    icon: 'Monitor',
    href: 'https://jamestech.com.br',
  },
]
