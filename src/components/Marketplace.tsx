import React, { useState } from 'react';
import { Users, Info, ArrowUpRight, Sparkles, ChevronDown, ChevronUp, Flame } from 'lucide-react';
import { VEHICLES_DATA, type VehicleOpportunity } from '../data/vehicles';

interface MarketplaceProps {
  selectedCategoryFilter?: string;
  onSelectVehicle: (vehicle: VehicleOpportunity) => void;
  onOpenEarlyAccess: (vehicleName?: string) => void;
}

export const Marketplace: React.FC<MarketplaceProps> = ({
  selectedCategoryFilter,
  onSelectVehicle,
  onOpenEarlyAccess: _onOpenEarlyAccess,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(selectedCategoryFilter || 'All');
  const [activeType, setActiveType] = useState<'Opportunities' | 'Garages' | 'Shared'>('Opportunities');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // Sync category if passed externally
  React.useEffect(() => {
    if (selectedCategoryFilter && selectedCategoryFilter !== 'All') {
      setActiveCategory(selectedCategoryFilter);
      setIsExpanded(false);
    }
  }, [selectedCategoryFilter]);

  const categories = ['All', 'Everyday', 'Luxury', 'Performance', 'SUVs'];

  const filteredVehicles = VEHICLES_DATA.filter((v) => {
    const matchesCategory = activeCategory === 'All' || v.category === activeCategory;
    const matchesType = activeType === 'Opportunities' ? true : v.type === activeType;
    return matchesCategory && matchesType;
  });

  // Always display 1 row (3 vehicles on desktop lg:grid-cols-3) unless expanded
  const INITIAL_ROW_COUNT = 3;
  const displayedVehicles = isExpanded ? filteredVehicles : filteredVehicles.slice(0, INITIAL_ROW_COUNT);
  const hasMoreVehicles = filteredVehicles.length > INITIAL_ROW_COUNT;

  const handleCategorySelect = (cat: string) => {
    setActiveCategory(cat);
    setIsExpanded(false); // Reset to 1 row on filter change
  };

  const handleTypeSelect = (type: 'Opportunities' | 'Garages' | 'Shared') => {
    setActiveType(type);
    setIsExpanded(false); // Reset to 1 row on type change
  };

  return (
    <section id="marketplace" className="py-20 sm:py-24 bg-[#08090B] border-t border-[#202329] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Controls - Mobile friendly layout */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="font-mono text-xs tracking-widest text-[#38BDF8] uppercase font-semibold">
                MARKETPLACE PREVIEW
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-[#38BDF8]">
                <span>LIVE SYNDICATES</span>
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F2] text-balance">
              Find your next ownership opportunity.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#A6A9B0] leading-relaxed">
              Discover vehicles, connect with potential co-owners and explore different ways to participate in ownership.
            </p>
          </div>

          {/* Model Type Selector - Scrollable on small screens to prevent layout breakage */}
          <div className="w-full lg:w-auto overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="inline-flex items-center gap-1 p-1 bg-[#101114] border border-[#282C34] rounded-xl min-w-max">
              <button
                onClick={() => handleTypeSelect('Opportunities')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeType === 'Opportunities'
                    ? 'bg-[#181A1F] text-[#38BDF8] border border-[#38BDF8]/40 shadow-sm'
                    : 'text-[#A6A9B0] hover:text-[#F5F5F2]'
                }`}
              >
                Ownership Opportunities
              </button>
              <button
                onClick={() => handleTypeSelect('Garages')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeType === 'Garages'
                    ? 'bg-[#181A1F] text-[#38BDF8] border border-[#38BDF8]/40 shadow-sm'
                    : 'text-[#A6A9B0] hover:text-[#F5F5F2]'
                }`}
              >
                Existing Garages
              </button>
              <button
                onClick={() => handleTypeSelect('Shared')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeType === 'Shared'
                    ? 'bg-[#181A1F] text-[#38BDF8] border border-[#38BDF8]/40 shadow-sm'
                    : 'text-[#A6A9B0] hover:text-[#F5F5F2]'
                }`}
              >
                Shared Access
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Pills - Touch-friendly horizontal swipe with clear indicator */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategorySelect(cat)}
                className={`px-3.5 sm:px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border shrink-0 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#181A1F] text-[#38BDF8] border-[#38BDF8] shadow-sm shadow-sky-500/10'
                    : 'bg-[#101114] text-[#A6A9B0] border-[#282C34] hover:text-[#F5F5F2] hover:border-[#38BDF8]/40'
                }`}
              >
                {cat === 'All' ? 'All Fleet' : cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#A6A9B0] shrink-0 self-start sm:self-auto">
            <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
            <span className="tabular-nums font-semibold text-[#F5F5F2]">{filteredVehicles.length} vehicles</span>
            <span>available in pool</span>
          </div>
        </div>

        {/* Vehicle Cards Grid - Showing exactly 1 row initially, all when revealed */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300">
          {displayedVehicles.map((vehicle) => {
            const openSlots = vehicle.totalMembers - vehicle.currentMembers;
            const progressPercent = Math.round((vehicle.currentMembers / vehicle.totalMembers) * 100);

            return (
              <div
                key={vehicle.id}
                className={`group bg-[#101114] border ${
                  vehicle.isHot
                    ? 'border-orange-500/40 hover:border-orange-400/80 shadow-orange-950/20'
                    : 'border-[#282C34] hover:border-[#38BDF8]/50'
                } rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-200 shadow-lg shadow-black/40`}
              >
                <div className="w-full">
                  {/* Card Image */}
                  <div className="relative h-48 sm:h-56 bg-[#08090B] overflow-hidden">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101114] via-transparent to-transparent opacity-85" />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2">
                      <div className="flex flex-col gap-1.5 items-start">
                        {vehicle.isHot ? (
                          <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-white bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 backdrop-blur-md px-2.5 py-1 rounded-md border border-orange-400/60 shadow-md shadow-orange-500/30">
                            <Flame className="w-3.5 h-3.5 text-white fill-amber-200 animate-pulse" />
                            <span>{vehicle.attentionBadge ? vehicle.attentionBadge.replace('🔥 ', '') : '1 SHARE REMAINING · CLOSING SOON'}</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#F5F5F2] bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#282C34]">
                            <span>{vehicle.category}</span>
                            <span className="text-white/40">·</span>
                            <span>{vehicle.year}</span>
                          </div>
                        )}
                      </div>

                      <div className="text-right bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#282C34]">
                        <span className="text-[9px] font-mono uppercase text-[#A6A9B0] block">Indicative Share</span>
                        <span className="text-xs sm:text-sm font-bold font-mono text-[#38BDF8] tabular-nums">
                          ${vehicle.contributionPerMember.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <div className="absolute bottom-2.5 left-4 right-4 text-xs font-mono text-[#A6A9B0] truncate">
                      {vehicle.location}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 sm:p-6 space-y-4">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#F5F5F2] group-hover:text-white transition-colors truncate">
                        {vehicle.name}
                      </h3>
                      <p className="mt-1 text-xs text-[#A6A9B0] line-clamp-2 leading-relaxed">
                        {vehicle.description}
                      </p>
                    </div>

                    {/* Syndicate Fill Progress Indicator */}
                    <div className="space-y-1.5 pt-1">
                      <div className="flex items-center justify-between text-xs min-w-0">
                        <span className="text-[#A6A9B0] flex items-center gap-1.5 truncate">
                          <Users className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                          <span className="truncate">{vehicle.currentMembers} of {vehicle.totalMembers} Co-Owners</span>
                        </span>
                        <span className={`font-mono text-xs font-semibold tabular-nums shrink-0 ml-2 ${vehicle.isHot ? 'text-orange-400 font-bold' : 'text-[#38BDF8]'}`}>
                          {openSlots > 0 ? `${openSlots} open` : 'Completed'}
                        </span>
                      </div>

                      {/* Clean responsive track with zero overflow */}
                      <div className="w-full bg-[#181A1F] h-2 rounded-full overflow-hidden border border-[#282C34]/80">
                        <div
                          className={`h-full rounded-full ${
                            vehicle.isHot
                              ? 'bg-gradient-to-r from-amber-500 via-orange-500 to-orange-600'
                              : 'bg-gradient-to-r from-[#0284C7] to-[#38BDF8]'
                          } transition-all duration-300`}
                          style={{ width: `${progressPercent}%` }}
                        />
                      </div>
                    </div>

                    {/* Financial Specs Grid */}
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#202329] text-xs">
                      <div className="min-w-0">
                        <span className="text-[10px] text-[#A6A9B0] block uppercase tracking-wider">Vehicle Value</span>
                        <span className="font-mono font-medium text-[#F5F5F2] tabular-nums truncate block">
                          ${vehicle.price.toLocaleString()}
                        </span>
                      </div>
                      <div className="min-w-0 text-right">
                        <span className="text-[10px] text-[#A6A9B0] block uppercase tracking-wider">Est. Opex</span>
                        <span className="font-mono font-medium text-[#38BDF8] tabular-nums truncate block">
                          ~${vehicle.estimatedMonthlyCost}/mo
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="p-4 sm:p-6 pt-0">
                  <button
                    onClick={() => onSelectVehicle(vehicle)}
                    className="w-full py-2.5 bg-[#181A1F] hover:bg-[#202329] border border-[#282C34] hover:border-[#38BDF8]/60 text-xs font-semibold rounded-xl text-[#F5F5F2] hover:text-[#38BDF8] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>View Opportunity Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All / Reveal More Toggle Button */}
        {hasMoreVehicles && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#14161B] hover:bg-[#1A1D24] border border-[#282C34] hover:border-[#38BDF8]/60 text-xs sm:text-sm font-semibold text-[#F5F5F2] hover:text-white transition-all shadow-lg hover:shadow-cyan-500/10 group cursor-pointer"
            >
              <span>
                {isExpanded
                  ? 'Show 1 Row Only'
                  : `View All ${filteredVehicles.length} Opportunities`}
              </span>
              {isExpanded ? (
                <ChevronUp className="w-4 h-4 text-[#38BDF8] group-hover:-translate-y-0.5 transition-transform" />
              ) : (
                <ChevronDown className="w-4 h-4 text-[#38BDF8] group-hover:translate-y-0.5 transition-transform" />
              )}
            </button>
          </div>
        )}

        {/* IMPORTANT FINANCIAL DISCLAIMER */}
        <div className="mt-10 sm:mt-12 p-4 sm:p-5 rounded-2xl bg-[#101114] border border-[#202329] flex items-start gap-3.5">
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
