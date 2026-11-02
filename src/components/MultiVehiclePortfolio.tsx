import React from 'react';
import { Layers, Calendar, DollarSign, ShieldAlert, Sparkles, PieChart, ArrowRight } from 'lucide-react';
import { USER_GARAGE_PORTFOLIO } from '../data/garage';
import { calculatePortfolioSummary, type PortfolioItem } from '../utils/calculations';

interface MultiVehiclePortfolioProps {
  onOpenEarlyAccess: () => void;
}

export const MultiVehiclePortfolio: React.FC<MultiVehiclePortfolioProps> = ({ onOpenEarlyAccess }) => {
  const portfolioItems: PortfolioItem[] = USER_GARAGE_PORTFOLIO.map((h) => ({
    id: h.id,
    name: h.name,
    category: h.category,
    sharePercentage: h.sharePercentage,
    vehiclePrice: (h.contributedCapital / (h.sharePercentage / 100)),
    contributedCapital: h.contributedCapital,
    annualRunningCost: (h.monthlyExpense * 12) / (h.sharePercentage / 100),
  }));

  const summary = calculatePortfolioSummary(portfolioItems);

  return (
    <section className="py-24 bg-[#08090B] border-t border-[#202329] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs tracking-widest text-[#38BDF8] uppercase font-semibold">
            PORTFOLIO DIVERSIFICATION
          </span>
          <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F2] leading-tight text-balance">
            Your garage doesn't have to stop at one.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#A6A9B0] leading-relaxed">
            Start with one ownership interest. Add another when you're ready. Build a garage that reflects your ambitions, interests and lifestyle without financing redundant full vehicles.
          </p>
        </div>

        {/* Portfolio Summary KPI Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <div className="bg-[#101114] border border-[#282C34] rounded-2xl p-5">
            <span className="text-xs text-[#A6A9B0] block mb-1">Vehicles in Portfolio</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold font-mono text-[#F5F5F2] tabular-nums">
                {summary.totalVehicles}
              </span>
              <span className="text-xs text-[#38BDF8] font-mono">Curated Mix</span>
            </div>
            <span className="text-[11px] text-[#A6A9B0] mt-1 block">Daily · GT · Sport · SUV</span>
          </div>

          <div className="bg-[#101114] border border-[#282C34] rounded-2xl p-5">
            <span className="text-xs text-[#A6A9B0] block mb-1">Contributed Capital</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold font-mono text-[#F5F5F2] tabular-nums">
                ${summary.totalContributedCapital.toLocaleString()}
              </span>
            </div>
            <span className="text-[11px] text-[#A6A9B0] mt-1 block">vs $287,000 for solo purchase</span>
          </div>

          {/* Emerald Mint strictly preserved for positive equity yield! */}
          <div className="bg-[#101114] border border-[#282C34] rounded-2xl p-5">
            <span className="text-xs text-[#A6A9B0] block mb-1">Estimated Equity Value</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold font-mono text-[#10B981] tabular-nums">
                ${summary.totalEstimatedValue.toLocaleString()}
              </span>
            </div>
            <span className="text-[11px] text-[#10B981] mt-1 block">Positive equity yield</span>
          </div>

          <div className="bg-[#101114] border border-[#282C34] rounded-2xl p-5">
            <span className="text-xs text-[#A6A9B0] block mb-1">Monthly Allocated Opex</span>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-extrabold font-mono text-[#38BDF8] tabular-nums">
                ${summary.totalMonthlyObligations}
              </span>
              <span className="text-xs text-[#A6A9B0]">/mo</span>
            </div>
            <span className="text-[11px] text-[#A6A9B0] mt-1 block">All-in insurance & maintenance</span>
          </div>
        </div>

        {/* 4 Multi-Vehicle Holdings Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {USER_GARAGE_PORTFOLIO.map((holding) => (
            <div
              key={holding.id}
              className="bg-[#101114] border border-[#282C34] rounded-2xl overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 bg-[#08090B]">
                  <img
                    src={holding.image}
                    alt={holding.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101114] via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 text-[10px] font-mono uppercase bg-black/60 px-2 py-0.5 rounded border border-[#BAE6FD]/30 text-[#F5F5F2]">
                    {holding.category}
                  </span>
                  <span className="absolute top-3 right-3 text-xs font-mono font-bold text-[#38BDF8] bg-[#101114]/90 px-2.5 py-0.5 rounded-full border border-[#38BDF8]/40">
                    {holding.sharePercentage}% Share
                  </span>
                </div>

                <div className="p-5 space-y-3">
                  <h3 className="text-sm font-bold text-[#F5F5F2]">{holding.name}</h3>

                  <div className="space-y-1.5 text-xs text-[#A6A9B0]">
                    <div className="flex justify-between">
                      <span>Capital Contribution:</span>
                      <span className="font-mono text-[#F5F5F2] tabular-nums">
                        ${holding.contributedCapital.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Monthly Reserve:</span>
                      <span className="font-mono text-[#38BDF8] tabular-nums">
                        ${holding.monthlyExpense}/mo
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Usage Entitlement:</span>
                      <span className="font-mono text-[#F5F5F2] tabular-nums">
                        {holding.daysEntitlement} days / year
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#202329] text-[11px] text-[#A6A9B0] flex items-center justify-between">
                    <span>Days Used:</span>
                    <span className="font-mono text-[#38BDF8] tabular-nums">{holding.daysUsed} / {holding.daysEntitlement} days</span>
                  </div>
                </div>
              </div>

              {/* Cobalt Blue Syndicate Progress Bar */}
              <div className="p-5 pt-0">
                <div className="w-full bg-[#181A1F] h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#3B82F6] h-full rounded-full"
                    style={{ width: `${Math.round((holding.daysUsed / holding.daysEntitlement) * 100)}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ownership vs Usage Education Note */}
        <div className="mt-10 p-5 rounded-2xl bg-[#101114] border border-[#282C34] flex items-start gap-4">
          <ShieldAlert className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5" />
          <div className="text-xs text-[#A6A9B0] leading-relaxed space-y-1">
            <span className="font-semibold text-[#F5F5F2] block">Ownership Percentage vs. Usage Rights:</span>
            <p>
              A 25% ownership interest represents economic equity in the vehicle-owning legal structure, not automatically 25% of consecutive calendar days. Actual driving access is coordinated through syndicate operating agreements, fair rotational booking periods, and season-based reservations to ensure all co-owners enjoy seamless access.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
