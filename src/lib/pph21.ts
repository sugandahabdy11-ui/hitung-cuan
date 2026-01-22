/**
 * PPh 21 (Indonesian Income Tax) Calculator
 * Based on Peraturan Pemerintah No. 58 Tahun 2023 - Tarif Efektif Rata-rata (TER)
 */

// PTKP (Penghasilan Tidak Kena Pajak) values for 2024
export const PTKP_VALUES: Record<string, number> = {
  "TK/0": 54000000, // Tidak Kawin, tanpa tanggungan
  "TK/1": 58500000, // Tidak Kawin, 1 tanggungan
  "TK/2": 63000000, // Tidak Kawin, 2 tanggungan
  "TK/3": 67500000, // Tidak Kawin, 3 tanggungan
  "K/0": 58500000,  // Kawin, tanpa tanggungan
  "K/1": 63000000,  // Kawin, 1 tanggungan
  "K/2": 67500000,  // Kawin, 2 tanggungan
  "K/3": 72000000,  // Kawin, 3 tanggungan
};

// BPJS Rates (default values, editable by user)
export const BPJS_RATES = {
  kesehatan: {
    employee: 0.01,    // 1% dari gaji (max basis Rp 12.000.000)
    employer: 0.04,    // 4% dari gaji
    maxBasis: 12000000,
  },
  ketenagakerjaan: {
    jht: {
      employee: 0.02,  // 2% Jaminan Hari Tua
      employer: 0.037, // 3.7%
    },
    jp: {
      employee: 0.01,  // 1% Jaminan Pensiun
      employer: 0.02,  // 2%
      maxBasis: 10042300, // Max basis for 2024
    },
    jkk: 0.0024,       // 0.24% - 1.74% (average 0.24%)
    jkm: 0.003,        // 0.30%
  },
};

// PPh 21 Progressive Tax Rates
const PPH21_BRACKETS = [
  { limit: 60000000, rate: 0.05 },    // 5% for 0 - 60 juta
  { limit: 250000000, rate: 0.15 },   // 15% for 60 - 250 juta
  { limit: 500000000, rate: 0.25 },   // 25% for 250 - 500 juta
  { limit: 5000000000, rate: 0.30 },  // 30% for 500 juta - 5 M
  { limit: Infinity, rate: 0.35 },    // 35% for > 5 M
];

export interface Pph21Input {
  gajiBulanan: number;
  tunjanganTetap: number;
  statusPtkp: string;
  bpjsKesehatan: number;  // Employee portion per month
  bpjsJht: number;        // Employee JHT per month
  bpjsJp: number;         // Employee JP per month
}

export interface Pph21Result {
  gajiKotor: number;
  penghasilanBrutoTahunan: number;
  biayaJabatan: number;
  bpjsTotalTahunan: number;
  penghasilanNeto: number;
  ptkp: number;
  pkp: number;               // Penghasilan Kena Pajak
  pph21Tahunan: number;
  pph21Bulanan: number;
  gajiBersih: number;        // Take Home Pay
  taxBrackets: {
    bracket: string;
    amount: number;
    rate: number;
    tax: number;
  }[];
}

export function calculateBpjsKesehatan(gaji: number): { employee: number; employer: number } {
  const basis = Math.min(gaji, BPJS_RATES.kesehatan.maxBasis);
  return {
    employee: Math.round(basis * BPJS_RATES.kesehatan.employee),
    employer: Math.round(basis * BPJS_RATES.kesehatan.employer),
  };
}

export function calculateBpjsKetenagakerjaan(gaji: number): {
  jhtEmployee: number;
  jhtEmployer: number;
  jpEmployee: number;
  jpEmployer: number;
  jkk: number;
  jkm: number;
} {
  const jpBasis = Math.min(gaji, BPJS_RATES.ketenagakerjaan.jp.maxBasis);
  
  return {
    jhtEmployee: Math.round(gaji * BPJS_RATES.ketenagakerjaan.jht.employee),
    jhtEmployer: Math.round(gaji * BPJS_RATES.ketenagakerjaan.jht.employer),
    jpEmployee: Math.round(jpBasis * BPJS_RATES.ketenagakerjaan.jp.employee),
    jpEmployer: Math.round(jpBasis * BPJS_RATES.ketenagakerjaan.jp.employer),
    jkk: Math.round(gaji * BPJS_RATES.ketenagakerjaan.jkk),
    jkm: Math.round(gaji * BPJS_RATES.ketenagakerjaan.jkm),
  };
}

