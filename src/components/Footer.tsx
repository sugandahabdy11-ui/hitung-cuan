import { Link } from "react-router-dom";
import { Calculator } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card mt-auto">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 font-bold text-lg">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Calculator className="h-4 w-4" />
              </div>
              <span>CalcTools Finance</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Kalkulator keuangan online terpercaya untuk menghitung gaji bersih, 
              cicilan KPR, dan perencanaan keuangan Anda di Indonesia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Kalkulator</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/kalkulator-gaji-bersih-pph21"
                  className="text-muted-foreground hover:text-foreground transition-theme"
                >
                  Kalkulator Gaji Bersih (PPh 21)
                </Link>
              </li>
              <li>
                <Link
                  to="/kalkulator-kpr"
                  className="text-muted-foreground hover:text-foreground transition-theme"
                >
                  Kalkulator KPR / Kredit Rumah
                </Link>
              </li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div>
            <h3 className="font-semibold mb-4">Disclaimer</h3>
            <p className="text-sm text-muted-foreground">
              Hasil perhitungan bersifat estimasi dan hanya untuk referensi. 
              Untuk perhitungan pajak resmi, konsultasikan dengan konsultan 
              pajak atau akuntan bersertifikat.
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} CalcTools Finance Indonesia. Hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
