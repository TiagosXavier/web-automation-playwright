// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://automationpratice.com.br/');
});

test('Login Success @Login', async ({ page }) => {

  const texto = await page.waitForSelector('text=NEWSLETTER')
  await texto.scrollIntoViewIfNeeded();

  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('teste@gmail.com');
  await page.screenshot({ path: 'screenshot/screenshot1.png'})
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.locator('#password').screenshot({ path: 'screenshot/elementosenha.png'})
  await page.screenshot({ path: 'screenshot/screenshot2.png'})
  await page.getByRole('button', { name: 'login' }).click();
});

test('Login Success 1 @Login', async ({ page }) => {

  const texto = await page.waitForSelector('text=NEWSLETTER')
  await texto.scrollIntoViewIfNeeded();

  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('teste@gmail.com');
  await page.screenshot({ path: 'screenshot/screenshot1.png'})
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.locator('#password').screenshot({ path: 'screenshot/elementosenha.png'})
  await page.screenshot({ path: 'screenshot/screenshot2.png'})
  await page.getByRole('button', { name: 'login' }).click();
});

test('Login Success 2 @Login', async ({ page }) => {

  const texto = await page.waitForSelector('text=NEWSLETTER')
  await texto.scrollIntoViewIfNeeded();

  await page.getByRole('link', { name: ' Login' }).click();
  await page.locator('#user').click();
  await page.locator('#user').fill('teste@gmail.com');
  await page.screenshot({ path: 'screenshot/screenshot1.png'})
  await page.locator('#password').click();
  await page.locator('#password').fill('123456');
  await page.locator('#password').screenshot({ path: 'screenshot/elementosenha.png'})
  await page.screenshot({ path: 'screenshot/screenshot2.png'})
  await page.getByRole('button', { name: 'login' }).click();
});


