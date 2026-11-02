import React, { useState } from 'react';
import {
  Car,
  DollarSign,
  Calendar,
  FileText,
  Wrench,
  TrendingUp,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  Shield,
  Smartphone,
  Vote,
  Sparkles,
} from 'lucide-react';
import { USER_GARAGE_PORTFOLIO, UPCOMING_RESERVATIONS, MAINTENANCE_LOGS, LEGAL_DOCUMENTS } from '../data/garage';

interface DigitalGarageShowcaseProps {
  onOpenEarlyAccess: () => void;
  onOpenDownloadApp: () => void;
}

export const DigitalGarageShowcase: React.FC<DigitalGarageShowcaseProps> = ({
  onOpenEarlyAccess,
  onOpenDownloadApp,
}) => {
  const [activeTab, setActiveTab] = useState<'garage' | 'financial' | 'access' | 'legal' | 'maintenance' | 'opportunities'>('garage');

  const tabs = [
    { id: 'garage', label: 'My Garage', icon: Car },
    { id: 'financial', label: 'Financial Overview', icon: DollarSign },
    { id: 'access', label: 'Vehicle Access', icon: Calendar },
    { id: 'legal', label: 'Ownership Management', icon: FileText },
    { id: 'maintenance', label: 'Maintenance & Expenses', icon: Wrench },
    { id: 'opportunities', label: 'Syndicate Opportunities', icon: TrendingUp },
  ] as const;

  return (
    <section id="digital-garage" className="py-24 bg-[#08090B] border-t border-[#202329]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="font-mono text-xs tracking-widest text-[#38BDF8] uppercase font-semibold">
            THE PLATFORM INTERFACE
          </span>
          <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F5F5F2] text-balance">
            Everything you own. One place.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#A6A9B0] leading-relaxed">
            Your ownership interests, vehicle information, contributions and shared responsibilities, organised in one intelligent platform.
          </p>
        </div>

        {/* Dashboard Frame */}
        <div className="bg-[#101114] border border-[#282C34] rounded-2xl overflow-hidden shadow-2xl">
          {/* Top Window Header */}
          <div className="px-6 py-4 bg-[#08090B] border-b border-[#202329] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#282C34]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#282C34]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#282C34]" />
              </div>
              <span className="text-xs font-mono font-medium text-[#F5F5F2]">CARO OPERATING SYSTEM v2.6 · GARAGE DASHBOARD</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onOpenDownloadApp}
                className="px-3 py-1 bg-[#181A1F] hover:bg-[#202329] border border-[#282C34] text-[11px] font-medium text-[#38BDF8] rounded-lg transition-colors flex items-center gap-1"
              >
                <Smartphone className="w-3 h-3" />
                <span>Open in App</span>
              </button>
              <span className="text-xs font-mono text-[#A6A9B0] px-2 py-0.5 rounded bg-[#181A1F]">
                4 Holdings Active
              </span>
            </div>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="border-b border-[#202329] bg-[#101114] px-4 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-2 py-2 min-w-max">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as typeof activeTab)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all whitespace-nowrap ${
                      isActive
                        ? 'bg-[#181A1F] text-[#38BDF8] border border-[#38BDF8]/50 shadow-sm'
                        : 'text-[#A6A9B0] hover:text-[#F5F5F2] hover:bg-[#181A1F]/50'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content Panes */}
          <div className="p-6 sm:p-8 min-h-[460px]">
            {/* Tab 1: My Garage */}
            {activeTab === 'garage' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-[#F5F5F2]">Active Vehicle Interests</h3>
                  <span className="text-xs text-[#10B981] font-mono flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Portfolio Health: 100% Operational</span>
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {USER_GARAGE_PORTFOLIO.map((holding) => (
                    <div
                      key={holding.id}
                      className="bg-[#181A1F] border border-[#282C34] rounded-xl p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between"
                    >
                      <div className="flex items-center gap-3.5">
                        <img
                          src={holding.image}
                          alt={holding.name}
                          className="w-20 h-14 rounded-lg object-cover shrink-0 border border-[#282C34]"
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-[#F5F5F2]">{holding.name}</span>
                            <span className="text-[10px] font-mono text-[#38BDF8] bg-[#202329] px-2 py-0.5 rounded">
                              {holding.sharePercentage}%
                            </span>
                          </div>
                          <span className="text-[11px] text-[#A6A9B0] block mt-0.5">{holding.location}</span>
                          <span className="text-[11px] text-[#A6A9B0] block">Next: {holding.nextScheduledDrive}</span>
                        </div>
                      </div>

                      <div className="text-left sm:text-right w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-[#202329]">
                        <span className="text-[11px] text-[#A6A9B0] block">Your Equity Share</span>
                        <span className="font-mono text-xs font-semibold text-[#F5F5F2] tabular-nums">
                          ${holding.currentValue.toLocaleString()}
                        </span>
                        {/* Emerald Mint preserved for verified status */}
                        <span className="text-[10px] text-[#10B981] block font-medium">Fully Insured</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 2: Financial Overview */}
            {activeTab === 'financial' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-[#F5F5F2]">Capital Allocation & Monthly Obligations</h3>
                  <span className="text-xs text-[#10B981] font-mono flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Q4 Statements Reconciled</span>
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-[#181A1F] border border-[#282C34] rounded-xl">
                    <span className="text-xs text-[#A6A9B0] block">Total Contributed Capital</span>
                    <span className="text-2xl font-bold font-mono text-[#F5F5F2] mt-1 block tabular-nums">$58,000.00</span>
                    <span className="text-[11px] text-[#A6A9B0] mt-1 block">Across 4 vehicle syndicates</span>
                  </div>
                  {/* Emerald Mint preserved exclusively for positive equity yields! */}
                  <div className="p-4 bg-[#181A1F] border border-[#282C34] rounded-xl">
                    <span className="text-xs text-[#A6A9B0] block">Estimated Net Equity</span>
                    <span className="text-2xl font-bold font-mono text-[#10B981] mt-1 block tabular-nums">$58,950.00</span>
                    <span className="text-[11px] text-[#10B981] mt-1 block">+1.6% (Positive equity yield index)</span>
                  </div>
                  <div className="p-4 bg-[#181A1F] border border-[#282C34] rounded-xl">
                    <span className="text-xs text-[#A6A9B0] block">Monthly Consolidated Opex</span>
                    <span className="text-2xl font-bold font-mono text-[#38BDF8] mt-1 block tabular-nums">$490.00/mo</span>
                    <span className="text-[11px] text-[#A6A9B0] mt-1 block">Includes insurance, maintenance reserve, and bays</span>
                  </div>
                </div>

                <div className="bg-[#181A1F] border border-[#282C34] rounded-xl p-5 space-y-3">
                  <h4 className="text-xs font-semibold text-[#F5F5F2] uppercase tracking-wider">Automated Cost Allocation Breakdown</h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between py-1.5 border-b border-[#202329]">
                      <span className="text-[#A6A9B0]">Commercial Umbrella Fleet Insurance (Chubb Master)</span>
                      <span className="font-mono text-[#F5F5F2] tabular-nums">$215.00/mo</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-[#202329]">
                      <span className="text-[#A6A9B0]">Climate-Controlled Vault Storage & Security Pods</span>
                      <span className="font-mono text-[#F5F5F2] tabular-nums">$160.00/mo</span>
                    </div>
                    <div className="flex justify-between py-1.5 border-b border-[#202329]">
                      <span className="text-[#A6A9B0]">Routine Detailing & Consumables Reserve (Tires/Brakes)</span>
                      <span className="font-mono text-[#F5F5F2] tabular-nums">$115.00/mo</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Vehicle Access & Calendar */}
            {activeTab === 'access' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-[#F5F5F2]">Vehicle Access & Drive Reservations</h3>
                  <button
                    onClick={onOpenDownloadApp}
                    className="px-3.5 py-1.5 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold text-xs rounded-lg flex items-center gap-1.5 shadow-md shadow-blue-600/25 transition-colors"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Reserve New Dates in App</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Reservations list */}
                  <div className="lg:col-span-2 space-y-3">
                    <span className="text-xs font-mono text-[#A6A9B0] uppercase block">Upcoming Confirmed Drives</span>
                    {UPCOMING_RESERVATIONS.map((res) => (
                      <div
                        key={res.id}
                        className="p-4 bg-[#181A1F] border border-[#282C34] rounded-xl flex items-center justify-between"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-[#F5F5F2]">{res.vehicle}</span>
                            <span className="text-[10px] font-mono text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/30 px-2 py-0.5 rounded">
                              {res.status}
                            </span>
                          </div>
                          <span className="text-xs text-[#A6A9B0] block">{res.dates} · {res.purpose}</span>
                          <span className="text-[11px] text-[#A6A9B0] font-mono block">Pickup: {res.pickup}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs text-[#38BDF8] font-mono block">Key Synced</span>
                          <span className="text-[11px] text-[#A6A9B0] block">Digital UWB</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Entitlement meter */}
                  <div className="bg-[#181A1F] border border-[#282C34] rounded-xl p-5 space-y-4">
                    <h4 className="text-xs font-semibold text-[#F5F5F2] uppercase tracking-wider">Annual Day Entitlement</h4>
                    <div className="space-y-3 text-xs">
                      <div>
                        <div className="flex justify-between text-[#A6A9B0] mb-1">
                          <span>Total Days Allocated:</span>
                          <span className="font-mono text-[#F5F5F2]">316 days / yr</span>
                        </div>
                        <div className="flex justify-between text-[#A6A9B0] mb-1">
                          <span>Days Used:</span>
                          <span className="font-mono text-[#38BDF8]">135 days</span>
                        </div>
                        <div className="flex justify-between text-[#A6A9B0]">
                          <span>Days Remaining:</span>
                          <span className="font-mono text-[#F5F5F2]">181 days</span>
                        </div>
                      </div>

                      {/* Cobalt Blue progress bar */}
                      <div className="w-full bg-[#101114] h-2 rounded-full overflow-hidden">
                        <div className="bg-[#3B82F6] h-full w-[43%] rounded-full" />
                      </div>

                      <p className="text-[11px] text-[#A6A9B0] leading-relaxed pt-2 border-t border-[#202329]">
                        Trade unreserved dates with co-owners or deposit unused days into the Caro Syndicate Exchange for credits across other vehicle categories.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 4: Ownership Management & Legal */}
            {activeTab === 'legal' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-[#F5F5F2]">Legal Structures & Governance Votes</h3>
                  <span className="text-xs font-mono text-[#10B981] flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>All Series Certificates Verified</span>
                  </span>
                </div>

                <div className="space-y-3">
                  {LEGAL_DOCUMENTS.map((doc) => (
                    <div
                      key={doc.id}
                      className="p-4 bg-[#181A1F] border border-[#282C34] rounded-xl flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-[#202329] flex items-center justify-center text-[#38BDF8]">
                          <FileText className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-[#F5F5F2] block">{doc.title}</span>
                          <span className="text-[11px] text-[#A6A9B0] block">
                            {doc.category} · Updated {doc.lastUpdated}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-[#10B981] font-mono block font-medium">{doc.signatories}</span>
                        <span className="text-[10px] text-[#A6A9B0]">Cryptographically Signed</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Active Group Vote Card */}
                <div className="p-4 bg-[#181A1F] border border-[#38BDF8]/40 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <Vote className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-[#F5F5F2] block">
                        Open Syndicate Vote: Winter Wheel & Tire Set for Mercedes-Benz GLE 450
                      </span>
                      <p className="text-xs text-[#A6A9B0] mt-0.5">
                        Vote deadline: Nov 08, 2026. Proposal to allocate $1,400 from reserve for dedicated snow set ($350/share). 3 of 4 votes submitted (3 in favor).
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => alert('Vote recorded: In Favor')}
                    className="px-4 py-2 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold text-xs rounded-lg shrink-0 transition-colors shadow-md shadow-blue-600/25"
                  >
                    Submit Vote (In Favor)
                  </button>
                </div>
              </div>
            )}

            {/* Tab 5: Maintenance & Expenses */}
            {activeTab === 'maintenance' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-[#F5F5F2]">Vehicle Service History & Shared Expenses</h3>
                  <span className="text-xs text-[#A6A9B0] font-mono">Automated Split Ledger</span>
                </div>

                <div className="space-y-3">
                  {MAINTENANCE_LOGS.map((log) => (
                    <div
                      key={log.id}
                      className="p-4 bg-[#181A1F] border border-[#282C34] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-[#202329] flex items-center justify-center text-[#38BDF8] shrink-0">
                          <Wrench className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-[#F5F5F2]">{log.vehicle}</span>
                            <span className="text-[10px] font-mono text-[#A6A9B0]">• {log.date}</span>
                          </div>
                          <span className="text-xs text-[#A6A9B0] block mt-0.5">{log.task}</span>
                          <span className="text-[11px] text-[#A6A9B0] font-mono block">Certified Center: {log.serviceCenter}</span>
                        </div>
                      </div>

                      <div className="text-left sm:text-right shrink-0">
                        <span className="text-xs font-mono font-bold text-[#F5F5F2] block tabular-nums">
                          Total: ${log.totalCost.toLocaleString()}
                        </span>
                        <span className="text-xs font-mono text-[#38BDF8] block tabular-nums">
                          Your Share: ${log.yourShare.toFixed(2)}
                        </span>
                        <span className="text-[10px] text-[#10B981] block font-medium">{log.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 6: Opportunities & Transfers */}
            {activeTab === 'opportunities' && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-[#F5F5F2]">Secondary Transfers & Emerging Garages</h3>
                  <span className="text-xs font-mono text-[#38BDF8]">Live Secondary Liquidity</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-[#181A1F] border border-[#282C34] rounded-xl space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#F5F5F2]">Audi RS6 Avant (20% Share Transfer)</span>
                      <span className="text-[10px] font-mono text-[#38BDF8] bg-[#202329] px-2 py-0.5 rounded">Secondary Listing</span>
                    </div>
                    <p className="text-xs text-[#A6A9B0]">
                      Existing co-owner relocating to London. Offering their 20% interest in Chicago syndicate at certified valuation of $25,000.
                    </p>
                    <div className="pt-2 flex items-center justify-between text-xs">
                      <span className="font-mono text-[#F5F5F2] tabular-nums">$25,000 asking</span>
                      <button
                        onClick={onOpenEarlyAccess}
                        className="text-[#38BDF8] hover:underline font-semibold flex items-center gap-1"
                      >
                        <span>Inquire Transfer</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  <div className="p-4 bg-[#181A1F] border border-[#282C34] rounded-xl space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#F5F5F2]">Land Rover Defender 110 (25% Share)</span>
                      <span className="text-[10px] font-mono text-[#38BDF8] bg-[#202329] px-2 py-0.5 rounded">Forming Syndicate</span>
                    </div>
                    <p className="text-xs text-[#A6A9B0]">
                      Wasatch mountain corridor group forming. 3 of 4 verified co-owners committed for winter ski season access.
                    </p>
                    <div className="pt-2 flex items-center justify-between text-xs">
                      <span className="font-mono text-[#F5F5F2] tabular-nums">$18,000 contribution</span>
                      <button
                        onClick={onOpenEarlyAccess}
                        className="text-[#38BDF8] hover:underline font-semibold flex items-center gap-1"
                      >
                        <span>Join Group</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
