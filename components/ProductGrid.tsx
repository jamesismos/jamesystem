'use client'

import { products } from '@/data/products'
import { ProductWindow } from './ProductWindow'
import type { Category } from '@/data/products'

const sections: { id: Category; label: string; subtitle: string; badge: string }[] = [
  { id: 'enterprise', label: 'Produtos Empresariais', subtitle: 'Sistemas de gestão para negócios', badge: 'Corporativo' },
  { id: 'app', label: 'Aplicativos', subtitle: 'Apps para o dia a dia', badge: 'Mobile' },
  { id: 'lab', label: 'Laboratório', subtitle: 'Inovação e novos produtos', badge: 'P&D' },
  { id: 'planning', label: 'Em Planejamento', subtitle: 'Próximos lançamentos', badge: 'Futuro' },
]

export function ProductGrid() {
  return (
    <section id="produtos" className="py-24 px-4 relative">
      <div className="max-w-5xl mx-auto space-y-20">
        {sections.map((section) => {
          const sectionProducts = products.filter(p => p.category === section.id)
          if (sectionProducts.length === 0) return null

          return (
            <div key={section.id}>
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-surface-border mb-4">
                  <span className="text-[10px] font-mono text-text-muted tracking-widest uppercase">{section.badge}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-text-primary mb-2">
                  <span className="brand-text">{'//'}</span> {section.label}
                </h2>
                <p className="text-text-muted text-sm">{section.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                {sectionProducts.map((product, i) => (
                  <ProductWindow
                    key={product.id}
                    product={product}
                    index={i}
                  />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
