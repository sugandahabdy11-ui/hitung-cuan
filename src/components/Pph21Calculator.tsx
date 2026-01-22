import { useState, useEffect, useMemo } from "react";
import { CurrencyInput } from "@/components/CurrencyInput";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  calculatePph21,
  calculateBpjsKesehatan,
  calculateBpjsKetenagakerjaan,
  PTKP_OPTIONS,
  Pph21Result,
} from "@/lib/pph21";
import { formatCurrency, parseCurrencyInput } from "@/lib/format";
import { ChevronDown, ChevronUp, Info, Calculator, Wallet, Receipt } from "lucide-react";

export function Pph21Calculator() {
  // Form state
  const [gajiBulanan, setGajiBulanan] = useState("10.000.000");
  const [tunjanganTetap, setTunjanganTetap] = useState("0");
  const [statusPtkp, setStatusPtkp] = useState("TK/0");
  const [useBpjs, setUseBpjs] = useState(true);
  const [showBreakdown, setShowBreakdown] = useState(false);

  // Parse currency values
  const gajiNum = parseCurrencyInput(gajiBulanan);
  const tunjanganNum = parseCurrencyInput(tunjanganTetap);

  // Calculate BPJS
  const bpjsKesehatan = useMemo(() => calculateBpjsKesehatan(gajiNum), [gajiNum]);
  const bpjsKetenagakerjaan = useMemo(() => calculateBpjsKetenagakerjaan(gajiNum), [gajiNum]);

  // Calculate PPh 21
  const result: Pph21Result = useMemo(() => {
    return calculatePph21({
      gajiBulanan: gajiNum,
      tunjanganTetap: tunjanganNum,
      statusPtkp,
      bpjsKesehatan: useBpjs ? bpjsKesehatan.employee : 0,
      bpjsJht: useBpjs ? bpjsKetenagakerjaan.jhtEmployee : 0,
      bpjsJp: useBpjs ? bpjsKetenagakerjaan.jpEmployee : 0,
    });
  }, [gajiNum, tunjanganNum, statusPtkp, useBpjs, bpjsKesehatan, bpjsKetenagakerjaan]);

  const totalBpjsEmployee = useBpjs
    ? bpjsKesehatan.employee + bpjsKetenagakerjaan.jhtEmployee + bpjsKetenagakerjaan.jpEmployee
    : 0;

  return (
    <div className="calculator-card animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
          <Calculator className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-xl font-bold">Kalkulator PPh 21</h2>
          <p className="text-sm text-muted-foreground">Hitung gaji bersih Anda</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Input Section */}
        <div className="space-y-5">
          <CurrencyInput
            id="gaji-bulanan"
            label="Gaji Pokok Bulanan"
            value={gajiBulanan}
            onChange={setGajiBulanan}
            placeholder="10.000.000"
            helpText="Gaji pokok per bulan sebelum potongan"
          />

          <CurrencyInput
            id="tunjangan-tetap"
            label="Tunjangan Tetap"
            value={tunjanganTetap}
            onChange={setTunjanganTetap}
            placeholder="0"
            helpText="Tunjangan transport, makan, dll (opsional)"
          />

          <div className="space-y-2">
            <Label htmlFor="status-ptkp" className="text-sm font-medium">
              Status PTKP
            </Label>
            <Select value={statusPtkp} onValueChange={setStatusPtkp}>
              <SelectTrigger id="status-ptkp" className="h-11">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {PTKP_OPTIONS.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">
              Penghasilan Tidak Kena Pajak berdasarkan status pernikahan
            </p>
          </div>

          <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
            <div className="space-y-0.5">
              <Label htmlFor="use-bpjs" className="text-sm font-medium cursor-pointer">
                Hitung Potongan BPJS
              </Label>
              <p className="text-xs text-muted-foreground">
                BPJS Kesehatan & Ketenagakerjaan
              </p>
            </div>
            <Switch
              id="use-bpjs"
              checked={useBpjs}
              onCheckedChange={setUseBpjs}
            />
          </div>
        </div>

        {/* Result Section */}
        <div className="space-y-4">
          {/* Main Result */}
          <div className="result-box">
            <div className="flex items-center gap-2 mb-3">
              <Wallet className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">Gaji Bersih (Take Home Pay)</span>
            </div>
            <p className="text-3xl md:text-4xl font-bold text-accent animate-number">
              {formatCurrency(result.gajiBersih)}
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Per bulan setelah pajak dan potongan
            </p>
          </div>

          {/* Quick Summary */}
          <Card className="p-4">
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Gaji Kotor</span>
                <span className="font-medium">{formatCurrency(result.gajiKotor)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">PPh 21 Bulanan</span>
                <span className="font-medium text-destructive">
                  -{formatCurrency(result.pph21Bulanan)}
                </span>
              </div>
              {useBpjs && (
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">BPJS (Karyawan)</span>
                  <span className="font-medium text-destructive">
                    -{formatCurrency(totalBpjsEmployee)}
                  </span>
                </div>
              )}
              <Separator />
              <div className="flex justify-between">
                <span className="font-medium">Gaji Bersih</span>
                <span className="font-bold text-accent">{formatCurrency(result.gajiBersih)}</span>
              </div>
            </div>
          </Card>

          {/* Toggle Breakdown */}
          <button
            onClick={() => setShowBreakdown(!showBreakdown)}
            className="w-full flex items-center justify-center gap-2 py-3 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
          >
            <Receipt className="h-4 w-4" />
            {showBreakdown ? "Sembunyikan" : "Lihat"} Detail Perhitungan
            {showBreakdown ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Detailed Breakdown */}
      {showBreakdown && (
        <div className="mt-6 pt-6 border-t border-border animate-slide-up">
          <h3 className="text-lg font-semibold mb-4">Detail Perhitungan PPh 21</h3>
          
          <div className="space-y-4">
            {/* Step 1: Gross Income */}
            <div className="step-card">
              <h4 className="font-medium mb-2">1. Penghasilan Bruto Tahunan</h4>
              <div className="text-sm space-y-1 text-muted-foreground">
                <p>Gaji Kotor × 12 bulan = {formatCurrency(result.gajiKotor)} × 12</p>
                <p className="font-medium text-foreground">
                  = {formatCurrency(result.penghasilanBrutoTahunan)}
                </p>
              </div>
            </div>

            {/* Step 2: Deductions */}
            <div className="step-card">
              <h4 className="font-medium mb-2">2. Pengurang Penghasilan</h4>
              <div className="text-sm space-y-1 text-muted-foreground">
                <p>Biaya Jabatan (5%, maks Rp 6 juta/tahun): {formatCurrency(result.biayaJabatan)}</p>
                <p>BPJS Karyawan (tahunan): {formatCurrency(result.bpjsTotalTahunan)}</p>
                <p className="font-medium text-foreground">
                  Total Pengurang: {formatCurrency(result.biayaJabatan + result.bpjsTotalTahunan)}
                </p>
              </div>
            </div>

            {/* Step 3: Net Income */}
            <div className="step-card">
              <h4 className="font-medium mb-2">3. Penghasilan Neto</h4>
              <div className="text-sm text-muted-foreground">
                <p className="font-medium text-foreground">
                  {formatCurrency(result.penghasilanNeto)}
                </p>
              </div>
            </div>

            {/* Step 4: PTKP */}
            <div className="step-card">
              <h4 className="font-medium mb-2">4. PTKP ({statusPtkp})</h4>
              <div className="text-sm text-muted-foreground">
                <p className="font-medium text-foreground">
                  {formatCurrency(result.ptkp)}
                </p>
              </div>
            </div>

            {/* Step 5: PKP */}
            <div className="step-card">
              <h4 className="font-medium mb-2">5. Penghasilan Kena Pajak (PKP)</h4>
              <div className="text-sm space-y-1 text-muted-foreground">
                <p>Penghasilan Neto - PTKP</p>
                <p className="font-medium text-foreground">
                  = {formatCurrency(result.pkp)}
                </p>
              </div>
            </div>

            {/* Step 6: Tax Calculation */}
            <div className="step-card">
              <h4 className="font-medium mb-2">6. Perhitungan PPh 21 Tahunan</h4>
              <div className="text-sm space-y-2">
                {result.taxBrackets.map((bracket, index) => (
                  <div key={index} className="flex justify-between text-muted-foreground">
                    <span>
                      {bracket.bracket} ({(bracket.rate * 100).toFixed(0)}%)
                    </span>
                    <span>{formatCurrency(bracket.tax)}</span>
                  </div>
                ))}
                <Separator className="my-2" />
                <div className="flex justify-between font-medium text-foreground">
                  <span>PPh 21 Tahunan</span>
                  <span>{formatCurrency(result.pph21Tahunan)}</span>
                </div>
                <div className="flex justify-between font-medium text-accent">
                  <span>PPh 21 Bulanan</span>
                  <span>{formatCurrency(result.pph21Bulanan)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* BPJS Details */}
          {useBpjs && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Detail Potongan BPJS</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="step-card">
                  <h4 className="font-medium mb-2">BPJS Kesehatan</h4>
                  <div className="text-sm space-y-1 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Karyawan (1%)</span>
                      <span>{formatCurrency(bpjsKesehatan.employee)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Perusahaan (4%)</span>
                      <span>{formatCurrency(bpjsKesehatan.employer)}</span>
                    </div>
                  </div>
                </div>
                <div className="step-card">
                  <h4 className="font-medium mb-2">BPJS Ketenagakerjaan</h4>
                  <div className="text-sm space-y-1 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>JHT Karyawan (2%)</span>
                      <span>{formatCurrency(bpjsKetenagakerjaan.jhtEmployee)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>JP Karyawan (1%)</span>
                      <span>{formatCurrency(bpjsKetenagakerjaan.jpEmployee)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Disclaimer */}
          <div className="mt-6 p-4 rounded-lg bg-warning/10 border border-warning/20">
            <div className="flex gap-3">
              <Info className="h-5 w-5 text-warning flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-warning-foreground">Catatan Penting</p>
                <p className="text-muted-foreground mt-1">
                  Perhitungan ini menggunakan metode pajak progresif untuk karyawan tetap. 
                  Hasil bersifat estimasi dan dapat berbeda dengan perhitungan resmi. 
                  Untuk keperluan pelaporan pajak, konsultasikan dengan konsultan pajak bersertifikat.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
