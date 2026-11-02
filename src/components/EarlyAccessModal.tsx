import React, { useState } from 'react';
import { X, CheckCircle2, Shield, ArrowRight } from 'lucide-react';
import { validateCustomerForm, type CustomerFormData } from '../utils/calculations';

interface EarlyAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultInterest?: string;
}

export const EarlyAccessModal: React.FC<EarlyAccessModalProps> = ({ isOpen, onClose, defaultInterest }) => {
  const [formData, setFormData] = useState<CustomerFormData>({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    city: '',
    primaryInterest: defaultInterest || 'Joining an existing ownership group',
    privacyConsent: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof CustomerFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateCustomerForm(formData);
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
        className="relative w-full max-w-xl bg-[#101114] border border-[#282C34] rounded-2xl shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="early-access-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#202329] bg-[#08090B]">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold tracking-wider text-[#38BDF8] uppercase">CARO ACCESS INVITATION</span>
          </div>
          <button
            onClick={resetAndClose}
            aria-label="Close dialog"
            className="p-1.5 rounded-lg text-[#A6A9B0] hover:text-[#F5F5F2] hover:bg-[#181A1F] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              {/* Emerald Mint preserved for verified status */}
              <div className="w-14 h-14 bg-[#10B981]/10 border border-[#10B981]/30 rounded-full flex items-center justify-center mx-auto text-[#10B981]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-[#F5F5F2]">Priority Access Registered</h3>
              <p className="text-sm text-[#A6A9B0] max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-[#F5F5F2] font-semibold">{formData.firstName}</span>. Your priority placement for Caro syndicates in <span className="text-[#F5F5F2] font-semibold">{formData.city || 'your area'}</span> has been confirmed. A concierge invitation will be sent to <span className="text-[#BAE6FD] font-medium">{formData.email}</span> as upcoming garages unlock.
              </p>
              <div className="pt-4">
                <button
                  onClick={resetAndClose}
                  className="px-6 py-2.5 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold text-xs rounded-lg transition-colors shadow-md shadow-blue-600/30"
                >
                  Return to Exploration
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h2 id="early-access-title" className="text-2xl font-bold tracking-tight text-[#F5F5F2]">
                  Join the Caro Network
                </h2>
                <p className="text-xs sm:text-sm text-[#A6A9B0] mt-1">
                  Be among the first to participate in curated collective ownership syndicates and build your multi-vehicle garage.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label htmlFor="firstName" className="block text-xs font-medium text-[#F5F5F2] mb-1">
                    First Name <span className="text-[#38BDF8]">*</span>
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => {
                      setFormData({ ...formData, firstName: e.target.value });
                      if (errors.firstName) setErrors({ ...errors, firstName: undefined });
                    }}
                    placeholder="Marcus"
                    className="w-full bg-[#181A1F] border border-[#282C34] rounded-lg px-3.5 py-2 text-xs text-[#F5F5F2] placeholder-[#A6A9B0]/40 focus:outline-none focus:border-[#2563EB] transition-colors"
                  />
                  {errors.firstName && <span className="text-[11px] text-red-400 mt-1 block">{errors.firstName}</span>}
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-xs font-medium text-[#F5F5F2] mb-1">
                    Last Name <span className="text-[#38BDF8]">*</span>
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => {
                      setFormData({ ...formData, lastName: e.target.value });
                      if (errors.lastName) setErrors({ ...errors, lastName: undefined });
                    }}
                    placeholder="Bennett"
                    className="w-full bg-[#181A1F] border border-[#282C34] rounded-lg px-3.5 py-2 text-xs text-[#F5F5F2] placeholder-[#A6A9B0]/40 focus:outline-none focus:border-[#2563EB] transition-colors"
                  />
                  {errors.lastName && <span className="text-[11px] text-red-400 mt-1 block">{errors.lastName}</span>}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-medium text-[#F5F5F2] mb-1">
                  Email Address <span className="text-[#38BDF8]">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: undefined });
                  }}
                  placeholder="marcus@example.com"
                  className="w-full bg-[#181A1F] border border-[#282C34] rounded-lg px-3.5 py-2 text-xs text-[#F5F5F2] placeholder-[#A6A9B0]/40 focus:outline-none focus:border-[#2563EB] transition-colors"
                />
                {errors.email && <span className="text-[11px] text-red-400 mt-1 block">{errors.email}</span>}
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
                    City <span className="text-[#38BDF8]">*</span>
                  </label>
                  <input
                    id="city"
                    type="text"
                    value={formData.city}
                    onChange={(e) => {
                      setFormData({ ...formData, city: e.target.value });
                      if (errors.city) setErrors({ ...errors, city: undefined });
                    }}
                    placeholder="San Francisco"
                    className="w-full bg-[#181A1F] border border-[#282C34] rounded-lg px-3.5 py-2 text-xs text-[#F5F5F2] placeholder-[#A6A9B0]/40 focus:outline-none focus:border-[#2563EB] transition-colors"
                  />
                  {errors.city && <span className="text-[11px] text-red-400 mt-1 block">{errors.city}</span>}
                </div>
              </div>

              <div>
                <label htmlFor="primaryInterest" className="block text-xs font-medium text-[#F5F5F2] mb-1">
                  What interests you most? <span className="text-[#38BDF8]">*</span>
                </label>
                <select
                  id="primaryInterest"
                  value={formData.primaryInterest}
                  onChange={(e) => {
                    setFormData({ ...formData, primaryInterest: e.target.value });
                    if (errors.primaryInterest) setErrors({ ...errors, primaryInterest: undefined });
                  }}
                  className="w-full bg-[#181A1F] border border-[#282C34] rounded-lg px-3.5 py-2 text-xs text-[#F5F5F2] focus:outline-none focus:border-[#2563EB] transition-colors"
                >
                  <option value="Joining an existing ownership group">Joining an existing ownership group</option>
                  <option value="Starting an ownership group">Starting an ownership group with friends or colleagues</option>
                  <option value="Owning interests in multiple vehicles">Building a multi-vehicle ownership portfolio</option>
                  <option value="Performance and luxury vehicles">Performance and luxury vehicles (Sports / GT / Supercars)</option>
                  <option value="Everyday vehicles">Everyday and practical urban vehicles</option>
                  <option value="Learning more about Caro">Learning more about Caro legal and economic structure</option>
                </select>
                {errors.primaryInterest && (
                  <span className="text-[11px] text-red-400 mt-1 block">{errors.primaryInterest}</span>
                )}
              </div>

              {/* Privacy consent checkbox */}
              <div className="pt-1">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.privacyConsent}
                    onChange={(e) => {
                      setFormData({ ...formData, privacyConsent: e.target.checked });
                      if (errors.privacyConsent) setErrors({ ...errors, privacyConsent: undefined });
                    }}
                    className="mt-0.5 rounded border-[#282C34] bg-[#181A1F] text-[#2563EB] focus:ring-0 focus:ring-offset-0"
                  />
                  <span className="text-[11px] text-[#A6A9B0] leading-relaxed">
                    I agree to the Caro Privacy Policy and consent to receive updates regarding regional garage openings and collective ownership opportunities.
                  </span>
                </label>
                {errors.privacyConsent && (
                  <span className="text-[11px] text-red-400 mt-1 block">{errors.privacyConsent}</span>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold text-xs rounded-lg transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-1.5"
                >
                  <span>Request Priority Access</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#A6A9B0]/70 pt-1">
                <Shield className="w-3 h-3 text-[#38BDF8]" />
                <span>Zero financial commitments or credit inquiries required for waitlist invitation.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
