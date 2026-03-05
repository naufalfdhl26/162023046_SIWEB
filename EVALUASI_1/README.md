# Laporan Spesifikasi Sistem Sederhana ITENAS

Sistem Sederhana ITENAS adalah sebuah antarmuka web interaktif yang dibangun menggunakan HTML murni, CSS, dan Vanilla JavaScript. Program ini dikembangkan sebagai pemenuhan tugas/evaluasi praktikum dengan mengimplementasikan konsep manipulasi DOM (Document Object Model), navigasi Single Page Application (SPA) sederhana, dan logika aritmatika JavaScript.

## Struktur Direktori

Sistem ini disusun dengan struktur folder untuk memisahkan struktur halaman, gaya visual, dan logika program:

/EVALUASI_1
|-- /assets
|   |-- logo.jpg       (Digunakan sebagai background berpola)
|   |-- gedung.jpg     (Digunakan sebagai background header)
|-- /css
|   |-- style.css      (File stylesheet untuk mengatur tata letak dan UI)
|-- /js
|   |-- script.js      (File logika JavaScript untuk Kalkulasi & Alert)
|-- index.html         (File utama kerangka antarmuka)


## Spesifikasi Tampilan (UI)
* Latar Belakang (Background): Menggunakan aset gambar logo ITENAS (logo.jpg) yang dibuat berulang (repeat) membentuk pola geometris.
* Header: Terdiri dari 6 (enam) kotak grid yang menampilkan gambar gedung kampus ITENAS (gedung.jpg).
* Sidebar Navigasi: Berisi 3 menu utama yaitu Home, Menu, dan Calculator dengan teks berwarna plum (#5c2c4d) dan dibatasi oleh garis abu-abu di bagian tengah.
* Footer: Terletak di bagian bawah layar dengan keterangan "200224 - Sistem Informasi | ITENAS 2004".

## Spesifikasi Fungsionalitas Modul

Sistem ini memiliki 3 halaman/modul utama yang akan berubah saat menu di sidebar diklik (tanpa proses reload halaman).

### 1. Modul Home
Halaman default saat sistem pertama kali dijalankan.
* Fitur "Shout": Terdapat instruksi "klik button disamping >>" dan sebuah tombol hitam bertuliskan "Shout".
* Aksi: Saat tombol tersebut diklik, sistem akan memunculkan pop-up alert bertuliskan: "Hai, Selamat datang di Sistem Sederhana".

### 2. Modul Menu (Sistem Kasir)
Sistem kasir sederhana untuk menghitung total pesanan makanan. 
* Aksi Inisialisasi: Saat menu ini pertama kali diklik, sistem akan langsung menampilkan alert: "input Jumlah Pesanan agar di hitung otomatis oleh sistem".
* Daftar Menu:
    1. Bakso Istimewa (@ Rp 12.000)
    2. Soto Spesial (@ Rp 10.000)
    3. Mie Ayam Super (@ Rp 15.000)
* Tampilan Modifikasi: Tabel dibuat mencolok dengan latar belakang berwarna kuning (#FFD200) dan pemisah garis putih.
* Fitur Kalkulasi Otomatis: Perhitungan Jumlah Total akan diperbarui secara real-time dan otomatis setiap kali user mengubah input jumlah pesanan di kolom "Pesan".
* Fitur Diskon: Jika "Jumlah Total" pesanan melebihi Rp 50.000, maka sistem akan memberikan potongan harga sebesar 10%. Hasil akhir akan ditampilkan di kolom "Jumlah Bayar".
* Tombol Reset: Berada di sebelah kanan tabel (berwarna hitam). Jika diklik, semua data input dan total tagihan akan kembali menjadi 0.

### 3. Modul Calculator
Menyediakan fitur kalkulator sederhana untuk perhitungan matematis.
* Fungsi Operator: Mendukung operasi penjumlahan (+), pengurangan (-), perkalian (*), pembagian (/), modulus (%), dan eksponen/pangkat (^).
* Validasi Keamanan Input: 
    - Jika user membiarkan inputan kosong, sistem akan memunculkan alert peringatan.
    - Jika nilai inputan yang dimasukkan kurang dari atau sama dengan 0, maka akan muncul alert: "inputan pertama dan kedua harus lebih dari 0".
* Aksi Kalkulasi: Jika kedua input valid (lebih dari 0), sistem akan menghitung operasi yang dipilih dan menampilkan hasilnya di kotak teks (readonly).
* Navigasi: Jika pengguna menekan tombol "Home" pada sidebar, layar akan kembali ke tampilan menu awal Sistem Sederhana.

---
Laporan dibuat berdasarkan spesifikasi evaluasi praktikum P4.