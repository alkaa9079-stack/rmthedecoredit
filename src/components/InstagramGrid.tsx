const placeholderImages = [
  { id: 1, alt: "Styled gift box with silk ribbon" },
  { id: 2, alt: "Curated journal and candle set" },
  { id: 3, alt: "Hand-wrapped keepsake arrangement" },
  { id: 4, alt: "Luxury bath collection" },
  { id: 5, alt: "Personalised stationery set" },
  { id: 6, alt: "Seasonal floral arrangement" },
];

const pastelBgs = [
  "bg-tier-keepsake",
  "bg-tier-sanctuary",
  "bg-tier-grand",
  "bg-gold-light",
  "bg-tier-keepsake",
  "bg-tier-sanctuary",
];

const InstagramGrid = () => {
  return (
    <section className="py-20 border-t border-border scroll-fade-in">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground mb-3">
            @rmthedecoredit
          </p>
          <h2 className="font-serif text-3xl font-medium text-foreground">
            Shop the Edit
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {placeholderImages.map((img, i) => (
            <div
              key={img.id}
              className={`aspect-square ${pastelBgs[i]} rounded-sm flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity`}
            >
              <span className="text-xs text-muted-foreground text-center px-4">{img.alt}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramGrid;
