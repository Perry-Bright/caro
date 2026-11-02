import React from 'react';
import { ShieldCheck, KeyRound, CheckCircle2, AlertCircle } from 'lucide-react';

export const OwnershipVsAccess: React.FC = () => {
  return (
    <section className="py-24 bg-[#08090B] border-t border-[#202329] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs tracking-widest text-[#38BDF8] uppercase font-semibold">
            TRANSPARENCY & LEGAL STRUCTURE
          </span>
          <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F2] leading-tight text-balance">
            More than access. Real ownership possibilities.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#A6A9B0] leading-relaxed">
            Understanding the distinction between true equity ownership and flexible access is central to the Caro standard. Both models serve distinct lifestyles, but their legal and economic realities are clearly separated.
          </p>
        </div>

        {/* 2 Distinguished Model Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Card A: Collective Ownership */}
          <div className="bg-[#101114] border-2 border-[#2563EB]/70 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl shadow-blue-950/20">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#202329]">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#38BDF8] font-semibold">MODEL A · DIRECT EQUITY</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F2] mt-1">Collective Ownership</h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#2563EB]/20 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>

              <p className="mt-6 text-sm text-[#F5F5F2] leading-relaxed">
                Acquire a genuine ownership interest through an agreed legal structure. Participate in ownership responsibilities and benefit from the rights defined by the relevant agreements.
              </p>

              <div className="mt-6 space-y-3">
                <span className="text-xs font-mono uppercase text-[#A6A9B0] block">Key Characteristics:</span>
                <ul className="space-y-2 text-xs text-[#A6A9B0]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                    <span><strong className="text-[#F5F5F2]">Legal Title:</strong> Asset titled under an isolated Series LLC or dedicated holding structure with recorded member certificates.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                    <span><strong className="text-[#F5F5F2]">Capital Equity:</strong> Benefit from residual asset value or sale appreciation upon secondary market liquidation.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                    <span><strong className="text-[#F5F5F2]">Governance:</strong> Collective voting on servicing, performance upgrades, relocation, and exit horizons.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#202329] text-xs font-mono text-[#38BDF8]">
              True legal equity · Asset-backed security
            </div>
          </div>

          {/* Card B: Shared Access */}
          <div className="bg-[#101114] border border-[#282C34] rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#202329]">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#A6A9B0]">MODEL B · USAGE SUBSCRIPTION</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F2] mt-1">Shared Access</h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#181A1F] border border-[#282C34] flex items-center justify-center text-[#A6A9B0]">
                  <KeyRound className="w-5 h-5" />
                </div>
              </div>

              <p className="mt-6 text-sm text-[#A6A9B0] leading-relaxed">
                Access a vehicle through a structured agreement with its existing owner or an authorised provider, without necessarily acquiring legal ownership.
              </p>

              <div className="mt-6 space-y-3">
                <span className="text-xs font-mono uppercase text-[#A6A9B0] block">Key Characteristics:</span>
                <ul className="space-y-2 text-xs text-[#A6A9B0]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#A6A9B0] shrink-0 mt-0.5" />
                    <span><strong className="text-[#F5F5F2]">No Equity Title:</strong> Structured strictly as a usage right or lease tier without taking on legal capital risks.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#A6A9B0] shrink-0 mt-0.5" />
                    <span><strong className="text-[#F5F5F2]">Minimal Commitment:</strong> Shorter seasonal terms (e.g. 3-6 month access blocks) with simplified exit criteria.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#A6A9B0] shrink-0 mt-0.5" />
                    <span><strong className="text-[#F5F5F2]">Fixed Predictability:</strong> Comprehensive single monthly rate covering storage, maintenance, and insurance.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#202329] text-xs font-mono text-[#A6A9B0]">
              Operational flexibility · Zero balance sheet obligations
            </div>
          </div>
        </div>

        {/* Advisory Box */}
        <div className="mt-10 p-4 rounded-xl bg-[#101114] border border-[#202329] text-xs text-[#A6A9B0] flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            Caro clearly demarcates whether every vehicle opportunity involves fractional corporate title or third-party fleet access rights. We do not imply that shared-access agreements confer legal equity or title rights.
          </p>
        </div>
      </div>
    </section>
  );
};
