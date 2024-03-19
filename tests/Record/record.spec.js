import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByLabel('Search', { exact: true }).click();
  await page.getByLabel('Search', { exact: true }).fill('Narendra modi');
  await page.getByRole('button', { name: 'Not now' }).click();
  await page.getByRole('link', { name: 'Prime Minister of India pmindia http://www.pmindia.gov.in ›' }).click();
  await page.getByRole('link', { name: 'Menu ' }).click();
  await page.getByRole('link', { name: 'News Updates' }).click();
  await page.goto('https://www.google.com/search?q=Narendra+modi&sca_esv=1114ab6409594670&source=hp&ei=YV_wZf73N-6B1e8P8dSekAg&iflsig=ANes7DEAAAAAZfBtct0I6-vajchG1wcYxpMHdyfp8D5j&ved=0ahUKEwi-rK_b8O6EAxXuQPUHHXGqB4IQ4dUDCA0&uact=5&oq=Narendra+modi&gs_lp=Egdnd3Mtd2l6Ig1OYXJlbmRyYSBtb2RpMgsQLhiABBixAxiDATIIEAAYgAQYsQMyBBAAGAMyCBAAGIAEGLEDMgUQABiABDIIEAAYgAQYsQMyCBAAGIAEGLEDMggQABiABBixAzIFEAAYgAQyBRAAGIAESIRBUIYqWOQ-cAF4AJABAJgBogGgAfcOqgEEMC4xM7gBA8gBAPgBAZgCDqAC0A-oAgrCAhAQABgDGI8BGOUCGOoCGIwDwgIQEC4YAxiPARjlAhjqAhiMA8ICCxAAGIAEGLEDGIMBwgIREC4YgAQYsQMYgwEYxwEY0QPCAg4QLhiDARixAxiABBiKBcICERAuGIAEGIoFGLEDGIMBGOUEwgIOEC4YgAQYigUYsQMYgwHCAg4QABiABBiKBRixAxiDAcICBRAuGIAEwgINEAAYgAQYChixAxiDAcICCBAuGIAEGNQCwgILEC4YgAQYxwEY0QPCAgsQLhiDARixAxiABMICCBAuGIAEGLEDmAMOkgcEMS4xM6AHjJYB&sclient=gws-wiz');
  await page.goto('https://www.google.com/');
});