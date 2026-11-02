import React, { useState } from 'react';
import { ArrowRight, Smartphone, Shield, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenEarlyAccess: () => void;
  onOpenDownloadApp: () => void;
  onSelectCategory: (category: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenEarlyAccess,
  onOpenDownloadApp,
  onSelectCategory,
}) => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Everyday' | 'Performance' | 'Luxury' | 'SUVs'>('Performance');

  const categories = [
    { id: 'Everyday', label: 'Everyday', example: 'Toyota RAV4 Hybrid · $8,000 / share' },
    { id: 'Performance', label: 'Performance', example: 'Porsche 911 Carrera · $20,000 / share' },
    { id: 'Luxury', label: 'Luxury', example: 'Audi RS6 Avant · $25,000 / share' },
    { id: 'SUVs', label: 'Adventure SUVs', example: 'Mercedes GLE & Defender · $15,000 / share' },
  ] as const;

  const handleCategoryClick = (catId: 'Everyday' | 'Performance' | 'Luxury' | 'SUVs') => {
    setActiveCategory(catId);
    onSelectCategory(catId);
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Cinematic Image with measured gradient scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_caro_garage_1793608577926.jpg"
          alt="Curated Caro collective vehicle garage"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-[1.02] transform transition-transform duration-1000 ease-out"
        />
        {/* Measured scrim to ensure high-contrast legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-[#08090B]/85 to-[#08090B]/60" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#08090B]/50 to-[#08090B]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center sm:text-left">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="font-mono text-xs tracking-widest text-[#38BDF8] uppercase font-semibold">
              THE FUTURE OF VEHICLE OWNERSHIP
            </span>
            <span className="text-[#A6A9B0] text-xs">/</span>
            <span className="text-xs text-[#A6A9B0] font-mono">COLLECTIVE MOBILITY PLATFORM</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#F5F5F2] leading-[1.06] text-balance">
            Your garage. <br />
            Your rules. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F5F2] via-[#BAE6FD] to-[#38BDF8]">
              More possibilities.
            </span>
          </h1>

          {/* Supporting paragraph */}
          <p className="mt-6 text-base sm:text-lg text-[#A6A9B0] leading-relaxed max-w-2xl text-balance">
            Why put your entire vehicle budget into one car? Discover a smarter way to participate in the vehicles you love, together with others.
          </p>

          {/* Primary CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <a
              href="#marketplace"
              className="px-6 py-3.5 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-xl shadow-blue-600/30 hover:shadow-2xl flex items-center justify-center gap-2"
            >
              <span>Explore Caro</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenDownloadApp}
              className="px-5 py-3.5 bg-[#181A1F] hover:bg-[#202329] border border-[#282C34] hover:border-[#38BDF8]/40 text-xs sm:text-sm font-medium text-[#F5F5F2] rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <Smartphone className="w-4 h-4 text-[#38BDF8]" />
              <span>Download App</span>
            </button>
          </div>

          {/* Trust Statement */}
          <div className="mt-8 pt-6 border-t border-[#202329]/80 flex flex-wrap items-center gap-4 text-xs text-[#A6A9B0]">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#38BDF8]" />
              <span className="font-medium text-[#F5F5F2]">Collective ownership.</span>
            </div>
            <span className="hidden sm:inline text-[#282C34]">·</span>
            <span>Greater possibilities.</span>
            <span className="hidden sm:inline text-[#282C34]">·</span>
            <span>A garage that grows with you.</span>
          </div>
        </div>

        {/* Refined Horizontal Vehicle Category Selector */}
        <div className="mt-14 pt-8 border-t border-[#202329]/60">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#A6A9B0]">
              Browse Collective Syndicates by Lifestyle
            </span>
            <a
              href="#marketplace"
              className="text-xs text-[#38BDF8] hover:underline flex items-center gap-1 font-mono"
            >
              <span>View all opportunities</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
            {categories.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className={`p-3.5 rounded-xl border text-left transition-all duration-150 ${
                    isSelected
                      ? 'bg-[#181A1F] border-[#38BDF8] shadow-md shadow-sky-500/10'
                      : 'bg-[#101114]/80 border-[#282C34] hover:bg-[#181A1F] hover:border-[#38BDF8]/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-xs font-bold tracking-tight ${isSelected ? 'text-[#38BDF8]' : 'text-[#F5F5F2]'}`}>
                      {cat.label}
                    </span>
                    {isSelected && <Sparkles className="w-3 h-3 text-[#38BDF8]" />}
                  </div>
                  <span className="text-[11px] text-[#A6A9B0] block truncate">
                    {cat.example}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
