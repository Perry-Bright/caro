import React, { useState, useEffect } from 'react';
import { Menu, X, Smartphone, ArrowRight } from 'lucide-react';
import { APP_DEMO_DOWNLOAD_URL } from '../data/links';

interface NavigationProps {
  onOpenEarlyAccess: () => void;
  onOpenDownloadApp: () => void;
  onOpenDealerModal: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  onOpenEarlyAccess,
  onOpenDownloadApp,
  onOpenDealerModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#08090B]/90 backdrop-blur-md border-b border-[#202329] py-3.5 shadow-lg shadow-black/40'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Single element brand wordmark */}
            <a
              href="#"
              className="text-2xl font-extrabold tracking-tighter text-[#F5F5F2] hover:text-[#BAE6FD] transition-colors whitespace-nowrap shrink-0 flex items-center gap-2"
            >
              <span className="tracking-tight">CARO</span>
            </a>

            {/* Zone 2: 4-5 Clean single-line text navigation links */}
            <nav className="hidden lg:flex items-center gap-7 text-xs font-medium text-[#A6A9B0]">
              <a
                href="#how-it-works"
                className="hover:text-[#38BDF8] transition-colors whitespace-nowrap shrink-0"
              >
                How It Works
              </a>
              <a
                href="#target-clients"
                className="hover:text-[#38BDF8] transition-colors whitespace-nowrap shrink-0"
              >
                Target Clients
              </a>
              <a
                href="#marketplace"
                className="hover:text-[#38BDF8] transition-colors whitespace-nowrap shrink-0"
              >
                Explore Ownership
              </a>
              <a
                href="#digital-garage"
                className="hover:text-[#38BDF8] transition-colors whitespace-nowrap shrink-0"
              >
                Digital Garage
              </a>
              <a
                href="#lifestyles"
                className="hover:text-[#FB923C] transition-colors whitespace-nowrap shrink-0"
              >
                Lifestyles
              </a>
              <a
                href="#dealerships"
                className="hover:text-[#38BDF8] transition-colors whitespace-nowrap shrink-0"
              >
                For Dealerships
              </a>
            </nav>

            {/* Zone 3: Primary Action & App Download */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              {/* Download App Button */}
              <button
                onClick={onOpenDownloadApp}
                className="px-3.5 py-2 bg-[#181A1F] hover:bg-[#202329] border border-[#282C34] hover:border-[#38BDF8]/40 text-xs font-medium text-[#F5F5F2] rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0"
              >
                <Smartphone className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>Download App</span>
              </button>

              <button
                onClick={onOpenEarlyAccess}
                className="px-4 py-2 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold text-xs rounded-lg transition-all duration-150 shadow-md shadow-blue-600/25 hover:shadow-lg hover:shadow-blue-600/35 flex items-center gap-1.5 whitespace-nowrap shrink-0"
              >
                <span>Get Early Access</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Hamburger toggle */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={onOpenDownloadApp}
                aria-label="Download mobile app"
                className="p-2 bg-[#181A1F] border border-[#282C34] rounded-lg text-[#38BDF8]"
              >
                <Smartphone className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                className="p-2 rounded-lg bg-[#181A1F] border border-[#282C34] text-[#F5F5F2] hover:bg-[#202329] transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-black/95 backdrop-blur-xl pt-24 px-6 pb-8 flex flex-col justify-between">
          <nav className="flex flex-col gap-4 text-base font-medium text-[#F5F5F2]">
            <a
              href="#how-it-works"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 border-b border-[#202329] hover:text-[#38BDF8] transition-colors"
            >
              How It Works
            </a>
            <a
              href="#target-clients"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 border-b border-[#202329] hover:text-[#38BDF8] transition-colors"
            >
              Target Clients
            </a>
            <a
              href="#marketplace"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 border-b border-[#202329] hover:text-[#38BDF8] transition-colors"
            >
              Explore Ownership
            </a>
            <a
              href="#digital-garage"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 border-b border-[#202329] hover:text-[#38BDF8] transition-colors"
            >
              Digital Garage
            </a>
            <a
              href="#lifestyles"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 border-b border-[#202329] hover:text-[#FB923C] text-[#FB923C]/90 transition-colors flex items-center justify-between"
            >
              <span>Lifestyles & Pods</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F97316]/20 border border-[#F97316]/40 text-[#FB923C]">NEW</span>
            </a>
            <a
              href="#dealerships"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 border-b border-[#202329] hover:text-[#38BDF8] transition-colors"
            >
              For Dealerships
            </a>
            <a
              href="#faq"
              onClick={() => setIsMobileMenuOpen(false)}
              className="py-2 border-b border-[#202329] hover:text-[#38BDF8] transition-colors"
            >
              FAQ
            </a>
          </nav>

          <div className="space-y-3 pt-6 border-t border-[#202329]">
            <a
              href={APP_DEMO_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-3 bg-[#181A1F] border border-[#282C34] rounded-xl text-sm font-semibold text-[#F5F5F2] flex items-center justify-center gap-2"
            >
              <Smartphone className="w-4 h-4 text-[#38BDF8]" />
              <span>Download Demo App (Google Drive)</span>
            </a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenEarlyAccess();
              }}
              className="w-full py-3 bg-[#2563EB] text-white font-semibold text-sm rounded-xl shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
            >
              <span>Get Early Access</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenDealerModal();
              }}
              className="w-full py-2.5 text-xs text-[#A6A9B0] hover:text-[#F5F5F2] transition-colors text-center"
            >
              Dealer Partnership Inquiries
            </button>
          </div>
        </div>
      )}
    </>
  );
};
