import React from 'react';
import { ArrowRight, Building2, Smartphone, ShieldCheck, Download, ExternalLink } from 'lucide-react';
import { APP_DEMO_DOWNLOAD_URL } from '../data/links';
import { IMAGES } from '../data/images';

interface EarlyAccessConversionProps {
  onOpenEarlyAccess: () => void;
  onOpenDealerModal: () => void;
  onOpenDownloadApp: () => void;
}

export const EarlyAccessConversion: React.FC<EarlyAccessConversionProps> = ({
  onOpenEarlyAccess,
  onOpenDealerModal,
  onOpenDownloadApp,
}) => {
  return (
    <section className="py-28 bg-[#08090B] border-t border-[#202329] relative overflow-hidden">
      {/* Background Subtle Automotive Ambience */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img
          src={IMAGES.heroGarage}
          alt=""
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter blur-md"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090B] via-[#08090B]/90 to-[#08090B]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="font-mono text-xs tracking-widest text-[#38BDF8] uppercase font-semibold">
          THE CARO INITIATIVE
        </span>
        <h2 className="mt-3 text-4xl sm:text-6xl font-extrabold tracking-tight text-[#F5F5F2] leading-tight text-balance">
          Your next garage starts here.
        </h2>
        <p className="mt-5 text-base sm:text-lg text-[#A6A9B0] max-w-2xl mx-auto leading-relaxed text-balance">
          Be among the first to explore a different way of owning the vehicles you love. Download the demo app on Google Drive, participate in verified syndicates, or bring your dealership into the network.
        </p>

        {/* Action CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenEarlyAccess}
            className="w-full sm:w-auto px-8 py-4 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-bold text-sm rounded-xl transition-all shadow-xl shadow-blue-600/30 hover:shadow-2xl flex items-center justify-center gap-2"
          >
            <span>Get Early Access</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={APP_DEMO_DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-4 bg-[#181A1F] hover:bg-[#202329] border border-[#282C34] hover:border-[#38BDF8]/40 text-[#F5F5F2] font-semibold text-sm rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4 text-[#38BDF8]" />
            <span>Download Demo App</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#A6A9B0]" />
          </a>

          <button
            onClick={onOpenDealerModal}
            className="w-full sm:w-auto px-6 py-4 bg-transparent hover:bg-[#181A1F] border border-[#282C34] hover:border-[#38BDF8]/40 text-[#A6A9B0] hover:text-[#F5F5F2] font-semibold text-sm rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <Building2 className="w-4 h-4" />
            <span>Partner With Caro</span>
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-[#A6A9B0]">
          <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
          <span>Priority queue invitations rolling out across North America and Europe.</span>
        </div>
      </div>
    </section>
  );
};
