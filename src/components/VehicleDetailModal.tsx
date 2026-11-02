import React from 'react';
import { X, Calendar, ShieldCheck, MapPin, CheckCircle, ArrowRight, Info, Users, Sparkles } from 'lucide-react';
import { type VehicleOpportunity } from '../data/vehicles';

interface VehicleDetailModalProps {
  vehicle: VehicleOpportunity | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectForEarlyAccess: (vehicleName: string) => void;
}

export const VehicleDetailModal: React.FC<VehicleDetailModalProps> = ({
  vehicle,
  isOpen,
  onClose,
  onSelectForEarlyAccess,
}) => {
  if (!isOpen || !vehicle) return null;

  const openShares = vehicle.totalMembers - vehicle.currentMembers;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-[#101114] border border-[#282C34] rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="vehicle-detail-title"
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#202329] bg-[#08090B] shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold tracking-wider text-[#38BDF8] uppercase">
              {vehicle.category} SYNDICATE
            </span>
            <span className="text-xs text-[#A6A9B0]">• {vehicle.year} {vehicle.make}</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close vehicle details"
            className="p-1.5 rounded-lg text-[#A6A9B0] hover:text-[#F5F5F2] hover:bg-[#181A1F] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Hero Image & Headline */}
          <div className="relative rounded-xl overflow-hidden border border-[#282C34] bg-[#08090B]">
            <img
              src={vehicle.image}
              alt={vehicle.name}
              referrerPolicy="no-referrer"
              className="w-full h-56 sm:h-72 object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101114] via-[#101114]/30 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div>
                <div className="flex items-center gap-2 text-xs text-[#A6A9B0] mb-1">
                  <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>{vehicle.location}</span>
                </div>
                <h2 id="vehicle-detail-title" className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F5F5F2]">
                  {vehicle.name}
                </h2>
              </div>
              <div className="text-right">
                <span className="text-xs text-[#A6A9B0] block">Indicative Contribution</span>
                <span className="text-xl sm:text-2xl font-bold font-mono text-[#38BDF8] tabular-nums">
                  ${vehicle.contributionPerMember.toLocaleString()}
                </span>
                <span className="text-[11px] text-[#A6A9B0] block">per co-owner</span>
              </div>
            </div>
          </div>

          {/* Quick Metrics Grid with Liquid Ice border styling */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-[#181A1F] border border-[#282C34] p-3.5 rounded-xl">
              <span className="text-[11px] text-[#A6A9B0] block">Total Vehicle Price</span>
              <span className="text-base font-semibold font-mono text-[#F5F5F2] tabular-nums">
                ${vehicle.price.toLocaleString()}
              </span>
            </div>
            <div className="bg-[#181A1F] border border-[#282C34] p-3.5 rounded-xl">
              <span className="text-[11px] text-[#A6A9B0] block">Equity Interest</span>
              <span className="text-base font-semibold font-mono text-[#38BDF8] tabular-nums">
                {vehicle.equityPercentage}%
              </span>
            </div>
            <div className="bg-[#181A1F] border border-[#282C34] p-3.5 rounded-xl">
              <span className="text-[11px] text-[#A6A9B0] block">Group Composition</span>
              <span className="text-base font-semibold font-mono text-[#F5F5F2] tabular-nums">
                {vehicle.currentMembers} of {vehicle.totalMembers} Joined
              </span>
            </div>
            <div className="bg-[#181A1F] border border-[#282C34] p-3.5 rounded-xl">
              <span className="text-[11px] text-[#A6A9B0] block">Est. Monthly Opex</span>
              <span className="text-base font-semibold font-mono text-[#38BDF8] tabular-nums">
                ~${vehicle.estimatedMonthlyCost}/mo
              </span>
            </div>
          </div>

          {/* Vehicle Specifications */}
          <div className="bg-[#181A1F] border border-[#282C34] rounded-xl p-4">
            <h3 className="text-xs font-semibold text-[#F5F5F2] uppercase tracking-wider mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Vehicle Specifications & Powertrain</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div>
                <span className="text-[#A6A9B0] block text-[11px]">Powertrain</span>
                <span className="font-medium text-[#F5F5F2]">{vehicle.specs.power}</span>
              </div>
              <div>
                <span className="text-[#A6A9B0] block text-[11px]">Acceleration</span>
                <span className="font-medium text-[#F5F5F2]">{vehicle.specs.acceleration}</span>
              </div>
              <div>
                <span className="text-[#A6A9B0] block text-[11px]">Transmission</span>
                <span className="font-medium text-[#F5F5F2]">{vehicle.specs.transmission}</span>
              </div>
              <div>
                <span className="text-[#A6A9B0] block text-[11px]">Drivetrain</span>
                <span className="font-medium text-[#F5F5F2]">{vehicle.specs.drivetrain}</span>
              </div>
            </div>
          </div>

          {/* Usage Arrangements & Legal Entity */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#181A1F] border border-[#282C34] rounded-xl p-4 space-y-2">
              <h4 className="text-xs font-semibold text-[#F5F5F2] flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#38BDF8]" />
                <span>Usage Arrangements</span>
              </h4>
              <p className="text-xs text-[#A6A9B0] leading-relaxed">
                {vehicle.usageEntitlement}. Calendar access operates on a tiered rotational booking system, allowing fair holiday allocation, 30-day rolling advance holds, and seamless weekend swaps between co-owners.
              </p>
            </div>

            <div className="bg-[#181A1F] border border-[#282C34] rounded-xl p-4 space-y-2">
              <h4 className="text-xs font-semibold text-[#F5F5F2] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
                <span>Legal Ownership Entity</span>
              </h4>
              <p className="text-xs text-[#A6A9B0] leading-relaxed">
                Acquired and titled directly under <span className="text-[#BAE6FD] font-mono">{vehicle.legalEntity}</span>. Co-owners hold documented series membership certificates registered through Caro’s digital asset ledger with clear exit and transfer provisions.
              </p>
            </div>
          </div>

          {/* Co-Owners Profile Showcase */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-semibold text-[#F5F5F2] uppercase tracking-wider flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>Current Syndicate Members</span>
              </h3>
              <span className="text-xs font-mono text-[#38BDF8]">
                {openShares > 0 ? `${openShares} share${openShares > 1 ? 's' : ''} available` : 'Syndicate Full'}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {vehicle.coOwners.map((owner, idx) => (
                <div key={idx} className="flex items-center gap-3 p-2.5 bg-[#181A1F] border border-[#282C34] rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-[#202329] border border-[#38BDF8]/40 flex items-center justify-center font-mono text-xs font-semibold text-[#38BDF8] shrink-0">
                    {owner.initials}
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-medium text-[#F5F5F2] truncate block">{owner.name}</span>
                    <span className="text-[11px] text-[#A6A9B0] truncate block">{owner.role} · Joined {owner.joined}</span>
                  </div>
                  {/* Emerald Mint preserved for verified status */}
                  <CheckCircle className="w-4 h-4 text-[#10B981] shrink-0" />
                </div>
              ))}
            </div>
          </div>

          {/* Financial Disclaimer Banner */}
          <div className="p-3.5 rounded-xl bg-[#08090B] border border-[#202329] flex items-start gap-3">
            <Info className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
            <p className="text-[11px] text-[#A6A9B0] leading-relaxed">
              <strong className="text-[#F5F5F2] font-semibold">Important Ownership Consideration:</strong> All vehicle prices, contributions, and portfolio figures are conceptual and illustrative. Actual co-ownership costs include commercial fleet insurance, local vehicle registration taxes, scheduled maintenance, and climate-controlled storage reserves. Caro does not provide guaranteed financing or investment returns.
            </p>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-6 bg-[#08090B] border-t border-[#202329] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-[#A6A9B0]">
            Interested in this vehicle syndicate? Join the waitlist or speak with the group concierge.
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2 border border-[#282C34] hover:bg-[#181A1F] text-xs font-medium text-[#F5F5F2] rounded-lg transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onSelectForEarlyAccess(`Participation in ${vehicle.name}`);
              }}
              className="flex-1 sm:flex-none px-5 py-2 bg-[#2563EB] hover:bg-[#1d4ed8] text-white text-xs font-semibold rounded-lg transition-all shadow-md shadow-blue-600/30 flex items-center justify-center gap-1.5"
            >
              <span>Request Opportunity Info</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
