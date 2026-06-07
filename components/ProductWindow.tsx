'use client'

import type { Product } from '@/data/products'
import { Shield, Car, Clock, ShoppingCart, Wrench, LayoutDashboard } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  LayoutDashboard,
  Shield,
  Car,
  Clock,
  ShoppingCart,
  Wrench,
}

interface Props {
  product: Product
  onClick: () => void
  index: number
}

export function ProductWindow({ product, onClick, index }: Props) {
  const Icon = iconMap[product.icon] || LayoutDashboard

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

  return (
    <div
      className="window-card animate-slide-up group"
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter') onClick() }}
    >
      <div className={`glass h-full flex flex-col bg-gradient-to-br ${product.gradient}`}>
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-surface-border/50">
          <span className="title-bar-button bg-red-500/60 group-hover:bg-red-500" />
          <span className="title-bar-button bg-yellow-500/60 group-hover:bg-yellow-500" />
          <span className="title-bar-button bg-green-500/60 group-hover:bg-green-500" />
          <span className="ml-2 text-[10px] text-text-muted font-mono tracking-wider uppercase">
            {product.name}
          </span>
        </div>

        <div className="flex-1 p-5">
          <div className="flex items-start gap-3 mb-4">
            <div className={`w-10 h-10 rounded-lg ${product.productColor}/10 flex items-center justify-center shrink-0 border border-surface-border/50`}>
              <Icon className={`w-5 h-5 ${product.productColor.replace('bg-', 'text-')}`} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-text-primary tracking-wide">{product.name}</h3>
              <p className="text-xs text-text-secondary mt-0.5">{product.tagline}</p>
            </div>
          </div>

          <ul className="space-y-1.5">
            {product.features.slice(0, 4).map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-xs text-text-secondary">
                <span className={`w-1 h-1 rounded-full ${product.productColor.replace('bg-', 'bg-')}/60`} />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="px-5 py-2.5 border-t border-surface-border/50 flex items-center justify-between">
          <span className={`text-[10px] font-mono uppercase tracking-wider ${statusColorMap[product.status] || 'text-text-muted'}`}>
            <span className={`status-dot ${statusBgMap[product.status] || 'bg-text-muted'}`} />
            {product.status}
          </span>
        </div>
      </div>
    </div>
  )
}
