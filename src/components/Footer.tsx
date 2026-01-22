import { Link } from "react-router-dom";
import { Calculator } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-10">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* BRAND */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 font-bold text-lg">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Calculator className="h-4 w-4" />
              </div>
              <span>CalcTools Finance</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              CalcTools Finance Indonesia adalah platform kalkulator keuangan
              online gratis untuk membantu menghitung gaji bersih PPh 21,
              simulasi cicilan KPR, dan perencanaan keuangan di Indonesia.
            </p>
          </div>

          {/* KALKULATOR LINKS */}
          <div>
            <h3 className="font-semibold mb-3">Kalkulator</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/kalkulator-gaji-bersih-pph21"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Kalkulator Gaji Bersih (PPh 21)
                </Link>
              </li>
              <li>
                <Link
                  to="/kalkulator-kpr"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Kalkulator KPR / Cicilan Rumah
                </Link>
              </li>
            </ul>
          </div>

          {/* LEGAL LINKS */}
          <div>
            <h3 className="font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/disclaimer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* DISCLAIMER */}
          <div>
            <h3 className="font-semibold mb-3">Informasi</h3>
            <p className="text-sm text-muted-foreground">
              Seluruh kalkulator di situs ini bersifat simulasi dan hanya untuk
              referensi. Hasil perhitungan dapat berbeda dengan perhitungan
              resmi dari bank, perusahaan, atau otoritas pajak. Untuk keputusan
              finansial penting, konsultasikan dengan profesional terkait.
            </p>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>
            © {year} CalcTools Finance Indonesia. Seluruh hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
