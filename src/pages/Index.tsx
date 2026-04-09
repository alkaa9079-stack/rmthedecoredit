import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import OptimizedImage from "@/components/OptimizedImage";
import HeroSection from "@/components/HeroSection";
import InstagramGrid from "@/components/InstagramGrid";
import InnerCirclePopup from "@/components/InnerCirclePopup";
import Footer from "@/components/Footer";
import PageSpinner from "@/components/PageSpinner";

const Index = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 500);
    return () => clearTimeout(timer);
  }, []);

  if (!ready) return <PageSpinner />;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />

      {/* --- PHASE 1: THE THREE MAIN PACKAGES --- */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground text-center mb-4">Choose Your Edit</p>
          <h2 className="text-4xl font-serif text-center mb-16 tracking-[0.2em] uppercase text-foreground font-medium">The Signature Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {[
              { 
                title: "The Keepsake", 
                subtitle: "Small & Meaningful", 
                link: "/tier/keepsake", 
                img: "https://images.unsplash.com/photo-1549465220-1a8b9238f760?w=800&q=80&auto=format",
                desc: "Timeless tokens to mark a moment."
              },
              { 
                title: "The Sanctuary", 
                subtitle: "The Comfort Edit", 
                link: "/tier/sanctuary", 
                img: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800&q=80&auto=format",
                desc: "Curated for peace and home elegance."
              },
              { 
                title: "The Grand Gesture", 
                subtitle: "Premium & Luxe", 
                link: "/tier/grand-gesture", 
                img: "https://images.unsplash.com/photo-1607469256872-48074e807b0f?w=800&q=80&auto=format",
                desc: "The ultimate expression of luxury."
              },
            ].map((card) => (
              <Link key={card.title} to={card.link} className="relative group h-[500px] overflow-hidden rounded-sm cursor-pointer shadow-md bg-muted block">
                <div className="absolute inset-0">
                  <OptimizedImage src={card.img} alt={card.title} aspectRatio="auto" className="transition-transform duration-1000 group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500 z-20" />
                <div className="relative h-full flex flex-col items-center justify-center text-white p-8 text-center z-30">
                  <p className="text-[10px] uppercase tracking-[0.3em] opacity-80 mb-2">{card.subtitle}</p>
                  <h3 className="text-3xl font-serif mb-4 tracking-wide">{card.title}</h3>
                  <p className="text-sm italic mb-8 opacity-90 max-w-[250px]">{card.desc}</p>
                  <div className="px-10 py-3 border border-white text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500">
                    Explore Package
                  </div>
                </div>
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* --- PHASE 2: MILESTONES (THE 2ND SCREEN) --- */}
      <section className="py-24 px-4 bg-background border-t border-muted">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground text-center mb-4">Gifts by Occasion</p>
          <h2 className="text-4xl font-serif text-center mb-16 tracking-[0.2em] uppercase text-foreground font-medium">Milestones</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            
            {[
              { title: "Birthdays", link: "/collection/birthday" },
              { title: "Anniversaries", link: "/collection/anniversary" },
              { title: "Housewarming", link: "/collection/housewarming" },
              { title: "New Baby", link: "/collection/baby" },
            ].map((milestone) => (
              <Link key={milestone.title} to={milestone.link} className="p-12 border border-muted hover:border-black transition-colors duration-500 text-center flex flex-col items-center justify-center group">
                <h3 className="text-xl font-serif tracking-widest group-hover:scale-105 transition-transform duration-500">{milestone.title}</h3>
                <span className="text-[9px] uppercase tracking-widest mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">Shop Collection</span>
              </Link>
            ))}

          </div>
        </div>
      </section>

      <InstagramGrid />
      <Footer />
      <InnerCirclePopup />
    </div>
  );
};

export default Index;
