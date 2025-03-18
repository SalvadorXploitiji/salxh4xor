import boxen from "boxen";
import chalk from "chalk";
import gradient from "gradient-string";

console.clear();

// ASCII Art Logo
console.log(chalk.redBright(`
  ________________
 /.,------------,.\
///  .=^^^^^^^\\__|\\\\
\\\\\\   \`------.   .//
 \`\\\\\`--...._  \`;//'
   \`\\\\.-,___;.//'
     \`\\\\-..-//'
       \`\\\\//'
          ""
`));

// Tampilan Header
console.log(gradient.pastel(boxen("[+] SALX-H4XOR TOOLS v1.00 [+]", {
    padding: 1,
    margin: 1,
    borderStyle: "double",
    borderColor: "red",
    align: "center"
})));

// Informasi Developer
console.log(chalk.yellow.bold(" Author : ") + chalk.cyanBright("SALX TEAM"));
console.log(chalk.yellow.bold(" Telegram : ") + chalk.cyanBright("@SALX_BOT"));
console.log(chalk.yellow.bold(" GitHub : ") + chalk.cyanBright("github.com/SALX"));
console.log("\n");

// List Fitur
const features = [
    { id: "01", name: "LOGS", status: "ON" },
    { id: "02", name: "WEB DEFACE GENERATOR", status: "ON" },
    { id: "03", name: "DEFACEMENT", status: "ON" },
    { id: "04", name: "WEB SHELL", status: "ON" },
    { id: "05", name: "DOXING", status: "ON" },
    { id: "06", name: "WEBSITE TEMPLATE", status: "ON" },
];

// Tampilkan dalam bentuk kotak
features.forEach(feature => {
    console.log(boxen(
        `${chalk.red(`{${feature.id}}`)}  ${chalk.greenBright.bold(`{${feature.name}}`)}  ${chalk.yellow(`{${feature.status}}`)}`,
        {
            padding: 1,
            margin: 0.3,
            borderStyle: "round",
            borderColor: "red"
        }
    ));
});

// Tampilan Footer
console.log(chalk.blueBright("\n>>> Gunakan dengan bijak! <<<"));
console.log(chalk.gray("SALX-H4XOR TOOLS v1.00 - Created by SALX TEAM\n"));