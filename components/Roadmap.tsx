import { products } from '@/data/products'

const statusOrder: Record<string, number> = {
  Production: 0,
  Beta: 1,
  MVP: 2,
  'Em Desenvolvimento': 3,
  Planejamento: 4,
  Ideação: 5,
}

export function Roadmap() {
  const sorted = [...products].sort((a, b) => (statusOrder[a.status] ?? 99) - (statusOrder[b.status] ?? 99))

  return (
    <section id="roadmap" className="py-24 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            <span className="neon-text">{'//'}</span> Roadmap
          </h2>
          <p className="text-slate-400 text-sm">Acompanhe o desenvolvimento dos nossos produtos</p>
        </div>

        <div className="grid gap-3">
          {sorted.map((product) => (
            <div
              key={product.id}
              className="glass rounded-lg px-5 py-4 flex items-center justify-between group hover:border-james-400/20 transition-colors"
            >
              <div className="flex items-center gap-4">
                <span className="text-sm font-bold text-white tracking-wide min-w-[140px]">
                  {product.name}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`inline-block w-1.5 h-1.5 rounded-full ${product.statusColor.replace('text-', 'bg-')}`}
                  style={
                    product.statusColor === 'text-amber-400'
                      ? { boxShadow: '0 0 6px rgba(251,191,36,0.5)' }
                      : product.statusColor === 'text-cyan-400'
                        ? { boxShadow: '0 0 6px rgba(34,211,238,0.5)' }
                        : product.statusColor === 'text-green-400'
                          ? { boxShadow: '0 0 6px rgba(74,222,128,0.5)' }
                          : product.statusColor === 'text-purple-400'
                            ? { boxShadow: '0 0 6px rgba(192,132,252,0.5)' }
                            : {}
                  }
                />
                <span className={`text-xs font-mono uppercase tracking-wider ${product.statusColor}`}>
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
