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

      {/* --- THE EDIT --- */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground text-center mb-4">Curated Collections</p>
          <h2 className="text-4xl font-serif text-center mb-16 tracking-[0.2em] uppercase text-foreground font-medium">The Edit</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {[
              { title: "Keepsake", price: "£25–£75", link: "/collection/birthday", img: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=800&q=80&auto=format" },
              { title: "Sanctuary", price: "£75–£250", link: "/collection/housewarming", img: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80&auto=format" },
              { title: "Grand Gesture", price: "£250+", link: "/collection/corporate", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&auto=format" },
            ].map((card) => (
              <Link key={card.title} to={card.link} className="relative group h-[500px] overflow-hidden rounded-sm cursor-pointer shadow-sm bg-muted block">
                <img 
                  src={card.img}
                  loading="lazy"
                  decoding="async"
                  crossOrigin="anonymous"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  alt={`${card.title} Collection`}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500" />
                <div className="relative h-full flex flex-col items-center justify-center text-white p-8 text-center">
                  <h3 className="text-3xl font-serif mb-2 tracking-wide">{card.title}</h3>
                  <p className="text-sm mb-8 italic opacity-90 tracking-widest">{card.price}</p>
                  <div className="px-10 py-4 border border-white text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500">
                    View Collection
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
