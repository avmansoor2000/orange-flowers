import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { totalCount, subtotal, openCart } = useCart();
  const location = useLocation();

  const isHome = location.pathname === '/';
  const isShop = location.pathname === '/shop';
  const isContact = location.pathname === '/contact';

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8E3DA] transition-all">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-20">
          
          {/* Left Navigation: Home, Shop Page & Contact */}
          <nav className="flex items-center gap-2.5 sm:gap-6 text-[11px] sm:text-xs uppercase tracking-wider sm:tracking-[0.2em] font-medium text-luxury-dark z-10">
            <Link 
              to="/" 
              className={`transition-colors py-1 relative ${
                isHome ? 'text-luxury-orange font-semibold' : 'text-luxury-dark hover:text-luxury-orange'
              }`}
            >
              Home
              {isHome && (
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-luxury-orange rounded-full"></span>
              )}
            </Link>

            <Link 
              to="/shop" 
              className={`transition-colors py-1 relative whitespace-nowrap ${
                isShop ? 'text-luxury-orange font-semibold' : 'text-luxury-dark hover:text-luxury-orange'
              }`}
            >
              Shop Page
              {isShop && (
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-luxury-orange rounded-full"></span>
              )}
            </Link>

            <Link 
              to="/contact" 
              className={`transition-colors py-1 relative whitespace-nowrap ${
                isContact ? 'text-luxury-orange font-semibold' : 'text-luxury-dark hover:text-luxury-orange'
              }`}
            >
              Contact
              {isContact && (
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-luxury-orange rounded-full"></span>
              )}
            </Link>
          </nav>

          {/* Centered Brand Emblem in the exact middle of the header */}
          <div className="absolute left-1/2 -translate-x-1/2 text-center pointer-events-auto">
            <Link to="/" className="inline-block group text-center">
              <span className="block font-serif text-base sm:text-2xl md:text-3xl tracking-[0.2em] sm:tracking-[0.28em] font-semibold text-luxury-dark group-hover:text-luxury-orange transition-colors">
                ORANGE FLOWERS
              </span>
              <span className="block text-[7.5px] sm:text-[10px] tracking-[0.24em] sm:tracking-[0.38em] text-luxury-gold uppercase font-medium mt-0.5">
                Atelier Botanique • Abu Dhabi
              </span>
            </Link>
          </div>

          {/* Right Action: Cart Trigger with Badge */}
          <div className="flex items-center justify-end z-10">
            <button
              onClick={openCart}
              className="relative group flex items-center gap-2 sm:gap-2.5 px-2.5 sm:px-3.5 py-2 sm:py-2.5 rounded-full border border-luxury-dark/15 hover:border-luxury-orange bg-luxury-sand/40 hover:bg-white transition-all shadow-sm"
              aria-label="View Shopping Bag"
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-luxury-dark group-hover:text-luxury-orange transition-colors" />
                {totalCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-luxury-orange text-white text-[9px] sm:text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-bounce shadow-sm">
                    {totalCount}
                  </span>
                )}
              </div>

              <div className="hidden md:flex flex-col text-left text-xs leading-none">
                <span className="text-[9px] uppercase tracking-wider text-luxury-muted font-medium">Cart</span>
                <span className="font-semibold text-luxury-dark text-[11px] mt-0.5">
                  {subtotal > 0 ? `${subtotal.toLocaleString()} AED` : '0 AED'}
                </span>
              </div>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
