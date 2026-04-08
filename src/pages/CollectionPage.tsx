import { useParams, Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OptimizedImage from "@/components/OptimizedImage";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";
import { useCart } from "@/contexts/CartContext";
import useScrollFadeIn from "@/hooks/useScrollFadeIn";

const categoryMeta: Record<string, { title: string; subtitle: string; description: string }> = {
  birthday: {
    title: "Birthday Gifting",
    subtitle: "Celebrate in Style",
    description: "Extraordinary birthday gifts that transform a special day into an unforgettable moment. Hand-selected to surprise, delight, and make them feel truly cherished.",
  },
  anniversary: {
    title: "Anniversary Gifting",
    subtitle: "Timeless Tokens of Love",
    description: "Mark the milestones that matter most with gifts as enduring as your bond. Each piece is chosen to honour the years shared and the memories yet to come.",
  },
  housewarming: {
    title: "Housewarming Gifting",
    subtitle: "Welcome Home",
    description: "Curated gifts that turn a new house into a home of distinction. The perfect way to say welcome — with warmth, style, and lasting elegance.",
  },
  corporate: {
    title: "Corporate Gifting",
    subtitle: "The Professional Edit",
    description: "Sophisticated gifts that strengthen relationships and celebrate achievements. Each piece reflects impeccable taste and makes a lasting impression.",
  },
};

const CollectionPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const meta = categoryMeta[categoryId || ""];
  const { addToCart } = useCart();
  useScrollFadeIn();

  const { data: products, isLoading } = useQuery({
    queryKey: ["collection", categoryId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("category", categoryId || "")
        .order("created_at", { ascending: true });
      if (error) throw error;
      return data;
    },
    enabled: !!categoryId && !!meta,
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
        <section className="bg-muted py-20">
          <div className="container mx-auto px-6 text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground mb-2">{meta.subtitle}</p>
            <h1 className="font-serif text-4xl md:text-6xl font-medium text-foreground mb-4">{meta.title}</h1>
            <p className="text-muted-foreground max-w-lg mx-auto">{meta.description}</p>
          </div>
        </section>

        {/* Products */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-14 scroll-fade-in">
              <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground mb-3">The Collection</p>
              <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground">
                {products?.length || 0} Curated Pieces
              </h2>
            </div>

            {isLoading ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="bg-card border border-border rounded-lg p-6">
                    <Skeleton className="w-full aspect-[4/3] rounded-sm mb-4" />
                    <Skeleton className="h-5 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-full mb-1" />
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
                    <Link to={`/product/${product.id}`}>
                      {product.image_url ? (
                        <div className="mb-4">
                          <OptimizedImage src={product.image_url} alt={product.name} aspectRatio="4/3" />
                        </div>
                      ) : (
                        <div className="w-full rounded-sm mb-4 bg-muted flex items-center justify-center" style={{ aspectRatio: "4/3" }}>
                          <span className="font-serif text-xl text-muted-foreground/30">RM</span>
                        </div>
                      )}
                      <h3 className="font-serif text-lg font-semibold text-foreground mb-1">{product.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-1">{product.price}</p>
                      {(product as any).hook && (
                        <p className="text-xs italic text-muted-foreground/70 mb-1">{(product as any).hook}</p>
                      )}
                    </Link>
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
                <p className="text-muted-foreground">Our editors are currently curating this collection.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CollectionPage;
