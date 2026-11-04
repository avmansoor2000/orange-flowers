import React, { useState, useMemo } from 'react';
import Hero from '../components/Hero';
import FeatureBanner from '../components/FeatureBanner';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products.json';
import { Sparkles, SlidersHorizontal, Award, HeartHandshake } from 'lucide-react';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  const categories = ['All', 'Signature Bouquets', 'Royal Arrangements', 'Grand Vases', 'Preserved & Dried'];

  const filteredProducts = useMemo(() => {
    let list = [...productsData];

    if (selectedCategory !== 'All') {
      list = list.filter((p) => p.category === selectedCategory);
    }

    if (sortBy === 'price-low') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Hero Section */}
      <Hero />

      {/* 3-Column Luxury Trust Feature Banner */}
      <FeatureBanner />

      {/* 8-Product Grid & Gallery Section ("Curated Haute Floristry") */}
      <section id="collection" className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-10 sm:py-16 md:py-24">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 text-luxury-orange text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold mb-1.5 sm:mb-2">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>Curated Haute Floristry</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-light text-luxury-dark tracking-tight">
            The Abu Dhabi Collection
          </h2>
          <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-luxury-muted leading-relaxed font-light px-2">
            Each arrangement is individually sculpted upon order using newly arrived blooms flown directly into Abu Dhabi. Delivered in refrigerated elegance.
          </p>
        </div>

        {/* Category Filters & Sorting Controls - Optimized for Mobile */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-10 pb-4 sm:pb-6 border-b border-luxury-border">
          {/* Category Tabs with horizontal scroll on mobile */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none -mx-3 px-3 sm:mx-0 sm:px-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs uppercase tracking-wider font-medium rounded-full transition-all whitespace-nowrap flex-shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-luxury-dark text-white shadow-sm'
                    : 'bg-white text-luxury-muted hover:text-luxury-dark border border-luxury-border hover:border-luxury-gold'
                }`}
              >
                {cat === 'All' ? 'All (8)' : cat}
              </button>
            ))}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center justify-between sm:justify-end gap-2 text-[11px] sm:text-xs text-luxury-muted">
            <div className="flex items-center gap-1.5">
              <SlidersHorizontal className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-luxury-gold" />
              <span className="uppercase tracking-wider text-[10px] sm:text-[11px] font-medium">Sort:</span>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-luxury-border text-luxury-dark text-[11px] sm:text-xs py-1 sm:py-1.5 px-2.5 sm:px-3 rounded-sm focus:outline-none focus:border-luxury-gold cursor-pointer"
            >
              <option value="featured">Featured Picks</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Product Cards Grid: 2 products per row on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-12 sm:py-16 text-center text-luxury-muted">
            <p className="font-serif text-base sm:text-lg">No arrangements found in this category.</p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="mt-3 text-xs uppercase tracking-widest text-luxury-orange hover:underline font-semibold"
            >
              View all 8 creations
            </button>
          </div>
        )}
      </section>

      {/* Haute Couture Atelier Craftsmanship Section */}
      <section className="bg-white border-y border-luxury-border py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Visual Mosaic */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-luxury border border-luxury-border">
                <img
                  src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1200&q=80"
                  alt="Floral Master Craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Overlaid Floating Card */}
              <div className="absolute -bottom-4 -right-4 hidden sm:block bg-luxury-dark text-luxury-cream p-5 rounded-sm shadow-2xl max-w-xs border border-luxury-gold/30">
                <p className="font-serif text-xs sm:text-sm italic text-luxury-gold mb-1">
                  "Flowers are fleeting architecture."
                </p>
                <span className="text-[9px] tracking-widest uppercase text-luxury-sand/70 block">
                  Senior Floral Architect, Abu Dhabi
                </span>
              </div>
            </div>

            {/* Editorial Content */}
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 text-luxury-orange text-xs uppercase tracking-[0.25em] font-semibold">
                <Award className="w-3.5 h-3.5 text-luxury-gold" />
                <span>The Orange Flowers Standard</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-4xl font-light text-luxury-dark leading-tight">
                Where Botanical Artistry Meets <br />
                <span className="italic text-luxury-orange font-serif">Arabian Hospitality.</span>
              </h2>

              <p className="text-xs sm:text-sm text-luxury-muted leading-relaxed font-light">
                Founded with an uncompromising devotion to floral perfection, Orange Flowers crafts expressive, architectural bouquets for Abu Dhabi’s palaces, luxury penthouses, royal weddings, and intimate milestones.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-2 text-xs text-luxury-dark">
                <div className="space-y-1 border-l-2 border-luxury-orange pl-3 sm:pl-4">
                  <h4 className="font-serif text-xs sm:text-sm font-semibold">Chilled Delivery Fleet</h4>
                  <p className="text-luxury-muted leading-relaxed text-[11px] sm:text-xs">
                    Abu Dhabi's heat never touches your petals. Our bespoke vans keep stems at a crisp 12°C.
                  </p>
                </div>

                <div className="space-y-1 border-l-2 border-luxury-gold pl-3 sm:pl-4">
                  <h4 className="font-serif text-xs sm:text-sm font-semibold">Wax-Sealed Calligraphy</h4>
                  <p className="text-luxury-muted leading-relaxed text-[11px] sm:text-xs">
                    Personalized messages hand-scribed in Italian gold leaf ink on handmade deckled-edge paper.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/917994729412?text=Hello%20Orange%20Flowers%2C%20I%20would%20like%20to%20request%20custom%20majlis%20styling."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-luxury-dark hover:text-luxury-orange border-b border-luxury-dark hover:border-luxury-orange pb-1 transition-all"
                >
                  <HeartHandshake className="w-4 h-4 text-luxury-orange" />
                  <span>Request Custom Majlis Styling</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
