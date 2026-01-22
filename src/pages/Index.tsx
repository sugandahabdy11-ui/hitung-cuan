import { MainLayout } from "@/components/layouts/MainLayout";
import { Seo } from "@/components/Seo";
import { Link } from "react-router-dom";
import {
  Calculator,
  Home,
  ArrowRight,
  Shield,
  Zap,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Helmet } from "react-helmet-async";

const calculators = [
  {
    title: "Kalkulator Gaji Bersih (PPh 21)",
    description:
      "Hitung gaji bersih atau take home pay setelah PPh 21, BPJS Kesehatan, dan BPJS Ketenagakerjaan.",
    href: "/kalkulator-gaji-bersih-pph21",
    icon: Calculator,
    features: ["PPh 21 Progresif", "BPJS Otomatis", "PTKP Terbaru"],
  },
  {
    title: "Kalkulator KPR / Kredit Rumah",
    description:
      "Simulasi cicilan KPR dengan metode anuitas, lengkap dengan tabel angsuran.",
    href: "/kalkulator-kpr",
    icon: Home,
    features: ["Cicilan Bulanan", "Amortisasi", "Fixed Rate"],
  },
];

const features = [
  {
    icon: Zap,
    title: "Cepat & Akurat",
    description:
      "Perhitungan real-time sesuai peraturan keuangan Indonesia terbaru.",
  },
  {
    icon: Shield,
    title: "Aman & Privat",
    description:
      "Semua perhitungan dilakukan langsung di browser Anda.",
  },
  {
    icon: TrendingUp,
    title: "Gratis Selamanya",
    description:
      "Tanpa biaya, tanpa registrasi, tanpa batasan penggunaan.",
  },
];

export default function Index() {
  return (
    <MainLayout>
      {/* SEO */}
      <Seo
        title="Kalkulator Keuangan Online Gratis Indonesia | CalcTools Finance"
        description="Kalkulator keuangan online gratis untuk Indonesia. Hitung gaji bersih PPh 21, simulasi KPR, dan rencanakan keuangan Anda dengan mudah."
        canonical="https://calctoolsfinance.site/"
      />

      {/* JSON-LD */}
      <Helmet>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "CalcTools Finance Indonesia",
              url: "https://calctoolsfinance.site",
              description:
                "Kalkulator keuangan online gratis untuk Indonesia.",
            }),
          }}
        />
      </Helmet>

      {/* Hero */}
      <section className="py-14 md:py-20">
        <div className="container max-w-3xl text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-5">
            Kalkulator Keuangan Online Gratis Indonesia
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            Hitung gaji bersih PPh 21 dan simulasi cicilan KPR dengan kalkulator
            online yang mudah, cepat, dan akurat.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/kalkulator-gaji-bersih-pph21">
                <Calculator className="mr-2 h-5 w-5" />
                Hitung Gaji Bersih
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/kalkulator-kpr">
                <Home className="mr-2 h-5 w-5" />
                Simulasi KPR
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Calculator List */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="grid md:grid-cols-2 gap-6">
            {calculators.map((calc) => {
              const Icon = calc.icon;
              return (
                <Link key={calc.href} to={calc.href}>
                  <Card className="h-full p-6 hover:shadow-lg transition">
                    <div className="flex gap-4">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h2 className="font-semibold text-lg mb-1">
                          {calc.title}
                        </h2>
                        <p className="text-sm text-muted-foreground mb-3">
                          {calc.description}
                        </p>
                        <span className="inline-flex items-center text-sm text-primary">
                          Gunakan kalkulator
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </span>
                      </div>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-16 bg-secondary/30">
        <div className="container max-w-4xl grid md:grid-cols-3 gap-8 text-center">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title}>
                <div className="mx-auto mb-4 h-14 w-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {f.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </MainLayout>
  );
}
