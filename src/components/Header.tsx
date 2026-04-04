import { Link } from "react-router-dom";

const Header = () => {
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
          <Link to="/tier/keepsake" className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors">
            Collections
          </Link>
          </Link>
          <Link to="/registry" className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors">
            Private Registry
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link
            to="/registry"
            className="hidden sm:inline-flex text-xs uppercase tracking-[0.15em] px-5 py-2.5 bg-foreground text-background rounded-none hover:bg-foreground/90 transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
