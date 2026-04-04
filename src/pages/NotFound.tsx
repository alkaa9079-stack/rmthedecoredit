import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center pt-24">
        <div className="text-center px-6">
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground mb-3">
            404
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-medium text-foreground mb-4">
            Lost in the Edit?
          </h1>
          <p className="text-muted-foreground max-w-sm mx-auto mb-10 leading-relaxed">
            The page you're looking for has been moved, removed, or never existed. Let us guide you back to something beautiful.
          </p>
          <Link
            to="/"
            className="inline-flex text-xs uppercase tracking-[0.15em] px-8 py-3 bg-foreground text-background rounded-none hover:bg-foreground/90 transition-colors"
          >
            Return to The Edit
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
