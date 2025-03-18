const puppeteer = require("puppeteer");
const fs = require("fs");
const path = require("path");

async function uploadDeface(htmlContent, fileName) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    // Simpan file HTML deface
    const filePath = path.join(__dirname, `${fileName}.html`);
    fs.writeFileSync(filePath, htmlContent, "utf8");

    try {
        await page.goto("https://eastprovidenceri.gov/form/online-police-report-theft", { waitUntil: "load" });

        // Scroll ke bawah
        await page.evaluate(() => window.scrollBy(0, window.innerHeight));

        // Pilih file
        const fileInput = await page.waitForSelector('input[type="file"]');
        await fileInput.uploadFile(filePath);

        // Klik upload
        const uploadButton = await page.waitForSelector('button[type="submit"]');
        await uploadButton.click();

        // Tunggu hasil
        await page.waitForSelector(".uploaded-file-link", { timeout: 10000 });
        const uploadedLink = await page.$eval(".uploaded-file-link", el => el.href);

        return uploadedLink;

    } catch (error) {
        console.error("❌ Gagal upload:", error);
    } finally {
        await browser.close();
    }
}

module.exports = { uploadDeface };