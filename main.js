const xlsx = require("xlsx");
const readline = require("readline-sync");

// Gantikan dengan laluan fail anda
const filePath = "v2018_muatturun_NBC6002_cleaned.xlsx";

// Baca fail XLS
const workbook = xlsx.readFile(filePath);
const sheetName = workbook.SheetNames[0]; // Ambil helaian pertama
const sheet = workbook.Sheets[sheetName];

// Tukar helaian kepada JSON
const data = xlsx.utils.sheet_to_json(sheet);

// Paparkan nama lajur untuk rujukan
console.log("Lajur tersedia:", Object.keys(data[0]));

// Fungsi carian berdasarkan nama atau nombor telefon
function cariData(inputPengguna) {
    const hasil = data.filter(row =>
        Object.values(row).some(value =>
            value && value.toString().toLowerCase().includes(inputPengguna.toLowerCase())
        )
    );

    if (hasil.length > 0) {
        console.log("Data dijumpai:", hasil);
    } else {
        console.log("Tiada data dijumpai.");
    }
}

// Minta input pengguna
const inputPengguna = readline.question("Masukkan nama atau nombor telefon: ");
cariData(inputPengguna);