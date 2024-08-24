// Ambil elemen input untuk menampilkan angka dan hasil
const display = document.getElementById("display");

// Status untuk melacak apakah tanda kurung buka atau tutup harus ditambahkan
let isOpenParenthesis = false; 

// Fungsi untuk menambahkan angka atau operator ke tampilan
function appendToDisplay(input) {
    // Ambil karakter terakhir dari input saat ini di tampilan
    const lastChar = display.value.slice(-1);
    
    // Cek apakah input dan karakter terakhir adalah operator atau titik
    if (['+', '-', '*', '/', '.'].includes(input) && ['+', '-', '*', '/', '.'].includes(lastChar)) {
        return; // Jika ya, jangan tambahkan input untuk mencegah input ganda yang tidak valid
    }

    // Tambahkan input ke akhir nilai tampilan
    display.value += input;
}

// Fungsi untuk menghapus semua angka di tampilan
function clearDisplay() {
    display.value = ""; // Setel tampilan menjadi string kosong
}

// Fungsi untuk menambahkan tanda kurung buka atau tutup
function appendParenthesis() {
    if (isOpenParenthesis) {
        display.value += ')'; // Jika tanda kurung buka sudah ada, tambahkan tanda kurung tutup
    } else {
        display.value += '('; // Jika belum, tambahkan tanda kurung buka
    }
    
    // Ubah status tanda kurung
    isOpenParenthesis = !isOpenParenthesis; 
}

// Fungsi untuk menghapus satu karakter terakhir di tampilan
function deleteLast() {
    display.value = display.value.slice(0, -1); // Potong karakter terakhir
}

// Fungsi untuk menghitung nilai ekspresi di tampilan
function calculate() {
    try {
        // Gunakan eval untuk menghitung nilai ekspresi
        display.value = eval(display.value);
    } catch (error) {
        // Jika ada kesalahan (misalnya, input tidak valid), tampilkan "Error"
        display.value = "Error";
    }
}
