export interface GarageHolding {
  id: string;
  name: string;
  category: string;
  image: string;
  sharePercentage: number;
  contributedCapital: number;
  currentValue: number;
  monthlyExpense: number;
  daysEntitlement: number;
  daysUsed: number;
  nextScheduledDrive: string;
  location: string;
  legalEntity: string;
  coOwnersCount: number;
}

export const USER_GARAGE_PORTFOLIO: GarageHolding[] = [
  {
    id: 'hold-1',
    name: 'Toyota RAV4 Hybrid XSE',
    category: 'Everyday',
    image: '/src/assets/images/car_toyota_rav4_1793608579566.jpg',
    sharePercentage: 25.0,
    contributedCapital: 8000,
    currentValue: 8000,
    monthlyExpense: 75,
    daysEntitlement: 91,
    daysUsed: 42,
    nextScheduledDrive: 'Thursday, 09:00 AM (48h weekend trip)',
    location: 'Downtown Hub (Pod A-04)',
    legalEntity: 'Caro Cascadia Series RAV4 LLC',
    coOwnersCount: 4,
  },
  {
    id: 'hold-2',
    name: 'BMW M4 Competition',
    category: 'Performance',
    image: '/src/assets/images/car_bmw_m4_1793608579550.jpg',
    sharePercentage: 20.0,
    contributedCapital: 15000,
    currentValue: 15200,
    monthlyExpense: 120,
    daysEntitlement: 73,
    daysUsed: 31,
    nextScheduledDrive: 'Nov 14 - Nov 17 (Track & Highway touring)',
    location: 'Westside Performance Vault (Bay 12)',
    legalEntity: 'Caro Lone Star Series M4 LLC',
    coOwnersCount: 5,
  },
  {
    id: 'hold-3',
    name: 'Porsche 911 Carrera',
    category: 'Performance',
    image: '/src/assets/images/car_porsche_911_1793608578038.jpg',
    sharePercentage: 16.7,
    contributedCapital: 20000,
    currentValue: 20500,
    monthlyExpense: 160,
    daysEntitlement: 61,
    daysUsed: 24,
    nextScheduledDrive: 'Nov 27 - Nov 30 (Thanksgiving coastal drive)',
    location: 'Presidio Climate Lounge (Bay 03)',
    legalEntity: 'Caro Pacific Holdings Series 911 LLC',
    coOwnersCount: 6,
  },
  {
    id: 'hold-4',
    name: 'Mercedes-Benz GLE 450',
    category: 'SUVs',
    image: '/src/assets/images/car_mercedes_gle_1793608579777.jpg',
    sharePercentage: 25.0,
    contributedCapital: 15000,
    currentValue: 15250,
    monthlyExpense: 135,
    daysEntitlement: 91,
    daysUsed: 38,
    nextScheduledDrive: 'Dec 12 - Dec 18 (Aspen Winter Ski Expedition)',
    location: 'Highland Park Hub (Bay 08)',
    legalEntity: 'Caro Mountain States Series GLE LLC',
    coOwnersCount: 4,
  },
];

export const UPCOMING_RESERVATIONS = [
  {
    id: 'res-1',
    vehicle: 'Toyota RAV4 Hybrid',
    dates: 'Nov 06 - Nov 08',
    status: 'Confirmed',
    purpose: 'Commute & Weekend Errands',
    pickup: 'Downtown Hub (Pod A-04)',
  },
  {
    id: 'res-2',
    vehicle: 'Porsche 911 Carrera',
    dates: 'Nov 27 - Nov 30',
    status: 'Confirmed',
    purpose: 'Highway 1 Coastal Tour',
    pickup: 'Presidio Climate Lounge (Bay 03)',
  },
  {
    id: 'res-3',
    vehicle: 'Mercedes-Benz GLE 450',
    dates: 'Dec 12 - Dec 18',
    status: 'Scheduled',
    purpose: 'Family Ski Vacation',
    pickup: 'Highland Park Hub (Bay 08)',
  },
];

export const MAINTENANCE_LOGS = [
  {
    id: 'm-1',
    vehicle: 'Porsche 911 Carrera',
    task: 'Annual Michelin Pilot Sport 4S Refresh & Alignment',
    date: 'Oct 24, 2026',
    status: 'Completed',
    totalCost: 1650,
    yourShare: 275.55,
    serviceCenter: 'Porsche Center Certified Specialist',
  },
  {
    id: 'm-2',
    vehicle: 'BMW M4 Competition',
    task: '15,000-Mile Scheduled Service & Brake Flush',
    date: 'Sep 18, 2026',
    status: 'Completed',
    totalCost: 890,
    yourShare: 178.00,
    serviceCenter: 'BMW Certified M Workshop',
  },
  {
    id: 'm-3',
    vehicle: 'Mercedes-Benz GLE 450',
    task: 'Winterization Package & Nokian Studless Tire Mount',
    date: 'Scheduled for Nov 18, 2026',
    status: 'Pending Vote Approval',
    totalCost: 1400,
    yourShare: 350.00,
    serviceCenter: 'Alpine Fleet Logistics',
  },
];

export const LEGAL_DOCUMENTS = [
  {
    id: 'doc-1',
    title: 'Series Operating Agreement - Series 911 LLC',
    category: 'Operating Agreement',
    lastUpdated: 'Oct 12, 2026',
    signatories: '6 of 6 Verified',
  },
  {
    id: 'doc-2',
    title: 'Digital Fleet Master Insurance Policy & Declarations',
    category: 'Commercial Underwriting',
    lastUpdated: 'Sep 01, 2026',
    signatories: 'Underwritten by Chubb Specialty',
  },
  {
    id: 'doc-3',
    title: 'Usage Allocation Rules & Tiered Priority Schedule 2026-2027',
    category: 'Governance Protocol',
    lastUpdated: 'Aug 15, 2026',
    signatories: 'Unanimously Approved',
  },
];
