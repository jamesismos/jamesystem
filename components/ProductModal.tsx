'use client'

import { useEffect, useRef } from 'react'
import type { Product } from '@/data/products'
import { Shield, Car, Clock, ShoppingCart, Wrench, LayoutDashboard, X, ExternalLink } from 'lucide-react'

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
  onClose: () => void
}

export function ProductModal({ product, onClose }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const Icon = iconMap[product.icon] || LayoutDashboard

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const statusColorMap: Record<string, string> = {
    Production: 'text-brand-system',
    Beta: 'text-product-orange',
    MVP: 'text-product-green',
    'Em Desenvolvimento': 'text-brand-electric',
    Planejamento: 'text-product-purple',
    Ideação: 'text-text-muted',
  }

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={(e) => { if (e.target === overlayRef.current) onClose() }}
    >
      <div className="absolute inset-0 bg-surface/80 backdrop-blur-sm" />

      <div className="relative glass-strong rounded-lg w-full max-w-lg animate-scale-in shadow-window">
        <div className="flex items-center justify-between px-4 py-3 border-b border-surface-border/50">
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-lg ${product.productColor}/10 flex items-center justify-center border border-surface-border/50`}>
              <Icon className={`w-4 h-4 ${product.productColor.replace('bg-', 'text-')}`} />
            </div>
            <span className="text-sm font-bold text-text-primary">{product.name}</span>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-md flex items-center justify-center hover:bg-surface-border/30 text-text-muted hover:text-text-primary transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <p className="text-sm text-text-secondary leading-relaxed">{product.description}</p>
          </div>

          <div>
            <h4 className="text-xs font-mono text-text-muted uppercase tracking-wider mb-3">Funcionalidades</h4>
            <div className="grid grid-cols-2 gap-2">
              {product.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-text-primary">
                  <span className={`w-1.5 h-1.5 rounded-full ${product.productColor.replace('bg-', 'bg-')}/60`} />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <span className={`text-xs font-mono uppercase tracking-wider ${statusColorMap[product.status] || 'text-text-muted'}`}>
              Status: {product.status}
            </span>
          </div>
        </div>

        <div className="px-6 py-4 border-t border-surface-border/50 flex justify-end">
          <a
            href={product.href}
            target={product.href !== '#' ? '_blank' : undefined}
            rel={product.href !== '#' ? 'noopener noreferrer' : undefined}
            className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
              product.href !== '#'
                ? 'bg-brand-system/10 text-brand-system border border-brand-system/30 hover:bg-brand-system/20 hover:border-brand-system/60'
                : 'bg-surface-border/20 text-text-muted border border-surface-border/30 cursor-not-allowed'
            }`}
            onClick={(e) => { if (product.href === '#') e.preventDefault() }}
          >
            {product.href !== '#' ? 'Acessar Sistema' : 'Em breve'}
            {product.href !== '#' && <ExternalLink className="w-3.5 h-3.5" />}
          </a>
        </div>
      </div>
    </div>
  )
}
