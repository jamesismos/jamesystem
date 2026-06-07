import { Hero } from '@/components/Hero'
import { ProductGrid } from '@/components/ProductGrid'
import { Roadmap } from '@/components/Roadmap'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProductGrid />
      <Roadmap />
      <Footer />
    </main>
  )
}
