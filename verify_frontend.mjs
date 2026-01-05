import { chromium } from 'playwright';
import { promises as fs } from 'fs';
import { exec } from 'child_process';
import util from 'util';

const execAsync = util.promisify(exec);

(async () => {
  const verificationDir = '/home/jules/verification';
  await fs.rm(verificationDir, { recursive: true, force: true });
  await fs.mkdir(verificationDir, { recursive: true });

  console.log('Starting server...');
  const serverProcess = exec('node server.mjs');
  serverProcess.stdout.on('data', (data) => console.log(`server stdout: ${data}`));
  serverProcess.stderr.on('data', (data) => console.error(`server stderr: ${data}`));

  // Wait for server to start
  await new Promise(resolve => setTimeout(resolve, 2000));

  const browser = await chromium.launch();
  const page = await browser.newPage();
  const pages = [
    'index.html',
    'metodologia.html',
    'casos-exito.html',
    'recursos.html',
    'diagnostico.html',
    'terminos-de-uso.html',
    'politica-de-privacidad.html',
    'declaracion-de-accesibilidad.html'
  ];

  console.log('Starting screenshot generation...');
  for (const p of pages) {
    const url = `http://localhost:8080/${p}`;
    console.log(`Navigating to ${url}`);
    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 5000 });

      await page.evaluate(async () => {
        const delay = ms => new Promise(res => setTimeout(res, ms));
        for (let i = 0; i < document.body.scrollHeight; i += 100) {
          window.scrollTo(0, i);
          await delay(20);
        }
      });

      console.log('Waiting for animations to settle...');
      await page.waitForTimeout(2000);
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(500);

      const screenshotPath = `${verificationDir}/${p.replace('.html', '.png')}`;
      console.log(`Taking full page screenshot for ${p}...`);
      await page.screenshot({ path: screenshotPath, fullPage: true });
      console.log(`Screenshot saved: ${screenshotPath}`);

    } catch (error) {
      console.error(`Failed to process ${p}: ${error.message}`);
    }
  }

  await browser.close();
  serverProcess.kill();
  console.log('All screenshots generated successfully and server stopped.');
})();
