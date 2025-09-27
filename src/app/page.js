import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/home/HeroSection'
import TrySearchingFor from '@/components/home/TrySearchingFor'
import TodaysLuxuryListings from '@/components/home/TodaysLuxuryListings'
import ServicesSection from '@/components/home/ServicesSection'
import HomeLoanForm from '@/components/home/HomeLoanForm'
import ExploreNeighborhoods from '@/components/home/ExploreNeighborhoods'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrySearchingFor />
      <TodaysLuxuryListings />
      <ServicesSection />
      <HomeLoanForm />
      <ExploreNeighborhoods />
      <Footer />
    </main>
  )
}