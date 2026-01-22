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
      "KPR (Kredit Pemilikan Rumah) adalah fasilitas pembiayaan dari bank untuk membeli properti, dimana nasabah membayar uang muka dan sisanya dicicil dalam jangka waktu tertentu.",
  },
  {
    question: "Berapa minimal uang muka (DP) KPR di Indonesia?",
    answer:
      "DP KPR umumnya berkisar antara 10–20% dari harga properti, tergantung kebijakan bank, jenis rumah, dan profil peminjam.",
  },
  {
    question: "Apa perbedaan bunga fixed dan floating?",
    answer:
      "Bunga fixed bersifat tetap selama periode tertentu, sedangkan bunga floating mengikuti kondisi pasar dan dapat berubah.",
  },
  {
    question: "Bagaimana cara menghitung cicilan KPR?",
    answer:
      "Cicilan KPR dihitung menggunakan metode anuitas berdasarkan pokok pinjaman, bunga bulanan, dan tenor kredit.",
  },
  {
    question: "Berapa tenor maksimal KPR di Indonesia?",
    answer:
      "Tenor KPR di Indonesia umumnya hingga 20–30 tahun, tergantung usia peminjam dan kebijakan bank.",
  },
];

export default function KalkulatorKprPage() {
  return (
    <MainLayout>
      {/* SEO META */}
      <Seo
        title="Kalkulator KPR Online Indonesia | Simulasi Cicilan Rumah"
        description="Kalkulator KPR online gratis untuk Indonesia. Simulasikan cicilan bulanan, total bunga, dan total pembayaran rumah dengan metode anuitas."
        canonical="https://calctoolsfinance.site/kalkulator-kpr"
      />

      {/* STRUCTURED DATA */}
      <Helmet>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Kalkulator KPR Online",
              description:
                "Simulasi cicilan KPR rumah di Indonesia menggunakan metode anuitas untuk menghitung cicilan bulanan dan total bunga.",
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
            / Kalkulator KPR
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Kalkulator KPR Online
          </h1>

          <p className="max-w-3xl text-muted-foreground">
            Simulasikan cicilan KPR bulanan, total bunga, dan total pembayaran
            rumah berdasarkan harga properti, uang muka, tenor, dan suku bunga
            sesuai praktik perbankan di Indonesia.
          </p>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="py-10">
        <div className="container max-w-4xl">
          <KprCalculator />
        </div>
      </section>

      {/* FINANCIAL DISCLAIMER */}
      <section className="pb-10">
        <div className="container max-w-4xl">
          <div className="rounded-xl border bg-muted/50 p-6 text-sm text-muted-foreground">
            <strong>Catatan:</strong> Hasil simulasi KPR ini bersifat estimasi dan
            tidak mengikat. Cicilan aktual dapat berbeda tergantung kebijakan
            bank, jenis bunga, biaya administrasi, asuransi, dan faktor lainnya.
            Gunakan sebagai referensi awal sebelum mengajukan KPR ke bank.
          </div>
        </div>
      </section>

      {/* INTERNAL LINK */}
      <section className="pb-10">
        <div className="container max-w-4xl">
          <div className="rounded-xl border bg-card p-6">
            <h3 className="font-semibold mb-2">
              Pastikan cicilan sesuai gaji bersih Anda
            </h3>
            <Link
              to="/kalkulator-gaji-bersih-pph21"
              className="inline-flex items-center text-accent font-medium hover:gap-2 transition-all"
            >
              Hitung Gaji Bersih
              <ArrowRight className="ml-1 h-4 w-4" />
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
