const fs = require('fs');
const puppeteer = require('puppeteer');

async function generatePDF(htmlContent) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(htmlContent);
  const pdf = await page.pdf({ format: 'A4', printBackground: true });
  await browser.close();
  return pdf;
}

async function createPDFReport(reportHtml) {
  const pdf = await generatePDF(reportHtml);
  fs.writeFileSync('report.pdf', pdf);
  console.log('PDF report created: report.pdf');
}

module.exports = createPDFReport;