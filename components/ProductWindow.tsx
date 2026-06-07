'use client'

import type { Product } from '@/data/products'
import { Shield, Car, Clock, ShoppingCart, Wrench, Monitor, LayoutDashboard } from 'lucide-react'

const iconMap = {
  LayoutDashboard,
  Shield,
  Car,
  Clock,
  ShoppingCart,
  Wrench,
  Monitor,
}

interface Props {
  product: Product
  onClick: () => void
  index: number
}

export function ProductWindow({ product, onClick, index }: Props) {
  const Icon = iconMap[product.icon as keyof typeof iconMap] || LayoutDashboard

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
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/5">
          <span className="title-bar-button bg-red-400/80 group-hover:bg-red-400" />
          <span className="title-bar-button bg-yellow-400/80 group-hover:bg-yellow-400" />
          <span className="title-bar-button bg-green-400/80 group-hover:bg-green-400" />
          <span className="ml-2 text-[10px] text-slate-500 font-mono tracking-wider uppercase">
            {product.name}
          </span>
        </div>

        <div className="flex-1 p-5">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/5">
              <Icon className="w-5 h-5 text-neon-blue" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white tracking-wide">{product.name}</h3>
              <p className="text-xs text-slate-400 mt-0.5">{product.tagline}</p>
            </div>
          </div>

          <ul className="space-y-1.5">
            {product.features.slice(0, 4).map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-xs text-slate-300">
                <span className="w-1 h-1 rounded-full bg-neon-blue/60" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="px-5 py-2.5 border-t border-white/5 flex items-center justify-between">
          <span className={`text-[10px] font-mono uppercase tracking-wider ${product.statusColor}`}>
            <span className={`status-dot ${product.statusColor.replace('text-', 'bg-')}`} />
            {product.status}
          </span>
          <span className="text-[10px] text-slate-600 font-mono">v1.0</span>
        </div>
      </div>
    </div>
  )
}
