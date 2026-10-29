export default function BagKararPanosuPage() {
  const features = [
    "Saruhanlı, Alaşehir ve Sarıgöl için hava durumu takibi",
    "En az 3 KPI kartı ile hızlı durum özeti",
    "7 günlük hava durumu grafiği",
    "2016–2026 sezonlarını karşılaştıran GDD grafiği",
    "10 yıllık GDD ortalaması ve tarihsel aralık bandı",
    "Kullanıcı tarafından değiştirilebilen don ve yağış eşikleri",
    "Sıralanabilir detay tablosu",
    "Mobil uyumlu ve erişilebilir arayüz",
  ];

  const security = [
    "Cloudflare Workers tabanlı serverless API proxy",
    "IP başına 30 istek / 60 saniye rate limiting",
    "30 dakikalık cache",
    "Koordinat allowlist",
    "CSP, HSTS ve HTTP güvenlik başlıkları",
    "Cloudflare Workers loglama ve 5xx hata alarmı",
    "GitHub Secret Protection ve Push Protection",
    "OWASP ZAP güvenlik taraması",
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-teal-950 via-cyan-900 to-cyan-950 text-white">
      <div className="max-w-5xl mx-auto px-6 py-16">

        {/* Geri dön */}
        <a
          href="/"
          className="inline-flex items-center text-cyan-200 hover:text-white mb-10 transition-colors"
        >
          ← Portfolyoya Dön
        </a>

        {/* Başlık */}
        <section className="mb-16">
          <span className="inline-block bg-cyan-900/60 border border-cyan-500/40 text-cyan-100 px-4 py-2 rounded-full text-sm mb-6">
            UI Tasarımı • Veri Görselleştirme • Bulut Güvenliği
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Bağ Karar Panosu
          </h1>

          <p className="text-lg md:text-xl text-cyan-50 leading-relaxed max-w-3xl">
            Manisa&apos;daki üzüm üreticilerinin hava koşullarını daha kolay
            takip edebilmesi ve tarımsal kararlarını destekleyebilmesi için
            geliştirdiğim web tabanlı karar destek uygulaması.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="https://bag-karar-panosu.pages.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-xl font-semibold transition-colors"
            >
              Canlı Uygulamayı Aç
            </a>

            <a
              href="https://github.com/hsnckrdg/bag-karar-panosu"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-black/40 hover:bg-black/60 border border-cyan-500/40 rounded-xl font-semibold transition-colors"
            >
              GitHub Deposunu Aç
            </a>
          </div>
        </section>

        {/* Problem */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold mb-5">Problem</h2>

          <div className="bg-black/30 border border-cyan-500/20 rounded-2xl p-7">
            <p className="text-cyan-50 leading-relaxed">
              Üzüm üretiminde don, yoğun yağış ve sıcaklık değişimleri üretim
              sürecini doğrudan etkileyebilir. Farklı hava durumu verilerinin
              ayrı ayrı incelenmesi kullanıcı için zaman kaybına neden
              olabilir. Bu projede önemli hava durumu ve GDD verilerini tek
              ekranda anlaşılır bir karar panosunda birleştirmeyi hedefledim.
            </p>
          </div>
        </section>

        {/* Çözüm */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold mb-5">Çözüm</h2>

          <p className="text-cyan-50 leading-relaxed mb-6">
            Open-Meteo verilerini kullanarak Saruhanlı, Alaşehir ve Sarıgöl
            ilçelerini takip eden mobil uyumlu bir dashboard geliştirdim.
            Kullanıcılar ilçeyi seçebiliyor, don ve yağış eşiklerini
            değiştirebiliyor ve güncel sezonu geçmiş yıllarla
            karşılaştırabiliyor.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex gap-3 bg-black/30 border border-cyan-500/20 rounded-xl p-4"
              >
                <span className="text-cyan-300 font-bold">✓</span>
                <span className="text-cyan-50">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* GDD */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold mb-5">
            GDD ve Veri Görselleştirme
          </h2>

          <div className="bg-black/30 border border-cyan-500/20 rounded-2xl p-7">
            <p className="text-cyan-50 leading-relaxed">
              Growing Degree Days (GDD) hesaplamasında 10°C taban sıcaklığı
              kullanıldı. Mevcut sezon, 2016–2025 yıllarıyla ve 10 yıllık
              ortalamayla karşılaştırıldı. Tarihsel minimum ve maksimum
              değerler grafik üzerinde bir aralık bandı olarak gösterildi.
              Böylece kullanıcının mevcut sezonun geçmiş yıllara göre
              durumunu daha hızlı yorumlaması amaçlandı.
            </p>
          </div>
        </section>

        {/* Teknolojiler */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold mb-5">Kullanılan Teknolojiler</h2>

          <div className="flex flex-wrap gap-3">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "Chart.js",
              "Open-Meteo",
              "Cloudflare Pages",
              "Cloudflare Workers",
              "GitHub",
              "k6",
              "OWASP ZAP",
            ].map((tech) => (
              <span
                key={tech}
                className="bg-cyan-900/60 border border-cyan-500/30 px-4 py-2 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Güvenlik */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold mb-5">
            Güvenlik ve Bulut Altyapısı
          </h2>

          <p className="text-cyan-50 leading-relaxed mb-6">
            Projede frontend ve dış hava durumu servisi arasına Cloudflare
            Worker tabanlı bir API proxy katmanı ekledim. Böylece dış API
            erişimini kontrol altına alarak kötüye kullanım ve gereksiz trafik
            risklerini azaltmayı amaçladım.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {security.map((item, index) => (
              <div
                key={index}
                className="flex gap-3 bg-black/30 border border-cyan-500/20 rounded-xl p-4"
              >
                <span className="text-cyan-300 font-bold">✓</span>
                <span className="text-cyan-50">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Sonuçlar */}
        <section className="mb-14">
          <h2 className="text-3xl font-bold mb-5">Doğrulama Sonuçları</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-black/40 border border-cyan-500/30 rounded-2xl p-5 text-center">
              <div className="text-3xl font-bold text-cyan-300">100</div>
              <div className="text-sm mt-2">Lighthouse Performance</div>
            </div>

            <div className="bg-black/40 border border-cyan-500/30 rounded-2xl p-5 text-center">
              <div className="text-3xl font-bold text-cyan-300">100</div>
              <div className="text-sm mt-2">Accessibility</div>
            </div>

            <div className="bg-black/40 border border-cyan-500/30 rounded-2xl p-5 text-center">
              <div className="text-3xl font-bold text-cyan-300">A+</div>
              <div className="text-sm mt-2">SecurityHeaders</div>
            </div>

            <div className="bg-black/40 border border-cyan-500/30 rounded-2xl p-5 text-center">
              <div className="text-3xl font-bold text-cyan-300">A+</div>
              <div className="text-sm mt-2">MDN Observatory</div>
            </div>
          </div>

          <div className="mt-5 bg-black/30 border border-cyan-500/20 rounded-2xl p-6">
            <p className="text-cyan-50 leading-relaxed">
              k6 ile gerçekleştirilen 200 istek testinde 169 istek HTTP 429
              ile sınırlandırıldı. İzin verilmeyen koordinatlar HTTP 403 ile
              reddedildi ve cache mekanizmasının MISS → HIT şeklinde çalıştığı
              doğrulandı.
            </p>
          </div>
        </section>

        {/* Sonuç */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-5">Sonuç</h2>

          <div className="bg-black/30 border border-cyan-500/20 rounded-2xl p-7">
            <p className="text-cyan-50 leading-relaxed">
              Bağ Karar Panosu ile veri görselleştirme, kullanıcı arayüzü
              tasarımı, API entegrasyonu ve bulut güvenliği konularını tek bir
              projede birleştirdim. Proje boyunca kullanıcıların veriyi hızlı
              yorumlayabileceği sade bir arayüz oluştururken, arka planda
              güvenli ve izlenebilir bir bulut altyapısı kurdum.
            </p>
          </div>
        </section>

      </div>
    </main>
  );
}