import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateOwnershipContribution,
  calculateMonthlyEstimatedCost,
  calculateEntitlementDays,
  calculatePortfolioSummary,
  validateEmail,
  validateCustomerForm,
  validateDealerForm,
  type PortfolioItem,
} from './calculations';

test('calculateOwnershipContribution splits vehicle price evenly', () => {
  assert.equal(calculateOwnershipContribution(75000, 4), 18750);
  assert.equal(calculateOwnershipContribution(120000, 6), 20000);
  assert.equal(calculateOwnershipContribution(32000, 4), 8000);
  assert.equal(calculateOwnershipContribution(0, 4), 0);
  assert.equal(calculateOwnershipContribution(60000, 0), 0);
});

test('calculateMonthlyEstimatedCost handles share percentage and annual opex', () => {
  // $12,000 annual cost, 25% share = $3,000/year = $250/month
  assert.equal(calculateMonthlyEstimatedCost(12000, 25), 250);
  // $6,000 annual cost, 20% share = $1,200/year = $100/month
  assert.equal(calculateMonthlyEstimatedCost(6000, 20), 100);
  assert.equal(calculateMonthlyEstimatedCost(0, 50), 0);
});

test('calculateEntitlementDays computes proportional annual calendar allowance', () => {
  assert.equal(calculateEntitlementDays(25), 91); // 365 * 0.25 = 91.25 -> 91
  assert.equal(calculateEntitlementDays(20), 73); // 365 * 0.20 = 73
  assert.equal(calculateEntitlementDays(0), 0);
});

test('calculatePortfolioSummary correctly aggregates multi-vehicle holdings', () => {
  const sampleHoldings: PortfolioItem[] = [
    {
      id: 'toyota-rav4',
      name: 'Toyota RAV4 Hybrid',
      category: 'Everyday',
      sharePercentage: 25,
      vehiclePrice: 32000,
      contributedCapital: 8000,
      annualRunningCost: 3600,
    },
    {
      id: 'bmw-m4',
      name: 'BMW M4 Competition',
      category: 'Performance',
      sharePercentage: 20,
      vehiclePrice: 75000,
      contributedCapital: 15000,
      annualRunningCost: 7200,
    },
    {
      id: 'porsche-911',
      name: 'Porsche 911 Carrera',
      category: 'Performance',
      sharePercentage: 16.67,
      vehiclePrice: 120000,
      contributedCapital: 20000,
      annualRunningCost: 9600,
    },
  ];

  const summary = calculatePortfolioSummary(sampleHoldings);
  assert.equal(summary.totalVehicles, 3);
  assert.equal(summary.totalContributedCapital, 43000);
  assert.ok(summary.totalEstimatedValue > 42000);
  assert.ok(summary.totalMonthlyObligations > 300);
  assert.ok(summary.totalAnnualDaysEntitlement > 200);
});

test('validateEmail checks standard email criteria', () => {
  assert.equal(validateEmail('alex@example.com'), true);
  assert.equal(validateEmail('not-an-email'), false);
  assert.equal(validateEmail('user@domain'), false);
  assert.equal(validateEmail('   '), false);
});

test('validateCustomerForm flags empty and invalid fields', () => {
  const emptyResult = validateCustomerForm({
    firstName: '',
    lastName: '',
    email: 'bad-email',
    country: '',
    city: '',
    primaryInterest: '',
    privacyConsent: false,
  });
  assert.equal(emptyResult.isValid, false);
  assert.ok(emptyResult.errors.firstName);
  assert.ok(emptyResult.errors.email);
  assert.ok(emptyResult.errors.privacyConsent);

  const validResult = validateCustomerForm({
    firstName: 'Elena',
    lastName: 'Vance',
    email: 'elena.vance@example.com',
    country: 'United States',
    city: 'San Francisco',
    primaryInterest: 'Performance and luxury vehicles',
    privacyConsent: true,
  });
  assert.equal(validResult.isValid, true);
  assert.equal(Object.keys(validResult.errors).length, 0);
});

test('validateDealerForm validates required dealership credentials', () => {
  const invalidResult = validateDealerForm({
    dealershipName: '',
    contactName: '',
    businessEmail: '',
    phone: '',
    country: '',
    city: '',
    locationCount: '1',
    dealershipType: 'Franchise',
    inventorySize: '',
  });
  assert.equal(invalidResult.isValid, false);

  const validResult = validateDealerForm({
    dealershipName: 'Prestige Motors Group',
    contactName: 'Marcus Bennett',
    businessEmail: 'm.bennett@prestigemotors.com',
    phone: '+1 415 555 0192',
    country: 'United States',
    city: 'Scottsdale',
    locationCount: '3',
    dealershipType: 'Luxury Independent',
    inventorySize: '100-250 vehicles',
    message: 'Interested in collective acquisition program for high-end sports inventory.',
  });
  assert.equal(validResult.isValid, true);
});
