import { Layout } from "@/components/Layout";
import { KprCalculator } from "@/components/KprCalculator";
import { FaqSection } from "@/components/FaqSection";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";

const faqs = [
  {
    question: "Apa itu KPR dan bagaimana cara kerjanya?",
    answer: "KPR (Kredit Pemilikan Rumah) adalah fasilitas kredit dari bank untuk pembelian properti. Anda membayar uang muka (DP), lalu sisanya dicicil dengan bunga selama tenor tertentu. Bank membayar properti ke penjual, dan Anda mencicil ke bank setiap bulan sampai lunas.",
  },
  {
    question: "Berapa minimal uang muka (DP) untuk KPR?",
    answer: "Berdasarkan peraturan Bank Indonesia, minimal DP KPR adalah 10-15% dari harga properti tergantung tipe rumah. Untuk rumah pertama dengan luas di bawah 70m², DP minimal 10%. Rumah lebih besar atau rumah kedua biasanya memerlukan DP lebih tinggi. Semakin besar DP, semakin kecil cicilan bulanan.",
  },
  {
    question: "Apa perbedaan bunga fixed dan floating?",
    answer: "Bunga fixed tetap sama selama periode tertentu (biasanya 1-5 tahun pertama), memberikan kepastian cicilan. Bunga floating mengikuti suku bunga pasar sehingga cicilan bisa naik atau turun. Kebanyakan KPR menggunakan kombinasi fixed di awal kemudian floating.",
  },
  {
    question: "Bagaimana cara menghitung cicilan KPR?",
    answer: "Cicilan KPR dihitung dengan rumus anuitas: EMI = P × r × (1+r)^n / ((1+r)^n-1), dimana P adalah pokok pinjaman, r adalah bunga bulanan, dan n adalah jumlah cicilan. Kalkulator ini menghitung otomatis berdasarkan input Anda.",
  },
  {
    question: "Berapa tenor maksimal KPR di Indonesia?",
    answer: "Tenor maksimal KPR di Indonesia umumnya 20-30 tahun tergantung kebijakan bank dan usia peminjam. Syaratnya, pinjaman harus lunas sebelum peminjam berusia 55-65 tahun (tergantung bank). Tenor lebih panjang membuat cicilan lebih ringan, tapi total bunga lebih besar.",
  },
  {
    question: "Apa saja biaya lain selain cicilan KPR?",
    answer: "Selain cicilan, Anda perlu menyiapkan biaya tambahan seperti: biaya provisi (1% dari pinjaman), biaya administrasi, biaya appraisal, biaya notaris, BPHTB (Bea Perolehan Hak atas Tanah dan Bangunan), AJB (Akta Jual Beli), dan asuransi jiwa serta properti. Totalnya bisa 5-10% dari harga properti.",
  },
];

