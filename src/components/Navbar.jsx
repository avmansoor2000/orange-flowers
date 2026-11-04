import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Sparkles, MapPin, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { totalCount, subtotal, openCart } = useCart();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isHome = location.pathname === '/';
  const isShop = location.pathname === '/shop';
  const isContact = location.pathname === '/contact';

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8E3DA] transition-all">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-20">
            
            {/* Left Section: Mobile Toggle (Mobile) + Navigation Links (Desktop) */}
            <div className="flex items-center z-10 w-28 sm:w-auto">
              {/* Mobile Menu Hamburger Toggle Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 -ml-1 text-luxury-dark hover:text-luxury-orange focus:outline-none transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-luxury-dark" />
                ) : (
                  <div className="flex items-center gap-1.5">
                    <Menu className="w-5 h-5 text-luxury-dark" />
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-luxury-dark">Menu</span>
                  </div>
                )}
              </button>

              {/* Desktop Navigation Links */}
              <nav className="hidden md:flex items-center gap-5 lg:gap-6 text-xs uppercase tracking-[0.2em] font-medium text-luxury-dark">
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
            </div>

            {/* Centered Brand Emblem in the exact middle of the header */}
            <div className="absolute left-1/2 -translate-x-1/2 text-center pointer-events-auto">
              <Link to="/" onClick={closeMenu} className="inline-block group text-center">
                <span className="block font-serif text-lg sm:text-2xl md:text-3xl tracking-[0.22em] sm:tracking-[0.28em] font-semibold text-luxury-dark group-hover:text-luxury-orange transition-colors">
                  ORANGE FLOWERS
                </span>
                <span className="block text-[8px] sm:text-[10px] tracking-[0.28em] sm:tracking-[0.38em] text-luxury-gold uppercase font-medium mt-0.5">
                  Atelier Botanique • Abu Dhabi
                </span>
              </Link>
            </div>

            {/* Right Action: Cart Trigger with Badge */}
            <div className="flex items-center justify-end z-10 w-28 sm:w-auto">
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

      {/* Mobile Slide-Over / Slide-Down Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 md:hidden animate-fadeIn">
          {/* Backdrop overlay */}
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={closeMenu}
          />

          {/* Menu Drawer Content */}
          <div className="relative bg-[#FAF7F2] border-b border-luxury-border shadow-2xl px-6 pt-24 pb-8 space-y-6">
            
            <div className="border-b border-luxury-border/60 pb-3">
              <span className="text-[10px] uppercase tracking-[0.25em] text-luxury-gold font-semibold block">
                Haute Floristry Atelier
              </span>
              <h3 className="font-serif text-lg font-light text-luxury-dark mt-0.5">
                Abu Dhabi Flagship Navigation
              </h3>
            </div>

            {/* Mobile Nav Links: Home, Shop Page, Contact */}
            <nav className="flex flex-col space-y-4 text-sm uppercase tracking-[0.2em] font-medium text-luxury-dark">
              <Link 
                to="/" 
                onClick={closeMenu}
                className={`flex items-center justify-between py-2 border-b border-luxury-border/40 transition-colors ${
                  isHome ? 'text-luxury-orange font-semibold pl-2 border-l-2 border-l-luxury-orange' : 'hover:text-luxury-orange'
                }`}
              >
                <span>Home</span>
                {isHome && <Sparkles className="w-3.5 h-3.5 text-luxury-orange" />}
              </Link>

              <Link 
                to="/shop" 
                onClick={closeMenu}
                className={`flex items-center justify-between py-2 border-b border-luxury-border/40 transition-colors ${
                  isShop ? 'text-luxury-orange font-semibold pl-2 border-l-2 border-l-luxury-orange' : 'hover:text-luxury-orange'
                }`}
              >
                <span>Shop Page</span>
                {isShop && <Sparkles className="w-3.5 h-3.5 text-luxury-orange" />}
              </Link>

              <Link 
                to="/contact" 
                onClick={closeMenu}
                className={`flex items-center justify-between py-2 border-b border-luxury-border/40 transition-colors ${
                  isContact ? 'text-luxury-orange font-semibold pl-2 border-l-2 border-l-luxury-orange' : 'hover:text-luxury-orange'
                }`}
              >
                <span>Contact</span>
                {isContact && <Sparkles className="w-3.5 h-3.5 text-luxury-orange" />}
              </Link>
            </nav>

            {/* Boutique Location & Concierge Info on Mobile Drawer */}
            <div className="pt-2 text-xs text-luxury-muted space-y-2 border-t border-luxury-border/60">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-luxury-gold flex-shrink-0" />
                <span>The Galleria, Al Maryah Island, Abu Dhabi</span>
              </div>
              <a 
                href="https://wa.me/917994729412"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-luxury-dark hover:text-luxury-orange transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-luxury-gold flex-shrink-0" />
                <span>WhatsApp Concierge: +91 79947 29412</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
