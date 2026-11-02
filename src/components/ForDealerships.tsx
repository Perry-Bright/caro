import React from 'react';
import {
  Building2,
  Users,
  TrendingUp,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Check,
  Package,
} from 'lucide-react';

interface ForDealershipsProps {
  onOpenDealerModal: () => void;
}

export const ForDealerships: React.FC<ForDealershipsProps> = ({ onOpenDealerModal }) => {
  return (
    <section id="dealerships" className="py-24 bg-[#08090B] border-t border-[#202329] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs tracking-widest text-[#38BDF8] uppercase font-semibold">
            COMMERCIAL DISTRIBUTION PARTNERS
          </span>
          <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F2] leading-tight text-balance">
            Sell to more than one buyer.
          </h2>
          <p className="mt-3 text-lg font-medium text-[#38BDF8]">
            Your next customer might be a group of people.
          </p>
          <p className="mt-2 text-sm sm:text-base text-[#A6A9B0] leading-relaxed">
            Traditional vehicle sales often depend on one buyer being able to finance an entire vehicle. Caro introduces a new sales pathway by helping multiple interested customers come together to collectively acquire a vehicle.
          </p>
        </div>

        {/* The Group Sale Mechanics Visual Card */}
        <div className="bg-[#101114] border border-[#282C34] rounded-2xl p-6 sm:p-8 mb-16 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-md space-y-3">
              <span className="text-xs font-mono uppercase text-[#38BDF8] font-semibold">
                HOW A COLLECTIVE SALE WORKS
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F2]">
                Accelerate inventory velocity with syndicate acquisitions.
              </h3>
              <p className="text-xs sm:text-sm text-[#A6A9B0] leading-relaxed">
                A premium dealer lists a $40,000 vehicle. Instead of waiting weeks for an individual buyer to qualify for a solitary $800/mo loan, Caro matches 4 verified customers who each contribute $10,000. The sale settles in full, and the vehicle enters Caro's fleet management software.
              </p>
            </div>

            {/* Interactive Process Pipeline */}
            <div className="w-full lg:w-auto flex-1 bg-[#08090B] border border-[#202329] rounded-xl p-5 sm:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                {/* Stage 1 */}
                <div className="p-3.5 bg-[#181A1F] border border-[#282C34] rounded-xl space-y-1.5">
                  <span className="text-[10px] font-mono uppercase text-[#A6A9B0]">Step 1: Listing</span>
                  <div className="text-lg font-bold font-mono text-[#F5F5F2]">$40,000</div>
                  <span className="text-[11px] text-[#A6A9B0] block">Dealer inventory slot</span>
                </div>

                {/* Stage 2 */}
                <div className="p-3.5 bg-[#181A1F] border border-[#38BDF8]/50 rounded-xl space-y-1.5 shadow-sm shadow-sky-500/10">
                  <span className="text-[10px] font-mono uppercase text-[#38BDF8]">Step 2: Syndicate</span>
                  <div className="text-lg font-bold font-mono text-[#38BDF8]">4 × $10,000</div>
                  <span className="text-[11px] text-[#A6A9B0] block">Pre-vetted co-owners</span>
                </div>

                {/* Stage 3 */}
                <div className="p-3.5 bg-[#181A1F] border border-[#282C34] rounded-xl space-y-1.5">
                  <span className="text-[10px] font-mono uppercase text-[#A6A9B0]">Step 3: Settlement</span>
                  <div className="text-lg font-bold font-mono text-[#F5F5F2]">1 Full Sale</div>
                  <span className="text-[11px] text-[#A6A9B0] block">Dealer paid in full</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#202329] flex items-center justify-between text-[11px] text-[#A6A9B0]">
                <span>Caro manages group KYC, legal title entity, and digital key handover.</span>
                <span className="font-mono text-[#38BDF8]">Zero dealer friction</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Dealership Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-[#101114] border border-[#282C34] hover:border-[#38BDF8]/50 rounded-2xl p-6 flex flex-col justify-between transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#181A1F] flex items-center justify-center text-[#38BDF8] mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#F5F5F2]">Reach New Customers</h3>
              <p className="mt-2 text-xs text-[#A6A9B0] leading-relaxed">
                Connect with affluent drivers and enthusiasts who may not independently purchase an entire vehicle, but eagerly acquire a 25% interest in dream inventory.
              </p>
            </div>
            <span className="text-[11px] font-mono text-[#38BDF8] mt-4 block">Expand addressable audience</span>
          </div>

          <div className="bg-[#101114] border border-[#282C34] hover:border-[#38BDF8]/50 rounded-2xl p-6 flex flex-col justify-between transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#181A1F] flex items-center justify-center text-[#38BDF8] mb-4">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#F5F5F2]">Unlock New Sales Opportunities</h3>
              <p className="mt-2 text-xs text-[#A6A9B0] leading-relaxed">
                Introduce collective acquisition as an additional high-margin pathway for slow-moving specialty coupes, track editions, and luxury SUVs.
              </p>
            </div>
            <span className="text-[11px] font-mono text-[#38BDF8] mt-4 block">Higher turn rates</span>
          </div>

          <div className="bg-[#101114] border border-[#282C34] hover:border-[#38BDF8]/50 rounded-2xl p-6 flex flex-col justify-between transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#181A1F] flex items-center justify-center text-[#38BDF8] mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#F5F5F2]">Manage Group Interest</h3>
              <p className="mt-2 text-xs text-[#A6A9B0] leading-relaxed">
                See real-time customer interest, syndicate formation progress, and acquisition opportunities through an integrated partner command center.
              </p>
            </div>
            <span className="text-[11px] font-mono text-[#38BDF8] mt-4 block">Automated matchmaking</span>
          </div>

          <div className="bg-[#101114] border border-[#282C34] hover:border-[#38BDF8]/50 rounded-2xl p-6 flex flex-col justify-between transition-colors">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#181A1F] flex items-center justify-center text-[#38BDF8] mb-4">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#F5F5F2]">Access a New Distribution Network</h3>
              <p className="mt-2 text-xs text-[#A6A9B0] leading-relaxed">
                Become part of an elite nationwide network connecting certified dealerships, regional automotive pods, and prospective co-owners.
              </p>
            </div>
            <span className="text-[11px] font-mono text-[#38BDF8] mt-4 block">Verified dealership tier</span>
          </div>
        </div>

        {/* Dealer Portal Showcase */}
        <div className="bg-[#101114] border border-[#282C34] rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#202329]">
            <div>
              <span className="text-[11px] font-mono uppercase text-[#38BDF8]">CARO PARTNER DASHBOARD PREVIEW</span>
              <h3 className="text-xl font-bold text-[#F5F5F2]">Dealership Inventory & Syndicate Console</h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 bg-[#181A1F] border border-[#282C34] rounded text-xs text-[#A6A9B0] font-mono">
                Storefront: Apex Performance Motors
              </span>
            </div>
          </div>

          {/* Interactive Dealer Dashboard Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-[#08090B] border border-[#202329] rounded-xl space-y-2">
              <span className="text-xs text-[#A6A9B0] block">Active Syndicate Listings</span>
              <span className="text-2xl font-bold font-mono text-[#F5F5F2] tabular-nums">12 Vehicles</span>
              <span className="text-[11px] text-[#38BDF8] block">8 syndicates 75%+ formed</span>
            </div>
            <div className="p-4 bg-[#08090B] border border-[#202329] rounded-xl space-y-2">
              <span className="text-xs text-[#A6A9B0] block">Matched Prospective Buyers</span>
              <span className="text-2xl font-bold font-mono text-[#38BDF8] tabular-nums">48 Pre-Verified</span>
              <span className="text-[11px] text-[#10B981] flex items-center gap-1 font-medium">
                <Check className="w-3 h-3" />
                <span>ID & DMV background checked</span>
              </span>
            </div>
            <div className="p-4 bg-[#08090B] border border-[#202329] rounded-xl space-y-2">
              <span className="text-xs text-[#A6A9B0] block">Settled Volume (Trailing 90D)</span>
              <span className="text-2xl font-bold font-mono text-[#F5F5F2] tabular-nums">$940,000</span>
              <span className="text-[11px] text-[#A6A9B0] block">Average cycle time: 9.4 days</span>
            </div>
          </div>

          {/* Callout & Partner CTA */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#202329]">
            <div className="text-xs text-[#A6A9B0]">
              Bring your inventory to a new market. List designated inventory and receive syndicate offers.
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onOpenDealerModal}
                className="w-full sm:w-auto px-6 py-2.5 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold text-xs rounded-xl transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-1.5 shrink-0"
              >
                <span>Become a Caro Partner</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
