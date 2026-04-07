import { Link } from "react-router-dom";

const instagramImages = [
  { id: 1, url: "https://unsplash.com", alt: "Luxury decor detail" },
  { id: 2, url: "https://unsplash.com", alt: "Curated home sanctuary" },
  { id: 3, url: "https://unsplash.com", alt: "Statement furniture piece" },
  { id: 4, url: "https://unsplash.com", alt: "Thoughtful gift arrangement" },
  { id: 5, url: "https://unsplash.com", alt: "Minimalist shelf styling" },
  { id: 6, url: "https://unsplash.com", alt: "Premium lifestyle setting" },
];

const InstagramGrid = () => {
  return (
    <section className="py-24 border-t border-gray-100 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-4">
            @rmthedecoredit
          </p>
          <h2 className="font-serif text-3xl text-gray-900 tracking-wide">
            Shop the Edit
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {instagramImages.map((img) => (
            <Link 
              key={img.id} 
              to="/products"
              className="relative aspect-square overflow-hidden group bg-gray-50"
            >
              <img
                src={img.url}
                alt={img.alt}
                loading="lazy"
                decoding="async"
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
