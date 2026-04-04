import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "The Keepsake",
    price: "£25–£50",
    description: "Thoughtful gestures that create lasting memories.",
    bgClass: "bg-tier-keepsake",
    accentClass: "text-tier-keepsake-accent",
    borderColor: "border-tier-keepsake-accent/40",
    link: "/keepsake",
  },
  {
    name: "The Sanctuary",
    price: "£75–£150",
    description: "Elevated experiences for those you cherish.",
    bgClass: "bg-tier-sanctuary",
    accentClass: "text-tier-sanctuary-accent",
    borderColor: "border-tier-sanctuary-accent/40",
    link: "/sanctuary",
  },
  {
    name: "The Grand Gesture",
    price: "£250–£500",
    description: "Extraordinary moments for extraordinary people.",
    bgClass: "bg-tier-grand",
    accentClass: "text-tier-grand-accent",
    borderColor: "border-tier-grand-accent/40",
    link: "/grand",
  },
];

const sharedPerks = [
  "Editorial styling",
  "Concierge packaging",
  "Timed delivery",
];

const TierCards = () => {
  return (
    <section id="tiers" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-fade-in">
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground mb-3">
            The Curated System
          </p>
          <h2 className="font-serif text-3xl md:text-5xl font-medium text-foreground mb-4">
            Three Tiers of Distinction
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Every collection is hand-selected, editorially arranged, and delivered with the care your recipient deserves.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {tiers.map((tier, i) => (
            <div
              key={tier.name}
              className={`scroll-fade-in ${tier.bgClass} rounded-lg p-8 flex flex-col justify-between border ${tier.borderColor} transition-all duration-300 hover:shadow-lg hover:scale-[1.02]`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div>
                <p className={`text-xs uppercase tracking-[0.25em] ${tier.accentClass} mb-2`}>
                  {tier.price}
                </p>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                  {tier.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                  {tier.description}
                </p>
                <div className="space-y-3 mb-8">
                  {sharedPerks.map((perk) => (
                    <div key={perk} className="flex items-center gap-2.5">
                      <Check className={`w-4 h-4 ${tier.accentClass}`} />
                      <span className="text-sm text-foreground/80">{perk}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Link
                to={tier.link}
                className="block text-center text-xs uppercase tracking-[0.2em] py-3 border border-foreground/20 text-foreground hover:bg-foreground hover:text-background transition-colors duration-300 rounded-sm"
              >
                Discover the Collection
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TierCards;
