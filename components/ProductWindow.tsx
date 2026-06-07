'use client'

import type { Product } from '@/data/products'
import { Shield, Car, Clock, ShoppingCart, Wrench, LayoutDashboard, Trophy, Brain, ExternalLink } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  LayoutDashboard,
  Shield,
  Car,
  Clock,
  ShoppingCart,
  Wrench,
  Trophy,
  Brain,
}

interface Props {
  product: Product
  index: number
}

const statusColorMap: Record<string, string> = {
  Production: 'text-brand-system',
  Beta: 'text-product-orange',
  MVP: 'text-product-green',
  'Em Desenvolvimento': 'text-brand-electric',
  Planejamento: 'text-product-purple',
  Ideação: 'text-text-muted',
}

const statusBgMap: Record<string, string> = {
  Production: 'bg-brand-system',
  Beta: 'bg-product-orange',
  MVP: 'bg-product-green',
  'Em Desenvolvimento': 'bg-brand-electric',
  Planejamento: 'bg-product-purple',
  Ideação: 'bg-text-muted',
}

function ProductMockup({ product }: { product: Product }) {
  const color = product.productColor.replace('bg-', '')

  return (
    <svg viewBox="0 0 400 140" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <rect width="400" height="140" fill="#0A1024" />
      <rect x="12" y="10" width="376" height="120" rx="4" fill="none" stroke="#1E293B" strokeWidth="1" />
      <rect x="12" y="10" width="376" height="20" rx="4" fill={`var(--color-${color})`} opacity="0.15" />
      <circle cx="22" cy="20" r="2.5" fill="#DC2626" />
      <circle cx="30" cy="20" r="2.5" fill="#D97706" />
      <circle cx="38" cy="20" r="2.5" fill="#059669" />
      <rect x="50" y="14" width="60" height="12" rx="2" fill="#0A84FF" opacity="0.4" />
      <rect x="16" y="40" width="90" height="24" rx="3" fill="#1E293B" opacity="0.6" />
      <rect x="16" y="70" width="170" height="6" rx="2" fill="#1E293B" />
      <rect x="16" y="80" width="150" height="6" rx="2" fill="#1E293B" />
      <rect x="16" y="90" width="160" height="6" rx="2" fill="#1E293B" />
      <rect x="200" y="40" width="90" height="24" rx="3" fill="#1E293B" opacity="0.6" />
      <rect x="200" y="70" width="170" height="6" rx="2" fill="#1E293B" />
      <rect x="200" y="80" width="130" height="6" rx="2" fill="#1E293B" />
      <rect x="200" y="90" width="150" height="6" rx="2" fill="#1E293B" />
      <rect x="16" y="108" width="48" height="16" rx="2" fill="#0A84FF" opacity="0.15" />
      <rect x="72" y="108" width="48" height="16" rx="2" fill="#059669" opacity="0.15" />
      <rect x="128" y="108" width="48" height="16" rx="2" fill="#DC2626" opacity="0.15" />
      <text x="40" y="119" textAnchor="middle" fill="#0A84FF" fontSize="7" fontFamily="monospace">KPI</text>
      <text x="96" y="119" textAnchor="middle" fill="#059669" fontSize="7" fontFamily="monospace">KPI</text>
      <text x="152" y="119" textAnchor="middle" fill="#DC2626" fontSize="7" fontFamily="monospace">KPI</text>
    </svg>
  )
}

export function ProductWindow({ product, index }: Props) {
  const Icon = iconMap[product.icon] || LayoutDashboard
  const isLive = product.href !== '#'

  const content = (
    <div className={`glass h-full flex flex-col bg-gradient-to-br ${product.gradient}`}>
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-surface-border/50">
        <span className="title-bar-button bg-red-500/60 group-hover:bg-red-500" />
        <span className="title-bar-button bg-yellow-500/60 group-hover:bg-yellow-500" />
        <span className="title-bar-button bg-green-500/60 group-hover:bg-green-500" />
        <span className="ml-2 text-[10px] text-text-muted font-mono tracking-wider uppercase truncate">
          {product.name}
        </span>
        {isLive && (
          <span className="ml-auto flex items-center gap-1 text-[9px] text-text-muted/50 font-mono uppercase tracking-wider">
            {product.href.replace('https://', '').split('/')[0]}
          </span>
        )}
      </div>

      <div className="relative h-28 bg-surface-secondary/50 overflow-hidden">
        <ProductMockup product={product} />
        <div className={`absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t ${product.gradient}`} />
      </div>

      <div className="flex-1 p-4">
        <div className="flex items-start gap-3 mb-3">
          <div className={`w-9 h-9 rounded-lg ${product.productColor}/10 flex items-center justify-center shrink-0 border border-surface-border/50`}>
            <Icon className={`w-4.5 h-4.5 ${product.productColor.replace('bg-', 'text-')}`} />
          </div>
          <div className="min-w-0">
            <h3 className="text-sm font-bold text-text-primary tracking-wide">{product.name}</h3>
            <p className="text-[11px] text-text-secondary mt-0.5 truncate">{product.tagline}</p>
          </div>
        </div>

        <ul className="space-y-1">
          {product.features.slice(0, 4).map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-[11px] text-text-secondary">
              <span className="w-1 h-1 rounded-full bg-brand-system/50 shrink-0" />
              <span className="truncate">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="px-4 py-2.5 border-t border-surface-border/50 flex items-center justify-between">
        <span className={`text-[10px] font-mono uppercase tracking-wider ${statusColorMap[product.status] || 'text-text-muted'}`}>
          <span className={`status-dot ${statusBgMap[product.status] || 'bg-text-muted'}`} />
          {product.status}
        </span>
        {isLive ? (
          <span className="flex items-center gap-1 text-[10px] text-brand-system font-mono">
            Abrir <ExternalLink className="w-3 h-3" />
          </span>
        ) : (
          <span className="text-[10px] text-text-muted/50 font-mono">Em breve</span>
        )}
      </div>
    </div>
  )

  if (isLive) {
    return (
      <a
        href={product.href}
        target="_blank"
        rel="noopener noreferrer"
        className="window-card animate-slide-up group block"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {content}
      </a>
    )
  }

  return (
    <div
      className="window-card animate-slide-up group"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {content}
    </div>
  )
}
