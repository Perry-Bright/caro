export interface VehicleOpportunity {
  id: string;
  name: string;
  make: string;
  model: string;
  year: number;
  category: 'Everyday' | 'Luxury' | 'Performance' | 'SUVs';
  type: 'Opportunities' | 'Garages' | 'Shared';
  image: string;
  price: number;
  totalMembers: number;
  currentMembers: number;
  contributionPerMember: number;
  estimatedMonthlyCost: number;
  equityPercentage: number;
  specs: {
    power: string;
    acceleration: string;
    transmission: string;
    drivetrain: string;
  };
  location: string;
  legalEntity: string;
  usageEntitlement: string;
  description: string;
  coOwners: Array<{
    name: string;
    role: string;
    joined: string;
    initials: string;
  }>;
}

export const VEHICLES_DATA: VehicleOpportunity[] = [
  {
    id: 'porsche-911-carrera',
    name: 'Porsche 911 Carrera',
    make: 'Porsche',
    model: '911 Carrera',
    year: 2024,
    category: 'Performance',
    type: 'Opportunities',
    image: '/src/assets/images/car_porsche_911_1793608578038.jpg',
    price: 120000,
    totalMembers: 6,
    currentMembers: 4,
    contributionPerMember: 20000,
    estimatedMonthlyCost: 195,
    equityPercentage: 16.67,
    specs: {
      power: '379 hp Twin-Turbo Flat-6',
      acceleration: '3.8s (0-60 mph)',
      transmission: '8-Speed PDK',
      drivetrain: 'Rear-Wheel Drive',
    },
    location: 'San Francisco, CA (Presidio Hub)',
    legalEntity: 'Caro Pacific Holdings Series 911 LLC',
    usageEntitlement: '60 days / year via dynamic calendar rotation',
    description: 'Iconic rear-engine precision sports car. Formed for weekend touring and spirited drives, fully managed with covered climate storage and white-glove detailing.',
    coOwners: [
      { name: 'Marcus Sterling', role: 'Group Lead / Angel Investor', joined: 'Oct 2026', initials: 'MS' },
      { name: 'Elena Vance', role: 'Architect & Collector', joined: 'Oct 2026', initials: 'EV' },
      { name: 'David Chen', role: 'Product Executive', joined: 'Nov 2026', initials: 'DC' },
      { name: 'Sarah Lin', role: 'Design Director', joined: 'Nov 2026', initials: 'SL' },
    ],
  },
  {
    id: 'bmw-m4-competition',
    name: 'BMW M4 Competition',
    make: 'BMW',
    model: 'M4 Competition Coupé',
    year: 2024,
    category: 'Performance',
    type: 'Opportunities',
    image: '/src/assets/images/car_bmw_m4_1793608579550.jpg',
    price: 75000,
    totalMembers: 4,
    currentMembers: 3,
    contributionPerMember: 18750,
    estimatedMonthlyCost: 160,
    equityPercentage: 25.0,
    specs: {
      power: '503 hp M TwinPower Turbo',
      acceleration: '3.4s (0-60 mph)',
      transmission: '8-Speed M Steptronic',
      drivetrain: 'M xDrive AWD',
    },
    location: 'Austin, TX (Domain Hub)',
    legalEntity: 'Caro Lone Star Series M4 LLC',
    usageEntitlement: '91 days / year with flexible weekend swaps',
    description: 'High-performance grand tourer with carbon fiber roof, track-ready cooling systems, and executive cabin tech. Ideal balance of performance and grand touring.',
    coOwners: [
      { name: 'Julian Taylor', role: 'Software Engineer', joined: 'Sep 2026', initials: 'JT' },
      { name: 'Amara Okafor', role: 'Fintech Founder', joined: 'Oct 2026', initials: 'AO' },
      { name: 'Nicholas Vance', role: 'Cardiologist', joined: 'Nov 2026', initials: 'NV' },
    ],
  },
  {
    id: 'mercedes-benz-gle',
    name: 'Mercedes-Benz GLE',
    make: 'Mercedes-Benz',
    model: 'GLE 450 4MATIC',
    year: 2024,
    category: 'SUVs',
    type: 'Opportunities',
    image: '/src/assets/images/car_mercedes_gle_1793608579777.jpg',
    price: 60000,
    totalMembers: 4,
    currentMembers: 2,
    contributionPerMember: 15000,
    estimatedMonthlyCost: 135,
    equityPercentage: 25.0,
    specs: {
      power: '375 hp Turbo Inline-6 w/ EQ Boost',
      acceleration: '5.3s (0-60 mph)',
      transmission: '9G-TRONIC 9-Speed',
      drivetrain: '4MATIC All-Wheel Drive',
    },
    location: 'Denver, CO (Cherry Creek Hub)',
    legalEntity: 'Caro Mountain States Series GLE LLC',
    usageEntitlement: '91 days / year with winter tire & rack package',
    description: 'Sophisticated executive luxury SUV with AIRMATIC air suspension, panoramic sunroof, and generous cargo capacity for mountain weekends and family travel.',
    coOwners: [
      { name: 'Robert Craig', role: 'Operations Director', joined: 'Oct 2026', initials: 'RC' },
      { name: 'Michelle Gomez', role: 'Biotech Scientist', joined: 'Nov 2026', initials: 'MG' },
    ],
  },
  {
    id: 'toyota-rav4-hybrid',
    name: 'Toyota RAV4 Hybrid',
    make: 'Toyota',
    model: 'RAV4 Hybrid XSE',
    year: 2024,
    category: 'Everyday',
    type: 'Garages',
    image: '/src/assets/images/car_toyota_rav4_1793608579566.jpg',
    price: 32000,
    totalMembers: 4,
    currentMembers: 4,
    contributionPerMember: 8000,
    estimatedMonthlyCost: 75,
    equityPercentage: 25.0,
    specs: {
      power: '219 hp Hybrid Synergy Drive',
      acceleration: '7.3s (0-60 mph)',
      transmission: 'ECVT Automatic',
      drivetrain: 'Electronic On-Demand AWD',
    },
    location: 'Seattle, WA (Capitol Hill Hub)',
    legalEntity: 'Caro Cascadia Series RAV4 LLC',
    usageEntitlement: 'Fully active collective garage (91 days / year)',
    description: 'Reliable, fuel-efficient everyday crossover. 40 MPG combined, sport-tuned suspension, and Apple CarPlay integration. Owned collectively by four urban professionals.',
    coOwners: [
      { name: 'Claire Dubois', role: 'Journalist', joined: 'Aug 2026', initials: 'CD' },
      { name: 'Kenji Sato', role: 'Data Scientist', joined: 'Aug 2026', initials: 'KS' },
      { name: 'Tara Wright', role: 'UX Designer', joined: 'Sep 2026', initials: 'TW' },
      { name: 'Leo Martinez', role: 'Civil Engineer', joined: 'Sep 2026', initials: 'LM' },
    ],
  },
  {
    id: 'audi-rs6-avant',
    name: 'Audi RS6 Avant',
    make: 'Audi',
    model: 'RS6 Avant Performance',
    year: 2025,
    category: 'Luxury',
    type: 'Opportunities',
    image: '/src/assets/images/car_bmw_m4_1793608579550.jpg',
    price: 125000,
    totalMembers: 5,
    currentMembers: 3,
    contributionPerMember: 25000,
    estimatedMonthlyCost: 210,
    equityPercentage: 20.0,
    specs: {
      power: '621 hp Twin-Turbo V8',
      acceleration: '3.3s (0-60 mph)',
      transmission: '8-Speed Tiptronic',
      drivetrain: 'quattro with Sport Differential',
    },
    location: 'Chicago, IL (Fulton Market Hub)',
    legalEntity: 'Caro Midwest Series RS6 LLC',
    usageEntitlement: '73 days / year with winter setup package',
    description: 'The pinnacle of high-speed estate performance. Supercar acceleration with seating for five and expansive luggage volume for cross-state road trips.',
    coOwners: [
      { name: 'Vikram Patel', role: 'Private Equity Partner', joined: 'Oct 2026', initials: 'VP' },
      { name: 'Andrea Scott', role: 'Creative Director', joined: 'Nov 2026', initials: 'AS' },
      { name: 'Jordan Bell', role: 'Aerospace Consultant', joined: 'Nov 2026', initials: 'JB' },
    ],
  },
  {
    id: 'land-rover-defender',
    name: 'Land Rover Defender 110',
    make: 'Land Rover',
    model: 'Defender 110 V8',
    year: 2024,
    category: 'SUVs',
    type: 'Shared',
    image: '/src/assets/images/car_mercedes_gle_1793608579777.jpg',
    price: 72000,
    totalMembers: 4,
    currentMembers: 3,
    contributionPerMember: 18000,
    estimatedMonthlyCost: 170,
    equityPercentage: 25.0,
    specs: {
      power: '518 hp Supercharged V8',
      acceleration: '4.9s (0-60 mph)',
      transmission: '8-Speed Automatic',
      drivetrain: 'Permanent All-Wheel Drive',
    },
    location: 'Salt Lake City, UT (Park City Corridor)',
    legalEntity: 'Caro Wasatch Series Defender LLC',
    usageEntitlement: '91 days / year with rooftop expedition tent',
    description: 'Purpose-built luxury overland vehicle. Terrain Response 2 system, water-fording capability, and off-grid expedition equipment for seasonal adventures.',
    coOwners: [
      { name: 'Travis Hoffman', role: 'Adventure Photographer', joined: 'Sep 2026', initials: 'TH' },
      { name: 'Chloe Morgan', role: 'Physician', joined: 'Oct 2026', initials: 'CM' },
      { name: 'Liam Davies', role: 'Renewables Engineer', joined: 'Nov 2026', initials: 'LD' },
    ],
  },
];
