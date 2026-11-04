import React, { useState, useMemo, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import FeatureBanner from '../components/FeatureBanner';
import productsData from '../data/products.json';
import { Sparkles, SlidersHorizontal, Search, Phone } from 'lucide-react';

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Signature Bouquets', 'Royal Arrangements', 'Grand Vases', 'Preserved & Dried'];

  // Scroll to top on page mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const filteredProducts = useMemo(() => {
    let list = [...productsData];

    // Filter by Category
    if (selectedCategory !== 'All') {
      list = list.filter((p) => p.category === selectedCategory);
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.tagline.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    // Sort
    if (sortBy === 'price-low') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [selectedCategory, sortBy, searchQuery]);

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Shop Page Banner */}
      <div className="bg-luxury-dark text-luxury-cream py-12 md:py-16 border-b border-luxury-gold/20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 text-luxury-gold text-[10px] sm:text-xs uppercase tracking-[0.28em] font-semibold mb-3 px-3 py-1 rounded-full bg-white/5 border border-luxury-gold/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Haute Floristry</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight">
            The Abu Dhabi Collection
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-luxury-sand/80 max-w-xl mx-auto leading-relaxed font-light">
            Explore all eight signature floral arrangements. Handcrafted in our Al Maryah atelier using fresh blooms flown chilled from Holland and Ecuador.
          </p>
        </div>
      </div>

      {/* Main Shop Catalog Section */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Controls Bar: Search, Category Filter Pills & Sort Selector */}
        <div className="space-y-4 mb-8 pb-6 border-b border-luxury-border">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-luxury-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search arrangements, blooms, roses..."
                className="w-full text-xs pl-10 pr-4 py-2 bg-white border border-luxury-border rounded-sm focus:outline-none focus:border-luxury-gold text-luxury-dark placeholder-luxury-muted/70"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-luxury-muted hover:text-luxury-dark"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Sort Selector */}
            <div className="flex items-center justify-between sm:justify-end gap-2 text-xs text-luxury-muted">
              <div className="flex items-center gap-1.5">
                <SlidersHorizontal className="w-3.5 h-3.5 text-luxury-gold" />
                <span className="uppercase tracking-wider text-[10px] sm:text-[11px] font-medium">Sort:</span>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-luxury-border text-luxury-dark text-xs py-1.5 px-3 rounded-sm focus:outline-none focus:border-luxury-gold cursor-pointer"
              >
                <option value="featured">Featured Picks</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Category Tabs with smooth mobile horizontal scroll */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 scrollbar-none -mx-3 px-3 sm:mx-0 sm:px-0">
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
                {cat === 'All' ? `All Creations (${productsData.length})` : cat}
              </button>
            ))}
          </div>
        </div>

        {/* 2 Products Per Row on Mobile, 4 on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="py-16 text-center text-luxury-muted space-y-3">
            <p className="font-serif text-lg">No floral creations matched your search.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="text-xs uppercase tracking-widest text-luxury-orange hover:underline font-semibold"
            >
              Reset Filters & View All
            </button>
          </div>
        )}

        {/* Bespoke VIP Concierge Assistance */}
        <div className="mt-16 p-6 sm:p-8 bg-white border border-luxury-border rounded-sm text-center max-w-3xl mx-auto shadow-sm">
          <span className="text-[10px] uppercase tracking-[0.25em] text-luxury-gold font-semibold block mb-1">
            Haute Floristry Bespoke Orders
          </span>
          <h3 className="font-serif text-xl sm:text-2xl font-light text-luxury-dark mb-2">
            Looking for a custom size or majlis installation?
          </h3>
          <p className="text-xs sm:text-sm text-luxury-muted max-w-lg mx-auto mb-5 leading-relaxed">
            Our Abu Dhabi master floral designers create custom floral compositions tailored to your residence, event, or corporate headquarters.
          </p>
          <a
            href="https://wa.me/917994729412?text=Hello%20Orange%20Flowers%20Abu%20Dhabi%2C%20I%20would%20like%20to%20discuss%20a%20bespoke%20floral%20arrangement."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-luxury-dark hover:bg-luxury-orange text-white text-xs uppercase tracking-[0.2em] font-medium rounded-sm transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-luxury-gold" />
            <span>Consult with Master Florist via WhatsApp</span>
          </a>
        </div>
      </section>

      {/* Trust feature banner */}
      <FeatureBanner />
    </div>
  );
}

