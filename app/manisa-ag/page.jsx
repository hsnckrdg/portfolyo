export default function ManisaAgPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        padding: "40px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1500px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "32px",
            marginBottom: "10px",
          }}
        >
          Manisa Kent Merkezi Sokak Ağı
        </h1>

        <p
          style={{
            color: "#cbd5e1",
            marginBottom: "25px",
          }}
        >
          Şehzadeler ve Yunusemre ilçelerinin OpenStreetMap verileri
          kullanılarak gerçekleştirilen sosyal ağ ve sokak ağı analizi.
          Düğümlere tıklayarak merkeziyet ölçülerini ve 500 metre
          çevresindeki POI yoğunluğunu inceleyebilirsiniz.
        </p>

        <iframe
          src="/manisa-network.html"
          title="Manisa Kent Merkezi Etkileşimli Sokak Ağı"
          style={{
            width: "100%",
            height: "800px",
            border: "1px solid #334155",
            borderRadius: "12px",
            background: "white",
          }}
        />
      </div>
    </main>
  );
}