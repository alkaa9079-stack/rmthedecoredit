import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const Header = () => {
  const { itemCount, setIsOpen } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex flex-col">
          <span className="font-serif text-2xl font-semibold tracking-tight text-foreground">RM</span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground -mt-1">The Decor Edit</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors">
            The Edit
          </Link>
          <Link to="/collection/birthday" className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors">
            Birthday
          </Link>
          <Link to="/collection/housewarming" className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors">
            Housewarming
          </Link>
          <Link to="/collection/corporate" className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors">
            Corporate
          </Link>
          <Link to="/registry" className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors">
            Registry
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsOpen(true)}
            className="relative text-foreground hover:text-foreground/80 transition-colors"
            aria-label="Open cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {itemCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-foreground text-background text-[9px] font-semibold rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
