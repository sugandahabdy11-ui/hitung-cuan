import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { Calculator, Home, ArrowRight, Shield, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const calculators = [
  {
    title: "Kalkulator Gaji Bersih (PPh 21)",
    description: "Hitung gaji bersih atau take home pay Anda setelah potongan PPh 21, BPJS Kesehatan, dan BPJS Ketenagakerjaan. Dilengkapi dengan perhitungan step-by-step.",
    href: "/kalkulator-gaji-bersih-pph21",
    icon: Calculator,
    features: ["PPh 21 Progresif", "BPJS Otomatis", "PTKP 2024"],
  },
  {
    title: "Kalkulator KPR / Kredit Rumah",
    description: "Simulasi cicilan KPR dengan metode anuitas. Hitung cicilan bulanan, total bunga, dan lihat tabel angsuran untuk perencanaan pembelian rumah Anda.",
    href: "/kalkulator-kpr",
    icon: Home,
    features: ["Cicilan Bulanan", "Tabel Amortisasi", "Fixed Rate"],
  },
];

const features = [
  {
    icon: Zap,
    title: "Cepat & Akurat",
    description: "Perhitungan real-time dengan formula yang telah diverifikasi sesuai peraturan Indonesia terbaru.",
  },
  {
    icon: Shield,
    title: "Aman & Privat",
    description: "Semua perhitungan dilakukan di browser Anda. Data tidak dikirim ke server manapun.",
  },
  {
    icon: TrendingUp,
    title: "Gratis Selamanya",
    description: "Akses semua kalkulator tanpa biaya, tanpa registrasi, dan tanpa batasan penggunaan.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Kalkulator Keuangan Indonesia
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed">
              Hitung gaji bersih, simulasi KPR, dan perencanaan keuangan Anda dengan 
              kalkulator online gratis dan akurat. Dibuat khusus untuk kebutuhan finansial di Indonesia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
              >
                <Link to="/kalkulator-gaji-bersih-pph21">
                  <Calculator className="mr-2 h-5 w-5" />
                  Hitung Gaji Bersih
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/kalkulator-kpr">
                  <Home className="mr-2 h-5 w-5" />
                  Simulasi KPR
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Cards */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Pilih Kalkulator
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Gunakan kalkulator yang sesuai dengan kebutuhan perencanaan keuangan Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {calculators.map((calc) => {
              const Icon = calc.icon;
              return (
                <Link key={calc.href} to={calc.href} className="group">
                  <Card className="h-full p-6 transition-all duration-300 hover:shadow-card hover:-translate-y-1 border-2 border-transparent hover:border-accent/20">
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                          {calc.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {calc.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {calc.features.map((feature) => (
                            <span
                              key={feature}
                              className="text-xs px-2 py-1 rounded-full bg-secondary text-secondary-foreground"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                        <span className="inline-flex items-center text-sm font-medium text-accent group-hover:gap-2 transition-all">
                          Gunakan Kalkulator
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
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

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Mengapa CalcTools Finance?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Dirancang khusus untuk membantu perencanaan keuangan masyarakat Indonesia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="text-center">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent mb-4">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 md:py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-slate dark:prose-invert">
            <h2>Tentang CalcTools Finance Indonesia</h2>
            <p>
              CalcTools Finance Indonesia adalah platform kalkulator keuangan online yang dirancang 
              khusus untuk membantu masyarakat Indonesia dalam perencanaan keuangan. Dengan 
              antarmuka yang mudah digunakan dan perhitungan yang akurat, Anda dapat dengan cepat 
              menghitung gaji bersih setelah pajak atau mensimulasikan cicilan KPR untuk pembelian rumah.
            </p>

            <h3>Kalkulator Gaji Bersih PPh 21</h3>
            <p>
              Kalkulator PPh 21 kami menggunakan tarif pajak progresif sesuai peraturan perpajakan 
              Indonesia terbaru. Anda dapat menghitung penghasilan bersih (take home pay) dengan 
              memperhitungkan potongan BPJS Kesehatan, BPJS Ketenagakerjaan (JHT dan JP), serta 
              Pajak Penghasilan Pasal 21.
            </p>

            <h3>Kalkulator KPR Online</h3>
            <p>
              Simulasikan cicilan kredit pemilikan rumah (KPR) dengan kalkulator kami. Masukkan 
              harga properti, uang muka, tenor, dan suku bunga untuk melihat estimasi cicilan 
              bulanan dan total pembayaran selama masa kredit.
            </p>

            <h3>Akurat dan Terpercaya</h3>
            <p>
              Semua kalkulator kami menggunakan formula standar yang sesuai dengan peraturan 
              Indonesia. Meskipun demikian, hasil perhitungan bersifat estimasi dan kami 
              menyarankan untuk berkonsultasi dengan ahli keuangan atau pajak untuk keputusan 
              finansial penting.
            </p>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "CalcTools Finance Indonesia",
            url: "https://calctools.id",
            description: "Kalkulator keuangan online gratis untuk Indonesia - hitung gaji bersih, simulasi KPR, dan perencanaan keuangan.",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://calctools.id/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
    </Layout>
  );
};

export default Index;
