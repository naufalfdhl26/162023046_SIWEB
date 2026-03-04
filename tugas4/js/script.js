// Generate opsi tanggal (1-31) dan tahun (1950-2024) saat halaman dimuat
document.addEventListener("DOMContentLoaded", function() {
    const tanggalSelect = document.getElementById('tanggal');
    const tahunSelect = document.getElementById('tahun');

    // Isi dropdown Tanggal
    for(let i = 1; i <= 31; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.text = i;
        tanggalSelect.appendChild(option);
    }

    // Isi dropdown Tahun (dari 1950 sampai 2024)
    for(let i = 2000; i <= 2026; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.text = i;
        tahunSelect.appendChild(option);
    }
});

// Data teks kepribadian
const pesanKarakter = {
    1: "Bagi mereka yang memiliki angka garis hidup 1, kemandirian dan kepemimpinan adalah jalan hidup Anda. Anda adalah pelopor alami, inovator, dan memiliki dorongan kuat untuk mencapai tujuan Anda. Individu dengan angka ini penuh dengan energi, ambisi, dan tekad yang kuat. Anda tidak takut untuk mengambil inisiatif dan memulai sesuatu yang baru. Tantangan terbesar Anda adalah belajar mempercayai diri sendiri dan tidak menjadi terlalu mendominasi. Jika Anda dapat mengarahkan tekad Anda dengan kebijaksanaan, kesuksesan besar menanti Anda di garis depan.",
    
    2: "Angka garis hidup 2 melambangkan keharmonisan, kerja sama, dan diplomasi. Anda memiliki kepekaan yang luar biasa terhadap perasaan orang lain dan selalu mencari kedamaian dalam setiap situasi. Sebagai seorang pembawa damai alami, Anda sangat menghargai hubungan, baik itu asmara, persahabatan, maupun kemitraan bisnis. Misi Anda adalah membawa keseimbangan dan harmoni ke dunia di sekitar Anda. Terkadang, Anda mungkin terlalu banyak mengalah demi menghindari konflik, jadi penting bagi Anda untuk juga mendengarkan suara dan kebutuhan Anda sendiri.",
    
    3: "Bagi mereka yang jumlah angka hari lahirnya 3, ekspresi, sosialisasi, dan kreativitas sebagai pelajaran yang harus tempuh dalam hidupnya. Entertainer kelas dunia, orang-orang yang berkilau dan optimistik termasuk di dalamnya. Orang-orang dengan garis hidup 3 yang telah mengasah bakatnya mempunyai bakat kreatif yang istimewa. Biasanya dalam verbal, tulisan, akting, atau semacamnya. Misi yang harus dicapainya dalam hidup adalah kesuksesan dalam berekspresi. Sisi cerah bagi orang-orang bertema harmoni, keindahan dan kesenangan, serta membagi kemampuan kreatif Anda dengan dunia.",
    
    4: "Mereka yang berada pada garis hidup 4 adalah perwujudan dari stabilitas, kerja keras, dan kepraktisan. Anda adalah pembangun fondasi yang kuat, baik dalam karier maupun kehidupan pribadi. Disiplin, keteraturan, dan dedikasi adalah nilai-nilai inti Anda. Orang-orang dapat selalu mengandalkan Anda karena sifat Anda yang bertanggung jawab dan dapat dipercaya. Meskipun terkadang Anda bisa bersikap kaku atau terlalu fokus pada aturan, ketekunan Anda lah yang akan membawa Anda pada pencapaian jangka panjang yang kokoh dan kesuksesan yang bertahan lama.",
    
    5: "Kebebasan, petualangan, dan perubahan adalah inti dari garis hidup 5. Anda memiliki rasa ingin tahu yang tak terbatas dan haus akan pengalaman baru. Kehidupan yang monoton adalah musuh terbesar Anda; Anda berkembang pesat dalam situasi yang dinamis dan tidak terduga. Orang dengan garis hidup ini sangat mudah beradaptasi, cerdik, dan sering kali memiliki banyak bakat. Misi Anda adalah belajar melalui pengalaman langsung. Tantangannya adalah menemukan fokus agar energi Anda yang melimpah tidak tersebar ke terlalu banyak arah.",
    
    6: "Garis hidup 6 adalah lambang pengasuh, cinta kasih, dan tanggung jawab. Anda memiliki naluri yang kuat untuk melindungi, merawat, dan melayani keluarga serta komunitas Anda. Orang-orang secara alami tertarik pada kehangatan dan sifat empati Anda, sering kali mencari nasihat dan kenyamanan dari Anda. Anda mengejar keadilan dan keseimbangan, serta memiliki apresiasi yang mendalam terhadap keindahan. Tantangan bagi Anda adalah belajar untuk tidak terlalu ikut campur dalam urusan orang lain dan mengingat untuk merawat diri sendiri.",
    
    7: "Jika angka garis hidup Anda adalah 7, Anda adalah seorang pemikir, pencari kebenaran, dan analitis sejati. Anda memiliki ketertarikan yang mendalam terhadap misteri kehidupan, spiritualitas, dan ilmu pengetahuan. Anda cenderung lebih suka bekerja sendiri, menghabiskan waktu dalam introspeksi untuk menggali jawaban dari pertanyaan-pertanyaan besar. Intuisi Anda sangat tajam, dipadukan dengan kecerdasan intelektual yang luar biasa. Terkadang Anda bisa terlihat penyendiri, namun itu karena Anda sedang sibuk menjelajahi kedalaman pikiran Anda sendiri.",
    
    8: "Garis hidup 8 sangat erat kaitannya dengan kekuatan, otoritas, pencapaian materi, dan kesuksesan finansial. Anda memiliki bakat bawaan dalam hal bisnis, manajemen, dan kepemimpinan skala besar. Anda ambisius, efisien, dan memiliki kemampuan untuk mengubah visi menjadi kenyataan yang nyata. Tujuan hidup Anda berpusat pada pencapaian kelimpahan dan pengaruh. Namun, sangat penting bagi Anda untuk menyeimbangkan dorongan material ini dengan nilai-nilai etika, agar kesuksesan Anda membawa kebaikan bagi banyak orang.",
    
    9: "Angka garis hidup 9 menandakan jiwa yang humanis, welas asih, dan memiliki simpati universal. Anda peduli pada kondisi umat manusia dan sering kali memiliki dorongan kuat untuk membuat dunia menjadi tempat yang lebih baik. Anda adalah sosok yang dermawan, toleran, dan berpikiran luas. Angka 9 adalah angka penyelesaian, yang berarti Anda memiliki pemahaman spiritual yang matang. Tantangan Anda adalah belajar melepaskan masa lalu dan memaafkan, serta menyadari bahwa kebahagiaan sejati datang dari tindakan memberi tanpa pamrih."
};

