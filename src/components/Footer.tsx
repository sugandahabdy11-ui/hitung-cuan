import { Link } from "react-router-dom";
import { Calculator } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card mt-auto">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 font-bold text-lg">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Calculator className="h-4 w-4" />
              </div>
              <span>CalcTools Finance Indonesia</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Kalkulator keuangan online gratis untuk menghitung gaji bersih PPh 21,
              cicilan KPR, dan estimasi perencanaan keuangan di Indonesia.
            </p>
          </div>

          {/* Kalkulator */}
          <div>
            <h3 className="font-semibold mb-4">Kalkulator</h3>
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
                  Kalkulator KPR / Kredit Rumah
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
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

          {/* Disclaimer Text */}
          <div>
            <h3 className="font-semibold mb-4">Informasi</h3>
            <p className="text-sm text-muted-foreground">
              Seluruh hasil perhitungan di situs ini bersifat estimasi dan tidak
              menggantikan perhitungan resmi dari pihak bank, perusahaan, atau
              otoritas pajak. Gunakan sebagai referensi awal.
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} CalcTools Finance Indonesia. Seluruh hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
