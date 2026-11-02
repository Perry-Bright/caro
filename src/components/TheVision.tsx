import React from 'react';
import { Users, Building2, ShieldCheck, Key, CreditCard, Wrench, Landmark } from 'lucide-react';

export const TheVision: React.FC = () => {
  const ecosystemPillars = [
    { name: 'Consumers & Drivers', desc: 'Participate in diverse vehicle portfolios with lower capital entry points', icon: Users },
    { name: 'Dealership Partners', desc: 'Distribute inventory to customer groups through collaborative acquisition sales', icon: Building2 },
    { name: 'Ownership Groups', desc: 'Form syndicates, coordinate usage rules, and cast collective votes on vehicle decisions', icon: Key },
    { name: 'Financing Partners', desc: 'Tailored underwriting products designed for multi-signatory series LLCs', icon: Landmark },
    { name: 'Commercial Insurers', desc: 'Comprehensive umbrella liability coverage, physical damage, and driver telematics', icon: ShieldCheck },
    { name: 'Ownership Management', desc: 'Concierge storage, routine maintenance logistics, and real-time expense reconciliation', icon: Wrench },
  ];

  return (
    <section id="vision" className="py-24 bg-[#08090B] border-t border-[#202329] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs tracking-widest text-[#38BDF8] uppercase font-semibold">
            THE LONG-TERM HORIZON
          </span>
          <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F2] leading-tight text-balance">
            We're building more than a marketplace.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#A6A9B0] leading-relaxed">
            We believe the future of vehicle ownership will be more connected, more flexible and more accessible. Caro is building the infrastructure to make that possible.
          </p>
        </div>

        {/* Ecosystem Network Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ecosystemPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-[#101114] border border-[#282C34] rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#38BDF8]/40 transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#181A1F] border border-[#282C34] flex items-center justify-center text-[#38BDF8] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#F5F5F2]">{pillar.name}</h3>
                  <p className="mt-2 text-xs text-[#A6A9B0] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-[#202329] text-[11px] font-mono text-[#A6A9B0]">
                  Pillar 0{idx + 1} · Connected Ecosystem
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
