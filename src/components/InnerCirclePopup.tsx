import { useState, useEffect } from "react";
import { X } from "lucide-react";

const InnerCirclePopup = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const alreadyDismissed = localStorage.getItem("innerCircleDismissed");
    if (alreadyDismissed) return;
    const timer = setTimeout(() => setVisible(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    setVisible(false);
    localStorage.setItem("innerCircleDismissed", "true");
  };

  if (!visible || dismissed) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-in-right">
      <div className="bg-card border border-border shadow-xl rounded-lg p-5 max-w-xs relative">
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-1">
          The Inner Circle
        </p>
        <h4 className="font-serif text-lg font-semibold text-foreground mb-2">
          Quiet Updates
        </h4>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          First access to new collections, seasonal edits, and private client perks — no noise, just taste.
        </p>
        <input
          type="email"
          placeholder="Your email address"
          className="w-full text-sm px-3 py-2 border border-border rounded-sm bg-background text-foreground placeholder:text-muted-foreground mb-3 focus:outline-none focus:ring-1 focus:ring-ring"
        />
        <button
          onClick={handleDismiss}
          className="w-full text-xs uppercase tracking-[0.15em] py-2.5 bg-cta text-cta-foreground rounded-sm hover:bg-cta/90 transition-colors font-medium"
        >
          Join Now
        </button>
      </div>
    </div>
  );
};

export default InnerCirclePopup;
