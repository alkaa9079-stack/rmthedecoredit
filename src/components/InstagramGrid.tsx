import { Link } from "react-router-dom";

const instagramImages = [
  { id: 1, url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80&auto=format", alt: "Luxury decor detail" },
  { id: 2, url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80&auto=format", alt: "Curated home sanctuary" },
  { id: 3, url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&q=80&auto=format", alt: "Statement furniture piece" },
  { id: 4, url: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=400&q=80&auto=format", alt: "Thoughtful gift arrangement" },
  { id: 5, url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=400&q=80&auto=format", alt: "Minimalist shelf styling" },
  { id: 6, url: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=400&q=80&auto=format", alt: "Premium lifestyle setting" },
];

const InstagramGrid = () => {
  return (
    <section className="py-24 border-t border-border bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-4">
            @rmthedecoredit
          </p>
          <h2 className="font-serif text-3xl text-foreground tracking-wide">
            Shop the Edit
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {instagramImages.map((img) => (
            <Link 
              key={img.id} 
              to="/collection/birthday"
              className="relative aspect-square overflow-hidden group bg-muted"
            >
              <img
                src={img.url}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                crossOrigin="anonymous"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramGrid;
