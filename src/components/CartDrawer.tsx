import { X, ShoppingBag, Truck, Gift, Calendar } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";

const CartDrawer = () => {
  const { items, removeFromCart, clearCart, itemCount, isOpen, setIsOpen } = useCart();
  const [deliveryType, setDeliveryType] = useState("me");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-foreground/30 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-background border-l border-border shadow-2xl flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-foreground" />
            <h2 className="font-serif text-lg font-semibold text-foreground">Your Edit ({itemCount})</h2>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag className="w-10 h-10 text-muted-foreground/40 mx-auto mb-3" />
              <p className="text-muted-foreground text-sm">Your edit is empty.</p>
            </div>
          ) : (
            <div className="space-y-4 mb-8">
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
                  <button onClick={() => removeFromCart(item.id)} className="text-muted-foreground hover:text-destructive">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* --- DELIVERY & GIFTING OPTIONS --- */}
          {items.length > 0 && (
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">Gifting Experience</p>
              
              <div className="space-y-3">
                {/* Option 1: To Me */}
                <label className={`flex items-start gap-3 p-3 border rounded-sm cursor-pointer transition-colors ${deliveryType === 'me' ? 'border-foreground bg-muted/50' : 'border-border'}`}>
                  <input type="radio" name="delivery" className="mt-1 accent-black" checked={deliveryType === 'me'} onChange={() => setDeliveryType('me')} />
                  <div>
                    <p className="text-xs font-medium flex items-center gap-2"><Truck className="w-3 h-3" /> Deliver to my address</p>
                    <p className="text-[10px] text-muted-foreground mt-1">Standard shipping for personal gifting.</p>
                  </div>
                </label>

                {/* Option 2: To Loved One */}
                <label className={`flex items-start gap-3 p-3 border rounded-sm cursor-pointer transition-colors ${deliveryType === 'them' ? 'border-foreground bg-muted/50' : 'border-border'}`}>
                  <input type="radio" name="delivery" className="mt-1 accent-black" checked={deliveryType === 'them'} onChange={() => setDeliveryType('them')} />
                  <div>
                    <p className="text-xs font-medium flex items-center gap-2"><Gift className="w-3 h-3" /> Send directly to a loved one</p>
                    <p className="text-[10px] text-muted-foreground mt-1">Direct delivery. We'll hide the prices.</p>
                  </div>
                </label>

                {/* Option 3: Milestone Delivery */}
                <label className={`flex items-start gap-3 p-3 border rounded-sm cursor-pointer transition-colors ${deliveryType === 'milestone' ? 'border-foreground bg-muted/50' : 'border-border'}`}>
                  <input type="radio" name="delivery" className="mt-1 accent-black" checked={deliveryType === 'milestone'} onChange={() => setDeliveryType('milestone')} />
                  <div>
                    <p className="text-xs font-medium flex items-center gap-2"><Calendar className="w-3 h-3" /> Milestone Delivery</p>
                    <p className="text-[10px] text-muted-foreground mt-1 text-balance">Premium gift wrap + Arrives exactly on your chosen date.</p>
                  </div>
                </label>

                {/* Conditional Date Picker for Milestone */}
                {deliveryType === 'milestone' && (
                  <div className="mt-4 p-3 bg-foreground/5 rounded-sm border border-dashed border-foreground/20">
                    <p className="text-[10px] uppercase tracking-wider mb-2 font-medium">Select Milestone Date</p>
                    <input type="date" className="w-full bg-transparent border-b border-foreground/30 py-1 text-xs focus:outline-none" />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {items.length > 0 && (
          <div className="p-6 border-t border-border space-y-3">
            <button className="w-full text-xs uppercase tracking-[0.2em] py-4 bg-foreground text-background hover:bg-foreground/90 transition-colors rounded-sm">
              Proceed to Checkout
            </button>
            <button onClick={clearCart} className="w-full text-[9px] uppercase tracking-[0.1em] py-2 text-muted-foreground hover:text-foreground transition-colors">
              Clear Edit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
