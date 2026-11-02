import React, { useState } from 'react';
import { Users, Info, ArrowUpRight, Sparkles } from 'lucide-react';
import { VEHICLES_DATA, type VehicleOpportunity } from '../data/vehicles';

interface MarketplaceProps {
  selectedCategoryFilter?: string;
  onSelectVehicle: (vehicle: VehicleOpportunity) => void;
  onOpenEarlyAccess: (vehicleName?: string) => void;
}

export const Marketplace: React.FC<MarketplaceProps> = ({
  selectedCategoryFilter,
  onSelectVehicle,
  onOpenEarlyAccess,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(selectedCategoryFilter || 'All');
  const [activeType, setActiveType] = useState<'Opportunities' | 'Garages' | 'Shared'>('Opportunities');

  // Sync category if passed from Hero selector
  React.useEffect(() => {
    if (selectedCategoryFilter && selectedCategoryFilter !== 'All') {
      setActiveCategory(selectedCategoryFilter);
    }
  }, [selectedCategoryFilter]);

  const categories = ['All', 'Everyday', 'Luxury', 'Performance', 'SUVs'];

  const filteredVehicles = VEHICLES_DATA.filter((v) => {
    const matchesCategory = activeCategory === 'All' || v.category === activeCategory;
    const matchesType = activeType === 'Opportunities' ? true : v.type === activeType;
    return matchesCategory && matchesType;
  });

  return (
    <section id="marketplace" className="py-24 bg-[#08090B] border-t border-[#202329]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-mono text-xs tracking-widest text-[#38BDF8] uppercase font-semibold">
              MARKETPLACE PREVIEW
            </span>
            <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F2] text-balance">
              Find your next ownership opportunity.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#A6A9B0] max-w-2xl leading-relaxed">
              Discover vehicles, connect with potential co-owners and explore different ways to participate in ownership.
            </p>
          </div>

          {/* Model Type Selector (Segmented control) */}
          <div className="flex items-center gap-1 p-1 bg-[#101114] border border-[#282C34] rounded-xl shrink-0">
            <button
              onClick={() => setActiveType('Opportunities')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeType === 'Opportunities'
                  ? 'bg-[#181A1F] text-[#38BDF8] shadow-sm'
                  : 'text-[#A6A9B0] hover:text-[#F5F5F2]'
              }`}
            >
              Ownership Opportunities
            </button>
            <button
              onClick={() => setActiveType('Garages')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeType === 'Garages'
                  ? 'bg-[#181A1F] text-[#38BDF8] shadow-sm'
                  : 'text-[#A6A9B0] hover:text-[#F5F5F2]'
              }`}
            >
              Existing Garages
            </button>
            <button
              onClick={() => setActiveType('Shared')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeType === 'Shared'
                  ? 'bg-[#181A1F] text-[#38BDF8] shadow-sm'
                  : 'text-[#A6A9B0] hover:text-[#F5F5F2]'
              }`}
            >
              Shared Access
            </button>
          </div>
        </div>

        {/* Category Filter Pills (Functional Buttons) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-colors border ${
                activeCategory === cat
                  ? 'bg-[#181A1F] text-[#38BDF8] border-[#38BDF8]'
                  : 'bg-[#101114] text-[#A6A9B0] border-[#282C34] hover:text-[#F5F5F2] hover:border-[#38BDF8]/40'
              }`}
            >
              {cat === 'All' ? 'All Vehicles' : cat}
            </button>
          ))}
          <span className="text-xs text-[#A6A9B0] pl-2 font-mono tabular-nums">
            {filteredVehicles.length} vehicles available
          </span>
        </div>

        {/* Vehicle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVehicles.map((vehicle) => {
            const openSlots = vehicle.totalMembers - vehicle.currentMembers;
            const progressPercent = Math.round((vehicle.currentMembers / vehicle.totalMembers) * 100);

            return (
              <div
                key={vehicle.id}
                className="group bg-[#101114] border border-[#282C34] hover:border-[#38BDF8]/40 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-200"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative h-48 sm:h-56 bg-[#08090B] overflow-hidden">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101114] via-transparent to-transparent opacity-80" />
                    
                    {/* Quiet Unboxed Metadata Tags with Liquid Silver Border */}
                    <div className="absolute top-3 left-3 flex items-center gap-2 text-[11px] font-mono text-[#F5F5F2] bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#BAE6FD]/30">
                      <span>{vehicle.category}</span>
                      <span className="text-white/40">·</span>
                      <span>{vehicle.year}</span>
                    </div>

                    <div className="absolute top-3 right-3 text-right">
                      <span className="text-[10px] font-mono uppercase text-[#A6A9B0] block">Indicative Share</span>
                      <span className="text-sm font-bold font-mono text-[#38BDF8] tabular-nums">
                        ${vehicle.contributionPerMember.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6 space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-[#F5F5F2] group-hover:text-white transition-colors">
                        {vehicle.name}
                      </h3>
                      <p className="mt-1 text-xs text-[#A6A9B0] line-clamp-2 leading-relaxed">
                        {vehicle.description}
                      </p>
                    </div>

                    {/* Progress & Group Size */}
                    <div className="space-y-1.5 pt-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#A6A9B0] flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5 text-[#38BDF8]" />
                          <span>{vehicle.currentMembers} of {vehicle.totalMembers} Co-Owners</span>
                        </span>
                        <span className="font-mono text-xs font-semibold text-[#38BDF8] tabular-nums">
                          {openSlots > 0 ? `${openSlots} open` : 'Completed'}
                        </span>
                      </div>
                      <div className="w-full bg-[#181A1F] h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-[#3B82F6] h-full rounded-full transition-all duration-300"
                          style={{ width: `${progressPercent}%` }}
                        />
                      </div>
                    </div>

                    {/* Financial Specs */}
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#202329] text-xs">
                      <div>
                        <span className="text-[11px] text-[#A6A9B0] block">Vehicle Value</span>
                        <span className="font-mono font-medium text-[#F5F5F2] tabular-nums">
                          ${vehicle.price.toLocaleString()}
                        </span>
                      </div>
                      <div>
                        <span className="text-[11px] text-[#A6A9B0] block">Est. Running Costs</span>
                        <span className="font-mono font-medium text-[#38BDF8] tabular-nums">
                          ~${vehicle.estimatedMonthlyCost}/mo
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="p-5 sm:p-6 pt-0">
                  <button
                    onClick={() => onSelectVehicle(vehicle)}
                    className="w-full py-2.5 bg-[#181A1F] hover:bg-[#202329] border border-[#282C34] hover:border-[#38BDF8]/60 text-xs font-semibold text-[#F5F5F2] rounded-xl transition-all flex items-center justify-center gap-1.5 group-hover:text-[#38BDF8]"
                  >
                    <span>View Opportunity Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* IMPORTANT FINANCIAL DISCLAIMER */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-[#101114] border border-[#202329] flex items-start gap-3.5">
          <Info className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5" />
          <div className="text-xs text-[#A6A9B0] leading-relaxed space-y-1">
            <span className="font-semibold text-[#F5F5F2] block">Illustrative Financial Information:</span>
            <p>
              All vehicle prices, contributions, group sizes, and portfolio examples shown are illustrative and do not constitute financing offers. Actual costs and ownership rights depend on the vehicle, financing arrangements, legal structure, insurance, applicable laws, and agreements between participants. Caro does not provide financing or guarantee vehicle availability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
