import React, { useState } from 'react';
import {
  Users,
  Sparkles,
  Layers,
  KeyRound,
  Building2,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Wallet,
  Car,
  Compass,
} from 'lucide-react';

interface TargetClientsProps {
  onOpenEarlyAccess: (roleInterest?: string) => void;
  onOpenDealerModal: () => void;
}

export const TargetClients: React.FC<TargetClientsProps> = ({
  onOpenEarlyAccess,
  onOpenDealerModal,
}) => {
  const [selectedClient, setSelectedClient] = useState<string>('aspiring');

  const clients = [
    {
      id: 'aspiring',
      title: 'Aspiring Owner',
      tagline: 'Start small with limited capital.',
      badge: 'Accessible Mobility',
      icon: Compass,
      audience: 'First-time buyers, young professionals, urban commuters',
      challenge: 'High vehicle prices, climbing interest rates, and solitary loan commitments make owning a premium, reliable car financially overwhelming.',
      solution: 'Caro lets you acquire a 20%–25% equity interest in a brand-new hybrid or crossover for as low as $5,000–$8,000. You enjoy guaranteed driving calendar blocks while sharing insurance, storage, and maintenance costs.',
      keyBenefits: [
        'Accessible capital entry point without solitary bank debt',
        'Transparent all-in monthly running costs split evenly',
        'Full digital app key and concierge hub access',
        'Build documented equity and ownership history',
      ],
      exampleVehicle: 'Toyota RAV4 Hybrid XSE · $8,000 / 25% share (~$75/mo opex)',
      ctaText: 'Explore Starter Syndicates',
      ctaAction: () => onOpenEarlyAccess('Aspiring Owner: Starter Syndicate'),
    },
    {
      id: 'enthusiast',
      title: 'Enthusiast',
      tagline: 'Seek variety across several groups.',
      badge: 'Automotive Passion',
      icon: Sparkles,
      audience: 'Sports car drivers, track-day enthusiasts, luxury collectors',
      challenge: 'Financing three different enthusiast cars independently ties up hundreds of thousands in capital, while each car sits parked in a garage most of the year.',
      solution: 'Participate across multiple performance syndicates simultaneously. Hold a 16.7% share in a Porsche 911 for weekend touring, a 20% share in a BMW M4 for spirited track days, and an adventure SUV for mountain snow.',
      keyBenefits: [
        'Diverse driving experiences for the price of one solo purchase',
        'Trade booked days flexibly with syndicate co-owners',
        'Professional climate storage and track maintenance reserves',
        'Access to regional private automotive member pods',
      ],
      exampleVehicle: 'Porsche 911 Carrera & BMW M4 Competition · Split Garage Portfolio',
      ctaText: 'Join Performance Syndicates',
      ctaAction: () => onOpenEarlyAccess('Enthusiast: Performance Portfolio'),
    },
    {
      id: 'portfolio',
      title: 'Portfolio Builder',
      tagline: 'Manage interests through one account.',
      badge: 'Smart Asset Allocation',
      icon: Layers,
      audience: 'Tech executives, angel investors, family office portfolio managers',
      challenge: 'Automotive holdings have historically been opaque, illiquid, and difficult to manage across different ownership entities and insurance policies.',
      solution: 'Manage multiple fractional vehicle holdings inside one unified Digital Garage dashboard. Monitor real-time equity valuation, review automated expense reconciliations, and exercise liquid secondary market transfers.',
      keyBenefits: [
        'Single consolidated interface for all vehicle capital interests',
        'Automated split ledger for Chubb fleet insurance and maintenance',
        'Documented Series LLC operating certificates with cryptographic proofs',
        'Secondary market liquidity to transfer or rebalance holdings',
      ],
      exampleVehicle: 'Curated 4-Vehicle Garage · $58,000 Capital Allocation (4 Vehicles)',
      ctaText: 'Build Your Digital Garage',
      ctaAction: () => onOpenEarlyAccess('Portfolio Builder: Multi-Car Account'),
    },
    {
      id: 'existing',
      title: 'Existing Owner',
      tagline: 'Offer interests or structured access.',
      badge: 'Capital Monetization',
      icon: KeyRound,
      audience: 'Luxury and performance car owners whose vehicles sit parked 90%+ of the time',
      challenge: 'Carrying depreciation, registration taxes, insurance, and maintenance alone on a vehicle that is driven only a few times a month is financially inefficient.',
      solution: 'Syndicate your existing vehicle onto Caro. Liquidate 50%–75% of your vehicle equity into cash by onboarding pre-vetted co-owners, reduce your carrying costs to a fraction, and keep scheduled access for yourself.',
      keyBenefits: [
        'Recoup capital from an under-utilized high-value asset',
        'Transfer vehicle into a dedicated liability-isolated Series LLC',
        'Vetted, background-checked co-owners with digital key access control',
        'Caro concierge manages vehicle storage, detailing, and scheduling',
      ],
      exampleVehicle: 'Monetize a $80k–$150k Coupe or SUV into a Managed Syndicate',
      ctaText: 'Syndicate Your Vehicle',
      ctaAction: () => onOpenEarlyAccess('Existing Owner: Vehicle Syndication'),
    },
    {
      id: 'dealerships',
      title: 'Dealerships',
      tagline: 'Boost sales and serve a larger pool of clients.',
      badge: 'Commercial Partner',
      icon: Building2,
      audience: 'Franchised OEM dealerships, luxury exotics retailers, certified pre-owned groups',
      challenge: 'High financing rates and stringent lender qualification slow down lot turn times, leaving high-ticket vehicles sitting on floorplan interest.',
      solution: 'Unlock collective buyers as a brand-new sales channel. Caro matches groups of 4–6 pre-verified buyers who collectively fund the acquisition in full. The dealership completes an immediate full cash sale and captures recurring maintenance contracts.',
      keyBenefits: [
        'Sell to buyers who cannot or do not want to fund 100% alone',
        'Accelerate inventory turns from 60+ days to under 10 days',
        'Zero floorplan subsidy needed—syndicates fund full vehicle price',
        'Capture recurring certified maintenance and service revenue',
      ],
      exampleVehicle: 'Turn $40k–$120k Inventory into 4-person Syndicate Sales',
      ctaText: 'Partner With Caro',
      ctaAction: () => onOpenDealerModal(),
    },
  ];

  const currentClient = clients.find((c) => c.id === selectedClient) || clients[0];
  const ClientIcon = currentClient.icon;

  return (
    <section id="target-clients" className="py-24 bg-[#08090B] border-t border-[#202329] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="font-mono text-xs tracking-widest text-[#38BDF8] uppercase font-semibold">
            DESIGNED FOR EVERY MOBILITY JOURNEY
          </span>
          <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F2] leading-tight text-balance">
            Different people. One platform.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#A6A9B0] leading-relaxed">
            Whether you are taking your first step into vehicle ownership, curating an enthusiast collection, monetizing an underused asset, or expanding dealership turnover, Caro provides the infrastructure tailored to your exact needs.
          </p>
        </div>

        {/* 5-Persona Navigation Pills (Segmented Selector) */}
        <div className="w-full max-w-full overflow-x-auto pb-4 mb-8 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="inline-flex items-center gap-2 min-w-max">
            {clients.map((client) => {
              const isSelected = selectedClient === client.id;
              const Icon = client.icon;
              return (
                <button
                  key={client.id}
                  onClick={() => setSelectedClient(client.id)}
                  className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                    isSelected
                      ? 'bg-[#181A1F] text-[#38BDF8] border-[#38BDF8] shadow-md shadow-sky-500/10'
                      : 'bg-[#101114] text-[#A6A9B0] border-[#282C34] hover:text-[#F5F5F2] hover:border-[#38BDF8]/40'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{client.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Client Focus Showcase Card */}
        <div className="bg-[#101114] border-2 border-[#2563EB]/40 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Archetype Profile & Pitch */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#2563EB]/20 border border-[#38BDF8]/40 flex items-center justify-center text-[#38BDF8]">
                  <ClientIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-[#38BDF8] font-semibold block">
                    {currentClient.badge}
                  </span>
                  <h3 className="text-2xl font-bold text-[#F5F5F2]">{currentClient.title}</h3>
                </div>
              </div>

              <div className="p-4 bg-[#08090B] border border-[#202329] rounded-xl">
                <span className="text-sm font-semibold text-[#38BDF8] block">
                  "{currentClient.tagline}"
                </span>
                <span className="text-xs text-[#A6A9B0] block mt-1">
                  Target: {currentClient.audience}
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase text-[#A6A9B0] block">The Status Quo Friction:</span>
                <p className="text-xs sm:text-sm text-[#A6A9B0] leading-relaxed">
                  {currentClient.challenge}
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={currentClient.ctaAction}
                  className="w-full sm:w-auto px-6 py-3 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold text-xs rounded-xl transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
                >
                  <span>{currentClient.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Column: How Caro Specifically Caters & Key Advantages */}
            <div className="lg:col-span-7 bg-[#08090B] border border-[#202329] rounded-xl p-6 sm:p-8 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase text-[#38BDF8] font-semibold block mb-2">
                  HOW CARO CATERS SPECIFICALLY TO YOU
                </span>
                <p className="text-sm text-[#F5F5F2] leading-relaxed">
                  {currentClient.solution}
                </p>
              </div>

              <div>
                <span className="text-xs font-mono uppercase text-[#A6A9B0] block mb-3">
                  Tailored Platform Capabilities
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentClient.keyBenefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-lg bg-[#101114] border border-[#202329]">
                      <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                      <span className="text-xs text-[#F5F5F2] leading-snug">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#202329] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <span className="text-[#A6A9B0]">Representative Scenario:</span>
                <span className="font-mono text-[#BAE6FD] font-medium">{currentClient.exampleVehicle}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
