const readline = require("readline");
const figlet = require("figlet");
const gradient = require("gradient-string");
const chalk = require("chalk");
const boxen = require("boxen");
const { uploadDeface } = require("./function/web_deface");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Tampilka

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
const logo = gradient.mind(`
███████╗ █████╗ ██╗     ██╗  ██╗
██╔════╝██╔══██╗██║     ██║  ██║
█████╗  ███████║██║     ███████║
██╔══╝  ██╔══██║██║     ██╔══██║
███████╗██║  ██║███████╗██║  ██║
╚══════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
`);

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

console.log(menu);

// Pilihan User
rl.question(chalk.cyan.bold("Pilih Menu: "), async (menu) => {
    if (menu === "02") {
        console.log(chalk.blue.bold("\n>>> WEB DEFACE GENERATOR <<<\n"));

        rl.question(chalk.green("Masukkan script HTML deface:\n"), (htmlContent) => {
            rl.question(chalk.green("Masukkan nama file HTML: "), async (fileName) => {
                console.log(chalk.yellow("🔄 Mengupload..."));
                const url = await uploadDeface(htmlContent, fileName);
                
                if (url) {
                    console.log(chalk.green(`
        ┌───────────────────────────────────┐
        │ URL    : ${url}                   │
        │ TIME   : ${new Date().toLocaleString()} │
        │ DEFACE BY SALXTOOLS               │
        └───────────────────────────────────┘
                    `));
                }
                
                rl.close();
            });
        });

    } else {
        console.log(chalk.red.bold("\nKeluar..."));
        rl.close();
    }
});