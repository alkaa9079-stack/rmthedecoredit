import { useState, useEffect } from "react";
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
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />

      {/* --- THE EDIT SECTION (Luxury & Fast) --- */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-16 tracking-[0.2em] uppercase text-gray-900">The Edit</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Keepsake */}
            <div className="relative group h-[500px] overflow-hidden rounded-sm cursor-pointer shadow-sm">
              <img 
                src="https://unsplash.com" 
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                alt="Keepsake Collection"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="relative h-full flex flex-col items-center justify-center text-white p-8">
                <h3 className="text-3xl font-serif mb-2 tracking-wide">Keepsake</h3>
                <p className="text-sm mb-8 italic opacity-90 tracking-widest">£25–£75</p>
                <button className="px-10 py-4 border border-white text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500">
                  Explore
                </button>
              </div>
            </div>

            {/* Sanctuary */}
            <div className="relative group h-[500px] overflow-hidden rounded-sm cursor-pointer shadow-sm">
              <img 
                src="https://unsplash.com" 
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                alt="Sanctuary Collection"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="relative h-full flex flex-col items-center justify-center text-white p-8">
                <h3 className="text-3xl font-serif mb-2 tracking-wide">Sanctuary</h3>
                <p className="text-sm mb-8 italic opacity-90 tracking-widest">£75–£250</p>
                <button className="px-10 py-4 border border-white text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500">
                  Explore
                </button>
              </div>
            </div>

            {/* Grand Gesture */}
            <div className="relative group h-[500px] overflow-hidden rounded-sm cursor-pointer shadow-sm">
              <img 
                src="https://unsplash.com" 
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                alt="Grand Gesture Collection"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="relative h-full flex flex-col items-center justify-center text-white p-8">
                <h3 className="text-3xl font-serif mb-2 tracking-wide">Grand Gesture</h3>
                <p className="text-sm mb-8 italic opacity-90 tracking-widest">£250+</p>
                <button className="px-10 py-4 border border-white text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-500">
                  Explore
                </button>
              </div>
            </div>

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
