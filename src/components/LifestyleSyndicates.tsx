import React, { useState } from 'react';
import {
  Compass,
  Gauge,
  Mountain,
  Zap,
  SunMedium,
  ArrowRight,
  Sparkles,
  Users,
  ShieldCheck,
  Calendar,
  Flame,
} from 'lucide-react';
import { VEHICLES_DATA, type VehicleOpportunity } from '../data/vehicles';

interface LifestyleSyndicatesProps {
  onSelectVehicle: (vehicle: VehicleOpportunity) => void;
  onOpenEarlyAccess: (lifestyleName?: string) => void;
}

interface LifestylePreset {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  tagline: string;
  description: string;
  matchedVehicleIds: string[];
  keyHighlight: string;
  recommendedShare: string;
}

export const LifestyleSyndicates: React.FC<LifestyleSyndicatesProps> = ({
  onSelectVehicle,
  onOpenEarlyAccess,
}) => {
  const [activeLifestyleId, setActiveLifestyleId] = useState<string>('track');

  const lifestyles: LifestylePreset[] = [
    {
      id: 'track',
      name: 'Weekend Track & Adrenaline',
      icon: Gauge,
      tagline: 'High-rev precision and spirited canyon carving.',
      description: 'Why tie up $200k+ in a track sports car that sits in a garage Monday through Friday? Syndicate with fellow driving enthusiasts to share telemetry, tire reserves, and scheduled weekend track days.',
      matchedVehicleIds: ['porsche-911-carrera', 'ferrari-roma', 'bmw-m4-competition'],
      keyHighlight: 'White-glove track prep & climate storage included',
      recommendedShare: '16.7% - 25% Equity Share',
    },
    {
      id: 'alpine',
      name: 'Alpine Expedition & Snow',
      icon: Mountain,
      tagline: 'Off-grid overlanding and ski corridor staging.',
      description: 'Co-own heavy-duty adventure rigs pre-staged in mountain hubs (Denver, Salt Lake City, Hood River). Equipped with winter studded tires, ski lockers, and rooftop overland tents ready on arrival.',
      matchedVehicleIds: ['rivian-r1s', 'mercedes-benz-gle', 'land-rover-defender'],
      keyHighlight: 'Staged at mountain transit corridors with heated lockers',
      recommendedShare: '25% Equity Share (91 days/yr)',
    },
    {
      id: 'executive',
      name: 'Clean Tech & Executive Commute',
      icon: Zap,
      tagline: 'Whisper-quiet high-range mobility for urban business.',
      description: 'Combine ultra-efficient daily mobility with zero fuel costs. Premium electric sedans and hybrid crossovers with full digital key access, priority airport valet parking, and split insurance.',
      matchedVehicleIds: ['lucid-air-grand-touring', 'toyota-rav4-hybrid', 'porsche-taycan-cross'],
      keyHighlight: 'Complimentary high-speed charging & airport valet hubs',
      recommendedShare: '20% - 25% Equity Share (~$75-$145/mo opex)',
    },
    {
      id: 'coastal',
      name: 'Coastal Grand Touring',
      icon: SunMedium,
      tagline: 'Coastline weekend escapes and long-distance comfort.',
      description: 'Bespoke grand tourers stationed near coastal marinas and resort destinations. Ample weekend luggage capacity, open-cockpit acoustic exhausts, and seamless weekend rotation.',
      matchedVehicleIds: ['ferrari-roma', 'audi-rs6-avant', 'porsche-911-carrera'],
      keyHighlight: 'Marina valet drops & bespoke weekend luggage packing',
      recommendedShare: '20% Equity Share',
    },
  ];

  const currentLifestyle = lifestyles.find((l) => l.id === activeLifestyleId) || lifestyles[0];
  const matchedVehicles = VEHICLES_DATA.filter((v) => currentLifestyle.matchedVehicleIds.includes(v.id));

  return (
    <section id="lifestyles" className="py-24 bg-[#08090B] border-t border-[#202329] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#2563EB]/10 via-[#F97316]/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-mono font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>CURATED SYNDICATE PRESETS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F2] leading-tight text-balance">
              Browse syndicates by your actual lifestyle.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#A6A9B0] max-w-2xl leading-relaxed">
              Don’t finance cars you only drive a few weeks a year. Select your lifestyle to instantly preview matched co-ownership pods with shared insurance, concierge storage, and fair calendar rotation.
            </p>
          </div>

          <button
            onClick={() => onOpenEarlyAccess(`Curated Lifestyle: ${currentLifestyle.name}`)}
            className="self-start md:self-end px-5 py-3 rounded-xl bg-[#181A1F] hover:bg-[#202329] border border-[#38BDF8]/40 hover:border-[#38BDF8] text-[#F5F5F2] hover:text-[#38BDF8] text-xs font-bold transition-all shadow-lg shadow-sky-500/5 flex items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Request Syndicate Matching</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Lifestyle Selector Tabs - Mobile Horizontal Swipe Optimized */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {lifestyles.map((lifestyle) => {
            const isSelected = activeLifestyleId === lifestyle.id;
            const Icon = lifestyle.icon;
            return (
              <button
                key={lifestyle.id}
                onClick={() => setActiveLifestyleId(lifestyle.id)}
                className={`p-4 sm:p-5 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-[#181A1F] border-[#38BDF8] shadow-xl shadow-sky-500/10 ring-1 ring-[#38BDF8]/50'
                    : 'bg-[#101114] border-[#282C34] hover:bg-[#14161B] hover:border-[#38BDF8]/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-[#38BDF8]/20 text-[#38BDF8] border border-[#38BDF8]/40'
                          : 'bg-[#181A1F] text-[#A6A9B0] border border-[#282C34]'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    {isSelected && (
                      <span className="text-[10px] font-mono font-bold uppercase text-[#38BDF8] bg-[#38BDF8]/10 px-2 py-0.5 rounded border border-[#38BDF8]/30">
                        Active
                      </span>
                    )}
                  </div>
                  <h3 className={`text-xs sm:text-sm font-bold tracking-tight mb-1 leading-snug ${isSelected ? 'text-white' : 'text-[#F5F5F2]'}`}>
                    {lifestyle.name}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#A6A9B0] line-clamp-2 leading-relaxed">
                    {lifestyle.tagline}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#202329] flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#A6A9B0]">{lifestyle.matchedVehicleIds.length} Vehicles</span>
                  <span className={isSelected ? 'text-[#38BDF8]' : 'text-[#A6A9B0]'}>Explore &rarr;</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Lifestyle Active Showcase Banner */}
        <div className="bg-[#101114] border border-[#282C34] rounded-2xl p-6 sm:p-8 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#202329]">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-[#38BDF8] font-semibold">
                CURATED SPECIFICATION: {currentLifestyle.name}
              </span>
              <p className="text-sm text-[#F5F5F2] max-w-3xl leading-relaxed">
                {currentLifestyle.description}
              </p>
            </div>
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 text-xs font-mono shrink-0">
              <div className="bg-[#181A1F] border border-[#282C34] px-4 py-2.5 rounded-xl">
                <span className="text-[#A6A9B0] block text-[10px]">CONCIERGE PERK</span>
                <span className="text-[#38BDF8] font-bold">{currentLifestyle.keyHighlight}</span>
              </div>
              <div className="bg-[#181A1F] border border-[#282C34] px-4 py-2.5 rounded-xl">
                <span className="text-[#A6A9B0] block text-[10px]">TARGET STRUCTURE</span>
                <span className="text-[#38BDF8] font-bold">{currentLifestyle.recommendedShare}</span>
              </div>
            </div>
          </div>

          {/* Matched Vehicles Cards for this Lifestyle */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {matchedVehicles.map((vehicle) => {
              const openSlots = vehicle.totalMembers - vehicle.currentMembers;
              return (
                <div
                  key={vehicle.id}
                  className={`bg-[#181A1F] border ${
                    vehicle.isHot
                      ? 'border-orange-500/40 hover:border-orange-400/80 shadow-md shadow-orange-950/20'
                      : 'border-[#282C34] hover:border-[#38BDF8]/50'
                  } rounded-xl overflow-hidden flex flex-col justify-between group transition-all`}
                >
                  <div>
                    <div className="relative h-44 overflow-hidden bg-black">
                      <img
                        src={vehicle.image}
                        alt={vehicle.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#181A1F] via-transparent to-transparent" />
                      
                      {vehicle.isHot && (
                        <div className="absolute top-2.5 left-2.5 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 border border-orange-400/60 text-white text-[10px] font-mono font-bold px-2 py-0.5 rounded shadow-md shadow-orange-500/25 flex items-center gap-1">
                          <Flame className="w-3 h-3 text-white fill-amber-200 animate-pulse" />
                          <span>CLOSING FAST</span>
                        </div>
                      )}

                      <div className="absolute top-2.5 right-2.5 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono font-bold text-[#38BDF8] border border-[#38BDF8]/30">
                        ${vehicle.contributionPerMember.toLocaleString()} / Share
                      </div>

                      <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-xs">
                        <span className="text-white font-bold">{vehicle.name}</span>
                        <span className="text-[11px] font-mono text-[#A6A9B0]">{vehicle.location.split(',')[0]}</span>
                      </div>
                    </div>

                    <div className="p-4 space-y-3">
                      <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                        <div>
                          <span className="text-[10px] text-[#A6A9B0] block">Monthly Opex</span>
                          <span className="text-[#38BDF8] font-bold">~${vehicle.estimatedMonthlyCost}/mo</span>
                        </div>
                        <div>
                          <span className="text-[10px] text-[#A6A9B0] block">Usage Right</span>
                          <span className="text-[#F5F5F2]">{vehicle.usageEntitlement.split('via')[0].trim()}</span>
                        </div>
                      </div>

                      <div className="pt-2 border-t border-[#202329] flex items-center justify-between text-xs">
                        <span className="text-[#A6A9B0] flex items-center gap-1">
                          <Users className="w-3.5 h-3.5 text-[#38BDF8]" />
                          <span>{vehicle.currentMembers}/{vehicle.totalMembers} Members</span>
                        </span>
                        <span className="text-[11px] font-mono text-[#38BDF8]">
                          {openSlots > 0 ? `${openSlots} open` : 'Filled'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 pt-0">
                    <button
                      onClick={() => onSelectVehicle(vehicle)}
                      className="w-full py-2 bg-[#101114] hover:bg-[#202329] border border-[#282C34] hover:border-[#38BDF8]/60 text-xs font-semibold text-[#F5F5F2] hover:text-[#38BDF8] rounded-lg transition-colors flex items-center justify-center gap-1.5"
                    >
                      <span>Inspect Vehicle Pod</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Link up to Marketplace */}
        <div className="text-center">
          <a
            href="#marketplace"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#38BDF8] hover:text-white transition-colors"
          >
            <span>Looking for specific makes or categories? Explore all available marketplace syndicates</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
