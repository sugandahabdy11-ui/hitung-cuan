import { useState, useMemo } from "react";
import { CurrencyInput } from "@/components/CurrencyInput";
import { SliderInput } from "@/components/SliderInput";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { calculateKpr, generateAmortizationSchedule, KPR_DEFAULTS } from "@/lib/kpr";
import { formatCurrency, parseCurrencyInput, formatNumber } from "@/lib/format";
import { Home, Percent, Calendar, TrendingUp, ChevronDown, ChevronUp, Info } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function KprCalculator() {
  // Form state
  const [hargaProperti, setHargaProperti] = useState("500.000.000");
  const [dpPercent, setDpPercent] = useState(20);
  const [tenor, setTenor] = useState(15);
  const [sukuBunga, setSukuBunga] = useState(8.5);
  const [showSchedule, setShowSchedule] = useState(false);

  // Parse values
  const hargaNum = parseCurrencyInput(hargaProperti);
  const uangMuka = Math.round(hargaNum * (dpPercent / 100));

  // Calculate KPR
  const result = useMemo(() => {
    return calculateKpr({
      hargaProperti: hargaNum,
      uangMuka,
      tenor,
      sukuBunga,
    });
  }, [hargaNum, uangMuka, tenor, sukuBunga]);

  // Generate amortization schedule
  const schedule = useMemo(() => {
    return generateAmortizationSchedule(result.pokokPinjaman, sukuBunga, tenor, 12);
  }, [result.pokokPinjaman, sukuBunga, tenor]);

  // Calculate percentages for visual
  const bungaPercent = result.totalPembayaran > 0 
    ? (result.totalBunga / result.totalPembayaran) * 100 
    : 0;

  return (
    <div className="calculator-card animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
          <Home className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-xl font-bold">Kalkulator KPR</h2>
          <p className="text-sm text-muted-foreground">Simulasi cicilan rumah</p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Input Section */}
        <div className="space-y-6">
          <CurrencyInput
            id="harga-properti"
            label="Harga Properti"
            value={hargaProperti}
            onChange={setHargaProperti}
            placeholder="500.000.000"
            helpText="Harga rumah atau properti yang ingin dibeli"
          />

          <div className="space-y-4">
            <SliderInput
              id="uang-muka"
              label="Uang Muka (DP)"
              value={dpPercent}
              onChange={setDpPercent}
              min={10}
              max={50}
              step={5}
              suffix="%"
              formatValue={(v) => v.toString()}
            />
            <div className="text-center py-2 px-4 rounded-lg bg-secondary/50">
              <span className="text-sm text-muted-foreground">DP: </span>
              <span className="font-semibold text-accent">{formatCurrency(uangMuka)}</span>
            </div>
          </div>

          <SliderInput
            id="tenor"
            label="Jangka Waktu Kredit"
            value={tenor}
            onChange={setTenor}
            min={1}
            max={30}
            suffix=" tahun"
            formatValue={(v) => v.toString()}
          />

          <SliderInput
            id="suku-bunga"
            label="Suku Bunga Tahunan"
            value={sukuBunga}
            onChange={setSukuBunga}
            min={1}
            max={20}
            step={0.1}
            suffix="%"
            formatValue={(v) => v.toFixed(1)}
          />
        </div>

        {/* Result Section */}
        <div className="space-y-4">
          {/* Main Result - Monthly Payment */}
          <div className="result-box">
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">Cicilan Per Bulan</span>
            </div>
            <p className="text-3xl md:text-4xl font-bold text-accent animate-number">
              {formatCurrency(result.cicilanBulanan)}
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Selama {tenor} tahun ({tenor * 12} bulan)
            </p>
          </div>

          {/* Summary Cards */}
          <div className="grid gap-3 grid-cols-2">
            <Card className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">Pokok Pinjaman</span>
              </div>
              <p className="font-semibold">{formatCurrency(result.pokokPinjaman)}</p>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Percent className="h-4 w-4 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">Total Bunga</span>
              </div>
              <p className="font-semibold text-destructive">{formatCurrency(result.totalBunga)}</p>
            </Card>
          </div>

          {/* Total Payment Breakdown */}
          <Card className="p-4">
            <h4 className="font-medium mb-3">Total Pembayaran</h4>
            <div className="space-y-3">
              {/* Progress bar showing principal vs interest */}
              <div className="h-3 rounded-full bg-secondary overflow-hidden flex">
                <div 
                  className="h-full bg-accent transition-all duration-500"
                  style={{ width: `${100 - bungaPercent}%` }}
                />
                <div 
                  className="h-full bg-destructive/60 transition-all duration-500"
                  style={{ width: `${bungaPercent}%` }}
                />
              </div>
              <div className="flex justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <span className="text-muted-foreground">
                    Pokok ({(100 - bungaPercent).toFixed(1)}%)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <span className="text-muted-foreground">
                    Bunga ({bungaPercent.toFixed(1)}%)
                  </span>
                </div>
              </div>
              <Separator />
              <div className="flex justify-between items-center">
                <span className="font-medium">Total Pembayaran</span>
                <span className="font-bold text-lg">{formatCurrency(result.totalPembayaran)}</span>
              </div>
            </div>
          </Card>

          {/* Toggle Amortization Schedule */}
          <button
            onClick={() => setShowSchedule(!showSchedule)}
            className="w-full flex items-center justify-center gap-2 py-3 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
          >
            {showSchedule ? "Sembunyikan" : "Lihat"} Tabel Angsuran
            {showSchedule ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Amortization Schedule */}
      {showSchedule && (
        <div className="mt-6 pt-6 border-t border-border animate-slide-up">
          <h3 className="text-lg font-semibold mb-4">
            Tabel Angsuran (12 Bulan Pertama)
          </h3>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[80px]">Bulan</TableHead>
                  <TableHead className="text-right">Pokok</TableHead>
                  <TableHead className="text-right">Bunga</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                  <TableHead className="text-right">Sisa Pinjaman</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {schedule.map((row) => (
                  <TableRow key={row.bulan}>
                    <TableCell className="font-medium">{row.bulan}</TableCell>
                    <TableCell className="text-right">{formatCurrency(row.angsuranPokok)}</TableCell>
                    <TableCell className="text-right text-destructive">
                      {formatCurrency(row.angsuranBunga)}
                    </TableCell>
                    <TableCell className="text-right font-medium">
                      {formatCurrency(row.totalAngsuran)}
                    </TableCell>
                    <TableCell className="text-right">{formatCurrency(row.sisaPinjaman)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <p className="text-xs text-muted-foreground mt-3 text-center">
            * Menampilkan 12 bulan pertama dari total {tenor * 12} bulan
          </p>
        </div>
      )}

      {/* Disclaimer */}
      <div className="mt-6 p-4 rounded-lg bg-secondary/50 border border-border">
        <div className="flex gap-3">
          <Info className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-medium">Catatan</p>
            <p className="text-muted-foreground mt-1">
              Perhitungan menggunakan metode anuitas dengan bunga tetap (fixed rate). 
              Cicilan aktual dapat berbeda tergantung kebijakan bank, biaya administrasi, 
              asuransi, dan komponen lainnya.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