const KprPage = () => {
  useEffect(() => {
    document.title = "Kalkulator KPR Online - Simulasi Cicilan Rumah Indonesia | CalcTools";
  }, []);

  return (
    <Layout>
      {/* Page Header */}
      <section className="py-8 md:py-12 border-b border-border">
        <div className="container">
          <nav className="text-sm mb-4">
            <ol className="flex items-center gap-2 text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-foreground transition-colors">
                  Beranda
                </Link>
              </li>
              <li>/</li>
              <li className="text-foreground">Kalkulator KPR</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Kalkulator KPR Online - Simulasi Cicilan Rumah
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Hitung estimasi cicilan KPR bulanan, total bunga, dan total pembayaran untuk 
            perencanaan pembelian rumah Anda. Simulasi menggunakan metode anuitas dengan 
            bunga tetap (fixed rate).
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-8 md:py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <KprCalculator />
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-8 md:py-12 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <article className="content-section">
              <h2>Panduan Lengkap Simulasi KPR Indonesia</h2>
              <p>
                Kalkulator KPR online ini membantu Anda merencanakan pembelian rumah dengan 
                menghitung estimasi cicilan bulanan berdasarkan harga properti, uang muka, 
                tenor, dan suku bunga. Gunakan simulasi ini untuk mempersiapkan keuangan 
                sebelum mengajukan KPR ke bank.
              </p>

              <h3>Cara Menggunakan Kalkulator KPR</h3>
              <p>
                Untuk mendapatkan simulasi cicilan yang akurat, masukkan informasi berikut:
              </p>
              <ul>
                <li><strong>Harga Properti</strong> - Harga rumah atau apartemen yang ingin dibeli</li>
                <li><strong>Uang Muka (DP)</strong> - Persentase pembayaran awal, minimal 10-20%</li>
                <li><strong>Tenor</strong> - Jangka waktu kredit dalam tahun (1-30 tahun)</li>
                <li><strong>Suku Bunga</strong> - Bunga KPR per tahun (rata-rata 7-12% di Indonesia)</li>
              </ul>

              <h3>Rumus Perhitungan Cicilan KPR (Anuitas)</h3>
              <p>
                Kalkulator ini menggunakan metode anuitas yang merupakan standar perhitungan 
                cicilan KPR di Indonesia. Rumus yang digunakan:
              </p>
              <p className="text-center font-mono bg-card p-4 rounded-lg">
                EMI = P × r × (1 + r)^n / ((1 + r)^n − 1)
              </p>
              <p>Dimana:</p>
              <ul>
                <li><strong>EMI</strong> - Equated Monthly Installment (cicilan bulanan)</li>
                <li><strong>P</strong> - Principal (pokok pinjaman = harga - DP)</li>
                <li><strong>r</strong> - Suku bunga bulanan (bunga tahunan / 12)</li>
                <li><strong>n</strong> - Jumlah cicilan (tenor tahun × 12)</li>
              </ul>

              <h3>Memahami Komponen Cicilan KPR</h3>
              <p>
                Setiap cicilan bulanan terdiri dari dua komponen: angsuran pokok dan angsuran 
                bunga. Di awal masa kredit, porsi bunga lebih besar. Seiring waktu, porsi 
                pokok akan meningkat dan porsi bunga berkurang.
              </p>
              <ul>
                <li><strong>Angsuran Pokok</strong> - Pembayaran terhadap utang pokok</li>
                <li><strong>Angsuran Bunga</strong> - Pembayaran bunga kepada bank</li>
                <li><strong>Total Cicilan</strong> - Tetap sama setiap bulan (metode anuitas)</li>
              </ul>

              <h3>Tips Memilih KPR yang Tepat</h3>
              <p>
                Berikut beberapa tips untuk mendapatkan KPR terbaik:
              </p>
              <ul>
                <li>Bandingkan penawaran dari beberapa bank sebelum memutuskan</li>
                <li>Perhatikan total biaya, bukan hanya bunga atau cicilan bulanan</li>
                <li>Pastikan rasio cicilan tidak melebihi 30-40% dari penghasilan bulanan</li>
                <li>Siapkan dana darurat minimal 3-6 bulan cicilan</li>
                <li>Pertimbangkan biaya-biaya tambahan seperti asuransi dan pajak</li>
                <li>Pilih tenor yang sesuai dengan kemampuan dan rencana keuangan</li>
              </ul>

              <h3>Perbandingan Tenor KPR</h3>
              <p>
                Memilih tenor yang tepat adalah keputusan penting. Berikut perbandingannya:
              </p>
              <ul>
                <li><strong>Tenor Pendek (5-10 tahun)</strong> - Cicilan lebih besar, total bunga lebih kecil</li>
                <li><strong>Tenor Menengah (10-20 tahun)</strong> - Keseimbangan cicilan dan total bunga</li>
                <li><strong>Tenor Panjang (20-30 tahun)</strong> - Cicilan lebih ringan, total bunga lebih besar</li>
              </ul>

              <h3>Suku Bunga KPR di Indonesia</h3>
              <p>
                Suku bunga KPR di Indonesia bervariasi tergantung bank dan tipe produk. 
                Umumnya berkisar antara 7-12% per tahun. Beberapa jenis bunga yang perlu dipahami:
              </p>
              <ul>
                <li><strong>Fixed Rate</strong> - Bunga tetap untuk periode tertentu (1-5 tahun)</li>
                <li><strong>Floating Rate</strong> - Bunga mengikuti kondisi pasar</li>
                <li><strong>Capped Rate</strong> - Floating dengan batas maksimal</li>
              </ul>

              <h3>Syarat Umum Pengajuan KPR</h3>
              <p>
                Untuk mengajukan KPR, umumnya Anda perlu memenuhi persyaratan berikut:
              </p>
              <ul>
                <li>WNI berusia minimal 21 tahun atau sudah menikah</li>
                <li>Memiliki penghasilan tetap (karyawan) atau usaha (wiraswasta)</li>
                <li>Slip gaji atau laporan keuangan usaha</li>
                <li>NPWP dan SPT Tahunan</li>
                <li>Rekening koran 3-6 bulan terakhir</li>
                <li>Tidak masuk daftar hitam BI Checking</li>
              </ul>
            </article>

            {/* Internal Link */}
            <div className="mt-8 p-6 rounded-xl bg-card border border-border">
              <h3 className="font-semibold mb-2">Hitung Gaji Bersih Anda</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Pastikan cicilan KPR sesuai dengan kemampuan. Gunakan kalkulator PPh 21 untuk 
                mengetahui gaji bersih setelah potongan pajak dan BPJS.
              </p>
              <Link
                to="/kalkulator-gaji-bersih-pph21"
                className="inline-flex items-center text-accent font-medium hover:gap-2 transition-all"
              >
                Buka Kalkulator Gaji Bersih
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 md:py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <FaqSection faqs={faqs} schemaId="kpr-faq" />
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 md:py-12 border-t border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="p-6 rounded-xl bg-muted/50">
              <h3 className="font-semibold mb-2">Disclaimer Keuangan</h3>
              <p className="text-sm text-muted-foreground">
                Simulasi KPR ini menggunakan perhitungan anuitas dengan bunga tetap dan 
                bersifat estimasi. Cicilan aktual dapat berbeda tergantung kebijakan bank, 
                biaya administrasi, asuransi, dan komponen lainnya. Untuk informasi yang 
                akurat, silakan hubungi bank atau lembaga keuangan terkait. Keputusan 
                finansial sebaiknya dikonsultasikan dengan penasihat keuangan profesional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Kalkulator KPR Online",
            description: "Simulasi cicilan KPR rumah dengan metode anuitas - hitung cicilan bulanan, total bunga, dan tabel angsuran",
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
            },
          }),
        }}
      />
    </Layout>
  );
};

export default KprPage;
