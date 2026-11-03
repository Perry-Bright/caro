import React from 'react';
import { ArrowRight, CheckCircle2, Lock, Sparkles, Layers } from 'lucide-react';
import { IMAGES } from '../data/images';

interface TheBigIdeaProps {
  onOpenEarlyAccess: () => void;
}

export const TheBigIdea: React.FC<TheBigIdeaProps> = ({ onOpenEarlyAccess }) => {
  return (
    <section className="py-24 bg-[#08090B] border-t border-[#202329] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs tracking-widest text-[#38BDF8] uppercase font-semibold">
            THE PARADIGM SHIFT
          </span>
          <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F2] leading-tight text-balance">
            What if owning one car wasn't your only option?
          </h2>
          <p className="mt-4 text-base text-[#A6A9B0] leading-relaxed">
            For decades, personal mobility forced an all-or-nothing trade-off: compromise on a single vehicle that must serve every weekday commute, mountain weekend, and track session. Caro introduces a collaborative path.
          </p>
        </div>

        {/* 2-Column Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* LEFT: Traditional Ownership */}
          <div className="bg-[#101114] border border-[#282C34] rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#202329]">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#A6A9B0]">CONVENTIONAL MODEL</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F2] mt-0.5">One budget. One car.</h3>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#181A1F] flex items-center justify-center text-[#A6A9B0]">
                  <Lock className="w-4 h-4" />
                </div>
              </div>

              {/* Visual Presentation */}
              <div className="mt-6 rounded-xl overflow-hidden border border-[#202329] relative">
                <img
                  src={IMAGES.toyotaRav4}
                  alt="Single vehicle commitment"
                  referrerPolicy="no-referrer"
                  className="w-full h-52 sm:h-60 object-cover object-center grayscale contrast-110 opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101114] via-[#101114]/40 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-[#A6A9B0]">
                  <span>Single Asset Focus</span>
                  <span className="font-mono text-[#F5F5F2]">100% Capital Lockup</span>
                </div>
              </div>

              <p className="mt-6 text-sm text-[#A6A9B0] leading-relaxed">
                Traditional vehicle ownership often requires you to commit most of your available budget to acquiring and maintaining a single vehicle. When your lifestyle changes—or when you want spirited driving rather than city utility—you are constrained to whatever is sitting in your single driveway.
              </p>

              <ul className="mt-4 space-y-2 text-xs text-[#A6A9B0]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A6A9B0]" />
                  <span>100% of depreciation, financing interest, and maintenance carried alone</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A6A9B0]" />
                  <span>Vehicle sits idle 90%+ of the week in standard commuter routines</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A6A9B0]" />
                  <span>High friction and transaction losses when trading or selling</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[#202329] text-xs font-mono text-[#A6A9B0]">
              Status Quo: High capital intensity · Zero portfolio diversity
            </div>
          </div>

          {/* RIGHT: The Caro Approach */}
          <div className="bg-[#101114] border-2 border-[#2563EB]/70 rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl shadow-blue-950/20">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#202329]">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#38BDF8] font-semibold">THE CARO ADVANTAGE</span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F2] mt-0.5">One budget. More possibilities.</h3>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#2563EB]/20 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8]">
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>

              {/* Visual Presentation: Curated Trio of Vehicles */}
              <div className="mt-6 grid grid-cols-3 gap-2 rounded-xl overflow-hidden p-2 bg-[#08090B] border border-[#202329]">
                <div className="relative rounded-lg overflow-hidden h-28 sm:h-36">
                  <img
                    src={IMAGES.toyotaRav4}
                    alt="Daily EV/Hybrid"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <span className="absolute bottom-1.5 left-1.5 text-[10px] font-mono text-white font-medium">Everyday</span>
                </div>
                <div className="relative rounded-lg overflow-hidden h-28 sm:h-36 border border-[#38BDF8]/60">
                  <img
                    src={IMAGES.porsche911}
                    alt="Sports Coupe"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <span className="absolute bottom-1.5 left-1.5 text-[10px] font-mono text-[#38BDF8] font-medium">Performance</span>
                </div>
                <div className="relative rounded-lg overflow-hidden h-28 sm:h-36">
                  <img
                    src={IMAGES.mercedesGle}
                    alt="Luxury SUV"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <span className="absolute bottom-1.5 left-1.5 text-[10px] font-mono text-white font-medium">Adventure</span>
                </div>
              </div>

              <p className="mt-6 text-sm text-[#A6A9B0] leading-relaxed">
                With collective ownership, you can participate in different vehicles, distribute your ownership interests and build a garage over time. Allocate a share of your monthly budget to an efficient daily commuter, and another share to a track sports car or mountain SUV.
              </p>

              <ul className="mt-4 space-y-2 text-xs text-[#F5F5F2]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                  <span>Proportional capital contribution matching exact usage interests</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                  <span>Shared insurance, climate storage, detailing, and routine servicing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                  <span>Liquid secondary transfer rights via standardized Caro series ledgers</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[#202329] flex items-center justify-between">
              <span className="text-xs font-mono text-[#38BDF8]">
                Smart Allocation: 3-4 diverse vehicle interests
              </span>
              <button
                onClick={onOpenEarlyAccess}
                className="text-xs font-semibold text-[#F5F5F2] hover:text-[#38BDF8] flex items-center gap-1 transition-colors"
              >
                <span>Join waitlist</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* Responsible Disclaimer */}
        <div className="mt-10 p-4 rounded-xl bg-[#101114] border border-[#202329] text-xs text-[#A6A9B0] flex items-start gap-3">
          <Layers className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-[#F5F5F2]">Usage & Ownership Note:</strong> Collective ownership distributes economic rights and responsibilities. Access to each vehicle operates under scheduled usage guidelines and fair-share calendar reservations agreed upon by each group. Access is governed by individual operating agreements and does not imply simultaneous 24/7 possession of all vehicles.
          </p>
        </div>
      </div>
    </section>
  );
};
