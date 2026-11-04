import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import productsData from '../data/products.json';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import { 
  ArrowLeft, 
  ShoppingBag, 
  Star, 
  Sparkles, 
  Truck, 
  ShieldCheck, 
  Gift, 
  Plus, 
  Minus, 
  Check, 
  Phone,
  Clock,
  ChevronDown
} from 'lucide-react';

export default function ProductDetail({ defaultId = "1" }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const productId = id || defaultId;
  const product = productsData.find((p) => String(p.id) === String(productId));

  const [selectedImage, setSelectedImage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const [activeTab, setActiveTab] = useState('delivery'); // 'delivery' | 'care' | 'included'

  // Scroll to top and reset state when id changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (product) {
      setSelectedImage(product.image);
      setQuantity(1);
      setIsAdded(false);
    }
  }, [id, product]);

  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-20 text-center">
        <h2 className="font-serif text-3xl font-medium text-luxury-dark mb-3">
          Arrangement Not Found
        </h2>
        <p className="text-sm text-luxury-muted mb-8 max-w-md">
          The requested luxury creation may have concluded its seasonal harvest. Please browse our active collection.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-luxury-dark text-white text-xs uppercase tracking-widest rounded-sm hover:bg-luxury-orange transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Collection</span>
        </Link>
      </div>
    );
  }

  const galleryImages = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 1800);
  };

  const relatedProducts = productsData
    .filter((p) => String(p.id) !== String(id))
    .slice(0, 3);

  return (
    <div className="bg-[#FAF7F2] min-h-screen pb-24">
      {/* Breadcrumb & Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-luxury-muted hover:text-luxury-orange transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Collection</span>
          </button>

          <div className="text-xs text-luxury-muted hidden sm:block">
            <Link to="/" className="hover:text-luxury-dark">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-luxury-gold uppercase tracking-wider">{product.category}</span>
            <span className="mx-2">/</span>
            <span className="text-luxury-dark font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Main Product Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Image Gallery (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main Featured Photo */}
            <div className="relative aspect-[4/5] bg-white rounded-sm overflow-hidden border border-luxury-border shadow-luxury">
              <img
                src={selectedImage || product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center transition-all duration-500"
              />

              {product.isBestseller && (
                <div className="absolute top-4 left-4 bg-luxury-dark/95 backdrop-blur-md text-luxury-gold text-xs font-semibold uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-sm border border-luxury-gold/40 shadow-sm">
                  Abu Dhabi Flagship Selection
                </div>
              )}
            </div>

            {/* Thumbnail Strip */}
            {galleryImages.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {galleryImages.map((imgUrl, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(imgUrl)}
                    className={`relative w-20 h-24 rounded-sm overflow-hidden border-2 transition-all flex-shrink-0 ${
                      selectedImage === imgUrl 
                        ? 'border-luxury-orange shadow-md scale-95' 
                        : 'border-transparent opacity-75 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={imgUrl}
                      alt={`${product.name} detail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Information & Purchase Controls (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              {/* Category & Rating */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs uppercase tracking-[0.25em] text-luxury-gold font-semibold">
                  {product.category}
                </span>
                <div className="flex items-center gap-1.5 text-xs text-luxury-dark">
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                  <span className="font-semibold">{product.rating}</span>
                  <span className="text-luxury-muted">({product.reviewsCount} VIP reviews)</span>
                </div>
              </div>

              {/* Title & Tagline */}
              <h1 className="font-serif text-3xl sm:text-4xl font-light text-luxury-dark leading-tight mb-2">
                {product.name}
              </h1>
              <p className="text-sm text-luxury-muted italic font-light">
                {product.tagline}
              </p>

              {/* Price in AED */}
              <div className="mt-6 flex items-baseline gap-3">
                <span className="font-serif text-3xl font-semibold text-luxury-dark">
                  {product.price.toLocaleString()} AED
                </span>
                {product.originalPrice && (
                  <span className="text-base text-luxury-muted line-through font-light">
                    {product.originalPrice.toLocaleString()} AED
                  </span>
                )}
                <span className="text-[11px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-sm border border-emerald-200">
                  Includes Luxury Vase
                </span>
              </div>
            </div>

            {/* Poetic Description */}
            <div className="border-t border-b border-luxury-border py-5">
              <p className="text-sm text-luxury-dark/90 leading-relaxed font-light">
                {product.description}
              </p>
            </div>

            {/* Key Specifications Matrix */}
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="p-3 bg-white border border-luxury-border rounded-sm">
                <span className="text-luxury-muted block mb-1">Stem Count</span>
                <span className="font-semibold text-luxury-dark">{product.stems}</span>
              </div>
              <div className="p-3 bg-white border border-luxury-border rounded-sm">
                <span className="text-luxury-muted block mb-1">Dimensions</span>
                <span className="font-semibold text-luxury-dark">{product.dimensions}</span>
              </div>
              <div className="p-3 bg-white border border-luxury-border rounded-sm col-span-2">
                <span className="text-luxury-muted block mb-1">Botanical Origin</span>
                <span className="font-semibold text-luxury-dark">{product.origin}</span>
              </div>
            </div>

            {/* Quantity & Add to Cart Controls */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center gap-4">
                {/* Quantity Stepper */}
                <div className="flex items-center border border-luxury-border bg-white rounded-sm h-14">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-4 text-luxury-muted hover:text-luxury-dark transition-colors h-full flex items-center justify-center"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 text-sm font-semibold text-luxury-dark min-w-[2rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-4 text-luxury-muted hover:text-luxury-dark transition-colors h-full flex items-center justify-center"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* Primary Add to Bag CTA */}
                <button
                  onClick={handleAddToCart}
                  className={`flex-1 h-14 px-8 text-xs font-semibold uppercase tracking-[0.22em] rounded-sm transition-all duration-300 shadow-md flex items-center justify-center gap-3 ${
                    isAdded
                      ? 'bg-emerald-700 text-white'
                      : 'bg-luxury-orange hover:bg-luxury-orange-dark text-white'
                  }`}
                >
                  {isAdded ? (
                    <>
                      <Check className="w-5 h-5 text-emerald-200" />
                      <span>Added to Your Bag</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Bag • {(product.price * quantity).toLocaleString()} AED</span>
                    </>
                  )}
                </button>
              </div>

              {/* WhatsApp VIP Concierge Action */}
              <a
                href={`https://wa.me/971500000000?text=Hello%20Orange%20Flowers%20Abu%20Dhabi%2C%20I%20am%20interested%20in%20ordering%20the%20${encodeURIComponent(product.name)}%20(${product.price}%20AED).%20Please%20advise%20on%20same-day%20delivery.`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 border border-luxury-dark/30 hover:border-luxury-dark bg-white hover:bg-luxury-sand/30 text-luxury-dark text-xs font-semibold uppercase tracking-[0.18em] rounded-sm transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-700" />
                <span>Reserve via WhatsApp Concierge</span>
              </a>
            </div>

            {/* Luxury Reassurance Badges */}
            <div className="pt-4 space-y-2 border-t border-luxury-border text-xs text-luxury-muted">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-luxury-orange flex-shrink-0" />
                <span>Same-day temperature-controlled delivery available in Abu Dhabi</span>
              </div>
              <div className="flex items-center gap-2">
                <Gift className="w-4 h-4 text-luxury-gold flex-shrink-0" />
                <span>Includes complimentary handwritten gold calligraphy card</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-luxury-gold flex-shrink-0" />
                <span>7-Day Freshness Guarantee with included floral nutrient elixir</span>
              </div>
            </div>

            {/* Accordion / Tabs for Extended Information */}
            <div className="pt-4 border-t border-luxury-border space-y-3">
              <div className="flex border-b border-luxury-border">
                <button
                  onClick={() => setActiveTab('delivery')}
                  className={`pb-2 mr-6 text-xs uppercase tracking-wider font-semibold transition-colors ${
                    activeTab === 'delivery'
                      ? 'border-b-2 border-luxury-orange text-luxury-dark'
                      : 'text-luxury-muted hover:text-luxury-dark'
                  }`}
                >
                  Delivery Coverage
                </button>
                <button
                  onClick={() => setActiveTab('care')}
                  className={`pb-2 mr-6 text-xs uppercase tracking-wider font-semibold transition-colors ${
                    activeTab === 'care'
                      ? 'border-b-2 border-luxury-orange text-luxury-dark'
                      : 'text-luxury-muted hover:text-luxury-dark'
                  }`}
                >
                  Flower Longevity Care
                </button>
                <button
                  onClick={() => setActiveTab('included')}
                  className={`pb-2 text-xs uppercase tracking-wider font-semibold transition-colors ${
                    activeTab === 'included'
                      ? 'border-b-2 border-luxury-orange text-luxury-dark'
                      : 'text-luxury-muted hover:text-luxury-dark'
                  }`}
                >
                  Haute Packaging
                </button>
              </div>

              <div className="text-xs text-luxury-muted leading-relaxed pt-2">
                {activeTab === 'delivery' && (
                  <p>
                    We deliver across all Abu Dhabi regions including Saadiyat Island, Al Reem Island, Yas Island, Al Raha Beach, Al Bateen, and Khalifa City. Orders placed before 4:00 PM GST qualify for same-day delivery in our chilled transport vehicles.
                  </p>
                )}
                {activeTab === 'care' && (
                  <p>
                    Keep stems away from direct sunlight, air conditioning drafts, and fresh fruit. Trim stems at a 45-degree angle every 2 days and refresh with cold water and the enclosed botanical sachet.
                  </p>
                )}
                {activeTab === 'included' && (
                  <p>
                    {product.includes || 'Arrives in our signature presentation box with double-faced Italian silk ribbons and wax-sealed note card.'}
                  </p>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* Related Curated Creations */}
        <div className="mt-24 pt-16 border-t border-luxury-border">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-luxury-gold font-semibold block mb-1">
              Harmonious Compositions
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-luxury-dark">
              You May Also Admire
            </h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

