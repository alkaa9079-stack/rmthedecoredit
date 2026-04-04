import heroImage from "@/assets/hero-gifting.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxury curated gift arrangement with cream and blush tones"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/50 to-transparent" />
      </div>
      <div className="relative container mx-auto px-6">
        <div className="max-w-xl animate-fade-in-up">
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground mb-4">
            A British Gifting House
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-medium leading-[1.1] text-foreground mb-6">
            The Art of<br />
            <em className="font-normal">Thoughtful</em> Giving
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed max-w-md mb-8">
            Personalised, editorially styled gift collections — curated for those who
            believe the gesture matters as much as the gift itself.
          </p>
          <a
            href="#tiers"
            className="inline-flex text-xs uppercase tracking-[0.2em] px-8 py-3.5 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors duration-300"
          >
            Explore the Collections
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
