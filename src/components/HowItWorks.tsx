import React from 'react';
import { Compass, Users2, ShieldCheck, ArrowRight, Calendar, Key, Check } from 'lucide-react';

interface HowItWorksProps {
  onOpenEarlyAccess: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenEarlyAccess }) => {
  return (
    <section id="how-it-works" className="py-24 bg-[#08090B] border-t border-[#202329] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs tracking-widest text-[#38BDF8] uppercase font-semibold">
            THE PROCESS
          </span>
          <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F2] leading-tight text-balance">
            Ownership, reimagined.
          </h2>
          <p className="mt-4 text-base text-[#A6A9B0] leading-relaxed">
            Caro standardizes collective acquisition from discovery to legal structuring and digital keys. Here is how you participate in a vehicle syndicate in three disciplined steps.
          </p>
        </div>

        {/* 3-Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Step 1: Discover */}
          <div className="bg-[#101114] border border-[#282C34] hover:border-[#38BDF8]/50 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-2xl font-bold text-[#38BDF8]">01</span>
                <div className="w-10 h-10 rounded-xl bg-[#181A1F] border border-[#282C34] flex items-center justify-center text-[#38BDF8]">
                  <Compass className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#F5F5F2]">Discover</h3>
              <p className="mt-2 text-xs sm:text-sm text-[#A6A9B0] leading-relaxed">
                Explore vehicles and ownership opportunities that match your interests and budget.
              </p>

              {/* Realistic Visual Interface Mockup */}
              <div className="mt-6 bg-[#08090B] border border-[#202329] rounded-xl p-3.5 space-y-2">
                <div className="flex items-center justify-between text-[11px] text-[#A6A9B0]">
                  <span>Filter by Budget</span>
                  <span className="font-mono text-[#38BDF8]">$5k - $25k Share</span>
                </div>
                <div className="w-full bg-[#181A1F] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#3B82F6] h-full w-2/3 rounded-full" />
                </div>
                <div className="pt-2 flex items-center justify-between text-[11px]">
                  <span className="text-[#F5F5F2] font-medium">Curated Regional Hubs</span>
                  <span className="text-[#A6A9B0] font-mono">14 Available</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#202329] text-xs text-[#A6A9B0]">
              Browse verified inventory and pre-vetted syndicates across major hubs.
            </div>
          </div>

          {/* Step 2: Connect */}
          <div className="bg-[#101114] border border-[#282C34] hover:border-[#38BDF8]/50 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-2xl font-bold text-[#38BDF8]">02</span>
                <div className="w-10 h-10 rounded-xl bg-[#181A1F] border border-[#282C34] flex items-center justify-center text-[#38BDF8]">
                  <Users2 className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#F5F5F2]">Connect</h3>
              <p className="mt-2 text-xs sm:text-sm text-[#A6A9B0] leading-relaxed">
                Find compatible co-owners or join an existing ownership group.
              </p>

              {/* Realistic Visual Interface Mockup */}
              <div className="mt-6 bg-[#08090B] border border-[#202329] rounded-xl p-3.5 space-y-2.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-[#A6A9B0]">Syndicate Composition</span>
                  <span className="text-[#38BDF8] font-mono font-medium">3 of 4 Ready</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-6 h-6 rounded-full bg-[#202329] border border-[#38BDF8]/60 text-[10px] font-mono flex items-center justify-center text-[#38BDF8]">
                    JD
                  </div>
                  <div className="w-6 h-6 rounded-full bg-[#202329] border border-[#38BDF8]/60 text-[10px] font-mono flex items-center justify-center text-[#38BDF8]">
                    MK
                  </div>
                  <div className="w-6 h-6 rounded-full bg-[#202329] border border-[#38BDF8]/60 text-[10px] font-mono flex items-center justify-center text-[#38BDF8]">
                    AL
                  </div>
                  <div className="w-6 h-6 rounded-full border border-dashed border-[#A6A9B0] text-[10px] font-mono flex items-center justify-center text-[#A6A9B0]">
                    +1
                  </div>
                </div>
                <span className="text-[10px] text-[#10B981] flex items-center gap-1">
                  <Check className="w-3 h-3" />
                  <span>Vetted drivers & clean DMV background checks</span>
                </span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#202329] text-xs text-[#A6A9B0]">
              Align on schedule requirements, storage location, and usage rules.
            </div>
          </div>

          {/* Step 3: Own Together */}
          <div className="bg-[#101114] border border-[#282C34] hover:border-[#38BDF8]/50 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-200">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-2xl font-bold text-[#38BDF8]">03</span>
                <div className="w-10 h-10 rounded-xl bg-[#181A1F] border border-[#282C34] flex items-center justify-center text-[#38BDF8]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#F5F5F2]">Own Together</h3>
              <p className="mt-2 text-xs sm:text-sm text-[#A6A9B0] leading-relaxed">
                Complete the acquisition through an agreed ownership structure and manage your vehicle experience through Caro.
              </p>

              {/* Realistic Visual Interface Mockup */}
              <div className="mt-6 bg-[#08090B] border border-[#202329] rounded-xl p-3.5 space-y-2.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-[#F5F5F2] font-semibold flex items-center gap-1.5">
                    <Key className="w-3.5 h-3.5 text-[#38BDF8]" />
                    <span>Digital Key Active</span>
                  </span>
                  <span className="text-[#10B981] text-[10px] font-mono flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    <span>Title Secured</span>
                  </span>
                </div>
                <div className="flex items-center justify-between text-[10px] text-[#A6A9B0] pt-1 border-t border-[#181A1F]">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#A6A9B0]" /> Next Booking
                  </span>
                  <span className="text-[#F5F5F2]">Friday 9:00 AM</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#202329] flex items-center justify-between text-xs">
              <span className="text-[#A6A9B0]">App-enabled keys & logistics</span>
              <button
                onClick={onOpenEarlyAccess}
                className="text-[#38BDF8] font-semibold hover:underline flex items-center gap-1"
              >
                <span>Get Started</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
