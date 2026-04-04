import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TierCards from "@/components/TierCards";
import InstagramGrid from "@/components/InstagramGrid";
import InnerCirclePopup from "@/components/InnerCirclePopup";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TierCards />
        {/* Editorial Quote */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-6 text-center max-w-2xl">
            <blockquote className="font-serif text-2xl md:text-3xl italic text-foreground leading-relaxed">
              "The best gifts aren't found — they're curated, with intention, for someone who matters."
            </blockquote>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-6">
              — The RM Edit Philosophy
            </p>
          </div>
        </section>
        <InstagramGrid />
      </main>
      <Footer />
      <InnerCirclePopup />
    </div>
  );
};

export default Index;
