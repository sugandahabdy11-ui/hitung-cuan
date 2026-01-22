import { MainLayout } from "@/components/layouts/MainLayout";
import { Seo } from "@/components/Seo";
import { KprCalculator } from "@/components/KprCalculator";
import { FaqSection } from "@/components/FaqSection";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

const faqs = [
  {
    question: "Apa itu KPR dan bagaimana cara kerjanya?",
    answer:
      "KPR (Kredit Pemilikan Rumah) adalah fasilitas kredit dari bank untuk pembelian properti dengan sistem cicilan.",
  },
  {
    question: "Berapa minimal uang muka (DP) KPR?",
    answer:
      "DP KPR umumnya 10–20% dari harga properti, tergantung kebijakan bank dan jenis rumah.",
  },
  {
    question: "Apa perbedaan bunga fixed dan floating?",
    answer:
      "Bunga fixed tetap selama periode tertentu, sedangkan floating mengikuti suku bunga pasar.",
  },
  {
    question: "Bagaimana cara menghitung cicilan KPR?",
    answer:
      "Cicilan dihitung dengan metode anuitas menggunakan pokok pinjaman, bunga bulanan, dan tenor.",
  },
  {
    question: "Berapa tenor maksimal KPR di Indonesia?",
    answer:
      "Tenor KPR biasanya hingga 20–30 tahun tergantung usia dan kebijakan bank.",
  },
];

export default function KalkulatorKprPage() {
  return (
    <MainLayout>
      {/* SEO */}
      <Seo
        title="Kalkulator KPR Online Indonesia | Simulasi Cicilan Rumah"
        description="Simulasi cicilan KPR online gratis. Hitung cicilan bulanan, total bunga, dan total pembayaran rumah dengan metode anuitas."
        canonical="https://calctoolsfinance.site/kalkulator-kpr"
      />

      {/* Structured Data */}
      <Helmet>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Kalkulator KPR Online",
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
            }),
          }}
        />
      </Helmet>

      {/* Page Header */}
      <section className="border-b border-border py-8 md:py-12">
        <div className="container">
          <nav className="mb-4 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground">
              Beranda
            </Link>{" "}
            / Kalkulator KPR
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Kalkulator KPR Online
          </h1>

          <p className="max-w-3xl text-muted-foreground">
            Hitung estimasi cicilan KPR bulanan, total bunga, dan total pembayaran
            rumah menggunakan metode anuitas.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-10">
        <div className="container max-w-4xl">
          <KprCalculator />
        </div>
      </section>

      {/* Internal Link */}
      <section className="pb-10">
        <div className="container max-w-4xl">
          <div className="rounded-xl border bg-card p-6">
            <h3 className="font-semibold mb-2">
              Pastikan cicilan sesuai gaji bersih
            </h3>
            <Link
              to="/kalkulator-gaji-bersih-pph21"
              className="inline-flex items-center text-accent font-medium"
            >
              Hitung Gaji Bersih <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 border-t border-border">
        <div className="container max-w-3xl">
          <FaqSection faqs={faqs} schemaId="kpr-faq" />
        </div>
      </section>
    </MainLayout>
  );
}
