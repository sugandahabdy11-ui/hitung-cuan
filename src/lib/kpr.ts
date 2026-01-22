/**
 * KPR (Kredit Pemilikan Rumah) / Mortgage Calculator
 * Using standard EMI (Equated Monthly Installment) formula
 */

export interface KprInput {
  hargaProperti: number;   // Property price
  uangMuka: number;        // Down payment (DP)
  tenor: number;           // Loan term in years
  sukuBunga: number;       // Annual interest rate in percentage
}

export interface KprResult {
  pokokPinjaman: number;      // Principal (loan amount)
  cicilanBulanan: number;     // Monthly installment (EMI)
  totalBunga: number;         // Total interest paid
  totalPembayaran: number;    // Total payment over loan term
  rasioUangMuka: number;      // DP percentage
}

/**
 * Calculate EMI (Equated Monthly Installment)
 * Formula: EMI = P × r × (1 + r)^n / ((1 + r)^n − 1)
 * Where:
 *   P = Principal loan amount
 *   r = Monthly interest rate
 *   n = Number of monthly installments
 */
export function calculateKpr(input: KprInput): KprResult {
  const { hargaProperti, uangMuka, tenor, sukuBunga } = input;
  
  // Calculate principal (loan amount after down payment)
  const pokokPinjaman = hargaProperti - uangMuka;
  
  // Handle edge cases
  if (pokokPinjaman <= 0) {
    return {
      pokokPinjaman: 0,
      cicilanBulanan: 0,
      totalBunga: 0,
      totalPembayaran: 0,
      rasioUangMuka: 100,
    };
  }
  
  if (sukuBunga <= 0) {
    // No interest case
    const n = tenor * 12;
    const cicilanBulanan = Math.round(pokokPinjaman / n);
    return {
      pokokPinjaman,
      cicilanBulanan,
      totalBunga: 0,
      totalPembayaran: pokokPinjaman,
      rasioUangMuka: (uangMuka / hargaProperti) * 100,
    };
  }
  
  // Monthly interest rate
  const r = sukuBunga / 100 / 12;
  
  // Number of monthly payments
  const n = tenor * 12;
  
  // EMI calculation
  const emi = pokokPinjaman * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
  const cicilanBulanan = Math.round(emi);
  
  // Total payment over the loan term
  const totalPembayaran = cicilanBulanan * n;
  
  // Total interest paid
  const totalBunga = totalPembayaran - pokokPinjaman;
  
  // Down payment ratio
  const rasioUangMuka = (uangMuka / hargaProperti) * 100;
  
  return {
    pokokPinjaman,
    cicilanBulanan,
    totalBunga,
    totalPembayaran,
    rasioUangMuka,
  };
}

/**
 * Generate amortization schedule
 */
export interface AmortizationRow {
  bulan: number;
  angsuranPokok: number;
  angsuranBunga: number;
  totalAngsuran: number;
  sisaPinjaman: number;
}

export function generateAmortizationSchedule(
  pokokPinjaman: number,
  sukuBunga: number,
  tenor: number,
  maxRows: number = 12
): AmortizationRow[] {
  const schedule: AmortizationRow[] = [];
  const r = sukuBunga / 100 / 12;
  const n = tenor * 12;
  
  if (pokokPinjaman <= 0 || n <= 0) return schedule;
  
  // Calculate EMI
  const emi = sukuBunga > 0
    ? pokokPinjaman * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1)
    : pokokPinjaman / n;
  
  let sisaPinjaman = pokokPinjaman;
  
  for (let bulan = 1; bulan <= Math.min(n, maxRows); bulan++) {
    const angsuranBunga = Math.round(sisaPinjaman * r);
    const angsuranPokok = Math.round(emi - angsuranBunga);
    sisaPinjaman = Math.max(0, sisaPinjaman - angsuranPokok);
    
    schedule.push({
      bulan,
      angsuranPokok,
      angsuranBunga,
      totalAngsuran: Math.round(emi),
      sisaPinjaman,
    });
  }
  
  return schedule;
}

// Default slider ranges
export const KPR_DEFAULTS = {
  hargaProperti: {
    min: 100000000,      // 100 juta
    max: 10000000000,    // 10 miliar
    step: 10000000,      // 10 juta
    default: 500000000,  // 500 juta
  },
  uangMuka: {
    minPercent: 10,      // Minimum 10% DP
    maxPercent: 50,      // Maximum 50% DP
    defaultPercent: 20,  // Default 20% DP
  },
  tenor: {
    min: 1,
    max: 30,
    default: 15,
  },
  sukuBunga: {
    min: 1,
    max: 20,
    step: 0.1,
    default: 8.5,       // Average Indonesian mortgage rate
  },
};
