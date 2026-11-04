import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-luxury-dark text-luxury-cream border-t border-luxury-gold/20 py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        
        {/* Centered Brand Title */}
        <div>
          <Link to="/" className="inline-block group">
            <span className="block font-serif text-xl sm:text-2xl tracking-[0.28em] font-semibold text-white group-hover:text-luxury-orange transition-colors">
              ORANGE FLOWERS
            </span>
            <span className="block text-[9px] sm:text-[10px] tracking-[0.38em] text-luxury-gold uppercase font-medium mt-1">
              Atelier Botanique • Abu Dhabi
            </span>
          </Link>
        </div>

        {/* Boutique Location & Contact */}
        <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-luxury-sand/75 font-light pt-1">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-luxury-gold" />
            The Galleria, Al Maryah Island, Abu Dhabi
          </span>
          <span className="hidden sm:inline text-luxury-gold/40">•</span>
          <a 
            href="https://wa.me/917994729412" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-1.5 hover:text-luxury-gold transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-luxury-gold" />
            Concierge & WhatsApp: +91 79947 29412
          </a>
        </div>

        {/* Minimal Copyright */}
        <div className="pt-4 border-t border-white/10 text-[11px] text-luxury-sand/50">
          <p>© {new Date().getFullYear()} Orange Flowers. Abu Dhabi, United Arab Emirates.</p>
        </div>

      </div>
    </footer>
  );
}
