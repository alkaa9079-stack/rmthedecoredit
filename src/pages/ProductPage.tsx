import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OptimizedImage from "@/components/OptimizedImage";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";
import { useCart } from "@/contexts/CartContext";
import useScrollFadeIn from "@/hooks/useScrollFadeIn";

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const { addToCart } = useCart();
  useScrollFadeIn();

  const { data: product, isLoading } = useQuery({
    queryKey: ["product", productId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", productId || "")
        .single();
      if (error) throw error;
      return data;
    },
    enabled: !!productId,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-24 pb-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-10">
              <Skeleton className="w-full aspect-square rounded-sm" />
              <div className="space-y-4">
                <Skeleton className="h-8 w-3/4" />
                <Skeleton className="h-5 w-1/4" />
                <Skeleton className="h-20 w-full" />
                <Skeleton className="h-12 w-full" />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Product not found.</p>
      </div>
    );
  }

  const categoryLabel: Record<string, string> = {
    birthday: "Birthday Luxuries",
    housewarming: "Housewarming Elegance",
    corporate: "Corporate Gifting",
    anniversary: "Anniversary",
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <Link
            to={`/collection/${(product as any).category || "birthday"}`}
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to {categoryLabel[(product as any).category || "birthday"] || "Collection"}
          </Link>

          <div className="grid md:grid-cols-2 gap-10 scroll-fade-in">
            <div>
              {product.image_url ? (
                <OptimizedImage src={product.image_url} alt={product.name} aspectRatio="1/1" eager />
              ) : (
                <div className="w-full aspect-square bg-muted rounded-sm flex items-center justify-center">
                  <span className="font-serif text-2xl text-muted-foreground/40">RM</span>
                </div>
              )}
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">
                {categoryLabel[(product as any).category || ""] || "The Edit"}
              </p>
              <h1 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-2">
                {product.name}
              </h1>
              <p className="text-lg text-foreground/80 font-medium mb-4">{product.price}</p>

              {(product as any).hook && (
                <p className="text-sm italic text-muted-foreground mb-4">{(product as any).hook}</p>
              )}

              {(product as any).description && (
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {(product as any).description}
                </p>
              )}

              {(product as any).perfect_for && (
                <div className="mb-6 p-4 bg-muted/50 rounded-sm border border-border">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/60 mb-1">Perfect For</p>
                  <p className="text-sm text-foreground/80">{(product as any).perfect_for}</p>
                </div>
              )}

              <button
                onClick={() => addToCart({
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  image_url: product.image_url,
                })}
                className="w-full flex items-center justify-center gap-2 text-xs uppercase tracking-[0.15em] py-3.5 bg-foreground text-background hover:bg-foreground/90 transition-colors rounded-sm"
              >
                <ShoppingBag className="w-4 h-4" />
                Add to Edit
              </button>

              {product.amazon_link && (
                <a
                  href={product.amazon_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 w-full flex items-center justify-center gap-2 text-xs uppercase tracking-[0.15em] py-3 border border-foreground/20 text-foreground hover:bg-foreground hover:text-background transition-colors rounded-sm"
                >
                  View on Amazon
                </a>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
