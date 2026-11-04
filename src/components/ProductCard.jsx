import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Eye, Star, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1600);
  };

  return (
    <div className="group relative flex flex-col bg-white rounded-sm border border-luxury-border/70 overflow-hidden shadow-sm hover:shadow-luxury-hover transition-all duration-500 transform hover:-translate-y-1">
      {/* Product Image Container */}
      <Link 
        to={`/product/${product.id}`} 
        className="relative block w-full aspect-[4/5] bg-luxury-sand/30 overflow-hidden cursor-pointer"
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
          loading="lazy"
        />

        {/* Subtle Dark Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Top Badges */}
        <div className="absolute top-2 left-2 right-2 sm:top-3 sm:left-3 sm:right-3 flex items-center justify-between pointer-events-none">
          {product.isBestseller ? (
            <span className="bg-luxury-dark/90 backdrop-blur-sm text-luxury-gold text-[8px] sm:text-[10px] font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-xs border border-luxury-gold/40 shadow-sm">
              Flagship Pick
            </span>
          ) : (
            <span className="bg-white/90 backdrop-blur-sm text-luxury-terracotta text-[8px] sm:text-[10px] font-semibold uppercase tracking-[0.12em] sm:tracking-[0.18em] px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-xs shadow-sm">
              {product.category.replace(' Arrangements', '').replace(' Bouquets', '')}
            </span>
          )}

          {product.stems && (
            <span className="bg-white/85 backdrop-blur-sm text-luxury-dark text-[9px] font-medium px-1.5 py-0.5 rounded-xs shadow-xs hidden md:inline-block">
              {product.stems}
            </span>
          )}
        </div>

        {/* Hover Quick Action Buttons (Desktop) */}
        <div className="hidden sm:flex absolute inset-x-4 bottom-4 items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <button
            onClick={handleQuickAdd}
            className={`flex-1 py-2.5 px-3 text-xs font-semibold uppercase tracking-[0.18em] rounded-sm transition-all shadow-md flex items-center justify-center gap-2 ${
              isAdded 
                ? 'bg-emerald-700 text-white' 
                : 'bg-luxury-dark text-white hover:bg-luxury-orange'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-200" />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5 text-luxury-gold" />
                <span>Quick Add</span>
              </>
            )}
          </button>

          <span 
            className="p-2.5 bg-white/90 hover:bg-white text-luxury-dark hover:text-luxury-orange rounded-sm shadow-md transition-colors flex items-center justify-center"
            title="View Details"
          >
            <Eye className="w-3.5 h-3.5" />
          </span>
        </div>
      </Link>

      {/* Card Content & Details */}
      <div className="p-2.5 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-[10px] sm:text-xs text-luxury-muted mb-1">
            <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-luxury-gold font-semibold truncate max-w-[65%]">
              {product.category}
            </span>
            <div className="flex items-center gap-0.5 sm:gap-1 text-[9px] sm:text-[11px] text-amber-600">
              <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-amber-500 text-amber-500" />
              <span className="font-medium text-luxury-dark">{product.rating}</span>
            </div>
          </div>

          {/* Product Title */}
          <Link to={`/product/${product.id}`} className="block group-hover:text-luxury-orange transition-colors">
            <h3 className="font-serif text-xs sm:text-base md:text-lg font-medium text-luxury-dark leading-tight line-clamp-1 mb-0.5 sm:mb-1">
              {product.name}
            </h3>
          </Link>

          {/* Tagline / Subtitle */}
          <p className="text-[10px] sm:text-xs text-luxury-muted font-light line-clamp-1 mb-2 sm:mb-4 italic">
            {product.tagline}
          </p>
        </div>

        {/* Price & Mobile Add to Cart */}
        <div className="pt-2 sm:pt-3 border-t border-luxury-border/60 flex items-center justify-between gap-1">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2 min-w-0">
            <span className="font-serif text-xs sm:text-lg font-semibold text-luxury-dark whitespace-nowrap">
              {product.price.toLocaleString()} AED
            </span>
            {product.originalPrice && (
              <span className="text-[9px] sm:text-xs text-luxury-muted line-through hidden md:inline">
                {product.originalPrice.toLocaleString()} AED
              </span>
            )}
          </div>

          {/* Mobile visible direct add button */}
          <button
            onClick={handleQuickAdd}
            className={`sm:hidden p-1.5 rounded-full border transition-all flex items-center justify-center flex-shrink-0 ${
              isAdded 
                ? 'bg-emerald-600 text-white border-emerald-600' 
                : 'border-luxury-dark/20 text-luxury-dark active:bg-luxury-orange active:text-white'
            }`}
            aria-label="Add to cart"
          >
            {isAdded ? <Check className="w-3.5 h-3.5" /> : <ShoppingBag className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
    </div>
  );
}
