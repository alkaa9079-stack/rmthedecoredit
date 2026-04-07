import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
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

      {/* --- MILESTONES --- */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground text-center mb-4">Every Occasion, Perfected</p>
          <h2 className="text-4xl font-serif text-center mb-16 tracking-[0.2em] uppercase text-foreground font-medium">Milestones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {[
              { title: "Birthdays", subtitle: "Celebrate in Style", link: "/collection/birthday", img: "https://images.unsplash.com/photo-1549465220-1a8b9238f760?w=800&q=80&auto=format" },
              { title: "Anniversaries", subtitle: "Timeless Tokens", link: "/collection/anniversary", img: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=800&q=80&auto=format" },
              { title: "Housewarming", subtitle: "Welcome Home", link: "/collection/housewarming", img: "https://images.unsplash.com/photo-1607469256872-48074e807b0f?w=800&q=80&auto=format" },
              { title: "Corporate", subtitle: "The Professional Edit", link: "/collection/corporate", img: "https://images.unsplash.com/photo-1531685250784-7569952593d2?w=800&q=80&auto=format" },
            ].map((card) => (
              <Link key={card.title} to={card.link} className="relative group h-[420px] overflow-hidden rounded-sm cursor-pointer shadow-sm bg-muted block">
                <img 
                  src={card.img}
                  loading="lazy"
                  decoding="async"
                  crossOrigin="anonymous"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  alt={`${card.title} Gifting`}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500" />
                <div className="relative h-full flex flex-col items-center justify-end text-white p-8 pb-10 text-center">
                  <p className="text-[10px] uppercase tracking-[0.3em] opacity-80 mb-2">{card.subtitle}</p>
                  <h3 className="text-2xl font-serif mb-6 tracking-wide">{card.title}</h3>
                  <div className="px-8 py-3 border border-white text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500">
                    Shop Gifts
                  </div>
                </div>
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
