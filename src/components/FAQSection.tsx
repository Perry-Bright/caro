import React, { useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';
import { FAQ_DATA } from '../data/faq';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-[#08090B] border-t border-[#202329]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center sm:text-left">
          <span className="font-mono text-xs tracking-widest text-[#38BDF8] uppercase font-semibold">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F2] text-balance">
            Clear answers on collective ownership.
          </h2>
          <p className="mt-3 text-sm text-[#A6A9B0] leading-relaxed">
            Everything you need to know about legal series structures, usage schedules, maintenance allocation, and dealer partnerships.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-[#101114] border border-[#282C34] rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-[#181A1F]/50 transition-colors"
                >
                  <span className="text-sm sm:text-base font-semibold text-[#F5F5F2]">
                    {item.question}
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-[#181A1F] border border-[#282C34] flex items-center justify-center text-[#38BDF8] shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#A6A9B0] leading-relaxed border-t border-[#202329]/60">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
