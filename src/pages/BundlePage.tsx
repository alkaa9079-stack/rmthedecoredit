import { useParams, Link } from "react-router-dom";
import { ExternalLink, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Product {
  name: string;
  description: string;
  amazonUrl: string;
}

interface Bundle {
  name: string;
  tagline: string;
  products: Product[];
}

const tierData: Record<string, { title: string; price: string; description: string; bgClass: string; accentClass: string; bundles: Bundle[] }> = {
  keepsake: {
    title: "The Keepsake",
    price: "£25–£50",
    description: "Thoughtful gestures that create lasting memories. Each bundle is curated to feel personal, intimate, and quietly unforgettable.",
    bgClass: "bg-tier-keepsake",
    accentClass: "text-tier-keepsake-accent",
    bundles: [
      {
        name: "The Letter Writer",
        tagline: "For the one who still believes in the written word",
        products: [
          { name: "Silk Flowers Arrangement", description: "Hand-crafted faux silk blooms in muted blush tones", amazonUrl: "#" },
          { name: "Leather-Bound Journal", description: "Italian leather, gilt-edged pages, personalised initials", amazonUrl: "#" },
          { name: "Beeswax Seal Kit", description: "Custom monogram wax seal with brass handle", amazonUrl: "#" },
        ],
      },
      {
        name: "The Morning Ritual",
        tagline: "A curated moment of calm",
        products: [
          { name: "Artisan Loose-Leaf Tea", description: "English Breakfast blend from a heritage estate", amazonUrl: "#" },
          { name: "Ceramic Pour-Over Set", description: "Handmade stoneware in oatmeal glaze", amazonUrl: "#" },
          { name: "Linen Tea Towel", description: "Stonewashed French linen, embroidered hem", amazonUrl: "#" },
        ],
      },
    ],
  },
  sanctuary: {
    title: "The Sanctuary",
    price: "£75–£150",
    description: "Elevated experiences for those you cherish. These collections transform ordinary evenings into private retreats.",
    bgClass: "bg-tier-sanctuary",
    accentClass: "text-tier-sanctuary-accent",
    bundles: [
      {
        name: "The Evening Retreat",
        tagline: "Permission to slow down, beautifully granted",
        products: [
          { name: "Cashmere Eye Mask", description: "Pure Scottish cashmere in midnight navy", amazonUrl: "#" },
          { name: "Botanical Bath Salts", description: "Dead Sea minerals with English lavender and chamomile", amazonUrl: "#" },
          { name: "Scented Candle Trio", description: "Hand-poured soy candles: Fig, Cedar, Amber", amazonUrl: "#" },
          { name: "Silk Pillowcase", description: "22-momme mulberry silk in champagne", amazonUrl: "#" },
        ],
      },
      {
        name: "The Home Curator",
        tagline: "For the one who notices every detail",
        products: [
          { name: "Marble Diffuser", description: "Carrara marble vessel with reed diffuser set", amazonUrl: "#" },
          { name: "Coffee Table Book", description: "Interiors of the British Isles — limited edition", amazonUrl: "#" },
          { name: "Linen Throw", description: "Herringbone weave in natural oat", amazonUrl: "#" },
        ],
      },
    ],
  },
  grand: {
    title: "The Grand Gesture",
    price: "£250–£500",
    description: "Extraordinary moments for extraordinary people. These are the gifts that redefine what it means to be remembered.",
    bgClass: "bg-tier-grand",
    accentClass: "text-tier-grand-accent",
    bundles: [
      {
        name: "The Complete Sanctuary",
        tagline: "An entire world of comfort, delivered",
        products: [
          { name: "Cashmere Robe", description: "Full-length Scottish cashmere, monogrammed", amazonUrl: "#" },
          { name: "Crystal Decanter Set", description: "Hand-cut lead crystal with two tumblers", amazonUrl: "#" },
          { name: "Artisan Chocolate Collection", description: "Single-origin truffles from a Cotswolds chocolatier", amazonUrl: "#" },
          { name: "Personalised Leather Valet", description: "Full-grain leather, hand-stitched, embossed initials", amazonUrl: "#" },
          { name: "Scented Candle — Grand", description: "800g hand-poured candle in brass vessel", amazonUrl: "#" },
        ],
      },
      {
        name: "The Connoisseur",
        tagline: "For the person who has everything — except this",
        products: [
          { name: "Vintage Port (750ml)", description: "Single-quinta vintage from the Douro Valley", amazonUrl: "#" },
          { name: "Handmade Chess Set", description: "Walnut and maple board, weighted pieces", amazonUrl: "#" },
          { name: "First Edition Book", description: "Cloth-bound classic, selected by our editors", amazonUrl: "#" },
          { name: "Silk Pocket Square Set", description: "Four Italian silk squares in seasonal palette", amazonUrl: "#" },
        ],
      },
    ],
  },
};

const BundlePage = () => {
  const { tier } = useParams<{ tier: string }>();
  const data = tierData[tier || "keepsake"];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Collection not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className={`${data.bgClass} py-20`}>
          <div className="container mx-auto px-6 text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground mb-2">{data.price}</p>
            <h1 className="font-serif text-4xl md:text-6xl font-medium text-foreground mb-4">{data.title}</h1>
            <p className="text-muted-foreground max-w-lg mx-auto">{data.description}</p>
          </div>
        </section>

        {/* Shared Perks */}
        <section className="py-10 border-b border-border">
          <div className="container mx-auto px-6 flex flex-wrap justify-center gap-8">
            {["Editorial styling", "Concierge packaging", "Timed delivery"].map((perk) => (
              <div key={perk} className="flex items-center gap-2">
                <Check className={`w-4 h-4 ${data.accentClass}`} />
                <span className="text-sm text-foreground/80">{perk}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Bundles */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            {data.bundles.map((bundle, bi) => (
              <div key={bundle.name} className={`${bi > 0 ? "mt-20" : ""}`}>
                <div className="mb-10">
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-2">
                    {bundle.name}
                  </h2>
                  <p className="text-muted-foreground italic">{bundle.tagline}</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {bundle.products.map((product) => (
                    <div
                      key={product.name}
                      className="bg-card border border-border rounded-lg p-6 flex flex-col justify-between hover:shadow-md transition-shadow"
                    >
                      <div>
                        <div className={`w-full aspect-[4/3] ${data.bgClass} rounded-sm mb-4 flex items-center justify-center`}>
                          <span className="text-xs text-muted-foreground">{product.name}</span>
                        </div>
                        <h3 className="font-serif text-lg font-semibold text-foreground mb-1">{product.name}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{product.description}</p>
                      </div>
                      <a
                        href={product.amazonUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.15em] py-2.5 border border-foreground/20 text-foreground hover:bg-foreground hover:text-background transition-colors rounded-sm"
                      >
                        View on Amazon <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Delivery Options */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-6">
            <h2 className="font-serif text-2xl md:text-3xl font-medium text-foreground text-center mb-10">
              Delivery &amp; Presentation
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { name: "Self-Delivery", desc: "Collect and present it yourself — we'll ensure it's perfectly wrapped.", price: "Included" },
                { name: "Direct-to-Recipient", desc: "We'll send it beautifully packaged, directly to the door of your chosen person.", price: "From £4.99" },
                { name: "The Concierge Signature Experience", desc: "Hand-wrapped with a handwritten card, white-glove delivered at your chosen time.", price: "£12.99" },
              ].map((opt) => (
                <div key={opt.name} className="bg-card border border-border rounded-lg p-6 text-center">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{opt.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{opt.desc}</p>
                  <span className="text-xs uppercase tracking-[0.15em] text-gold font-medium">{opt.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BundlePage;
