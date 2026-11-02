import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { TheBigIdea } from './components/TheBigIdea';
import { HowItWorks } from './components/HowItWorks';
import { Marketplace } from './components/Marketplace';
import { MultiVehiclePortfolio } from './components/MultiVehiclePortfolio';
import { DigitalGarageShowcase } from './components/DigitalGarageShowcase';
import { OwnershipVsAccess } from './components/OwnershipVsAccess';
import { ForDealerships } from './components/ForDealerships';
import { WhyCaro } from './components/WhyCaro';
import { TheVision } from './components/TheVision';
import { FAQSection } from './components/FAQSection';
import { EarlyAccessConversion } from './components/EarlyAccessConversion';
import { TargetClients } from './components/TargetClients';
import { Footer } from './components/Footer';
import { EarlyAccessModal } from './components/EarlyAccessModal';
import { DealerApplicationModal } from './components/DealerApplicationModal';
import { DownloadAppModal } from './components/DownloadAppModal';
import { VehicleDetailModal } from './components/VehicleDetailModal';
import { type VehicleOpportunity } from './data/vehicles';

export default function App() {
  const [isEarlyAccessOpen, setIsEarlyAccessOpen] = useState(false);
  const [earlyAccessInterest, setEarlyAccessInterest] = useState<string | undefined>(undefined);
  const [isDealerModalOpen, setIsDealerModalOpen] = useState(false);
  const [isDownloadAppOpen, setIsDownloadAppOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleOpportunity | null>(null);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('Performance');

  const openEarlyAccess = (interest?: string) => {
    setEarlyAccessInterest(interest);
    setIsEarlyAccessOpen(true);
  };

  const openDealerModal = () => {
    setIsDealerModalOpen(true);
  };

  const openDownloadApp = () => {
    setIsDownloadAppOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#08090B] text-[#F5F5F2] font-sans selection:bg-[#2563EB] selection:text-white">
      {/* Navigation Bar */}
      <Navigation
        onOpenEarlyAccess={() => openEarlyAccess()}
        onOpenDownloadApp={openDownloadApp}
        onOpenDealerModal={openDealerModal}
      />

      <main>
        {/* Section 2: Hero */}
        <Hero
          onOpenEarlyAccess={() => openEarlyAccess()}
          onOpenDownloadApp={openDownloadApp}
          onSelectCategory={(category) => setSelectedCategoryFilter(category)}
        />

        {/* Section 3: The Big Idea */}
        <TheBigIdea onOpenEarlyAccess={() => openEarlyAccess()} />

        {/* Section 4: How Caro Works */}
        <HowItWorks onOpenEarlyAccess={() => openEarlyAccess()} />

        {/* Section 5: Target Clients - Different people. One platform */}
        <TargetClients
          onOpenEarlyAccess={openEarlyAccess}
          onOpenDealerModal={openDealerModal}
        />

        {/* Section 6: The Caro Ownership Marketplace */}
        <Marketplace
          selectedCategoryFilter={selectedCategoryFilter}
          onSelectVehicle={(vehicle) => setSelectedVehicle(vehicle)}
          onOpenEarlyAccess={(vehicleName) => openEarlyAccess(vehicleName)}
        />

        {/* Section 7: The Multi-Vehicle Portfolio */}
        <MultiVehiclePortfolio onOpenEarlyAccess={() => openEarlyAccess()} />

        {/* Section 8: The Digital Garage Showcase */}
        <DigitalGarageShowcase
          onOpenEarlyAccess={() => openEarlyAccess()}
          onOpenDownloadApp={openDownloadApp}
        />

        {/* Section 9: Ownership Is Not the Same as Access */}
        <OwnershipVsAccess />

        {/* Section 10: For Dealerships */}
        <ForDealerships onOpenDealerModal={openDealerModal} />

        {/* Section 11: Why Caro */}
        <WhyCaro />

        {/* Section 12: The Vision */}
        <TheVision />

        {/* Section 13: FAQ */}
        <FAQSection />

        {/* Section 14: Early Access & Conversion */}
        <EarlyAccessConversion
          onOpenEarlyAccess={() => openEarlyAccess()}
          onOpenDealerModal={openDealerModal}
          onOpenDownloadApp={openDownloadApp}
        />
      </main>

      {/* Section 15: Footer */}
      <Footer
        onOpenEarlyAccess={() => openEarlyAccess()}
        onOpenDealerModal={openDealerModal}
        onOpenDownloadApp={openDownloadApp}
      />

      {/* Interactive Modals */}
      <EarlyAccessModal
        isOpen={isEarlyAccessOpen}
        onClose={() => setIsEarlyAccessOpen(false)}
        defaultInterest={earlyAccessInterest}
      />

      <DealerApplicationModal
        isOpen={isDealerModalOpen}
        onClose={() => setIsDealerModalOpen(false)}
      />

      <DownloadAppModal
        isOpen={isDownloadAppOpen}
        onClose={() => setIsDownloadAppOpen(false)}
      />

      <VehicleDetailModal
        vehicle={selectedVehicle}
        isOpen={!!selectedVehicle}
        onClose={() => setSelectedVehicle(null)}
        onSelectForEarlyAccess={(vehicleName) => openEarlyAccess(vehicleName)}
      />
    </div>
  );
}
