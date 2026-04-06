import { X, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const CartDrawer = () => {
  const { items, removeFromCart, clearCart, itemCount, isOpen, setIsOpen } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-foreground/30 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-background border-l border-border shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-foreground" />
            <h2 className="font-serif text-lg font-semibold text-foreground">Your Edit ({itemCount})</h2>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag className="w-10 h-10 text-muted-foreground/40 mx-auto mb-3" />
              <p className="text-muted-foreground text-sm">Your edit is empty.</p>
              <p className="text-muted-foreground/60 text-xs mt-1">Curate your collection to begin.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 items-start bg-card border border-border rounded-sm p-4">
                  {item.image_url ? (
                    <img src={item.image_url} alt={item.name} className="w-16 h-16 object-cover rounded-sm" />
                  ) : (
                    <div className="w-16 h-16 bg-muted rounded-sm flex items-center justify-center">
                      <span className="text-[8px] text-muted-foreground">RM</span>
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif text-sm font-semibold text-foreground truncate">{item.name}</h3>
                    <p className="text-xs text-muted-foreground mt-0.5">{item.price} · Qty: {item.quantity}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-border space-y-3">
            <button
              onClick={clearCart}
              className="w-full text-xs uppercase tracking-[0.15em] py-2.5 border border-foreground/20 text-foreground hover:bg-foreground hover:text-background transition-colors rounded-sm"
            >
              Clear Edit
            </button>
            <p className="text-[10px] text-center text-muted-foreground/50">
              Items saved for this session only.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
