'use client'

import { useEffect, useRef } from 'react'

export function Hero() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      el.style.setProperty('--mouse-x', String(x))
      el.style.setProperty('--mouse-y', String(y))
    }

    window.addEventListener('mousemove', onMouseMove)
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  return (
    <section ref={ref} className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at 50% 0%, rgba(0, 212, 255, 0.08) 0%, transparent 60%),
            radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.06) 0%, transparent 40%),
            radial-gradient(circle at 20% 80%, rgba(6, 247, 213, 0.04) 0%, transparent 40%)
          `,
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs text-neon-blue/80 mb-8 border border-neon-blue/10">
          <span className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse" />
          JAMESYSTEM OS
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          <span className="text-white">JAMESYSTEM</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 font-light mb-3">
          Software que resolve problemas reais.
        </p>

        <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Aplicativos, sistemas e ferramentas desenvolvidos para empresas e pessoas.
        </p>

        <a
          href="#produtos"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-neon-blue/10 text-neon-blue border border-neon-blue/30 hover:bg-neon-blue/20 hover:border-neon-blue/60 transition-all duration-300 text-sm font-medium group"
        >
          Explorar Produtos
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-james-500/30 to-transparent" />
    </section>
  )
}
