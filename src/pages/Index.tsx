{/* --- LUXURY PHOTO EDIT SECTION --- */}
<section className="py-24 px-4 bg-white">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-serif text-center mb-16 text-gray-900 tracking-widest">THE EDIT</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* Keepsake */}
      <div className="relative group h-[500px] overflow-hidden rounded-sm cursor-pointer">
        <img 
          src="https://unsplash.com" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          alt="Keepsake"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
        <div className="relative h-full flex flex-col items-center justify-center text-white p-8">
          <h3 className="text-3xl font-serif mb-2 tracking-wide">Keepsake</h3>
          <p className="text-sm mb-6 italic opacity-90">£25–£75</p>
          <button className="px-8 py-3 border border-white text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300">
            Explore
          </button>
        </div>
      </div>

      {/* Sanctuary */}
      <div className="relative group h-[500px] overflow-hidden rounded-sm cursor-pointer">
        <img 
          src="https://unsplash.com" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          alt="Sanctuary"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
        <div className="relative h-full flex flex-col items-center justify-center text-white p-8">
          <h3 className="text-3xl font-serif mb-2 tracking-wide">Sanctuary</h3>
          <p className="text-sm mb-6 italic opacity-90">£75–£250</p>
          <button className="px-8 py-3 border border-white text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300">
            Explore
          </button>
        </div>
      </div>

      {/* Grand Gesture */}
      <div className="relative group h-[500px] overflow-hidden rounded-sm cursor-pointer">
        <img 
          src="https://unsplash.com" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          alt="Grand Gesture"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
        <div className="relative h-full flex flex-col items-center justify-center text-white p-8">
          <h3 className="text-3xl font-serif mb-2 tracking-wide">Grand Gesture</h3>
          <p className="text-sm mb-6 italic opacity-90">£250+</p>
          <button className="px-8 py-3 border border-white text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300">
            Explore
          </button>
        </div>
      </div>

    </div>
  </div>
</section>
