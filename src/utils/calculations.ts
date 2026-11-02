export interface PortfolioItem {
  id: string;
  name: string;
  category: string;
  sharePercentage: number;
  vehiclePrice: number;
  contributedCapital: number;
  annualRunningCost: number;
}

export interface PortfolioSummary {
  totalVehicles: number;
  totalContributedCapital: number;
  totalEstimatedValue: number;
  totalMonthlyObligations: number;
  totalAnnualDaysEntitlement: number;
}

export interface CustomerFormData {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  city: string;
  primaryInterest: string;
  privacyConsent: boolean;
}

export interface DealerFormData {
  dealershipName: string;
  contactName: string;
  businessEmail: string;
  phone: string;
  country: string;
  city: string;
  locationCount: string;
  dealershipType: string;
  inventorySize: string;
  message?: string;
}

/**
 * Calculates contribution amount per co-owner based on vehicle price and group size.
 */
export function calculateOwnershipContribution(vehiclePrice: number, memberCount: number): number {
  if (memberCount <= 0 || vehiclePrice <= 0) return 0;
  return Math.round((vehiclePrice / memberCount) * 100) / 100;
}

/**
 * Calculates estimated monthly running expenses based on annual cost and share percentage.
 */
export function calculateMonthlyEstimatedCost(annualCost: number, sharePercentage: number): number {
  if (annualCost <= 0 || sharePercentage <= 0) return 0;
  const annualShare = annualCost * (sharePercentage / 100);
  return Math.round((annualShare / 12) * 100) / 100;
}

/**
 * Calculates approximate annual usage days based on economic share percentage.
 */
export function calculateEntitlementDays(sharePercentage: number, totalDays = 365): number {
  if (sharePercentage <= 0) return 0;
  return Math.floor(totalDays * (sharePercentage / 100));
}

/**
 * Aggregates portfolio metrics for a multi-vehicle garage.
 */
export function calculatePortfolioSummary(vehicles: PortfolioItem[]): PortfolioSummary {
  const totalVehicles = vehicles.length;
  let totalContributedCapital = 0;
  let totalEstimatedValue = 0;
  let totalMonthlyObligations = 0;
  let totalAnnualDaysEntitlement = 0;

  for (const v of vehicles) {
    totalContributedCapital += v.contributedCapital;
    totalEstimatedValue += v.vehiclePrice * (v.sharePercentage / 100);
    totalMonthlyObligations += calculateMonthlyEstimatedCost(v.annualRunningCost, v.sharePercentage);
    totalAnnualDaysEntitlement += calculateEntitlementDays(v.sharePercentage);
  }

  return {
    totalVehicles,
    totalContributedCapital: Math.round(totalContributedCapital),
    totalEstimatedValue: Math.round(totalEstimatedValue),
    totalMonthlyObligations: Math.round(totalMonthlyObligations),
    totalAnnualDaysEntitlement,
  };
}

/**
 * Validates standard email address format.
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

/**
 * Validates early access customer registration form.
 */
export function validateCustomerForm(data: CustomerFormData): {
  isValid: boolean;
  errors: Partial<Record<keyof CustomerFormData, string>>;
} {
  const errors: Partial<Record<keyof CustomerFormData, string>> = {};

  if (!data.firstName.trim()) {
    errors.firstName = 'First name is required';
  }
  if (!data.lastName.trim()) {
    errors.lastName = 'Last name is required';
  }
  if (!data.email.trim()) {
    errors.email = 'Email address is required';
  } else if (!validateEmail(data.email)) {
    errors.email = 'Please provide a valid email address';
  }
  if (!data.country.trim()) {
    errors.country = 'Country is required';
  }
  if (!data.city.trim()) {
    errors.city = 'City is required';
  }
  if (!data.primaryInterest) {
    errors.primaryInterest = 'Please select your primary interest';
  }
  if (!data.privacyConsent) {
    errors.privacyConsent = 'You must agree to the privacy policy to continue';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Validates dealership partner application form.
 */
export function validateDealerForm(data: DealerFormData): {
  isValid: boolean;
  errors: Partial<Record<keyof DealerFormData, string>>;
} {
  const errors: Partial<Record<keyof DealerFormData, string>> = {};

  if (!data.dealershipName.trim()) {
    errors.dealershipName = 'Dealership name is required';
  }
  if (!data.contactName.trim()) {
    errors.contactName = 'Contact person name is required';
  }
  if (!data.businessEmail.trim()) {
    errors.businessEmail = 'Business email is required';
  } else if (!validateEmail(data.businessEmail)) {
    errors.businessEmail = 'Please provide a valid business email';
  }
  if (!data.phone.trim()) {
    errors.phone = 'Phone number is required';
  }
  if (!data.country.trim()) {
    errors.country = 'Country is required';
  }
  if (!data.city.trim()) {
    errors.city = 'City is required';
  }
  if (!data.inventorySize) {
    errors.inventorySize = 'Please specify approximate inventory size';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
