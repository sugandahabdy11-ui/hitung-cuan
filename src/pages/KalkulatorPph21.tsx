import { MainLayout } from "@/components/layouts/MainLayout";
import { Pph21Calculator } from "@/components/Pph21Calculator";
import { FaqSection } from "@/components/FaqSection";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";

const faqs = [
  {
    question: "Apa itu PPh 21 dan siapa yang wajib membayarnya?",
    answer: "PPh 21 atau Pajak Penghasilan Pasal 21 adalah pajak yang dikenakan atas penghasilan berupa gaji, upah, honorarium, tunjangan, dan pembayaran lain yang diterima oleh wajib pajak orang pribadi dalam negeri. Setiap karyawan yang menerima penghasilan di atas PTKP wajib dipotong PPh 21 oleh pemberi kerja.",
  },
  {
    question: "Berapa PTKP (Penghasilan Tidak Kena Pajak) tahun 2026?",
    answer: "PTKP untuk tahun 2026 adalah Rp 54.000.000 per tahun untuk wajib pajak tidak kawin tanpa tanggungan (TK/0). Tambahan Rp 4.500.000 untuk wajib pajak kawin, dan Rp 4.500.000 untuk setiap tanggungan (maksimal 3 tanggungan). Status K/3 memiliki PTKP tertinggi yaitu Rp 72.000.000 per tahun.",
  },
  {
    question: "Bagaimana cara menghitung PPh 21 dengan tarif progresif?",
    answer: "PPh 21 dihitung dengan tarif progresif: 5% untuk PKP sampai Rp 60 juta, 15% untuk PKP Rp 60-250 juta, 25% untuk PKP Rp 250-500 juta, 30% untuk PKP Rp 500 juta - 5 miliar, dan 35% untuk PKP di atas 5 miliar. PKP adalah penghasilan neto dikurangi PTKP.",
  },
  {
    question: "Apakah potongan BPJS mengurangi pajak PPh 21?",
    answer: "Ya, iuran BPJS Kesehatan dan BPJS Ketenagakerjaan yang dibayar karyawan dapat dijadikan pengurang dalam perhitungan PPh 21. Potongan ini dikurangkan dari penghasilan bruto bersama dengan biaya jabatan (5% maks Rp 500.000/bulan) untuk mendapatkan penghasilan neto.",
  },
  {
    question: "Apa perbedaan gaji kotor dan gaji bersih?",
    answer: "Gaji kotor (gross salary) adalah total penghasilan sebelum dipotong pajak dan iuran. Gaji bersih (take home pay) adalah jumlah yang benar-benar diterima karyawan setelah dipotong PPh 21, BPJS Kesehatan, dan BPJS Ketenagakerjaan. Kalkulator ini membantu Anda menghitung gaji bersih dengan akurat.",
  },
  {
    question: "Apakah hasil perhitungan kalkulator ini akurat?",
    answer: "Kalkulator ini menggunakan formula standar perhitungan PPh 21 sesuai peraturan Indonesia. Namun, hasil bersifat estimasi karena perhitungan sebenarnya dapat dipengaruhi faktor lain seperti penghasilan tidak teratur, THR, bonus, dan kebijakan perusahaan. Untuk keperluan resmi, konsultasikan dengan konsultan pajak.",
  },
];

