import React, { useState } from 'react';
import { X, CheckCircle2, Building2, ArrowRight } from 'lucide-react';
import { validateDealerForm, type DealerFormData } from '../utils/calculations';

interface DealerApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DealerApplicationModal: React.FC<DealerApplicationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<DealerFormData>({
    dealershipName: '',
    contactName: '',
    businessEmail: '',
    phone: '',
    country: '',
    city: '',
    locationCount: '1-3 locations',
    dealershipType: 'Franchise Dealership Group',
    inventorySize: '50-150 vehicles',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof DealerFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateDealerForm(formData);
    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#101114] border border-[#282C34] rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dealer-modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#202329] bg-[#08090B] shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold tracking-wider text-[#38BDF8] uppercase">CARO DEALER NETWORK</span>
            <span className="text-xs text-[#A6A9B0]">• Partner Portal</span>
          </div>
          <button
            onClick={resetAndClose}
            aria-label="Close partner dialog"
            className="p-1.5 rounded-lg text-[#A6A9B0] hover:text-[#F5F5F2] hover:bg-[#181A1F] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              {/* Emerald Mint preserved for verified received state */}
              <div className="w-14 h-14 bg-[#10B981]/10 border border-[#10B981]/30 rounded-full flex items-center justify-center mx-auto text-[#10B981]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-[#F5F5F2]">Partnership Application Received</h3>
              <p className="text-sm text-[#A6A9B0] max-w-lg mx-auto leading-relaxed">
                Thank you, <span className="text-[#F5F5F2] font-semibold">{formData.contactName}</span>. We have logged the partnership inquiry for <span className="text-[#F5F5F2] font-semibold">{formData.dealershipName}</span>. Our Commercial Dealer Partnerships team will review your inventory profile and reach out directly at <span className="text-[#BAE6FD] font-medium">{formData.businessEmail}</span> to schedule an introductory syndicate distribution walkthrough.
              </p>
              <div className="pt-4">
                <button
                  onClick={resetAndClose}
                  className="px-6 py-2.5 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold text-xs rounded-lg transition-colors shadow-md shadow-blue-600/30"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h2 id="dealer-modal-title" className="text-2xl font-bold tracking-tight text-[#F5F5F2]">
                  Become a Caro Dealer Partner
                </h2>
                <p className="text-xs sm:text-sm text-[#A6A9B0] mt-1">
                  Connect your inventory to qualified customer syndicates ready to acquire high-value vehicles collectively.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label htmlFor="dealershipName" className="block text-xs font-medium text-[#F5F5F2] mb-1">
                    Dealership / Group Name <span className="text-[#38BDF8]">*</span>
                  </label>
                  <input
                    id="dealershipName"
                    type="text"
                    value={formData.dealershipName}
                    onChange={(e) => {
                      setFormData({ ...formData, dealershipName: e.target.value });
                      if (errors.dealershipName) setErrors({ ...errors, dealershipName: undefined });
                    }}
                    placeholder="Apex Motors Group"
                    className="w-full bg-[#181A1F] border border-[#282C34] rounded-lg px-3.5 py-2 text-xs text-[#F5F5F2] placeholder-[#A6A9B0]/40 focus:outline-none focus:border-[#2563EB] transition-colors"
                  />
                  {errors.dealershipName && <span className="text-[11px] text-red-400 mt-1 block">{errors.dealershipName}</span>}
                </div>

                <div>
                  <label htmlFor="contactName" className="block text-xs font-medium text-[#F5F5F2] mb-1">
                    Primary Contact Name <span className="text-[#38BDF8]">*</span>
                  </label>
                  <input
                    id="contactName"
                    type="text"
                    value={formData.contactName}
                    onChange={(e) => {
                      setFormData({ ...formData, contactName: e.target.value });
                      if (errors.contactName) setErrors({ ...errors, contactName: undefined });
                    }}
                    placeholder="Sarah Jenkins (General Manager)"
                    className="w-full bg-[#181A1F] border border-[#282C34] rounded-lg px-3.5 py-2 text-xs text-[#F5F5F2] placeholder-[#A6A9B0]/40 focus:outline-none focus:border-[#2563EB] transition-colors"
                  />
                  {errors.contactName && <span className="text-[11px] text-red-400 mt-1 block">{errors.contactName}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="businessEmail" className="block text-xs font-medium text-[#F5F5F2] mb-1">
                    Business Email <span className="text-[#38BDF8]">*</span>
                  </label>
                  <input
                    id="businessEmail"
                    type="email"
                    value={formData.businessEmail}
                    onChange={(e) => {
                      setFormData({ ...formData, businessEmail: e.target.value });
                      if (errors.businessEmail) setErrors({ ...errors, businessEmail: undefined });
                    }}
                    placeholder="s.jenkins@apexmotors.com"
                    className="w-full bg-[#181A1F] border border-[#282C34] rounded-lg px-3.5 py-2 text-xs text-[#F5F5F2] placeholder-[#A6A9B0]/40 focus:outline-none focus:border-[#2563EB] transition-colors"
                  />
                  {errors.businessEmail && <span className="text-[11px] text-red-400 mt-1 block">{errors.businessEmail}</span>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-medium text-[#F5F5F2] mb-1">
                    Direct Phone Number <span className="text-[#38BDF8]">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: undefined });
                    }}
                    placeholder="+1 (555) 392-0199"
                    className="w-full bg-[#181A1F] border border-[#282C34] rounded-lg px-3.5 py-2 text-xs text-[#F5F5F2] placeholder-[#A6A9B0]/40 focus:outline-none focus:border-[#2563EB] transition-colors"
                  />
                  {errors.phone && <span className="text-[11px] text-red-400 mt-1 block">{errors.phone}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="country" className="block text-xs font-medium text-[#F5F5F2] mb-1">
                    Country <span className="text-[#38BDF8]">*</span>
                  </label>
                  <input
                    id="country"
                    type="text"
                    value={formData.country}
                    onChange={(e) => {
                      setFormData({ ...formData, country: e.target.value });
                      if (errors.country) setErrors({ ...errors, country: undefined });
                    }}
                    placeholder="United States"
                    className="w-full bg-[#181A1F] border border-[#282C34] rounded-lg px-3.5 py-2 text-xs text-[#F5F5F2] placeholder-[#A6A9B0]/40 focus:outline-none focus:border-[#2563EB] transition-colors"
                  />
                  {errors.country && <span className="text-[11px] text-red-400 mt-1 block">{errors.country}</span>}
                </div>

                <div>
                  <label htmlFor="city" className="block text-xs font-medium text-[#F5F5F2] mb-1">
                    City / Metro <span className="text-[#38BDF8]">*</span>
                  </label>
                  <input
                    id="city"
                    type="text"
                    value={formData.city}
                    onChange={(e) => {
                      setFormData({ ...formData, city: e.target.value });
                      if (errors.city) setErrors({ ...errors, city: undefined });
                    }}
                    placeholder="Austin, TX"
                    className="w-full bg-[#181A1F] border border-[#282C34] rounded-lg px-3.5 py-2 text-xs text-[#F5F5F2] placeholder-[#A6A9B0]/40 focus:outline-none focus:border-[#2563EB] transition-colors"
                  />
                  {errors.city && <span className="text-[11px] text-red-400 mt-1 block">{errors.city}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label htmlFor="locationCount" className="block text-xs font-medium text-[#F5F5F2] mb-1">
                    Locations
                  </label>
                  <select
                    id="locationCount"
                    value={formData.locationCount}
                    onChange={(e) => setFormData({ ...formData, locationCount: e.target.value })}
                    className="w-full bg-[#181A1F] border border-[#282C34] rounded-lg px-3 py-2 text-xs text-[#F5F5F2] focus:outline-none focus:border-[#2563EB]"
                  >
                    <option value="1 location">Single Location</option>
                    <option value="2-4 locations">2 - 4 Locations</option>
                    <option value="5-10 locations">5 - 10 Locations</option>
                    <option value="10+ locations">10+ Regional Group</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="dealershipType" className="block text-xs font-medium text-[#F5F5F2] mb-1">
                    Dealership Type
                  </label>
                  <select
                    id="dealershipType"
                    value={formData.dealershipType}
                    onChange={(e) => setFormData({ ...formData, dealershipType: e.target.value })}
                    className="w-full bg-[#181A1F] border border-[#282C34] rounded-lg px-3 py-2 text-xs text-[#F5F5F2] focus:outline-none focus:border-[#2563EB]"
                  >
                    <option value="Franchise OEM">Franchised OEM Dealer</option>
                    <option value="Luxury Independent">Independent Luxury / Exotics</option>
                    <option value="Pre-Owned Quality">Certified Pre-Owned Group</option>
                    <option value="Fleet / Commercial">Commercial Fleet Specialist</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="inventorySize" className="block text-xs font-medium text-[#F5F5F2] mb-1">
                    Inventory Size <span className="text-[#38BDF8]">*</span>
                  </label>
                  <select
                    id="inventorySize"
                    value={formData.inventorySize}
                    onChange={(e) => {
                      setFormData({ ...formData, inventorySize: e.target.value });
                      if (errors.inventorySize) setErrors({ ...errors, inventorySize: undefined });
                    }}
                    className="w-full bg-[#181A1F] border border-[#282C34] rounded-lg px-3 py-2 text-xs text-[#F5F5F2] focus:outline-none focus:border-[#2563EB]"
                  >
                    <option value="Under 50 vehicles">Under 50 vehicles</option>
                    <option value="50-150 vehicles">50 - 150 vehicles</option>
                    <option value="150-300 vehicles">150 - 300 vehicles</option>
                    <option value="300+ vehicles">300+ vehicles</option>
                  </select>
                  {errors.inventorySize && <span className="text-[11px] text-red-400 mt-1 block">{errors.inventorySize}</span>}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-[#F5F5F2] mb-1">
                  Additional Notes or Target Inventory (Optional)
                </label>
                <textarea
                  id="message"
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="e.g. Interested in listing Porsche, BMW M, and high-spec SUV models for collective group acquisition..."
                  className="w-full bg-[#181A1F] border border-[#282C34] rounded-lg px-3.5 py-2 text-xs text-[#F5F5F2] placeholder-[#A6A9B0]/40 focus:outline-none focus:border-[#2563EB] transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold text-xs rounded-lg transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-1.5"
                >
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Apply to Become a Partner</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <p className="text-[11px] text-[#A6A9B0]/70 text-center">
                Caro provides group acquisition matchmaking, digital coordination, and legal series templates. Caro does not provide direct financing or guarantee sale completions.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
