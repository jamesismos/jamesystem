import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Orbitron } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'JAMESYSTEM — Transformando processos em software',
  description:
    'Produtos digitais para empresas modernas. ERP, automação, gestão e produtividade.',
  openGraph: {
    title: 'JAMESYSTEM',
    description: 'Transformando processos em software.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jetbrainsMono.variable} ${orbitron.variable}`}>
      <body className="min-h-screen antialiased grid-bg relative">
        <div className="desktop-bg" />
        <div className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-center pointer-events-none">
          <div className="mb-4 px-4 py-1.5 rounded-full glass border border-surface-border inline-flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-system animate-pulse" />
            <span className="text-[10px] font-display text-text-muted tracking-[0.15em] uppercase">JAMESYSTEM</span>
            <span className="text-[10px] font-mono text-text-muted/50">ecossistema</span>
          </div>
        </div>
        {children}
      </body>
    </html>
  )
}
