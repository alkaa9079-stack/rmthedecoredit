import { Link } from "react-router-dom";

const instagramImages = [
  { id: 1, url: "https://images.unsplash.com/photo-1549465220-1a8b9238f760?w=400&q=80&auto=format", alt: "Luxury wrapped gift with silk ribbon" },
  { id: 2, url: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=400&q=80&auto=format", alt: "Curated gift hamper arrangement" },
  { id: 3, url: "https://images.unsplash.com/photo-1607469256872-48074e807b0f?w=400&q=80&auto=format", alt: "Premium gift packaging with flowers" },
  { id: 4, url: "https://images.unsplash.com/photo-1512909006721-3d6018887383?w=400&q=80&auto=format", alt: "Elegant gift box with bow" },
  { id: 5, url: "https://images.unsplash.com/photo-1531685250784-7569952593d2?w=400&q=80&auto=format", alt: "Beautifully presented gift set" },
  { id: 6, url: "https://images.unsplash.com/photo-1544457070-4cd773b4d71e?w=400&q=80&auto=format", alt: "Luxury gifting moment" },
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
