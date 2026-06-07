'use client'

import { useEffect, useRef } from 'react'
import type { Product } from '@/data/products'
import { Shield, Car, Clock, ShoppingCart, Wrench, Monitor, LayoutDashboard, X, ExternalLink } from 'lucide-react'

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
  onClose: () => void
}

export function ProductModal({ product, onClose }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const Icon = iconMap[product.icon as keyof typeof iconMap] || LayoutDashboard

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

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={(e) => { if (e.target === overlayRef.current) onClose() }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div className="relative glass-strong rounded-lg w-full max-w-lg animate-scale-in shadow-window">
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/5">
              <Icon className="w-4 h-4 text-neon-blue" />
            </div>
            <span className="text-sm font-bold text-white">{product.name}</span>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-md flex items-center justify-center hover:bg-white/5 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <p className="text-sm text-slate-300 leading-relaxed">{product.description}</p>
          </div>

          <div>
            <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">Funcionalidades</h4>
            <div className="grid grid-cols-2 gap-2">
              {product.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-sm text-slate-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon-blue shadow-[0_0_6px_rgba(0,212,255,0.5)]" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <span className={`text-xs font-mono uppercase tracking-wider ${product.statusColor}`}>
              Status: {product.status}
            </span>
          </div>
        </div>

        <div className="px-6 py-4 border-t border-white/5 flex justify-end">
          <a
            href={product.href}
            target={product.href !== '#' ? '_blank' : undefined}
            rel={product.href !== '#' ? 'noopener noreferrer' : undefined}
            className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
              product.href !== '#'
                ? 'bg-neon-blue/10 text-neon-blue border border-neon-blue/30 hover:bg-neon-blue/20 hover:border-neon-blue/60'
                : 'bg-white/5 text-slate-400 border border-white/10 cursor-not-allowed'
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
