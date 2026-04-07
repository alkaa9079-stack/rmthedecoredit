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

      {/* --- ENHANCED THE EDIT SECTION --- */}
      <section className="py-20 px-4 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-16 text-gray-900 tracking-wide">The Edit</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            {/* Keepsake */}
            <div className="group p-10 border border-gray-200 rounded-3xl text-center bg-white hover:border-gray-400 transition-all duration-500 hover:-translate-y-1 shadow-sm">
              <h3 className="text-2xl font-serif mb-3 tracking-tight">Keepsake</h3>
              <p className="text-gray-400 mb-6 italic font-light text-sm tracking-widest">£25–£75</p>
              <p className="text-gray-600 leading-relaxed mb-8 text-sm">Small, thoughtful luxury pieces for the home.</p>
              <button className="px-6 py-2 border border-gray-900 text-xs uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-colors duration-300">
                View Collection
              </button>
            </div>

            {/* Sanctuary */}
            <div className="group p-10 border border-gray-200 rounded-3xl text-center bg-white hover:border-gray-400 transition-all duration-500 hover:-translate-y-1 shadow-sm">
              <h3 className="text-2xl font-serif mb-3 tracking-tight">Sanctuary</h3>
              <p className="text-gray-400 mb-6 italic font-light text-sm tracking-widest">£75–£250</p>
              <p className="text-gray-600 leading-relaxed mb-8 text-sm">Statement decor and meaningful gifts for your space.</p>
              <button className="px-6 py-2 border border-gray-900 text-xs uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-colors duration-300">
                View Collection
              </button>
            </div>

            {/* Grand Gesture */}
            <div className="group p-10 border border-gray-200 rounded-3xl text-center bg-white hover:border-gray-400 transition-all duration-500 hover:-translate-y-1 shadow-sm">
              <h3 className="text-2xl font-serif mb-3 tracking-tight">Grand Gesture</h3>
              <p className="text-gray-400 mb-6 italic font-light text-sm tracking-widest">£250+</p>
              <p className="text-gray-600 leading-relaxed mb-8 text-sm">Premium, standout gifting pieces that last a lifetime.</p>
              <button className="px-6 py-2 border border-gray-900 text-xs uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-colors duration-300">
                View Collection
              </button>
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