export function calculatePph21(input: Pph21Input): Pph21Result {
  // 1. Calculate Gaji Kotor (Gross Salary) per month
  const gajiKotor = input.gajiBulanan + input.tunjanganTetap;
  
  // 2. Calculate annual gross income
  const penghasilanBrutoTahunan = gajiKotor * 12;
  
  // 3. Biaya Jabatan (5% of bruto, max 6 juta per tahun / 500rb per bulan)
  const biayaJabatanTahunan = Math.min(penghasilanBrutoTahunan * 0.05, 6000000);
  
  // 4. Total BPJS employee contributions (annual)
  const bpjsTotalBulanan = input.bpjsKesehatan + input.bpjsJht + input.bpjsJp;
  const bpjsTotalTahunan = bpjsTotalBulanan * 12;
  
  // 5. Penghasilan Neto (Net Income)
  const penghasilanNeto = penghasilanBrutoTahunan - biayaJabatanTahunan - bpjsTotalTahunan;
  
  // 6. Get PTKP value
  const ptkp = PTKP_VALUES[input.statusPtkp] || PTKP_VALUES["TK/0"];
  
  // 7. PKP (Penghasilan Kena Pajak / Taxable Income)
  const pkp = Math.max(0, penghasilanNeto - ptkp);
  
  // 8. Calculate PPh 21 using progressive rates
  let remainingPkp = pkp;
  let pph21Tahunan = 0;
  let previousLimit = 0;
  const taxBrackets: Pph21Result["taxBrackets"]  = [];
  
  for (const bracket of PPH21_BRACKETS) {
    if (remainingPkp <= 0) break;
    
    const bracketSize = bracket.limit - previousLimit;
    const taxableInBracket = Math.min(remainingPkp, bracketSize);
    const taxInBracket = taxableInBracket * bracket.rate;
    
    if (taxableInBracket > 0) {
      taxBrackets.push({
        bracket: previousLimit === 0 
          ? `Rp 0 - Rp ${(bracket.limit / 1000000).toFixed(0)} juta`
          : bracket.limit === Infinity
            ? `> Rp ${(previousLimit / 1000000).toFixed(0)} juta`
            : `Rp ${(previousLimit / 1000000).toFixed(0)} - ${(bracket.limit / 1000000).toFixed(0)} juta`,
        amount: taxableInBracket,
        rate: bracket.rate,
        tax: taxInBracket,
      });
    }
    
    pph21Tahunan += taxInBracket;
    remainingPkp -= taxableInBracket;
    previousLimit = bracket.limit;
  }
  
  // 9. Monthly PPh 21
  const pph21Bulanan = Math.round(pph21Tahunan / 12);
  
  // 10. Take Home Pay (Gaji Bersih)
  const gajiBersih = gajiKotor - bpjsTotalBulanan - pph21Bulanan;
  
  return {
    gajiKotor,
    penghasilanBrutoTahunan,
    biayaJabatan: biayaJabatanTahunan,
    bpjsTotalTahunan,
    penghasilanNeto,
    ptkp,
    pkp,
    pph21Tahunan,
    pph21Bulanan,
    gajiBersih,
    taxBrackets,
  };
}

// PTKP Status options with labels
export const PTKP_OPTIONS = [
  { value: "TK/0", label: "TK/0 - Tidak Kawin, tanpa tanggungan" },
  { value: "TK/1", label: "TK/1 - Tidak Kawin, 1 tanggungan" },
  { value: "TK/2", label: "TK/2 - Tidak Kawin, 2 tanggungan" },
  { value: "TK/3", label: "TK/3 - Tidak Kawin, 3 tanggungan" },
  { value: "K/0", label: "K/0 - Kawin, tanpa tanggungan" },
  { value: "K/1", label: "K/1 - Kawin, 1 tanggungan" },
  { value: "K/2", label: "K/2 - Kawin, 2 tanggungan" },
  { value: "K/3", label: "K/3 - Kawin, 3 tanggungan" },
];
