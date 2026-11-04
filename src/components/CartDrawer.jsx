import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus, Trash2, ShoppingBag, Sparkles, Truck, ArrowRight, CheckCircle2, MessageSquareText } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalCount,
    subtotal,
    shippingFee,
    orderTotal,
    isFreeShipping,
    amountToFreeShipping,
    freeShippingThreshold
  } = useCart();

  const [giftNote, setGiftNote] = useState('');
  const [showGiftNoteInput, setShowGiftNoteInput] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderPlaced(true);
      clearCart();
    }, 1200);
  };

  const generateWhatsAppMessage = () => {
    let msg = `*New Order Inquiry - Orange Flowers Abu Dhabi*\n\n`;
    cart.forEach((item, i) => {
      msg += `${i + 1}. ${item.name} x${item.quantity} - ${(item.price * item.quantity).toLocaleString()} AED\n`;
    });
    msg += `\n*Subtotal:* ${subtotal.toLocaleString()} AED`;
    msg += `\n*Delivery:* ${shippingFee === 0 ? 'Complimentary VIP Delivery' : `${shippingFee} AED`}`;
    msg += `\n*Total:* ${orderTotal.toLocaleString()} AED`;
    if (giftNote.trim()) {
      msg += `\n*Gift Note Card:* "${giftNote.trim()}"`;
    }
    msg += `\n\n*Destination:* Abu Dhabi, UAE\n*Preferred Time:* Same-day / Scheduled`;
    return encodeURIComponent(msg);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] border-l border-luxury-border shadow-drawer flex flex-col justify-between">
          
          {/* Header */}
          <div className="px-6 py-5 border-b border-luxury-border/80 bg-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5 text-luxury-orange" />
              <div>
                <h2 className="font-serif text-lg font-medium text-luxury-dark tracking-wide">
                  Your Luxury Bag
                </h2>
                <span className="text-xs text-luxury-muted">
                  {totalCount} {totalCount === 1 ? 'creation' : 'creations'} selected
                </span>
              </div>
            </div>

            <button
              onClick={closeCart}
              className="p-2 text-luxury-muted hover:text-luxury-dark rounded-full hover:bg-luxury-sand transition-colors"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Delivery Incentive Progress Bar */}
          <div className="bg-luxury-sand/70 px-6 py-3 border-b border-luxury-border/60">
            {isFreeShipping ? (
              <div className="flex items-center gap-2 text-xs font-medium text-emerald-800">
                <Sparkles className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Complimentary Abu Dhabi VIP Delivery unlocked!</span>
              </div>
            ) : (
              <div>
                <div className="flex justify-between items-center text-xs text-luxury-dark mb-1.5 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-luxury-orange" />
                    Complimentary VIP Delivery
                  </span>
                  <span className="text-luxury-orange font-semibold">
                    Add {amountToFreeShipping.toLocaleString()} AED
                  </span>
                </div>
                {/* Progress bar */}
                <div className="w-full bg-luxury-border/80 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-luxury-orange h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%`
                    }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
            {orderPlaced ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-2">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-luxury-dark">
                  Mabrook! Order Received
                </h3>
                <p className="text-sm text-luxury-muted max-w-xs mx-auto leading-relaxed">
                  Our Abu Dhabi master florists have received your reservation. Our white-glove team will contact you shortly for dispatch details.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setOrderPlaced(false);
                      closeCart();
                    }}
                    className="px-6 py-3 bg-luxury-dark text-white text-xs uppercase tracking-widest rounded-sm hover:bg-luxury-orange transition-colors"
                  >
                    Back to Gallery
                  </button>
                </div>
              </div>
            ) : cart.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-luxury-sand flex items-center justify-center mx-auto text-luxury-muted">
                  <ShoppingBag className="w-8 h-8 stroke-1" />
                </div>
                <h3 className="font-serif text-xl font-medium text-luxury-dark">
                  Your bag is currently empty
                </h3>
                <p className="text-xs text-luxury-muted max-w-xs mx-auto">
                  Explore our curated seasonal bouquets, regal rose arrangements, and architectural centerpieces.
                </p>
                <button
                  onClick={closeCart}
                  className="mt-4 px-6 py-3 bg-luxury-dark text-white text-xs uppercase tracking-[0.2em] rounded-sm hover:bg-luxury-orange transition-colors"
                >
                  Discover Collections
                </button>
              </div>
            ) : (
              <>
                {/* Cart Items List */}
                <div className="divide-y divide-luxury-border/60">
                  {cart.map((item) => (
                    <div key={item.id} className="py-4 flex gap-4 items-center">
                      {/* Image Thumbnail */}
                      <Link 
                        to={`/product/${item.id}`} 
                        onClick={closeCart}
                        className="w-20 h-24 rounded-sm overflow-hidden flex-shrink-0 bg-luxury-sand border border-luxury-border/50 group"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </Link>

                      {/* Item Info */}
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] uppercase tracking-wider text-luxury-gold font-medium block">
                          {item.category}
                        </span>
                        <Link 
                          to={`/product/${item.id}`} 
                          onClick={closeCart}
                          className="font-serif text-sm font-medium text-luxury-dark hover:text-luxury-orange line-clamp-1"
                        >
                          {item.name}
                        </Link>
                        <p className="text-xs font-semibold text-luxury-dark mt-1">
                          {item.price.toLocaleString()} AED
                        </p>

                        {/* Qty & Remove */}
                        <div className="flex items-center justify-between mt-3">
                          {/* Qty Buttons */}
                          <div className="flex items-center border border-luxury-border bg-white rounded-sm">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1.5 text-luxury-muted hover:text-luxury-dark transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-3 text-xs font-medium text-luxury-dark">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1.5 text-luxury-muted hover:text-luxury-dark transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-xs text-luxury-muted hover:text-red-700 transition-colors flex items-center gap-1"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span className="text-[11px]">Remove</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Complimentary Gold Calligraphy Card Toggle */}
                <div className="pt-2 border-t border-luxury-border/60">
                  <button
                    onClick={() => setShowGiftNoteInput(!showGiftNoteInput)}
                    className="text-xs text-luxury-dark hover:text-luxury-orange font-medium flex items-center justify-between w-full py-2"
                  >
                    <span className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-luxury-gold" />
                      Add Handwritten Calligraphy Note
                    </span>
                    <span className="text-luxury-gold text-xs">{showGiftNoteInput ? '− Hide' : '+ Add'}</span>
                  </button>

                  {showGiftNoteInput && (
                    <div className="mt-2 space-y-1.5">
                      <textarea
                        value={giftNote}
                        onChange={(e) => setGiftNote(e.target.value)}
                        placeholder="Write your personal message. Hand-penned in gold ink on cotton cardstock..."
                        rows={3}
                        className="w-full text-xs p-3 bg-white border border-luxury-border rounded-sm focus:outline-none focus:border-luxury-gold resize-none"
                      />
                      <p className="text-[10px] text-luxury-muted italic">
                        Complimentary service for all Abu Dhabi deliveries.
                      </p>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>

          {/* Footer & Order Summary */}
          {cart.length > 0 && !orderPlaced && (
            <div className="px-6 py-5 bg-white border-t border-luxury-border space-y-3">
              {/* Financial breakdown */}
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-luxury-muted">
                  <span>Bag Subtotal</span>
                  <span className="font-medium text-luxury-dark">{subtotal.toLocaleString()} AED</span>
                </div>
                <div className="flex justify-between text-luxury-muted">
                  <span>Abu Dhabi Courier Delivery</span>
                  <span>
                    {shippingFee === 0 ? (
                      <span className="text-emerald-700 font-medium">Complimentary</span>
                    ) : (
                      <span className="text-luxury-dark font-medium">{shippingFee} AED</span>
                    )}
                  </span>
                </div>
                <div className="pt-2 border-t border-luxury-border/60 flex justify-between text-base font-serif font-semibold text-luxury-dark">
                  <span>Total Amount</span>
                  <span className="text-luxury-orange">{orderTotal.toLocaleString()} AED</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full py-3.5 bg-luxury-dark hover:bg-luxury-orange text-white text-xs uppercase tracking-[0.22em] font-medium rounded-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  {isCheckingOut ? (
                    <span>Confirming VIP Booking...</span>
                  ) : (
                    <>
                      <span>Proceed to Checkout</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                {/* Direct WhatsApp Concierge Order Option */}
                <a
                  href={`https://wa.me/971500000000?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 border border-emerald-600/60 hover:border-emerald-600 text-emerald-800 bg-emerald-50/50 hover:bg-emerald-50 text-xs font-medium uppercase tracking-[0.16em] rounded-sm transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquareText className="w-4 h-4 text-emerald-600" />
                  <span>Order via WhatsApp Concierge</span>
                </a>
              </div>

              <p className="text-[10px] text-center text-luxury-muted">
                100% Satisfaction Guarantee • Chilled VIP Delivery • Secure Payment
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

