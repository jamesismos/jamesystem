import { products } from '@/data/products'

export function SystemStatus() {
  const total = products.length
  const production = products.filter(p => p.status === 'Production').length
  const beta = products.filter(p => p.status === 'Beta').length
  const mvp = products.filter(p => p.status === 'MVP').length
  const active = production + beta + mvp
  const inDev = products.filter(p => p.status === 'Em Desenvolvimento').length
  const planned = products.filter(p => p.status === 'Planejamento' || p.status === 'Ideação').length

  const metrics = [
    { label: 'Produtos', value: total, color: 'text-text-primary' },
    { label: 'Ativos', value: active, color: 'text-product-green' },
    { label: 'Em Desenvolvimento', value: inDev, color: 'text-brand-electric' },
    { label: 'Em Planejamento', value: planned, color: 'text-text-muted' },
  ]

  return (
    <section className="py-16 px-4 border-t border-surface-border/50">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-surface-border mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-system animate-pulse" />
          <span className="text-[10px] font-mono text-text-muted tracking-widest uppercase">Status do Sistema</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((m) => (
            <div key={m.label} className="glass rounded-lg px-4 py-5">
              <p className={`text-2xl font-bold font-display ${m.color}`}>{m.value}</p>
              <p className="text-[11px] text-text-muted font-mono uppercase tracking-wider mt-1">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
