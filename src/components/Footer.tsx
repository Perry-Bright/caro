import React, { useState } from 'react';
import { Smartphone, ArrowUpRight, ExternalLink, X } from 'lucide-react';
import { APP_DEMO_DOWNLOAD_URL } from '../data/links';

interface FooterProps {
  onOpenEarlyAccess: () => void;
  onOpenDealerModal: () => void;
  onOpenDownloadApp: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenEarlyAccess,
  onOpenDealerModal,
  onOpenDownloadApp,
}) => {
  const [legalModal, setLegalModal] = useState<{ title: string; content: string } | null>(null);

  return (
    <footer className="bg-[#08090B] border-t border-[#202329] pt-16 pb-12 text-[#A6A9B0] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#202329]">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="text-2xl font-extrabold tracking-tight text-[#F5F5F2] hover:text-[#BAE6FD] transition-colors block">
              CARO
            </a>
            <p className="text-sm font-semibold text-[#F5F5F2]">
              Own More. Experience More.
            </p>
            <p className="text-xs text-[#A6A9B0] max-w-sm leading-relaxed">
              A new way to discover, participate in and manage vehicle ownership. Connecting consumers, dealership partners, and curated multi-vehicle syndicates.
            </p>
            <div className="pt-2 flex flex-wrap gap-2">
              <a
                href={APP_DEMO_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#181A1F] border border-[#282C34] text-xs text-[#F5F5F2] hover:border-[#38BDF8]/60 transition-colors"
              >
                <Smartphone className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>Get Demo App (Google Drive)</span>
                <ExternalLink className="w-3 h-3 text-[#A6A9B0]" />
              </a>
            </div>
          </div>

          {/* Col 1: Platform */}
          <div className="space-y-3">
            <span className="font-mono text-xs font-semibold uppercase text-[#F5F5F2] tracking-wider block">
              Platform
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#how-it-works" className="hover:text-[#38BDF8] transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#target-clients" className="hover:text-[#38BDF8] transition-colors">
                  Target Clients
                </a>
              </li>
              <li>
                <a href="#marketplace" className="hover:text-[#38BDF8] transition-colors">
                  Explore Ownership
                </a>
              </li>
              <li>
                <a href="#digital-garage" className="hover:text-[#38BDF8] transition-colors">
                  Digital Garage
                </a>
              </li>
              <li>
                <a href="#dealerships" className="hover:text-[#38BDF8] transition-colors">
                  For Dealerships
                </a>
              </li>
              <li>
                <a href="#vision" className="hover:text-[#38BDF8] transition-colors">
                  Our Vision
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#38BDF8] transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Company & Careers */}
          <div className="space-y-3">
            <span className="font-mono text-xs font-semibold uppercase text-[#F5F5F2] tracking-wider block">
              Company
            </span>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={onOpenEarlyAccess}
                  className="hover:text-[#38BDF8] transition-colors text-left"
                >
                  Join Waitlist
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenDealerModal}
                  className="hover:text-[#38BDF8] transition-colors text-left"
                >
                  Become a Partner
                </button>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenEarlyAccess();
                  }}
                  className="hover:text-[#38BDF8] transition-colors"
                >
                  Contact Concierge
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Social */}
          <div className="space-y-3">
            <span className="font-mono text-xs font-semibold uppercase text-[#F5F5F2] tracking-wider block">
              Legal & Disclosures
            </span>
            <ul className="space-y-2">
              <li>
                <button
                  type="button"
                  onClick={() => setLegalModal({
                    title: 'Privacy Policy',
                    content: 'Caro Technologies Inc. prioritizes member privacy. We encrypt all telemetry and vehicle usage data in flight and at rest. We never sell, rent, or broker your personal location data or driving telemetry to third-party data brokers or marketing networks.'
                  })}
                  className="hover:text-[#38BDF8] transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setLegalModal({
                    title: 'Terms of Service',
                    content: 'Caro collective ownership is governed by dedicated Master Series LLC operating agreements. Each vehicle syndicate is an independent liability-isolated series. Drivers must hold a valid driver license, pass identity verification, and meet underwriter insurance criteria.'
                  })}
                  className="hover:text-[#38BDF8] transition-colors text-left"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => setLegalModal({
                    title: 'Ownership Disclaimer',
                    content: 'All vehicle acquisition amounts, monthly running cost estimates, and portfolio yields are illustrative based on current market data. Formal participation rights, capital splits, and reservation tiers are subject to final syndicate operating documentation.'
                  })}
                  className="hover:text-[#38BDF8] transition-colors text-left"
                >
                  Ownership Disclaimer
                </button>
              </li>
            </ul>

            <div className="pt-4 space-y-2">
              <span className="font-mono text-[11px] font-semibold uppercase text-[#F5F5F2] tracking-wider block">
                Connect
              </span>
              <div className="flex items-center gap-4 text-[#A6A9B0]">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#38BDF8] transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#38BDF8] transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#38BDF8] transition-colors"
                >
                  X
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Financial Disclaimer */}
        <div className="pt-8 space-y-4">
          <p className="text-[11px] text-[#A6A9B0]/70 leading-relaxed">
            <strong>Mandatory Legal & Financial Notice:</strong> Caro Technologies Inc. is a software technology platform facilitating collective vehicle discovery, group operating agreements, and telematics management. Caro is not a bank, lender, or registered broker-dealer. Vehicle prices, contributions, running costs, and portfolio representations are illustrative and subject to change. Real vehicle acquisition requires execution of specific Series LLC documentation, insurance underwriting, and mutual participant approval.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[#A6A9B0]/60">
            <span>© {new Date().getFullYear()} CARO Technologies Inc. All rights reserved.</span>
            <span>A new way to own more of what moves you.</span>
          </div>
        </div>
      </div>

      {/* In-app Legal Disclosure Dialog */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-[#101114] border border-[#282C34] rounded-2xl max-w-lg w-full p-6 shadow-2xl relative">
            <div className="flex items-center justify-between pb-3 border-b border-[#202329] mb-4">
              <h4 className="text-base font-bold text-[#F5F5F2]">{legalModal.title}</h4>
              <button
                onClick={() => setLegalModal(null)}
                className="p-1 rounded text-[#A6A9B0] hover:text-[#F5F5F2] hover:bg-[#181A1F]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-[#A6A9B0] leading-relaxed">
              {legalModal.content}
            </p>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setLegalModal(null)}
                className="px-4 py-2 bg-[#2563EB] hover:bg-[#1d4ed8] text-white text-xs font-semibold rounded-lg transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
