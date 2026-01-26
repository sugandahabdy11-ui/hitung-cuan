import { MainLayout } from "@/components/layouts/MainLayout";
import { Seo } from "@/components/Seo";
import { Pph21Calculator } from "@/components/Pph21Calculator";
import { FaqSection } from "@/components/FaqSection";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

const faqs = [
  {
    question: "Apa itu PPh 21 dan siapa yang wajib membayarnya?",
    answer:
      "PPh 21 adalah pajak atas penghasilan berupa gaji, upah, honorarium, tunjangan, dan pembayaran lain yang diterima karyawan atau individu sehubungan dengan pekerjaan di Indonesia.",
  },
  {
    question: "Berapa PTKP terbaru di Indonesia?",
    answer:
      "PTKP dasar adalah Rp54.000.000 per tahun untuk wajib pajak orang pribadi, dengan tambahan untuk status kawin dan jumlah tanggungan sesuai peraturan perpajakan yang berlaku.",
  },
  {
    question: "Apakah iuran BPJS mengurangi PPh 21?",
    answer:
      "Ya. Iuran BPJS Kesehatan dan BPJS Ketenagakerjaan yang dibayar oleh karyawan dapat menjadi pengurang penghasilan bruto dalam perhitungan PPh 21.",
  },
];

export default function KalkulatorPph21Page() {
  return (
    <MainLayout>
      {/* SEO META */}
      <Seo
        title="Kalkulator Gaji Bersih PPh 21 Online Indonesia | CalcTools Finance"
        description="Kalkulator gaji bersih PPh 21 online untuk Indonesia. Hitung take home pay setelah potongan pajak dan BPJS sesuai peraturan terbaru."
        canonical="https://calctoolsfinance.site/kalkulator-gaji-bersih-pph21"
      />

      {/* STRUCTURED DATA */}
      <Helmet>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Kalkulator Gaji Bersih PPh 21",
              description:
                "Kalkulator online untuk menghitung gaji bersih setelah PPh 21 dan BPJS sesuai peraturan pajak Indonesia.",
              applicationCategory: "FinanceApplication",
              operatingSystem: "Web Browser",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "IDR",
              },
              author: {
                "@type": "Organization",
                name: "CalcTools Finance Indonesia",
                url: "https://calctoolsfinance.site",
              },
            }),
          }}
        />
      </Helmet>

      {/* PAGE HEADER */}
      <section className="border-b border-border py-8 md:py-12">
        <div className="container">
          <nav className="mb-4 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">
              Beranda
            </Link>{" "}
            / Kalkulator Gaji Bersih PPh 21
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Kalkulator Gaji Bersih PPh 21
          </h1>

          <p className="max-w-3xl text-muted-foreground">
            Hitung gaji bersih (take home pay) Anda setelah potongan PPh 21,
            BPJS Kesehatan, dan BPJS Ketenagakerjaan berdasarkan peraturan pajak
            Indonesia.
          </p>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="py-10">
        <div className="container max-w-4xl">
          <Pph21Calculator />
        </div>
      </section>

      {/* SEO CONTENT (KRITIS UNTUK INDEXING) */}
      <section className="py-10">
        <div className="container max-w-4xl">
          <article className="prose max-w-none">
            <h2>Apa Itu PPh 21?</h2>
            <p>
              Pajak Penghasilan Pasal 21 (PPh 21) adalah pajak yang dikenakan
              atas penghasilan berupa gaji, upah, honorarium, tunjangan, dan
              pembayaran lain yang diterima oleh orang pribadi sehubungan
              dengan pekerjaan atau jasa di Indonesia.
            </p>

            <h2>Siapa yang Wajib Membayar PPh 21?</h2>
            <p>
              PPh 21 dikenakan kepada karyawan tetap, karyawan tidak tetap,
              pegawai negeri sipil (PNS), anggota TNI/Polri, hingga tenaga
              profesional yang menerima penghasilan dari pemberi kerja.
            </p>

            <h3>Penghasilan yang Dikenakan PPh 21</h3>
            <ul>
              <li>Gaji dan tunjangan</li>
              <li>Bonus dan THR</li>
              <li>Honorarium dan fee</li>
              <li>Imbalan jasa tertentu</li>
            </ul>

            <h2>Komponen Perhitungan Gaji Bersih</h2>
            <p>
              Gaji bersih atau take home pay dihitung dengan mengurangkan
              penghasilan bruto dengan potongan PPh 21, iuran BPJS Kesehatan,
              dan BPJS Ketenagakerjaan sesuai ketentuan yang berlaku.
            </p>

            <h2>Mengapa Perlu Menggunakan Kalkulator PPh 21?</h2>
            <p>
              Dengan kalkulator PPh 21, Anda dapat mengetahui estimasi gaji
              bersih secara cepat dan akurat. Ini membantu perencanaan keuangan,
              evaluasi penawaran gaji, serta simulasi penghasilan bulanan maupun
              tahunan.
            </p>
          </article>
        </div>
      </section>

      {/* FINANCE DISCLAIMER */}
      <section className="pb-10">
        <div className="container max-w-4xl">
          <div className="rounded-xl border bg-muted/50 p-6 text-sm text-muted-foreground">
            <strong>Catatan:</strong> Hasil perhitungan bersifat estimasi dan tidak
            menggantikan perhitungan resmi dari Direktorat Jenderal Pajak (DJP)
            atau kebijakan perusahaan.
          </div>
        </div>
      </section>

      {/* INTERNAL LINK */}
      <section className="pb-10">
        <div className="container max-w-4xl">
          <div className="rounded-xl border bg-card p-6">
            <h3 className="font-semibold mb-2">
              Ingin simulasi cicilan rumah?
            </h3>
            <Link
              to="/kalkulator-kpr"
              className="inline-flex items-center text-accent font-medium hover:gap-2 transition-all"
            >
              Buka Kalkulator KPR
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 border-t border-border">
        <div className="container max-w-3xl">
          <FaqSection faqs={faqs} schemaId="pph21-faq" />
        </div>
      </section>
    </MainLayout>
  );
}