const Pph21Page = () => {
  useEffect(() => {
    document.title = "Kalkulator Gaji Bersih PPh 21 Online - Hitung Take Home Pay | CalcTools";
  }, []);

  return (
    <MainLayout>
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
              <li className="text-foreground">Kalkulator Gaji Bersih PPh 21</li>
            </ol>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Kalkulator Gaji Bersih PPh 21 Indonesia
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Hitung gaji bersih (take home pay) Anda setelah potongan Pajak Penghasilan Pasal 21, 
            BPJS Kesehatan, dan BPJS Ketenagakerjaan. Dilengkapi dengan perhitungan step-by-step 
            yang mudah dipahami.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-8 md:py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Pph21Calculator />
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-8 md:py-12 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <article className="content-section">
              <h2>Cara Menghitung Gaji Bersih dengan Kalkulator PPh 21</h2>
              <p>
                Kalkulator gaji bersih PPh 21 ini membantu Anda menghitung penghasilan yang akan 
                diterima (take home pay) setelah dipotong pajak penghasilan dan iuran BPJS. 
                Perhitungan menggunakan metode pajak progresif sesuai peraturan perpajakan Indonesia 
                yang berlaku untuk karyawan tetap.
              </p>

              <h3>Komponen Perhitungan Gaji Bersih</h3>
              <p>
                Untuk menghitung gaji bersih, beberapa komponen perlu diperhitungkan:
              </p>
              <ul>
                <li><strong>Gaji Pokok</strong> - Penghasilan dasar yang diterima setiap bulan</li>
                <li><strong>Tunjangan Tetap</strong> - Tunjangan transport, makan, atau jabatan yang dibayar rutin</li>
                <li><strong>BPJS Kesehatan</strong> - Iuran 1% dari gaji (karyawan), maksimal basis Rp 12 juta</li>
                <li><strong>BPJS Ketenagakerjaan</strong> - JHT 2% dan JP 1% dari gaji karyawan</li>
                <li><strong>PPh 21</strong> - Pajak penghasilan dengan tarif progresif</li>
              </ul>

              <h3>Tarif Pajak PPh 21 Progresif Indonesia</h3>
              <p>
                Berdasarkan Undang-Undang Harmonisasi Peraturan Perpajakan (UU HPP), tarif PPh 21 
                untuk karyawan tetap dihitung dengan sistem progresif sebagai berikut:
              </p>
              <ul>
                <li><strong>5%</strong> untuk Penghasilan Kena Pajak (PKP) sampai Rp 60 juta per tahun</li>
                <li><strong>15%</strong> untuk PKP Rp 60 juta - Rp 250 juta per tahun</li>
                <li><strong>25%</strong> untuk PKP Rp 250 juta - Rp 500 juta per tahun</li>
                <li><strong>30%</strong> untuk PKP Rp 500 juta - Rp 5 miliar per tahun</li>
                <li><strong>35%</strong> untuk PKP di atas Rp 5 miliar per tahun</li>
              </ul>

              <h3>PTKP (Penghasilan Tidak Kena Pajak) 2026</h3>
              <p>
                PTKP adalah batas penghasilan yang tidak dikenakan pajak. Nilai PTKP tahun 2026 
                berdasarkan PMK Nomor 101/PMK.010/2016:
              </p>
              <ul>
                <li><strong>TK/0</strong> - Rp 54.000.000 (tidak kawin, tanpa tanggungan)</li>
                <li><strong>TK/1-3</strong> - Tambahan Rp 4.500.000 per tanggungan</li>
                <li><strong>K/0</strong> - Rp 58.500.000 (kawin, tanpa tanggungan)</li>
                <li><strong>K/1-3</strong> - Tambahan Rp 4.500.000 per tanggungan</li>
              </ul>

              <h3>Biaya Jabatan dalam Perhitungan PPh 21</h3>
              <p>
                Biaya jabatan adalah pengurang yang diberikan kepada karyawan tetap sebesar 5% 
                dari penghasilan bruto, dengan batas maksimal Rp 500.000 per bulan atau 
                Rp 6.000.000 per tahun. Biaya jabatan ini dikurangkan dari penghasilan bruto 
                sebelum dihitung PKP.
              </p>

              <h3>Langkah-langkah Perhitungan PPh 21</h3>
              <p>
                Berikut adalah langkah-langkah untuk menghitung PPh 21 bulanan:
              </p>
              <ol>
                <li>Hitung penghasilan bruto tahunan (gaji + tunjangan) × 12 bulan</li>
                <li>Kurangi biaya jabatan (5%, maks Rp 6 juta/tahun)</li>
                <li>Kurangi iuran BPJS yang dibayar karyawan (tahunan)</li>
                <li>Hasil adalah Penghasilan Neto</li>
                <li>Kurangi PTKP sesuai status untuk mendapat PKP</li>
                <li>Terapkan tarif progresif pada PKP</li>
                <li>Bagi dengan 12 untuk mendapat PPh 21 bulanan</li>
              </ol>

              <h3>Asumsi dan Batasan Kalkulator</h3>
              <p>
                Kalkulator ini dirancang untuk karyawan tetap dengan penghasilan reguler. 
                Beberapa asumsi yang digunakan:
              </p>
              <ul>
                <li>Menggunakan tarif pajak progresif standar (bukan TER untuk pegawai baru)</li>
                <li>BPJS Kesehatan dengan basis maksimal Rp 12.000.000</li>
                <li>BPJS Jaminan Pensiun dengan basis maksimal Rp 10.042.300 (2026)</li>
                <li>Tidak memperhitungkan penghasilan tidak teratur (bonus, THR)</li>
                <li>Tidak memperhitungkan potongan lain seperti pinjaman karyawan</li>
              </ul>
            </article>

            {/* Internal Link */}
            <div className="mt-8 p-6 rounded-xl bg-card border border-border">
              <h3 className="font-semibold mb-2">Ingin Menghitung Cicilan KPR?</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Gunakan kalkulator KPR kami untuk simulasi cicilan pembelian rumah dengan metode anuitas.
              </p>
              <Link
                to="/kalkulator-kpr"
                className="inline-flex items-center text-accent font-medium hover:gap-2 transition-all"
              >
                Buka Kalkulator KPR
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
            <FaqSection faqs={faqs} schemaId="pph21-faq" />
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 md:py-12 border-t border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="p-6 rounded-xl bg-muted/50">
              <h3 className="font-semibold mb-2">Disclaimer Perpajakan</h3>
              <p className="text-sm text-muted-foreground">
                Hasil perhitungan kalkulator ini bersifat estimasi dan hanya untuk tujuan 
                referensi. Perhitungan pajak yang sebenarnya dapat berbeda tergantung pada 
                situasi individual, kebijakan perusahaan, dan peraturan terbaru. Untuk 
                keperluan pelaporan pajak resmi atau perencanaan keuangan yang kompleks, 
                silakan berkonsultasi dengan konsultan pajak atau akuntan bersertifikat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meta tags would be in index.html or handled by router */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Kalkulator Gaji Bersih PPh 21",
            description: "Kalkulator online untuk menghitung gaji bersih setelah potongan PPh 21 dan BPJS di Indonesia",
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
    </MainLayout>
  );
};

export default Pph21Page;
