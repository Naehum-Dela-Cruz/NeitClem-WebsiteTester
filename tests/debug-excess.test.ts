import { test, expect } from '@playwright/test';
import path from 'path';

test('debug excess completion', async ({ page }) => {
  test.setTimeout(180_000);
  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
  page.on('dialog', dialog => {
    console.log('BROWSER DIALOG:', dialog.type(), dialog.message());
    dialog.accept().catch(() => { });
  });

  await page.goto('https://excess.gratusinc.org/');
  // Step 1
  await page.getByRole('textbox', { name: 'Enter insured name' }).fill('Test ND');
  await page.getByRole('textbox').nth(1).fill('2026-11-19');
  await page.getByRole('textbox', { name: 'Enter phone number' }).fill('69420');
  await page.getByRole('textbox', { name: 'Enter email address' }).fill('ndelacruz@neitclem.com');
  await page.getByRole('textbox', { name: 'Enter address' }).fill('Test st, test sub, test add');
  await page.getByRole('textbox', { name: 'Enter city' }).fill('Los Angeles');
  await page.getByRole('combobox').first().selectOption('CA');
  await page.getByRole('textbox', { name: 'Enter zip code' }).fill('6100');
  await page.getByRole('textbox', { name: 'Enter county' }).fill('Los Angeles');
  await page.locator('input[type="date"]').nth(1).fill('2026-11-19');
  await page.locator('input[type="date"]').nth(2).fill('2026-11-19');
  await page.getByRole('radio', { name: 'Other' }).check();
  await page.getByRole('textbox', { name: '(please describe)' }).fill('Test');
  await page.getByRole('textbox', { name: 'Enter website' }).fill('www.neitclem.com');
  await page.getByRole('textbox', { name: 'Contact name' }).fill('test');
  await page.getByRole('textbox', { name: 'Phone number', exact: true }).fill('69420');
  await page.getByRole('textbox', { name: 'Describe the primary business' }).fill('test');
  await page.getByRole('textbox', { name: 'Agency name' }).fill('Neitclem Wholesale Insurance Inc.');
  await page.getByRole('textbox', { name: 'Agent name' }).fill('Test ND');
  await page.getByRole('textbox', { name: 'Agent phone' }).fill('69420');
  await page.getByRole('textbox', { name: 'Agent email' }).fill('ndelacruz@neitclem.com');
  await page.getByRole('textbox', { name: 'Agency address' }).fill('Test st, test sub, test add');
  await page.getByRole('textbox', { name: 'City', exact: true }).fill('Los Angeles');
  await page.getByRole('combobox').nth(1).selectOption('CA');
  await page.getByRole('textbox', { name: 'Zip code', exact: true }).fill('6100');
  await page.getByRole('button', { name: 'Next' }).click();

  // Step 2
  await page.getByRole('radio', { name: 'Renewal' }).check();
  await page.getByRole('radio', { name: 'Excess' }).check();
  await page.getByRole('radio', { name: 'Claims Made' }).first().check();
  await page.getByRole('combobox').first().selectOption('3000000');
  await page.getByRole('combobox').nth(1).selectOption('3000000');
  await page.getByRole('checkbox', { name: 'Boiler & Machinery' }).check();
  await page.getByRole('checkbox', { name: 'Business Auto' }).check();
  await page.getByRole('checkbox', { name: 'Business Owners' }).check();
  await page.getByRole('checkbox', { name: 'Commercial General Liability' }).check();
  await page.getByRole('checkbox', { name: 'Commercial Inland Marine' }).check();
  await page.getByRole('checkbox', { name: 'Commercial Property' }).check();
  await page.getByRole('checkbox', { name: 'Crime' }).check();
  await page.getByRole('checkbox', { name: 'Umbrella' }).check();
  await page.getByRole('checkbox', { name: 'Truckers' }).check();
  await page.getByRole('checkbox', { name: 'Motor Carrier' }).check();
  await page.getByRole('checkbox', { name: 'Liquor Liability' }).check();
  await page.getByRole('checkbox', { name: 'Garage and Dealers' }).check();
  await page.getByRole('checkbox', { name: 'Fiduciary Liability' }).check();
  await page.getByRole('checkbox', { name: 'Yacht' }).check();
  await page.getByRole('checkbox', { name: 'Cyber and Privacy' }).check();
  await page.getByRole('textbox', { name: 'Enter class code' }).fill('905950');

  // Underlying auto
  await page.getByRole('textbox', { name: 'Carrier name' }).first().fill('test');
  await page.getByRole('textbox', { name: 'Policy #' }).first().fill('65154');
  await page.getByRole('textbox').nth(3).fill('2026-11-19');
  await page.getByRole('textbox').nth(4).fill('2026-11-19');
  await page.getByRole('spinbutton', { name: '0' }).nth(1).fill('10999');
  await page.getByRole('spinbutton', { name: '0' }).nth(2).fill('10003');
  await page.getByRole('spinbutton', { name: '0' }).nth(3).fill('100003');
  await page.getByRole('spinbutton', { name: '0' }).nth(4).fill('10002');

  // Underlying GL
  await page.getByRole('radio', { name: 'Occurrence' }).nth(1).check();
  await page.getByRole('textbox', { name: 'Carrier name' }).nth(1).fill('test');
  await page.getByRole('textbox', { name: 'Policy #' }).nth(1).fill('tesst999');
  await page.locator('input[type="date"]').nth(2).fill('2026-11-19');
  await page.locator('input[type="date"]').nth(3).fill('2026-11-19');
  await page.locator('div:nth-child(3) > .grid > div > .flex > .w-full').first().fill('9999');
  await page.locator('div:nth-child(3) > .grid > div:nth-child(2) > .flex > .w-full').fill('9999');
  await page.locator('div:nth-child(3) > .grid > div:nth-child(4) > .flex > .w-full').fill('9999');
  await page.locator('div:nth-child(3) > .grid > div:nth-child(3) > .flex > .w-full').fill('9999');
  await page.locator('.grid.grid-cols-2.gap-3 > div:nth-child(5) > .flex > .w-full').fill('9999');
  await page.locator('div:nth-child(6) > .flex > .w-full').fill('9999');

  // Underlying Employers
  await page.getByRole('textbox', { name: 'Carrier name' }).nth(2).fill('test');
  await page.getByRole('textbox', { name: 'Policy #' }).nth(2).fill('9999');
  await page.locator('input[type="date"]').nth(5).fill('2026-11-19');
  await page.locator('input[type="date"]').nth(4).fill('2026-11-19');
  await page.locator('div:nth-child(3) > .p-5 > div:nth-child(2) > .grid > div > .flex > .w-full').first().fill('9999');
  await page.locator('div:nth-child(3) > .p-5 > div:nth-child(2) > .grid > div:nth-child(2) > .flex > .w-full').fill('9999');
  await page.locator('div:nth-child(3) > .p-5 > div:nth-child(2) > .grid > div:nth-child(3) > .flex > .w-full').fill('9999');
  await page.getByRole('button', { name: 'Next' }).click();

  // Step 3
  await page.getByRole('textbox', { name: 'Street address' }).fill('test add test, test st');
  await page.getByRole('textbox', { name: 'Building #' }).fill('1');
  await page.getByRole('textbox', { name: 'City' }).fill('Los Angeles');
  await page.getByRole('combobox').selectOption('CA');
  await page.getByRole('textbox', { name: 'County' }).fill('Los Angeles');
  await page.getByRole('textbox', { name: 'ZIP code' }).fill('6100');
  await page.getByRole('textbox', { name: 'Describe the operations at' }).fill('Teeeest');
  await page.getByRole('button', { name: 'Next' }).click();

  // Step 4
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Proceed' }).click();

  // Step 5: Upload Files
  const testFiles = [
    path.resolve(__dirname, '../test-files/test-document.pdf'),
    path.resolve(__dirname, '../test-files/test-image.png'),
  ];
  await page.locator('input[type="file"]').setInputFiles(testFiles);

  // Submit Application modal
  await page.getByRole('button', { name: 'Submit Application' }).click();
  await page.getByRole('textbox', { name: 'Sender Full Name *' }).fill('Test ND');
  await page.getByRole('textbox', { name: 'Sender Email Address *' }).fill('ndelacruz@neitclem.com');
  await page.getByRole('textbox', { name: 'Enter your agency name (' }).fill('Neitclem Wholesale Ins. Brokerage');
  await page.getByRole('textbox', { name: 'Other Information' }).fill('This is a test. No further action required.');
  await page.getByRole('checkbox', { name: 'By checking this box you' }).check();

  await page.getByRole('button', { name: 'Submit', exact: true }).click();

  // Wait for saving application overlay to disappear
  console.log('Waiting for Saving Application heading to be hidden...');
  await expect(page.getByRole('heading', { name: 'Saving Application' })).toBeHidden({ timeout: 60_000 });

  console.log('After Saving hidden. Headings:', await page.getByRole('heading').allInnerTexts());
  console.log('Buttons:', await page.getByRole('button').allInnerTexts());

  const startNew = page.getByRole('button', { name: 'Start New Application' });
  await expect(startNew).toBeVisible({ timeout: 15_000 });
  await startNew.click();

  console.log('Clicked Start New Application. Checking state...');
  await page.waitForTimeout(2000);
  console.log('Buttons now:', await page.getByRole('button').allInnerTexts());
  console.log('Headings now:', await page.getByRole('heading').allInnerTexts());
});
