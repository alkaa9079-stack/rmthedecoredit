import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <span className="font-serif text-xl font-semibold">RM</span>
            <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/50 mt-0.5 mb-4">
              The Decor Edit
            </p>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              A British gifting house dedicated to the art of personalised, meaningful presents.
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-primary-foreground/50 mb-4">
              Collections
            </h4>
            <div className="space-y-2">
              <Link to="/keepsake" className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                The Keepsake
              </Link>
              <Link to="/sanctuary" className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                The Sanctuary
              </Link>
              <Link to="/grand" className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                The Grand Gesture
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-primary-foreground/50 mb-4">
              Services
            </h4>
            <div className="space-y-2">
              <Link to="/registry" className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Private Client Registry
              </Link>
              <span className="block text-sm text-primary-foreground/70">
                Concierge Packaging
              </span>
              <span className="block text-sm text-primary-foreground/70">
                Corporate Gifting
              </span>
            </div>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-primary-foreground/50 mb-4">
              Connect
            </h4>
            <div className="space-y-2">
              <span className="block text-sm text-primary-foreground/70">Instagram</span>
              <span className="block text-sm text-primary-foreground/70">Pinterest</span>
              <span className="block text-sm text-primary-foreground/70">hello@rmthedecoredit.co.uk</span>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-8">
          <p className="text-xs text-primary-foreground/40 leading-relaxed max-w-3xl">
            <span className="font-medium text-primary-foreground/50">Amazon Associate Disclosure:</span>{" "}
            RM The Decor Edit is a participant in the Amazon Services LLC Associates Programme, an affiliate
            advertising programme designed to provide a means for sites to earn advertising fees by
            advertising and linking to Amazon.co.uk. As an Amazon Associate, we earn from qualifying purchases.
            Product prices and availability are subject to change.
          </p>
          <p className="text-xs text-primary-foreground/30 mt-4">
            © {new Date().getFullYear()} RM The Decor Edit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
