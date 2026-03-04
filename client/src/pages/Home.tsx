import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ValuePropositionSection from '@/components/ValuePropositionSection';
import ServicesSection from '@/components/ServicesSection';
import PartnersSection from '@/components/PartnersSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <ValuePropositionSection />
        <ServicesSection />
        <TestimonialsSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
}
