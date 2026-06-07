'use client'

import { useState } from 'react'
import { products } from '@/data/products'
import { ProductWindow } from './ProductWindow'
import { ProductModal } from './ProductModal'
import type { Product } from '@/data/products'

export function ProductGrid() {
  const [selected, setSelected] = useState<Product | null>(null)

  return (
    <section id="produtos" className="py-24 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-surface-border mb-4">
            <span className="text-[10px] font-mono text-text-muted tracking-widest uppercase">Produtos</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-3">
            <span className="brand-text">{'//'}</span> Aplicativos
          </h2>
          <p className="text-text-muted text-sm">Clique em uma janela para explorar</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {products.map((product, i) => (
            <ProductWindow
              key={product.id}
              product={product}
              onClick={() => setSelected(product)}
              index={i}
            />
          ))}
        </div>
      </div>

      {selected && (
        <ProductModal product={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}
