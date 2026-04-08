import { useSearchParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { CheckCircle, Gift, Calendar, ArrowRight } from "lucide-react";
import { format } from "date-fns";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";

interface OrderItem {
  id: string;
  name: string;
  price: string;
  quantity: number;
  image_url: string | null;
}

const ThankYouPage = () => {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("order");

  const { data: order, isLoading } = useQuery({
    queryKey: ["order", orderId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("orders")
        .select("*")
        .eq("id", orderId || "")
        .maybeSingle();
      if (error) throw error;
      return data;
    },
    enabled: !!orderId,
  });

  const items: OrderItem[] = order ? (order.items as any as OrderItem[]) : [];
  const milestoneDate = order?.milestone_date
    ? format(new Date(order.milestone_date + "T00:00:00"), "do MMMM yyyy")
    : null;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6 max-w-2xl">
          {isLoading ? (
            <div className="text-center space-y-4 py-20">
              <Skeleton className="h-16 w-16 rounded-full mx-auto" />
              <Skeleton className="h-8 w-64 mx-auto" />
              <Skeleton className="h-4 w-96 mx-auto" />
            </div>
          ) : !order ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground">Order not found.</p>
              <Link to="/" className="text-xs uppercase tracking-[0.15em] text-foreground underline mt-4 inline-block">
                Return Home
              </Link>
            </div>
          ) : (
            <>
              {/* Hero Confirmation */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-foreground/5 mb-6">
                  <CheckCircle className="w-8 h-8 text-foreground" />
                </div>
                <h1 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-3">
                  Thank You, {order.customer_name}
                </h1>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Your order has been received. Our British Gifting House will carefully curate, wrap, and prepare your selection with the utmost care.
                </p>
              </div>

              {/* Milestone Delivery Banner */}
              {order.delivery_type === "milestone" && milestoneDate && (
                <div className="mb-10 p-6 bg-muted/50 border border-border rounded-sm text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-foreground" />
                    <p className="text-xs uppercase tracking-[0.2em] font-medium text-foreground">Milestone Delivery</p>
                  </div>
                  <p className="font-serif text-xl text-foreground mb-1">{milestoneDate}</p>
                  <p className="text-xs text-muted-foreground">
                    We will hold your gift in our care and ensure it arrives beautifully wrapped, precisely on your chosen date.
                  </p>
                </div>
              )}

              {order.delivery_type === "them" && (
                <div className="mb-10 p-6 bg-muted/50 border border-border rounded-sm text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Gift className="w-4 h-4 text-foreground" />
                    <p className="text-xs uppercase tracking-[0.2em] font-medium text-foreground">Gift Delivery</p>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Your gift will be delivered directly to your loved one, with all prices discreetly hidden.
                  </p>
                </div>
              )}

              {/* Order Summary */}
              <div className="border border-border rounded-sm overflow-hidden mb-10">
                <div className="p-4 bg-muted/30 border-b border-border">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Order Summary</p>
                </div>
                <div className="divide-y divide-border">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 p-4">
                      {item.image_url ? (
                        <img src={item.image_url} alt={item.name} className="w-12 h-12 object-cover rounded-sm" />
                      ) : (
                        <div className="w-12 h-12 bg-muted rounded-sm flex items-center justify-center">
                          <span className="text-[8px] text-muted-foreground">RM</span>
                        </div>
                      )}
                      <div className="flex-1">
                        <p className="font-serif text-sm font-medium text-foreground">{item.name}</p>
                        <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                      </div>
                      <p className="text-sm text-foreground">{item.price}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Confirmation Details */}
              <div className="text-center space-y-4 mb-12">
                <p className="text-xs text-muted-foreground">
                  A confirmation has been sent to <span className="text-foreground font-medium">{order.customer_email}</span>
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
                  Order Ref: {order.id.slice(0, 8).toUpperCase()}
                </p>
              </div>

              {/* Continue Shopping */}
              <div className="text-center">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] py-3 px-8 border border-foreground/20 text-foreground hover:bg-foreground hover:text-background transition-colors rounded-sm"
                >
                  Continue Browsing <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYouPage;
