import { LegalLayout } from "@/components/layouts/LegalLayout";
import { Seo } from "@/components/Seo";
import { KprCalculator } from "@/components/KprCalculator";
import { FaqSection } from "@/components/FaqSection";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function Disclaimer() {
  return (
    <LegalLayout>
      <Seo
        title="Disclaimer | CalcTools Finance Indonesia"
        description="Disclaimer penggunaan kalkulator keuangan di CalcTools Finance Indonesia. Informasi bersifat simulasi dan bukan nasihat profesional."
        canonical="https://calctoolsfinance.site/disclaimer"
      />

      <h1>Disclaimer</h1>

      <p>
        Informasi, konten, dan kalkulator yang tersedia di CalcTools Finance
        Indonesia disediakan hanya untuk tujuan informasi dan simulasi.
      </p>

      <h2>1. Bukan Nasihat Profesional</h2>
      <p>
        Hasil perhitungan dari kalkulator PPh 21, KPR, dan alat keuangan lainnya
        bukan merupakan nasihat pajak, keuangan, hukum, atau investasi resmi.
      </p>

      <p>
        Untuk keputusan keuangan, pajak, atau hukum yang bersifat penting,
        pengguna disarankan untuk berkonsultasi dengan konsultan pajak,
        pihak bank, atau profesional keuangan yang berlisensi.
      </p>

      <h2>2. Estimasi Perhitungan</h2>
      <p>
        Semua hasil perhitungan bersifat estimasi dan dapat berbeda dengan
        perhitungan resmi yang dikeluarkan oleh:
      </p>

      <ul>
        <li>Direktorat Jenderal Pajak (DJP)</li>
        <li>Bank atau lembaga keuangan terkait</li>
        <li>Penyedia jasa keuangan lainnya</li>
      </ul>

      <p>
        Perbedaan dapat terjadi akibat perubahan peraturan, kebijakan lembaga,
        atau asumsi yang digunakan dalam perhitungan.
      </p>

      <h2>3. Tanggung Jawab Pengguna</h2>
      <p>
        Penggunaan informasi dan kalkulator di situs ini sepenuhnya menjadi
        tanggung jawab pengguna.
      </p>

      <p>
        CalcTools Finance Indonesia tidak bertanggung jawab atas kerugian
        langsung maupun tidak langsung yang timbul akibat penggunaan informasi
        atau hasil perhitungan dari situs ini.
      </p>

      <p>
        <strong>Terakhir diperbarui:</strong> 2026
      </p>
    </LegalLayout>
  );
}
