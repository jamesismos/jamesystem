import { products } from '@/data/products'

const statusOrder: Record<string, number> = {
  Production: 0,
  Beta: 1,
  MVP: 2,
  'Em Desenvolvimento': 3,
  Planejamento: 4,
  Ideação: 5,
}

const statusColorMap: Record<string, string> = {
  Production: 'text-brand-system',
  Beta: 'text-product-orange',
  MVP: 'text-product-green',
  'Em Desenvolvimento': 'text-brand-electric',
  Planejamento: 'text-product-purple',
  Ideação: 'text-text-muted',
}

export function Roadmap() {
  const sorted = [...products].sort((a, b) => (statusOrder[a.status] ?? 99) - (statusOrder[b.status] ?? 99))

  return (
    <section id="roadmap" className="py-24 px-4 relative">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-surface-border mb-4">
            <span className="text-[10px] font-mono text-text-muted tracking-widest uppercase">Roadmap</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-3">
            <span className="brand-text">{'//'}</span> Em Desenvolvimento
          </h2>
          <p className="text-text-muted text-sm">Acompanhe o desenvolvimento dos nossos produtos</p>
        </div>

        <div className="grid gap-2">
          {sorted.map((product) => (
            <div
              key={product.id}
              className="glass rounded-lg px-5 py-4 flex items-center justify-between group hover:border-brand-corporate/30 transition-colors"
            >
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-text-primary tracking-wide min-w-[140px]">
                  {product.name}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-xs font-mono uppercase tracking-wider ${statusColorMap[product.status] || 'text-text-muted'}`}>
                  {product.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
