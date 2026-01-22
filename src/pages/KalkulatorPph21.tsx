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
      "PPh 21 adalah pajak atas penghasilan berupa gaji, upah, honorarium, tunjangan, dan pembayaran lain yang diterima karyawan.",
  },
  {
    question: "Berapa PTKP terbaru?",
    answer:
      "PTKP dasar adalah Rp 54.000.000 per tahun, dengan tambahan untuk status kawin dan tanggungan.",
  },
  {
    question: "Apakah BPJS mengurangi PPh 21?",
    answer:
      "Ya, iuran BPJS Kesehatan dan Ketenagakerjaan yang dibayar karyawan menjadi pengurang pajak.",
  },
];

export default function KalkulatorPph21Page() {
  return (
    <MainLayout>
      {/* SEO */}
      <Seo
        title="Kalkulator Gaji Bersih PPh 21 Online (Indonesia) | CalcTools Finance"
        description="Hitung gaji bersih setelah potongan PPh 21, BPJS Kesehatan, dan BPJS Ketenagakerjaan dengan kalkulator online gratis."
        canonical="https://calctoolsfinance.site/kalkulator-gaji-bersih-pph21"
      />

      {/* Structured Data */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Kalkulator Gaji Bersih PPh 21",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Web",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "IDR",
            },
            author: {
              "@type": "Organization",
              name: "CalcTools Finance Indonesia",
            },
          })}
        </script>
      </Helmet>

      {/* Page Header */}
      <section className="border-b border-border py-8 md:py-12">
        <div className="container">
          <nav className="mb-4 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">
              Beranda
            </Link>{" "}
            / Kalkulator PPh 21
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Kalkulator Gaji Bersih PPh 21
          </h1>

          <p className="max-w-3xl text-muted-foreground">
            Hitung gaji bersih (take home pay) setelah potongan PPh 21 dan BPJS
            sesuai peraturan pajak Indonesia.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-10">
        <div className="container max-w-4xl">
          <Pph21Calculator />
        </div>
      </section>

      {/* Internal Link */}
      <section className="pb-10">
        <div className="container max-w-4xl">
          <div className="rounded-xl border bg-card p-6">
            <h3 className="font-semibold mb-2">
              Ingin simulasi cicilan rumah?
            </h3>
            <Link
              to="/kalkulator-kpr"
              className="inline-flex items-center text-accent font-medium"
            >
              Buka Kalkulator KPR <ArrowRight className="ml-1 h-4 w-4" />
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
