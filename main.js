const readline = require("readline");
const figlet = require("figlet");
const gradient = require("gradient-string");
const chalk = require("chalk");
const boxen = require("boxen");
const { uploadDeface } = require("./function/web_deface");

// Setup interface untuk input user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Fungsi untuk membuat kotak dengan warna
function createBox(number, title, status) {
    const text = chalk.cyan(`{${number}}`) + "  " + chalk.yellow(`{${title}}`) + "  " + chalk.green(`{${status}}`);
    return boxen(text, {
        padding: 1,
        margin: 0,
        borderStyle: "round",
        borderColor: "red",
        width: 40, 
        align: "center"
    });
}

// Teks logo dengan warna gradient
const logo = gradient.mind(figlet.textSync("SALX-H4XOR", { horizontalLayout: "full" }));

console.log(logo);
console.log(chalk.bold.yellow("Author : ") + chalk.cyan("SALX TEAM"));
console.log(chalk.bold.yellow("Telegram : ") + chalk.cyan("@SALX_BOT"));
console.log(chalk.bold.yellow("GitHub : ") + chalk.cyan("github.com/SALX"));
console.log("");

// Daftar menu dengan kotak berwarna
const menu = [
    createBox("01", "LOGS", "ON"),
    createBox("02", "WEB DEFACE GENERATOR", "ON"),
    createBox("03", "DEFACEMENT", "ON"),
    createBox("04", "WEB SHELL", "ON"),
    createBox("05", "DOXING", "ON"),
    createBox("06", "WEBSITE TEMPLATE", "ON")
];

// Menampilkan menu dengan format yang lebih rapi
menu.forEach(item => console.log(item));

// Pilihan User
rl.question(chalk.cyan.bold("\nPilih Menu: "), async (menu) => {
    if (menu === "02") {
        console.log(chalk.blue.bold("\n>>> WEB DEFACE GENERATOR <<<\n"));

        rl.question(chalk.green("Masukkan script HTML deface:\n"), (htmlContent) => {
            rl.question(chalk.green("Masukkan nama file HTML: "), async (fileName) => {
                // Validasi nama file
                const sanitizedFileName = fileName.replace(/[^a-zA-Z0-9_-]/g, "") + ".html";

                console.log(chalk.yellow("🔄 Mengupload..."));

                try {
                    const url = await uploadDeface(htmlContent, sanitizedFileName);
                    
                    if (url) {
                        console.log(chalk.green(`
        ┌───────────────────────────────────┐
        │ URL    : ${url}                   
        │ TIME   : ${new Date().toLocaleString()} 
        │ DEFACE BY SALXTOOLS               
        └───────────────────────────────────┘
                        `));
                    } else {
                        console.log(chalk.red("❌ Gagal mengupload deface."));
                    }
                } catch (error) {
                    console.log(chalk.red("❌ Terjadi kesalahan saat mengupload."));
                    console.error(error);
                }

                rl.close();
            });
        });

    } else {
        console.log(chalk.red.bold("\nKeluar..."));
        rl.close();
    }
});