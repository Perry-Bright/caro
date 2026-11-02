import React from 'react';
import { Compass, Sparkles, FileCheck, Network } from 'lucide-react';

export const WhyCaro: React.FC = () => {
  const differentiators = [
    {
      title: 'Greater Accessibility',
      description: 'Participate in vehicles without independently funding the entire acquisition.',
      icon: Compass,
      tag: 'Capital Efficiency',
    },
    {
      title: 'More Possibilities',
      description: 'Explore ownership interests across different vehicles and categories.',
      icon: Sparkles,
      tag: 'Portfolio Variety',
    },
    {
      title: 'Structured Ownership',
      description: 'Keep contributions, responsibilities, documentation and usage arrangements organised.',
      icon: FileCheck,
      tag: 'Standardized Operating Agreements',
    },
    {
      title: 'A Connected Network',
      description: 'Discover opportunities through consumers, existing owners and participating dealerships.',
      icon: Network,
      tag: 'Ecosystem Scale',
    },
  ];

  return (
    <section className="py-24 bg-[#08090B] border-t border-[#202329]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="font-mono text-xs tracking-widest text-[#38BDF8] uppercase font-semibold">
            THE VALUE FOUNDATION
          </span>
          <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F2] leading-tight text-balance">
            A smarter way to think about ownership.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#A6A9B0] leading-relaxed">
            By pairing modern legal structures with seamless digital key telematics, Caro transforms how ambitious drivers acquire, share, and enjoy premium vehicles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((diff, index) => {
            const Icon = diff.icon;
            return (
              <div
                key={index}
                className="bg-[#101114] border border-[#282C34] hover:border-[#38BDF8]/40 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-colors"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#181A1F] flex items-center justify-center text-[#38BDF8] mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#F5F5F2]">{diff.title}</h3>
                  <p className="mt-2.5 text-xs text-[#A6A9B0] leading-relaxed">
                    {diff.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#202329] text-[11px] font-mono text-[#38BDF8]">
                  {diff.tag}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
