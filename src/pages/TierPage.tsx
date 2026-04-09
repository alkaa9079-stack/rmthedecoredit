import { useParams } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import useScrollFadeIn from "@/hooks/useScrollFadeIn";
import { appendAffiliateTag } from "@/lib/amazonAffiliate";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";
import OptimizedImage from "@/components/OptimizedImage";

const tierMeta: Record<string, { title: string; price: string; description: string; bgClass: string; accentClass: string }> = {
  keepsake: {
    title: "The Keepsake",
    price: "£25–£50",
    description: "Thoughtful gestures that create lasting memories. Each piece is curated to feel personal, intimate, and quietly unforgettable.",
    bgClass: "bg-tier-keepsake",
    accentClass: "text-tier-keepsake-accent",
  },
  sanctuary: {
    title: "The Sanctuary",
    price: "£75–£150",
    description: "Elevated experiences for those you cherish. These collections transform ordinary evenings into private retreats.",
    bgClass: "bg-tier-sanctuary",
    accentClass: "text-tier-sanctuary-accent",
  },
  grand_gesture: {
    title: "The Grand Gesture",
    price: "£250–£500",
    description: "Extraordinary moments for extraordinary people. These are the gifts that redefine what it means to be remembered.",
    bgClass: "bg-tier-grand",
    accentClass: "text-tier-grand-accent",
  },
};

const TierPage = () => {
  const { tierId } = useParams<{ tierId: string }>();
  const meta = tierMeta[tierId || ""];
  useScrollFadeIn();

  const { data: products, isLoading } = useQuery({
    queryKey: ["products", tierId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("tier", tierId || "")
        .order("created_at", { ascending: true });
      if (error) throw error;
      return data;
    },
    enabled: !!tierId && !!meta,
  });

  if (!meta) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Collection not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className={`${meta.bgClass} py-20`}>
          <div className="container mx-auto px-6 text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground mb-2">{meta.price}</p>
            <h1 className="font-serif text-4xl md:text-6xl font-medium text-foreground mb-4">{meta.title}</h1>
            <p className="text-muted-foreground max-w-lg mx-auto">{meta.description}</p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-14 scroll-fade-in">
              <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground mb-3">The Collection</p>
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground">
                Hand-Selected for {meta.title}
              </h2>
            </div>

            {isLoading ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="bg-card border border-border rounded-lg p-6">
                    <div className="w-full rounded-sm mb-4 overflow-hidden" style={{ aspectRatio: "4/3" }}>
                      <Skeleton className="w-full h-full" />
                    </div>
                    <Skeleton className="h-5 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-full mb-1" />
                    <Skeleton className="h-4 w-2/3 mb-1" />
                    <Skeleton className="h-9 w-full mt-4" />
                  </div>
                ))}
              </div>
            ) : products && products.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="scroll-fade-in bg-card border border-border rounded-lg p-6 flex flex-col justify-between hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div>
                      {product.image_url ? (
                        <div className="mb-4">
                          <OptimizedImage
                            src={product.image_url}
                            alt={product.name}
                            aspectRatio="4/3"
                          />
                        </div>
                      ) : (
                        <div className="w-full rounded-sm mb-4 flex items-center justify-center" style={{ aspectRatio: "4/3" }}>
                          <div className={`w-full h-full ${meta.bgClass} rounded-sm flex items-center justify-center`}>
                            <span className="text-xs text-muted-foreground">{product.name}</span>
                          </div>
                        </div>
                      )}
                      <h3 className="font-serif text-lg font-semibold text-foreground mb-1">{product.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-1">{product.price}</p>
                    </div>
                    {product.amazon_link && (
                      <div className="flex flex-col items-center gap-1 mt-4">
                        <span className="text-[10px] uppercase tracking-[0.2em] font-sans text-muted-foreground/60 font-medium">
                          #Ad
                        </span>
                        <a
                          href={appendAffiliateTag(product.amazon_link)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-center gap-2 text-xs uppercase tracking-[0.15em] py-2.5 border border-foreground/20 text-foreground hover:bg-foreground hover:text-background transition-colors rounded-sm"
                        >
                          Shop Now <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground">Our editors are currently curating this collection. Check back soon.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TierPage;
