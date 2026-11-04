import React from 'react';
import { ArrowDown, Sparkles, ShieldCheck, Clock, Award } from 'lucide-react';

export default function Hero({ onExploreClick }) {
  const scrollToCollection = () => {
    if (onExploreClick) {
      onExploreClick();
    } else {
      const element = document.getElementById('collection');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="relative overflow-hidden bg-luxury-dark text-luxury-cream">
      {/* Background Hero Image with Deep Cinematic Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=2000&q=85"
          alt="Orange Flowers Abu Dhabi Luxury Floral Arrangement"
          className="w-full h-full object-cover object-center opacity-40 scale-105 transform hover:scale-100 transition-transform duration-1000 ease-out"
        />
        {/* Multilayered radial and linear dark gradients for editorial elegance */}
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-luxury-dark/75 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-dark/95 via-luxury-dark/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="max-w-3xl">
          {/* Prestige Tagline */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-luxury-orange/20 border border-luxury-gold/40 text-luxury-gold text-xs uppercase tracking-[0.25em] font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5 text-luxury-gold animate-spin-slow" />
            <span>Abu Dhabi's Premier Haute Florist</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.15] text-white mb-6">
            Architectural Floristry for <br />
            <span className="italic font-normal text-luxury-gold font-serif">
              Abu Dhabi's Finest Spaces.
            </span>
          </h1>

          {/* Editorial Subtext */}
          <p className="text-base sm:text-lg text-luxury-sand/85 font-light leading-relaxed mb-10 max-w-2xl">
            From regal Ecuadorian velvet roses to rare Dutch sunset orchids, each sculptural arrangement is hand-tied in our Al Maryah atelier and delivered in climate-controlled luxury across the Capital.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={scrollToCollection}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-luxury-orange hover:bg-luxury-orange-dark text-white font-medium text-xs uppercase tracking-[0.22em] rounded-sm shadow-luxury transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Explore The Collection</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/917994729412?text=Hello%20Orange%20Flowers%2C%20I%20would%20like%20to%20inquire%20about%20a%20custom%20bespoke%20arrangement."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-7 py-4 border border-luxury-gold/50 hover:border-luxury-gold text-luxury-cream hover:text-white hover:bg-white/5 font-medium text-xs uppercase tracking-[0.2em] rounded-sm transition-all"
            >
              VIP Concierge Inquiries
            </a>
          </div>

          {/* Micro badges below hero */}
          <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs text-luxury-sand/70">
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-luxury-gold flex-shrink-0" />
              <span>Same-Day Dispatch before 4 PM</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-4 h-4 text-luxury-gold flex-shrink-0" />
              <span>7-Day Freshness Guarantee</span>
            </div>
            <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
              <Award className="w-4 h-4 text-luxury-gold flex-shrink-0" />
              <span>Bespoke Wax-Sealed Calligraphy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

