import React from 'react';
import { Truck, Sparkles, Gift } from 'lucide-react';

export default function FeatureBanner() {
  const features = [
    {
      icon: Truck,
      title: 'Same-Day Abu Dhabi Delivery',
      subtitle: 'Chilled VIP Courier Service',
      description: 'Delivered in custom climate-controlled vehicles to Saadiyat Island, Yas Marina, Al Reem, and all Abu Dhabi districts within hours.'
    },
    {
      icon: Sparkles,
      title: 'Direct From Elite Growers',
      subtitle: 'Ecuador & Dutch Auctions',
      description: 'Every stem is harvested at peak maturity and flown chilled weekly from volcanic Andean soils and Aalsmeer botanical masters.'
    },
    {
      icon: Gift,
      title: 'Signature Haute Presentation',
      subtitle: 'Silk Ribbons & Calligraphy',
      description: 'Handcrafted ceramic or travertine vessels, double-faced Italian silk ribbons, and complimentary hand-penned wax-sealed cards.'
    }
  ];

  return (
    <section className="bg-luxury-sand/60 border-y border-luxury-border py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-luxury-border/80">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div 
                key={idx} 
                className={`flex flex-col items-center text-center ${idx > 0 ? 'pt-8 md:pt-0 md:pl-10' : ''}`}
              >
                {/* Luxury Icon Badge */}
                <div className="w-14 h-14 rounded-full bg-white border border-luxury-gold/30 shadow-sm flex items-center justify-center mb-5 text-luxury-orange transition-transform duration-300 hover:scale-110">
                  <Icon className="w-6 h-6 text-luxury-terracotta" strokeWidth={1.5} />
                </div>

                <span className="text-[11px] uppercase tracking-[0.25em] text-luxury-gold font-semibold mb-1">
                  {feature.subtitle}
                </span>

                <h3 className="font-serif text-lg md:text-xl font-medium text-luxury-dark mb-2.5">
                  {feature.title}
                </h3>

                <p className="text-xs sm:text-sm text-luxury-muted leading-relaxed max-w-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

