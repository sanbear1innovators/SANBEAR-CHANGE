// Array of questions grouped by category (25 questions each)

const questions = [
    {
      category: "Level 1🌳",
      questions: [
        {
          question: "Apa yang dimaksud dengan perubahan iklim?",
          options: ["Perubahan cuaca harian", "Perubahan suhu ekstren sesaat", "Perubahan jangka panjang pola iklim bumi", "Pergantian musim hujan dan kemarau"],
          correctAnswer: 2,
        },
        {
          question: "Perbedaan utama cuaca dan iklim adalah...",
          options: ["Cuaca lebih global dari iklim", "Iklim bersifat jangka panjang", "Cuaca tidak terprediksi", "Iklim terjadi setiap hari"],
          correctAnswer: 1,
        },
        {
          question: "Gas rumah kaca penyebab pemanasan global",
          options: ["O2", "N2", "CO2", "H"],
          correctAnswer: 2,
        },
        {
          question: "Efek rumah kaca terjadi karena",
          options: ["Panas matahari dipantulkan seluruhnya", "Panas terperangkap dalam atmosfer", "Bumi terlalu dekat dengan matahari", "Awan menghalangi sinar matahari"],
          correctAnswer: 1,
        },
        {
          question: "Aktivitas manusia yang paling berkontribusi pada climate change adalah …",
          options: ["Menanam pohon", "Bersepeda", "Bakar hutan", "Daur ulang"],
          correctAnswer: 2,
        },
        {
          question: "Dampak langsung mencairnya es di kutub adalah …",
          options: ["Gempa bumi", "Naiknya permukaan laut", "Hujan asam", "Tanah longsor"],
          correctAnswer: 1,
        },
        {
          question: "Perubahan iklim bersifat global karena …",
          options: ["Hanya terjadi di satu negara", "Hanya memengaruhi cuaca", "Dampaknya di seluruh dunia", "Tidak melibatkan manusia"],
          correctAnswer: 2,
        },
        {
          question: "Salah satu tanda pemanasan global adalah …",
          options: ["Penurunan suhu bumi", "Musim stabil", "Peningkatan suhu rata-rata bumi", "Hujan merata"],
          correctAnswer: 2,
        },
        {
          question: "Gas rumah kaca dihasilkan terutama dari …",
          options: ["Gunung meletus", "Aktivitas industri dan transportasi", "Fotosintesis", "Penguapan air laut"],
          correctAnswer: 1,
        },
        {
          question: "Perubahan iklim menjadi isu penting karena …",
          options: ["Bersifat sementara", "Tidak berdampak besar", "Mengancam kehidupan manusia dan alam", "Hanya isu politik"],
          correctAnswer: 2,
        },
      ],
    },
  
    {
      category: "Level 2🌎",
      questions: [
        {
          question: "Pembakaran bahan bakar fosil meningkatkan emisi karbon karena …",
          options: ["Menghasilkan oksigen", "Melepaskan CO₂ ke atmosfer", "Menyerap panas bumi", "Mengurangi polusi udara"],
          correctAnswer: 1,
        },
        {
          question: "Peran hutan dalam mengurangi perubahan iklim adalah …",
          options: [ "Menghasilkan karbon","Menyerap karbon dioksida", "Memantulkan panas", "Meningkatkan suhu udara",],
          correctAnswer: 1,
        },
        {
          question: "Dampak perubahan iklim pada pertanian adalah …",
          options: ["Panen selalu meningkat","Pola tanam menjadi tidak menentu","Tanaman menjadi lebih kuat","Curah hujan stabil"],
          correctAnswer: 1,
        },
        {
          question: "Kota besar lebih rentan terhadap perubahan iklim karena …",
          options: ["Banyak hutan", "Kepadatan penduduk dan polusi", "Curah hujan rendah", "Letaknya di pegunungan",],
          correctAnswer: 1,
        },
        {
          question: "Energi terbarukan disebut ramah lingkungan karena …",
          options: ["Mahal","Sulit digunakan", "Emisinya rendah","Berasal dari batu bara",],
          correctAnswer: 2,
        },
        {
          question: "Perubahan iklim berdampak pada keanekaragaman hayati karena …",
          options: ["Semua hewan bisa beradaptasi", "Habitat alami rusak", "Spesies menjadi lebih kuat", "Populasi selalu meningkat",],
          correctAnswer: 1,
        },
        {
          question: "Upaya mitigasi perubahan iklim berarti …",
          options: ["Menyesuaikan diri dengan dampak","Mengurangi penyebab perubahan iklim", "Menghindari bencana", "Memindahkan penduduk",],
          correctAnswer: 1,
        },
        {
          question: "Contoh tindakan individu untuk mengurangi emisi karbon adalah …",
          options: ["Menggunakan kendaraan pribadi terus-menerus", "Membakar sampah", "Menghemat listrik", "Menggunakan AC nonstop",],
          correctAnswer: 2,
        },
        {
          question: "Perubahan iklim dapat memperparah ketimpangan sosial karena …",
          options: ["Semua negara terdampak sama","Negara miskin lebih rentan dan terbatas sumber daya","Tidak berdampak ekonomi","Teknologi selalu tersedia",],
          correctAnswer: 1,
        },
        {
          question: "Perubahan iklim perlu ditangani secara global karena …",
          options: ["Biayanya murah","Dampaknya lintas negara","Tidak butuh kerja sama","Bersifat lokal",],
          correctAnswer: 1,
        },
        {
          question: "Gaya hidup konsumtif berkontribusi pada krisis iklim karena …",
          options: ["Mengurangi produksi", "Meningkatkan emisi dan limbah","Menekan industri","Menghemat energi",],
          correctAnswer: 1,
        },
      ],
    },
  
    {
      category: "Level 3💧",
      questions: [
        {
          question: "Gaya hidup konsumtif berkontribusi pada krisis iklim karena …",
          options: ["Mengurangi produksi","Meningkatkan emisi dan limbah","Menekan industri","Menghemat energi",],
          correctAnswer: 1,
        },
        {
          question: "Hubungan perubahan iklim dan krisis air bersih adalah …",
          options: ["Tidak saling terkait","Perubahan pola hujan mengganggu ketersediaan air","Air selalu melimpah","Sungai menjadi lebih panjang",],
          correctAnswer: 1,
        },
        {
          question: "Ekosistem laut terdampak perubahan iklim karena …",
          options: ["Suhu laut menurun","Terumbu karang mengalami pemutihan", "Ikan bertambah besar","Arus laut berhenti",],
          correctAnswer: 1,
        },
        {
          question: "Adaptasi perubahan iklim berarti …",
          options: ["Mengurangi emisi gas rumah kaca", "Menyesuaikan diri dengan dampak perubahan iklim", "Menghentikan pembangunan", "Mengabaikan perubahan lingkungan",],
          correctAnswer: 1,
        },
        {
          question: "Perubahan iklim dapat memicu migrasi penduduk karena …",
          options: ["Wilayah menjadi tidak layak huni", "Transportasi semakin murah", "Penduduk ingin pindah", "Teknologi semakin maju",],
          correctAnswer: 0,
        },
        {
          question: "Kebijakan iklim sering menjadi perdebatan karena …",
          options: ["Tidak berdampak ekonomi", "Berpotensi menghambat pertumbuhan ekonomi jangka pendek","Tidak melibatkan pemerintah","Mudah diterapkan",],
          correctAnswer: 1,
        },
        {
          question: "Negara maju dianggap lebih bertanggung jawab atas krisis iklim karena …",
          options: ["Populasinya lebih sedikit", "Memiliki emisi historis lebih besar", "Teknologinya rendah","Tidak terdampak perubahan iklim",],
          correctAnswer: 1,
        },
        {
          question: "Pertumbuhan ekonomi sering dianggap bertentangan dengan kebijakan iklim karena …",
          options: ["Iklim tidak penting", "Transisi ke ekonomi hijau membutuhkan biaya besar", "Ekonomi selalu stabil", "Tidak ada solusi teknologi",],
          correctAnswer: 1,
        },
        {
          question: "Kegagalan membatasi kenaikan suhu global dapat menyebabkan …",
          options: [ "Stabilitas iklim jangka panjang", "Dampak yang tidak dapat dipulihkan pada ekosistem","Penurunan bencana alam", "Musim menjadi lebih teratur",],
          correctAnswer: 1,
        },
        {
          question: "Teknologi saja tidak cukup untuk mengatasi perubahan iklim karena …",
          options: [ "Teknologi selalu gagal","Perilaku manusia tetap berkontribusi terhadap emisi", "Data ilmiah tidak akurat", "Tidak diperlukan perubahan sistem",],
          correctAnswer: 1,
        },
      ],
    },
  
    {
      category: "Level 4‼️",
      questions: [
        {
          question: "Perubahan iklim mengancam pembangunan berkelanjutan karena …",
          options: ["Menghambat pendidikan", "Merusak keseimbangan ekonomi, sosial, dan lingkungan", "Tidak berdampak jangka panjang", "Mengurangi jumlah penduduk",],
          correctAnswer: 1,
        },
        {
          question: "Salah satu penyebab kebijakan iklim sering tidak efektif adalah …",
          options: ["Kurangnya data ilmiah", "Konflik kepentingan politik dan ekonomi", "Tidak adanya teknologi", "Dukungan publik yang berlebihan",],
          correctAnswer: 1,
        },
        {
          question: "Peran pendidikan dalam mengatasi perubahan iklim adalah …",
          options: ["Sekadar menyampaikan teori", "Membentuk kesadaran dan perilaku jangka panjang", "Tidak relevan dengan isu iklim", "Menghambat inovasi",],
          correctAnswer: 1,
        },
        {
          question: "Aksi individu penting tetapi terbatas karena …",
          options: ["Tidak berdampak sama sekali", "Skala emisi industri jauh lebih besar", "Tidak bisa dilakukan", "Selalu gagal",],
          correctAnswer: 1,
        },
        {
          question: "Perubahan iklim dapat memengaruhi geopolitik global karena …",
          options: ["Tidak berdampak ekonomi",  "Perebutan sumber daya dan migrasi lintas negara", "Dunia menjadi lebih stabil", "Semua negara memiliki dampak yang sama",],
          correctAnswer: 1,
        },
        {
          question: "Risiko terbesar jika dunia gagal mengatasi perubahan iklim adalah …",
          options: ["Ketidaknyamanan sementara", "Krisis global multidimensi", "Cuaca menjadi lebih dingin", "Tidak terjadi perubahan apa pun",],
          correctAnswer: 1,
        },
        {
          question: "Gas rumah kaca yang paling banyak dihasilkan dari aktivitas manusia adalah …",
          options: ["Ozon","Karbon dioksida","Metana","Uap air",],
          correctAnswer: 1,
        },
        {
          question: "Sektor yang menyumbang emisi karbon terbesar secara global adalah …",
          options: ["Pertanian", "Transportasi", "Industri energi", "Pariwisata",],
          correctAnswer: 2,
        },
        {
          question: "Pemanasan global menyebabkan gelombang panas lebih sering karena …",
          options: ["Atmosfer semakin menipis","Panas terperangkap lebih lama di atmosfer", "Rotasi bumi melambat", "Curah hujan meningkat",],
          correctAnswer: 1,
        },
        {
          question: "Salah satu dampak perubahan iklim terhadap wilayah pesisir adalah …",
          options: ["Tanah menjadi lebih subur", "Abrasi dan banjir rob meningkat",  "Suhu laut menurun drastis","Gelombang laut menghilang",],
          correctAnswer: 1,
        },
        {
          question: "Metana dianggap berbahaya bagi iklim karena …",
          options: ["Jumlahnya sangat sedikit", "Tidak termasuk gas rumah kaca", "Kemampuannya menahan panas sangat tinggi", "Cepat menghilang dari atmosfer",],
          correctAnswer: 2,
        },
      ],
    },
  ];
  