// Fungsi menjumlahkan angka
function sumDigits(numStr) {
    let sum = 0;
    for(let i = 0; i < numStr.length; i++) {
        sum += parseInt(numStr[i]);
    }
    return sum;
}

document.getElementById('kalkulatorForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const tgl = document.getElementById('tanggal').value;
    const bln = document.getElementById('bulan').value;
    const thn = document.getElementById('tahun').value;

    // Isi input output basic
    document.getElementById('out-tanggal').value = tgl;
    document.getElementById('out-bulan').value = bln;
    document.getElementById('out-tahun').value = thn;

    // Proses Hitungan
    const fullDateStr = tgl + bln + thn;
    let hasil1 = sumDigits(fullDateStr);
    
    document.getElementById('out-hasil1').value = hasil1;

    let hasilAkhir = hasil1;
    let hasil2 = "";

    if(hasil1 > 9) {
        hasil2 = sumDigits(hasil1.toString());
        document.getElementById('out-hasil2').value = hasil2;
        hasilAkhir = hasil2;
        
        while(hasilAkhir > 9) {
            hasilAkhir = sumDigits(hasilAkhir.toString());
        }
    } else {
        document.getElementById('out-hasil2').value = "-";
    }

    document.getElementById('out-hasilakhir').value = hasilAkhir;

    // Tampilkan Teks Deskripsi di bawah tabel output
    document.getElementById('judul-karakter').innerText = "Tanggal Lahir Anda Berada Pada Garis Hidup " + hasilAkhir;
    document.getElementById('deskripsi-karakter').innerText = pesanKarakter[hasilAkhir] || "Deskripsi belum tersedia.";
    document.getElementById('hasil-teks-container').style.display = "block";
});

function resetForm() {
    document.getElementById('kalkulatorForm').reset();
    document.getElementById('out-tanggal').value = "";
    document.getElementById('out-bulan').value = "";
    document.getElementById('out-tahun').value = "";
    document.getElementById('out-hasil1').value = "";
    document.getElementById('out-hasil2').value = "";
    document.getElementById('out-hasilakhir').value = "";
    document.getElementById('hasil-teks-container').style.display = "none";
}