import React, { useState } from 'react';
import {
  X,
  Smartphone,
  QrCode,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Key,
  Calendar,
  MessageSquare,
  CreditCard,
  Download,
  ExternalLink,
} from 'lucide-react';
import { APP_DEMO_DOWNLOAD_URL } from '../data/links';

interface DownloadAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadAppModal: React.FC<DownloadAppModalProps> = ({ isOpen, onClose }) => {
  const [contactInput, setContactInput] = useState('');
  const [channel, setChannel] = useState<'sms' | 'email'>('sms');
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSendLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactInput.trim()) {
      setError(channel === 'sms' ? 'Please enter a valid phone number' : 'Please enter a valid email address');
      return;
    }
    setError('');
    setIsSent(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#101114] border border-[#282C34] rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="download-modal-title"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#202329] bg-[#08090B] shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold tracking-wider text-[#38BDF8] uppercase">
              CARO MOBILE APP DEMO
            </span>
            <span className="text-xs text-[#A6A9B0]">• Google Drive Release</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close download dialog"
            className="p-1.5 rounded-lg text-[#A6A9B0] hover:text-[#F5F5F2] hover:bg-[#181A1F] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
          <div>
            <h2 id="download-modal-title" className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F5F5F2]">
              Download the Caro App Demo
            </h2>
            <p className="mt-2 text-sm text-[#A6A9B0] leading-relaxed">
              Install the latest preview build directly to your mobile device. Experience digital Bluetooth keys, real-time syndicate booking, and shared expense logs.
            </p>
          </div>

          {/* Primary Direct Download CTA Banner */}
          <div className="p-5 bg-gradient-to-r from-[#181A1F] via-[#202329] to-[#181A1F] border-2 border-[#2563EB]/70 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl shadow-blue-950/20">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-[11px] font-mono uppercase text-[#38BDF8] font-semibold block">
                OFFICIAL DEMO BUILD
              </span>
              <h3 className="text-base font-bold text-[#F5F5F2]">
                Instant Mobile Package (Google Drive)
              </h3>
              <p className="text-xs text-[#A6A9B0]">
                Pre-configured sandbox environment with sample garages and vehicle keys.
              </p>
            </div>

            <a
              href={APP_DEMO_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 shrink-0"
            >
              <Download className="w-4 h-4" />
              <span>Download App Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* QR Code and Quick Install */}
            <div className="bg-[#181A1F] border border-[#282C34] rounded-xl p-5 flex flex-col items-center text-center justify-between">
              <a
                href={APP_DEMO_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-lg shadow-inner group transition-transform hover:scale-105 block"
              >
                {/* Clean inline SVG QR code */}
                <svg className="w-36 h-36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="100" fill="white"/>
                  {/* Position squares */}
                  <rect x="8" y="8" width="28" height="28" fill="#101114"/>
                  <rect x="12" y="12" width="20" height="20" fill="white"/>
                  <rect x="16" y="16" width="12" height="12" fill="#101114"/>

                  <rect x="64" y="8" width="28" height="28" fill="#101114"/>
                  <rect x="68" y="12" width="20" height="20" fill="white"/>
                  <rect x="72" y="16" width="12" height="12" fill="#101114"/>

                  <rect x="8" y="64" width="28" height="28" fill="#101114"/>
                  <rect x="12" y="68" width="20" height="20" fill="white"/>
                  <rect x="16" y="72" width="12" height="12" fill="#101114"/>

                  {/* Decorative data pixels */}
                  <rect x="42" y="12" width="8" height="8" fill="#101114"/>
                  <rect x="52" y="24" width="6" height="6" fill="#101114"/>
                  <rect x="42" y="32" width="16" height="8" fill="#101114"/>
                  <rect x="12" y="44" width="8" height="12" fill="#101114"/>
                  <rect x="24" y="48" width="12" height="8" fill="#101114"/>
                  <rect x="42" y="48" width="8" height="8" fill="#101114"/>
                  <rect x="56" y="44" width="12" height="8" fill="#101114"/>
                  <rect x="76" y="44" width="12" height="8" fill="#101114"/>
                  <rect x="42" y="64" width="8" height="16" fill="#101114"/>
                  <rect x="56" y="64" width="8" height="8" fill="#101114"/>
                  <rect x="72" y="64" width="8" height="8" fill="#101114"/>
                  <rect x="64" y="78" width="16" height="8" fill="#101114"/>
                  <rect x="84" y="76" width="8" height="12" fill="#101114"/>
                </svg>
              </a>
              <div className="mt-3">
                <span className="text-xs font-medium text-[#F5F5F2] flex items-center justify-center gap-1.5">
                  <QrCode className="w-3.5 h-3.5 text-[#38BDF8]" /> Scan or click to open Google Drive
                </span>
                <span className="text-[11px] text-[#A6A9B0] block mt-0.5">Compatible with modern mobile devices</span>
              </div>
            </div>

            {/* Feature Highlights */}
            <div className="space-y-3.5 flex flex-col justify-center">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#202329] flex items-center justify-center shrink-0 text-[#38BDF8]">
                  <Key className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#F5F5F2]">Ultra-Wideband Digital Keys</h4>
                  <p className="text-xs text-[#A6A9B0]">Proximity unlock, engine start, and climate pre-conditioning right from your phone.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#202329] flex items-center justify-center shrink-0 text-[#38BDF8]">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#F5F5F2]">Smart Booking Calendar</h4>
                  <p className="text-xs text-[#A6A9B0]">Fair-share weekend rotations and real-time schedule trades with your co-owners.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#202329] flex items-center justify-center shrink-0 text-[#38BDF8]">
                  <CreditCard className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#F5F5F2]">Automated Shared Expenses</h4>
                  <p className="text-xs text-[#A6A9B0]">Service invoices, tires, insurance, and routine detailing split with zero friction.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#202329] flex items-center justify-center shrink-0 text-[#38BDF8]">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#F5F5F2]">Co-Owner Syndicate Chat</h4>
                  <p className="text-xs text-[#A6A9B0]">Direct encrypted messaging and consensus voting on vehicle decisions.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Direct Link Sender */}
          <div className="bg-[#181A1F] border border-[#282C34] rounded-xl p-4">
            {isSent ? (
              <div className="flex items-center gap-3 text-sm text-[#10B981] p-2">
                <CheckCircle2 className="w-5 h-5 shrink-0 text-[#10B981]" />
                <div>
                  <span className="font-semibold block text-[#10B981]">Demo link sent!</span>
                  <span className="text-xs text-[#A6A9B0]">
                    Direct Google Drive install link dispatched to {contactInput}.
                  </span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSendLink} className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-[#F5F5F2]">Send Google Drive download link to your phone</span>
                  <div className="flex items-center gap-1 bg-[#101114] p-0.5 rounded-md border border-[#282C34]">
                    <button
                      type="button"
                      onClick={() => setChannel('sms')}
                      className={`px-2 py-0.5 text-xs rounded transition-colors ${channel === 'sms' ? 'bg-[#202329] text-[#38BDF8] font-medium' : 'text-[#A6A9B0]'}`}
                    >
                      SMS
                    </button>
                    <button
                      type="button"
                      onClick={() => setChannel('email')}
                      className={`px-2 py-0.5 text-xs rounded transition-colors ${channel === 'email' ? 'bg-[#202329] text-[#38BDF8] font-medium' : 'text-[#A6A9B0]'}`}
                    >
                      Email
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type={channel === 'sms' ? 'tel' : 'email'}
                    placeholder={channel === 'sms' ? '+1 (555) 000-0000' : 'you@example.com'}
                    value={contactInput}
                    onChange={(e) => {
                      setContactInput(e.target.value);
                      if (error) setError('');
                    }}
                    className="flex-1 bg-[#101114] border border-[#282C34] rounded-lg px-3.5 py-2 text-xs text-[#F5F5F2] placeholder-[#A6A9B0]/50 focus:outline-none focus:border-[#2563EB] transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold text-xs rounded-lg transition-all shadow-md shadow-blue-600/30 flex items-center justify-center gap-1.5 shrink-0"
                  >
                    <span>Send Link</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                {error && <p className="text-[11px] text-red-400">{error}</p>}
              </form>
            )}
          </div>

          {/* Quick Access Badges */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#202329]">
            <div className="flex items-center gap-3">
              <a
                href={APP_DEMO_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 bg-[#181A1F] hover:bg-[#202329] border border-[#282C34] hover:border-[#38BDF8]/40 rounded-lg text-xs font-medium text-[#F5F5F2] flex items-center gap-2 transition-colors"
              >
                <Download className="w-4 h-4 text-[#38BDF8]" />
                <span>Google Drive Preview</span>
              </a>

              <a
                href={APP_DEMO_DOWNLOAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 bg-[#181A1F] hover:bg-[#202329] border border-[#282C34] hover:border-[#38BDF8]/40 rounded-lg text-xs font-medium text-[#F5F5F2] flex items-center gap-2 transition-colors"
              >
                <Smartphone className="w-4 h-4 text-[#38BDF8]" />
                <span>Install APK Directly</span>
              </a>
            </div>

            <div className="flex items-center gap-1.5 text-[11px] text-[#A6A9B0]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Biometric & UWB Hardware Verified</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
