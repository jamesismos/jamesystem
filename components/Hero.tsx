'use client'

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(circle at 50% 0%, rgba(11, 61, 145, 0.12) 0%, transparent 60%),
            radial-gradient(circle at 80% 20%, rgba(10, 132, 255, 0.06) 0%, transparent 40%),
            radial-gradient(circle at 20% 80%, rgba(0, 194, 255, 0.04) 0%, transparent 40%)
          `,
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs text-text-secondary mb-8 border border-surface-border">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-system" />
          Ecossistema de produtos
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 font-display">
          <span className="brand-text">JAMESYSTEM</span>
        </h1>

        <p className="text-xl md:text-2xl text-text-secondary font-light mb-3">
          Transformando processos em software.
        </p>

        <p className="text-base md:text-lg text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
          Produtos digitais para empresas modernas. ERP, automação, gestão e produtividade.
        </p>

        <a
          href="#produtos"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-brand-system/10 text-brand-system border border-brand-system/30 hover:bg-brand-system/20 hover:border-brand-system/60 transition-all duration-300 text-sm font-medium group"
        >
          Explorar Produtos
          <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-corporate/40 to-transparent" />
    </section>
  )
}
