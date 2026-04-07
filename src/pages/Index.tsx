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

      {/* --- THE EDIT SECTION --- */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-serif text-center mb-12 text-gray-900">The Edit</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Keepsake */}
            <div className="p-8 border border-gray-100 rounded-2xl text-center hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-serif mb-2">Keepsake</h3>
              <p className="text-gray-400 mb-4 italic font-light">£25–£75</p>
              <p className="text-gray-600 leading-relaxed">Small, thoughtful luxury pieces for the home.</p>
            </div>

            {/* Sanctuary */}
            <div className="p-8 border border-gray-100 rounded-2xl text-center hover:shadow-lg transition-all duration-300 bg-slate-50/30">
              <h3 className="text-2xl font-serif mb-2">Sanctuary</h3>
              <p className="text-gray-400 mb-4 italic font-light">£75–£250</p>
              <p className="text-gray-600 leading-relaxed">Statement decor and meaningful gifts for your space.</p>
            </div>

            {/* Grand Gesture */}
            <div className="p-8 border border-gray-100 rounded-2xl text-center hover:shadow-lg transition-all duration-300">
              <h3 className="text-2xl font-serif mb-2">Grand Gesture</h3>
              <p className="text-gray-400 mb-4 italic font-light">£250+</p>
              <p className="text-gray-600 leading-relaxed">Premium, standout gifting pieces that last a lifetime.</p>
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
