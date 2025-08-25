import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroSection } from "@/components/home/hero-section"
import { FeaturedProject } from "@/components/home/featured-project"
import { MissionSection } from "@/components/home/mission-section"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturedProject />
        <MissionSection />
      </main>
      <Footer />
    </div>
  )
}
