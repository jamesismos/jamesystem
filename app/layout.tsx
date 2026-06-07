import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
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

export const metadata: Metadata = {
  title: 'JAMESYSTEM — Software que resolve problemas reais',
  description:
    'Aplicativos, sistemas e ferramentas desenvolvidos para empresas e pessoas pela JAMESYSTEM.',
  openGraph: {
    title: 'JAMESYSTEM',
    description: 'Software que resolve problemas reais.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen antialiased grid-bg relative">
        <div className="desktop-bg" />
        <div className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-center">
          <div className="mb-3 px-4 py-1.5 rounded-full glass border border-white/5 inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-blue animate-pulse shadow-[0_0_6px_rgba(0,212,255,0.6)]" />
            <span className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">JAMESYSTEM OS</span>
            <span className="text-[10px] font-mono text-slate-600">v1.0</span>
          </div>
        </div>
        {children}
      </body>
    </html>
  )
}
