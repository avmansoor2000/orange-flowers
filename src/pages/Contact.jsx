import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Sparkles, 
  MessageSquareText, 
  CheckCircle2, 
  Send,
  Building,
  ShieldCheck
} from 'lucide-react';
import FeatureBanner from '../components/FeatureBanner';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    inquiryType: 'Private Residence Floristry',
    eventDate: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const generateWhatsAppInquiry = () => {
    const text = `*New Contact Inquiry - Orange Flowers Abu Dhabi*\n` +
      `*Name:* ${formData.fullName || 'Guest'}\n` +
      `*Phone:* ${formData.phone || 'N/A'}\n` +
      `*Type:* ${formData.inquiryType}\n` +
      (formData.eventDate ? `*Preferred Date:* ${formData.eventDate}\n` : '') +
      (formData.message ? `*Message:* "${formData.message}"\n` : '') +
      `\n*Location:* Abu Dhabi, UAE`;
    return encodeURIComponent(text);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Editorial Header */}
      <div className="bg-luxury-dark text-luxury-cream py-14 md:py-20 border-b border-luxury-gold/20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 text-luxury-gold text-[10px] sm:text-xs uppercase tracking-[0.28em] font-semibold mb-3 px-3 py-1 rounded-full bg-white/5 border border-luxury-gold/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Haute Floristry Inquiries</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-light text-white tracking-tight">
            Contact the Atelier
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-luxury-sand/80 max-w-xl mx-auto leading-relaxed font-light">
            Our Abu Dhabi master florists are at your disposal for bespoke residential curation, VIP majlis styling, private events, and same-day gifting.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Boutique Information & Concierge Touchpoints (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-luxury-gold font-semibold block mb-1">
                Atelier Locations & Concierge
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-light text-luxury-dark">
                Abu Dhabi Boutiques
              </h2>
            </div>

            {/* Information Cards */}
            <div className="space-y-4 text-xs">
              {/* Flagship Location */}
              <div className="p-5 bg-white border border-luxury-border rounded-sm shadow-sm">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-luxury-sand/60 rounded-full text-luxury-orange flex-shrink-0">
                    <Building className="w-4 h-4 text-luxury-orange" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-serif text-sm font-semibold text-luxury-dark">
                      Flagship Boutique — Al Maryah
                    </h3>
                    <p className="text-luxury-muted">
                      The Galleria Luxury Collection, Level 1, Al Maryah Island, Abu Dhabi
                    </p>
                    <p className="text-luxury-muted flex items-center gap-1.5 pt-1 text-[11px]">
                      <Clock className="w-3 h-3 text-luxury-gold" />
                      Open Daily: 9:00 AM – 11:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Private Studio */}
              <div className="p-5 bg-white border border-luxury-border rounded-sm shadow-sm">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 bg-luxury-sand/60 rounded-full text-luxury-orange flex-shrink-0">
                    <MapPin className="w-4 h-4 text-luxury-orange" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-serif text-sm font-semibold text-luxury-dark">
                      Private Floristry Studio
                    </h3>
                    <p className="text-luxury-muted">
                      Al Bateen Marina Promenade, Abu Dhabi, UAE
                    </p>
                    <p className="text-luxury-gold font-medium text-[11px]">
                      By Appointment for VIP Commissions & Weddings
                    </p>
                  </div>
                </div>
              </div>

              {/* Concierge Hotline & Email */}
              <div className="p-5 bg-white border border-luxury-border rounded-sm shadow-sm space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-luxury-gold flex-shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-luxury-muted block">Direct Phone</span>
                    <a href="tel:+9712800ORANGE" className="font-semibold text-luxury-dark hover:text-luxury-orange transition-colors">
                      +971 (02) 800-ORANGE
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-luxury-border/60">
                  <Mail className="w-4 h-4 text-luxury-gold flex-shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-luxury-muted block">Email Concierge</span>
                    <a href="mailto:concierge@orangeflowers.ae" className="font-semibold text-luxury-dark hover:text-luxury-orange transition-colors">
                      concierge@orangeflowers.ae
                    </a>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Priority Button */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/971500000000?text=${generateWhatsAppInquiry()}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-semibold uppercase tracking-[0.18em] rounded-sm transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageSquareText className="w-4 h-4" />
                  <span>Chat with Atelier on WhatsApp</span>
                </a>
                <p className="text-[10px] text-center text-luxury-muted mt-2">
                  Average response time: Under 10 minutes
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Message Form (7 cols) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 border border-luxury-border rounded-sm shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-2">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-luxury-dark">
                  Thank You for Your Inquiry
                </h3>
                <p className="text-sm text-luxury-muted max-w-md mx-auto leading-relaxed">
                  Your message has been delivered to our master floral director in Abu Dhabi. We will contact you at <strong>{formData.email || formData.phone}</strong> promptly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 border border-luxury-dark text-luxury-dark text-xs uppercase tracking-widest rounded-sm hover:bg-luxury-dark hover:text-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-luxury-gold font-semibold block mb-1">
                    Bespoke Consultation
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-light text-luxury-dark mb-2">
                    Send a Direct Message
                  </h2>
                  <p className="text-xs text-luxury-muted">
                    Please share your requirements and our team will get in touch with personalized floral curation.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {/* Full Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-luxury-dark uppercase tracking-wider block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Fatima Al Nahyan"
                      className="w-full text-xs p-3 bg-[#FAF7F2] border border-luxury-border rounded-sm focus:outline-none focus:border-luxury-gold text-luxury-dark"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-luxury-dark uppercase tracking-wider block">
                      Phone (UAE) *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+971 50 000 0000"
                      className="w-full text-xs p-3 bg-[#FAF7F2] border border-luxury-border rounded-sm focus:outline-none focus:border-luxury-gold text-luxury-dark"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-luxury-dark uppercase tracking-wider block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="w-full text-xs p-3 bg-[#FAF7F2] border border-luxury-border rounded-sm focus:outline-none focus:border-luxury-gold text-luxury-dark"
                    />
                  </div>

                  {/* Inquiry Type */}
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-luxury-dark uppercase tracking-wider block">
                      Inquiry Type
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full text-xs p-3 bg-[#FAF7F2] border border-luxury-border rounded-sm focus:outline-none focus:border-luxury-gold text-luxury-dark cursor-pointer"
                    >
                      <option value="Private Residence Floristry">Private Residence Floristry</option>
                      <option value="VIP Majlis Styling">VIP Majlis Styling</option>
                      <option value="Royal Wedding / Private Milestone">Royal Wedding / Private Milestone</option>
                      <option value="Corporate / Embassy Accounts">Corporate / Embassy Accounts</option>
                      <option value="Same-Day Order Assistance">Same-Day Order Assistance</option>
                    </select>
                  </div>
                </div>

                {/* Event or Delivery Date */}
                <div className="space-y-1">
                  <label className="text-xs font-medium text-luxury-dark uppercase tracking-wider block">
                    Preferred Date (Optional)
                  </label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full text-xs p-3 bg-[#FAF7F2] border border-luxury-border rounded-sm focus:outline-none focus:border-luxury-gold text-luxury-dark"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1">
                  <label className="text-xs font-medium text-luxury-dark uppercase tracking-wider block">
                    Details of your Vision or Request
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe bloom preferences, vessel dimensions, venue location, or specific requirements..."
                    className="w-full text-xs p-3 bg-[#FAF7F2] border border-luxury-border rounded-sm focus:outline-none focus:border-luxury-gold text-luxury-dark resize-none"
                  />
                </div>

                {/* Submit CTA */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 bg-luxury-dark hover:bg-luxury-orange text-white text-xs uppercase tracking-[0.22em] font-medium rounded-sm transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Inquiry</span>
                  </button>
                  <p className="text-[10px] text-luxury-muted text-center mt-2.5">
                    Strict privacy. Your contact details are never shared.
                  </p>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>

      {/* Trust guarantees banner */}
      <FeatureBanner />
    </div>
  );
}

