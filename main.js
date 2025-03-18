import boxen from "boxen";
import chalk from "chalk";
import gradient from "gradient-string";

// Fungsi untuk membuat kotak dengan panjang tetap
function createBox(number, title, status) {
    const text = `{${number}}  {${title}}  {${status}}`;
    return boxen(text, {
        padding: 1,
        margin: 0,
        borderStyle: "round",
        borderColor: "red",
        width: 40, // Pastikan semua kotak memiliki lebar yang sama
        align: "center"
    });
}

// Teks logo
const logo = gradient.mind(`
███████╗ █████╗ ██╗     ██╗  ██╗
██╔════╝██╔══██╗██║      ╚██╗██╔╝
███████╗███████║██║       ╚███╔╝ 
╚════██║██╔══██║██║       ██╔██╗ 
███████║██║  ██║███████╗ ██╔╝ ██╗
╚══════╝╚═╝  ╚═╝╚══════╝ ╚═╝  ╚═╝
`);

console.log(logo);
console.log(chalk.yellow("Author : ") + chalk.cyan("SALX TEAM"));
console.log(chalk.yellow("Telegram : ") + chalk.cyan("@SALX_BOT"));
console.log(chalk.yellow("GitHub : ") + chalk.cyan("github.com/SALX"));
console.log("");

// Daftar menu dengan kotak yang seragam
const menu = [
    createBox("01", "LOGS", "ON"),
    createBox("02", "WEB DEFACE GENERATOR", "ON"),
    createBox("03", "DEFACEMENT", "ON"),
    createBox("04", "WEB SHELL", "ON"),
    createBox("05", "DOXING", "ON"),
    createBox("06", "WEBSITE TEMPLATE", "ON")
];

menu.forEach(item => console.log(item));

console.log(chalk.blueBright("\n>>> Gunakan dengan bijak! <<<"));
console.log(chalk.gray("SALX-H4XOR TOOLS v1.00 - Created by SALX TEAM"));