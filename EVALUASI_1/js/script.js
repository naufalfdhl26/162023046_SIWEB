// Navigasi Halaman
function showPage(page) {
    document.getElementById('page-home').style.display = 'none';
    document.getElementById('page-menu').style.display = 'none';
    document.getElementById('page-calc').style.display = 'none';

    if (page === 'home') {
        document.getElementById('page-home').style.display = 'flex';
    } else if (page === 'menu') {
        document.getElementById('page-menu').style.display = 'block';
        alert("input Jumlah Pesanan agar di hitung otomatis oleh sistem");
        resetMenu();
    } else if (page === 'calc') {
        document.getElementById('page-calc').style.display = 'flex';
        resetKalkulator();
    }
}

// Fitur Shout
function shoutAlert() {
    alert("Hai, Selamat datang di Sistem Sederhana");
}

// Fitur Kasir/Menu
function hitungMenu() {
    let q1 = parseInt(document.getElementById('qty1').value) || 0;
    let q2 = parseInt(document.getElementById('qty2').value) || 0;
    let q3 = parseInt(document.getElementById('qty3').value) || 0;

    let total = (q1 * 12000) + (q2 * 10000) + (q3 * 15000);
    document.getElementById('total').value = total;

    let diskon = 0;
    if (total > 50000) {
        diskon = total * 0.10;
    }
    document.getElementById('diskon').value = diskon;

    let bayar = total - diskon;
    document.getElementById('bayar').value = bayar;
}

function resetMenu() {
    document.getElementById('qty1').value = "0";
    document.getElementById('qty2').value = "0";
    document.getElementById('qty3').value = "0";
    document.getElementById('total').value = "0";
    document.getElementById('diskon').value = "0";
    document.getElementById('bayar').value = "0";
}

// Fitur Kalkulator
function hitungKalkulator() {
    let in1 = document.getElementById('calc-in1').value;
    let in2 = document.getElementById('calc-in2').value;
    let op = document.getElementById('calc-op').value;

    if (in1 === "" || in2 === "" || parseFloat(in1) <= 0 || parseFloat(in2) <= 0) {
        alert("inputan pertama dan kedua harus lebih dari 0");
        return;
    }

    let num1 = parseFloat(in1);
    let num2 = parseFloat(in2);
    let result = 0;

    switch (op) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '/': result = num1 / num2; break;
        case '%': result = num1 % num2; break;
        case '^': result = Math.pow(num1, num2); break;
    }

    document.getElementById('calc-result').value = result;
}

function resetKalkulator() {
    document.getElementById('calc-in1').value = "";
    document.getElementById('calc-in2').value = "";
    document.getElementById('calc-result').value = "";
    document.getElementById('calc-op').value = "+";
}