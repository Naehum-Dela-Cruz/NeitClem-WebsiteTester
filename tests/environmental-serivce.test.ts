import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://environmental-services.gratusinc.org/');
    await page.getByRole('textbox', { name: 'Enter insured name' }).click();
    await page.getByRole('textbox', { name: 'Enter insured name' }).fill('Test ND');
    await page.locator('input[type="date"]').fill('2026-11-19');
    await page.getByRole('textbox', { name: 'Enter address' }).click();
    await page.getByRole('textbox', { name: 'Enter address' }).fill('Test address, test st, test sub');
    await page.getByRole('textbox', { name: 'Enter email address' }).click();
    await page.getByRole('textbox', { name: 'Enter email address' }).fill('ndelacruz@neitclem.com');
    await page.getByRole('textbox', { name: 'Enter city' }).click();
    await page.getByRole('textbox', { name: 'Enter city' }).fill('Los Angles');
    await page.getByRole('combobox').selectOption('CA');
    await page.getByRole('textbox', { name: 'Enter zip code' }).click();
    await page.getByRole('textbox', { name: 'Enter zip code' }).fill('6100');
    await page.getByRole('textbox', { name: 'Enter phone number' }).click();
    await page.getByRole('textbox', { name: 'Enter phone number' }).fill('69420');
    await page.getByText('Joint Venture').click();
    await page.getByRole('radio', { name: 'Joint Venture' }).check();
    await page.getByText('Corporation').click();
    await page.getByRole('radio', { name: 'Corporation' }).check();
    await page.getByText('Partnership').click();
    await page.getByRole('radio', { name: 'Partnership' }).check();
    await page.getByText('Individual').click();
    await page.getByRole('radio', { name: 'Individual' }).check();
    await page.getByText('Other').click();
    await page.getByRole('radio', { name: 'Other' }).check();
    await page.getByRole('textbox', { name: '(please describe)' }).click();
    await page.getByRole('textbox', { name: '(please describe)' }).fill('test');
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByText('Renewal').click();
    await page.getByRole('radio', { name: 'Renewal' }).check();
    await page.getByText('New Business').click();
    await page.getByRole('radio', { name: 'New Business' }).check();
    await page.locator('div').filter({ hasText: /^Commercial General Liability$/ }).click();
    await page.getByText('Commercial General Liability').click();
    await page.getByRole('checkbox', { name: 'Commercial General Liability' }).check();
    await page.getByText('Occurrence', { exact: true }).click();
    await page.getByRole('radio', { name: 'Occurrence' }).check();
    await page.getByText('Claims Made', { exact: true }).click();
    await page.getByRole('radio', { name: 'Claims Made' }).check();
    await page.getByText('Contractors Pollution').click();
    await page.getByRole('checkbox', { name: 'Contractors Pollution' }).check();
    await page.getByText('Occurrence').nth(1).click();
    await page.getByRole('radio', { name: 'Occurrence' }).nth(1).check();
    await page.getByText('Claims Made').nth(1).click();
    await page.getByRole('radio', { name: 'Claims Made' }).nth(1).check();
    await page.locator('div').filter({ hasText: /^Errors and Omissions \(Claims Made Only\)$/ }).click();
    await page.getByText('Errors and Omissions (Claims').click();
    await page.getByRole('checkbox', { name: 'Errors and Omissions (Claims' }).check();
    await page.getByText('Pollution Legal Liability (').click();
    await page.getByRole('checkbox', { name: 'Pollution Legal Liability (' }).check();
    await page.getByText('Third Party Pollution').click();
    await page.getByRole('radio', { name: 'Third Party Pollution' }).check();
    await page.getByText('On-site Cleanup').click();
    await page.getByRole('radio', { name: 'On-site Cleanup' }).check();
    await page.getByRole('textbox').first().fill('2026-11-19');
    await page.getByRole('textbox').nth(1).fill('2026-11-19');
    await page.getByRole('textbox').nth(2).fill('2026-11-19');
    await page.getByRole('textbox', { name: 'Enter limits requested' }).first().click();
    await page.getByRole('textbox', { name: 'Enter limits requested' }).first().fill('1,000,005');
    await page.getByRole('textbox', { name: 'Enter limits requested' }).nth(1).click();
    await page.getByRole('textbox', { name: 'Enter limits requested' }).nth(1).fill('2,000,005');
    await page.getByRole('textbox', { name: 'Enter deductibles requested' }).click();
    await page.getByRole('textbox', { name: 'Enter deductibles requested' }).fill('10,005');
    await page.locator('.grid.grid-cols-1.lg\\:grid-cols-2').click();
    await page.getByRole('textbox', { name: 'Enter other coverages and' }).click();
    await page.getByRole('textbox', { name: 'Enter other coverages and' }).fill('test');
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByText('(Past 12 Months)').click();
    await page.getByText('(Past 12 Months)').click();
    await page.getByRole('heading', { name: 'Prior Year Revenues' }).click();
    await page.getByText('(Past 12 Months)').click();
    await page.getByRole('textbox', { name: '$' }).first().click();
    await page.getByRole('textbox', { name: '$' }).first().fill('999999');
    await page.getByRole('textbox', { name: '$' }).nth(1).click();
    await page.getByRole('textbox', { name: '$' }).nth(1).fill('9999999');
    await page.getByRole('textbox', { name: '$' }).nth(2).click();
    await page.getByRole('textbox', { name: '$' }).nth(2).fill('999999');
    await page.locator('input[type="date"]').nth(4).fill('2026-11-19');
    await page.locator('input[type="date"]').nth(5).fill('2026-11-19');
    await page.getByRole('textbox').nth(4).fill('2026-11-19');
    await page.getByRole('textbox').nth(5).fill('2026-11-19');
    await page.getByRole('textbox').nth(1).fill('2026-11-19');
    await page.getByRole('textbox').nth(2).fill('2026-11-19');
    await page.getByRole('row', { name: 'Above Ground Storage Tank Installation $ %' }).getByPlaceholder('0.00').click();
    await page.getByRole('row', { name: 'Above Ground Storage Tank Installation $ %' }).getByPlaceholder('0.00').fill('9999');
    await page.getByRole('row', { name: 'Above Ground Storage Tank Removal $ %' }).getByPlaceholder('0.00').click();
    await page.getByRole('row', { name: 'Above Ground Storage Tank Removal $ %' }).getByPlaceholder('0.00').fill('999');
    await page.getByRole('cell', { name: '$' }).nth(2).click();
    await page.getByRole('row', { name: 'Asbestos Abatement $ %' }).getByPlaceholder('0.00').click();
    await page.getByRole('row', { name: 'Asbestos Abatement $ %' }).getByPlaceholder('0.00').fill('999');
    await page.getByRole('row', { name: 'Bio Remediation $ %' }).getByPlaceholder('0.00', { exact: true }).click();
    await page.getByRole('row', { name: 'Bio Remediation $ %' }).getByPlaceholder('0.00', { exact: true }).fill('999');
    await page.getByRole('row', { name: 'Drilling (not oil/gas) $ %' }).getByPlaceholder('0.00', { exact: true }).click();
    await page.getByRole('row', { name: 'Drilling (not oil/gas) $ %' }).getByPlaceholder('0.00', { exact: true }).fill('9999');
    await page.getByRole('row', { name: 'Emergency Response $ %' }).getByPlaceholder('0.00', { exact: true }).click();
    await page.getByRole('row', { name: 'Emergency Response $ %' }).getByPlaceholder('0.00', { exact: true }).fill('9999');
    await page.getByRole('row', { name: 'Bio Remediation $ 999 %' }).getByPlaceholder('0.00', { exact: true }).click();
    await page.getByRole('row', { name: 'Bio Remediation $ 999 %' }).getByPlaceholder('0.00', { exact: true }).fill('9999');
    await page.getByRole('row', { name: 'Asbestos Abatement $ 999 %' }).getByPlaceholder('0.00').click();
    await page.getByRole('row', { name: 'Asbestos Abatement $ 999 %' }).getByPlaceholder('0.00').fill('9999');
    await page.getByRole('row', { name: 'Above Ground Storage Tank Removal $ 999 %' }).getByPlaceholder('0.00').click();
    await page.getByRole('row', { name: 'Above Ground Storage Tank Removal $ 999 %' }).getByPlaceholder('0.00').fill('9999');
    await page.getByRole('row', { name: 'Above Ground Storage Tank Installation $ 9999 %' }).getByPlaceholder('0.00').click();
    await page.getByRole('row', { name: 'Above Ground Storage Tank Installation $ 9999 %' }).getByPlaceholder('0.00').fill('99999');
    await page.getByRole('cell', { name: '$', exact: true }).nth(1).click();
    await page.locator('tr:nth-child(7) > td:nth-child(2) > .flex > .flex-1').first().click();
    await page.locator('tr:nth-child(7) > td:nth-child(2) > .flex > .flex-1').first().fill('9999');
    await page.locator('tr:nth-child(8) > td:nth-child(2) > .flex > .flex-1').first().click();
    await page.locator('tr:nth-child(8) > td:nth-child(2) > .flex > .flex-1').first().fill('9999');
    await page.locator('tr:nth-child(9) > td:nth-child(2) > .flex > .flex-1').first().click();
    await page.locator('tr:nth-child(9) > td:nth-child(2) > .flex > .flex-1').first().fill('9999');
    await page.locator('tr:nth-child(10) > td:nth-child(2) > .flex > .flex-1').first().click();
    await page.locator('tr:nth-child(10) > td:nth-child(2) > .flex > .flex-1').first().fill('9999');
    await page.locator('tr:nth-child(11) > td:nth-child(2) > .flex > .flex-1').first().click();
    await page.locator('tr:nth-child(11) > td:nth-child(2) > .flex > .flex-1').first().fill('9999');
    await page.locator('tr:nth-child(12) > td:nth-child(2) > .flex > .flex-1').first().click();
    await page.locator('tr:nth-child(12) > td:nth-child(2) > .flex > .flex-1').first().fill('9999');
    await page.locator('tr:nth-child(13) > td:nth-child(2) > .flex > .flex-1').first().click();
    await page.locator('tr:nth-child(13) > td:nth-child(2) > .flex > .flex-1').first().fill('9999');
    await page.locator('tr:nth-child(14) > td:nth-child(2) > .flex > .flex-1').first().click();
    await page.locator('tr:nth-child(14) > td:nth-child(2) > .flex > .flex-1').first().fill('9999');
    await page.locator('tr:nth-child(15) > td:nth-child(2) > .flex > .flex-1').first().click();
    await page.locator('tr:nth-child(15) > td:nth-child(2) > .flex > .flex-1').first().fill('9999');
    await page.locator('tr:nth-child(16) > td:nth-child(2) > .flex > .flex-1').first().click();
    await page.locator('tr:nth-child(16) > td:nth-child(2) > .flex > .flex-1').first().fill('9999');
    await page.locator('tr:nth-child(17) > td:nth-child(2) > .flex > .flex-1').first().click();
    await page.locator('tr:nth-child(17) > td:nth-child(2) > .flex > .flex-1').first().fill('9999');
    await page.locator('tr:nth-child(18) > td:nth-child(2) > .flex > .flex-1').first().click();
    await page.locator('tr:nth-child(18) > td:nth-child(2) > .flex > .flex-1').first().fill('9999');
    await page.getByRole('row', { name: 'Above Ground Storage Tank Installation $ 99999 %' }).getByPlaceholder('0', { exact: true }).click();
    await page.getByRole('row', { name: 'Above Ground Storage Tank Installation $ 99999 %' }).getByPlaceholder('0', { exact: true }).fill('50');
    await page.getByRole('row', { name: 'Above Ground Storage Tank Removal $ 9999 %' }).getByPlaceholder('0', { exact: true }).click();
    await page.getByRole('row', { name: 'Above Ground Storage Tank Removal $ 9999 %' }).getByPlaceholder('0', { exact: true }).fill('50');
    await page.getByRole('cell', { name: '%' }).nth(2).click();
    await page.getByRole('row', { name: 'Asbestos Abatement $ 9999 %' }).getByPlaceholder('0', { exact: true }).click();
    await page.getByRole('row', { name: 'Asbestos Abatement $ 9999 %' }).getByPlaceholder('0', { exact: true }).fill('50');
    await page.getByRole('row', { name: 'Bio Remediation $ 9999 %' }).getByPlaceholder('0', { exact: true }).click();
    await page.getByRole('row', { name: 'Bio Remediation $ 9999 %' }).getByPlaceholder('0', { exact: true }).fill('50');
    await page.getByRole('row', { name: 'Drilling (not oil/gas) $ 9999' }).getByPlaceholder('0', { exact: true }).click();
    await page.getByRole('row', { name: 'Drilling (not oil/gas) $ 9999' }).getByPlaceholder('0', { exact: true }).fill('50');
    await page.getByRole('row', { name: 'Emergency Response $ 9999 %' }).getByPlaceholder('0', { exact: true }).click();
    await page.getByRole('row', { name: 'Emergency Response $ 9999 %' }).getByPlaceholder('0', { exact: true }).fill('50');
    await page.locator('tr:nth-child(7) > td:nth-child(3) > .flex > .flex-1').first().click();
    await page.locator('tr:nth-child(7) > td:nth-child(3) > .flex > .flex-1').first().fill('50');
    await page.locator('tr:nth-child(8) > td:nth-child(3) > .flex > .flex-1').first().click();
    await page.locator('tr:nth-child(8) > td:nth-child(3) > .flex > .flex-1').first().fill('50');
    await page.locator('tr:nth-child(9) > td:nth-child(3) > .flex > .flex-1').first().click();
    await page.locator('tr:nth-child(9) > td:nth-child(3) > .flex > .flex-1').first().fill('50');
    await page.locator('tr:nth-child(10) > td:nth-child(3) > .flex > .flex-1').first().click();
    await page.locator('tr:nth-child(10) > td:nth-child(3) > .flex > .flex-1').first().fill('50');
    await page.locator('tr:nth-child(11) > td:nth-child(3) > .flex > .flex-1').first().click();
    await page.locator('tr:nth-child(11) > td:nth-child(3) > .flex > .flex-1').first().fill('50');
    await page.locator('tr:nth-child(12) > td:nth-child(3) > .flex > .flex-1').first().click();
    await page.locator('tr:nth-child(12) > td:nth-child(3) > .flex > .flex-1').first().fill('50');
    await page.locator('tr:nth-child(13) > td:nth-child(3) > .flex > .flex-1').first().click();
    await page.locator('tr:nth-child(13) > td:nth-child(3) > .flex > .flex-1').first().fill('50');
    await page.locator('tr:nth-child(14) > td:nth-child(3) > .flex > .flex-1').first().click();
    await page.locator('tr:nth-child(14) > td:nth-child(3) > .flex > .flex-1').first().fill('50');
    await page.locator('tr:nth-child(15) > td:nth-child(3) > .flex > .flex-1').first().click();
    await page.locator('tr:nth-child(15) > td:nth-child(3) > .flex > .flex-1').first().fill('50');
    await page.locator('tr:nth-child(16) > td:nth-child(3) > .flex > .flex-1').first().click();
    await page.locator('tr:nth-child(16) > td:nth-child(3) > .flex > .flex-1').first().fill('50');
    await page.locator('tr:nth-child(17) > td:nth-child(3) > .flex > .flex-1').first().click();
    await page.locator('tr:nth-child(17) > td:nth-child(3) > .flex > .flex-1').first().fill('50');
    await page.getByRole('cell', { name: '%', exact: true }).first().click();
    await page.locator('tr:nth-child(18) > td:nth-child(3) > .flex > .flex-1').first().click();
    await page.locator('tr:nth-child(18) > td:nth-child(3) > .flex > .flex-1').first().fill('50');
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr > td:nth-child(2) > .flex > .flex-1').first().click();
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr > td:nth-child(2) > .flex > .flex-1').first().fill('');
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr > td:nth-child(3) > .flex > .flex-1').first().click();
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr > td:nth-child(3) > .flex > .flex-1').first().fill('50');
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(2) > td:nth-child(3) > .flex > .flex-1').click();
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(2) > td:nth-child(3) > .flex > .flex-1').fill('50');
    await page.getByRole('cell', { name: '%', exact: true }).first().click();
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(3) > td:nth-child(3) > .flex > .flex-1').click();
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(3) > td:nth-child(3) > .flex > .flex-1').fill('50');
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(4) > td:nth-child(3) > .flex > .flex-1').click();
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(4) > td:nth-child(3) > .flex > .flex-1').fill('50');
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(5) > td:nth-child(3) > .flex > .flex-1').click();
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(5) > td:nth-child(3) > .flex > .flex-1').fill('50');
    await page.getByRole('cell', { name: '%', exact: true }).first().click();
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(6) > td:nth-child(3) > .flex > .flex-1').click();
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(6) > td:nth-child(3) > .flex > .flex-1').fill('50');
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(7) > td:nth-child(3) > .flex > .flex-1').click();
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(7) > td:nth-child(3) > .flex > .flex-1').fill('50');
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(8) > td:nth-child(3) > .flex > .flex-1').click();
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(8) > td:nth-child(3) > .flex > .flex-1').fill('50');
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(9) > td:nth-child(3) > .flex > .flex-1').click();
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(9) > td:nth-child(3) > .flex > .flex-1').fill('50');
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(10) > td:nth-child(3) > .flex > .flex-1').click();
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(10) > td:nth-child(3) > .flex > .flex-1').fill('50');
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(11) > td:nth-child(3) > .flex > .flex-1').click();
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(11) > td:nth-child(3) > .flex > .flex-1').fill('50');
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(12) > td:nth-child(3) > .flex > .flex-1').click();
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(12) > td:nth-child(3) > .flex > .flex-1').fill('50');
    await page.getByRole('cell', { name: '%', exact: true }).first().click();
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(13) > td:nth-child(3) > .flex > .flex-1').click();
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(13) > td:nth-child(3) > .flex > .flex-1').fill('50');
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(14) > td:nth-child(3) > .flex > .flex-1').click();
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(14) > td:nth-child(3) > .flex > .flex-1').fill('50');
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(15) > td:nth-child(3) > .flex > .flex-1').click();
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(15) > td:nth-child(3) > .flex > .flex-1').fill('50');
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(16) > td:nth-child(3) > .flex > .flex-1').fill('5');
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(16) > td:nth-child(3) > .flex > .flex-1').click();
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(16) > td:nth-child(3) > .flex > .flex-1').fill('50');
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(17) > td:nth-child(3) > .flex > .flex-1').fill('5');
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(17) > td:nth-child(3) > .flex > .flex-1').click();
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(17) > td:nth-child(3) > .flex > .flex-1').fill('50');
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(18) > td:nth-child(3) > .flex > .flex-1').fill('5');
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(18) > td:nth-child(3) > .flex > .flex-1').click();
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(18) > td:nth-child(3) > .flex > .flex-1').fill('50');
    await page.getByRole('cell', { name: '%', exact: true }).nth(1).click();
    await page.locator('tr:nth-child(19) > td:nth-child(3) > .flex > .flex-1').first().click();
    await page.locator('tr:nth-child(19) > td:nth-child(3) > .flex > .flex-1').first().fill('50');
    await page.locator('tr:nth-child(20) > td:nth-child(3) > .flex > .flex-1').first().click();
    await page.locator('tr:nth-child(20) > td:nth-child(3) > .flex > .flex-1').first().fill('50');
    await page.locator('tr:nth-child(21) > td:nth-child(3) > .flex > .flex-1').first().click();
    await page.locator('tr:nth-child(21) > td:nth-child(3) > .flex > .flex-1').first().fill('50');
    await page.locator('tr:nth-child(22) > td:nth-child(3) > .flex > .flex-1').first().click();
    await page.locator('tr:nth-child(22) > td:nth-child(3) > .flex > .flex-1').first().fill('50');
    await page.locator('tr:nth-child(18) > td:nth-child(2) > .flex > .flex-1').first().dblclick();
    await page.locator('tr:nth-child(18) > td:nth-child(2) > .flex > .flex-1').first().press('ControlOrMeta+c');
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr > td:nth-child(2) > .flex > .flex-1').first().click();
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr > td:nth-child(2) > .flex > .flex-1').first().fill('9999');
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(2) > td:nth-child(2) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(2) > td:nth-child(2) > .flex > .flex-1').fill('9999');
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(3) > td:nth-child(2) > .flex > .flex-1').click();
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(3) > td:nth-child(2) > .flex > .flex-1').fill('9999');
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(4) > td:nth-child(2) > .flex > .flex-1').click();
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(4) > td:nth-child(2) > .flex > .flex-1').fill('9999');
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(5) > td:nth-child(2) > .flex > .flex-1').click();
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(5) > td:nth-child(2) > .flex > .flex-1').fill('9999');
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(5) > td:nth-child(2) > .flex > .flex-1').press('ArrowDown');
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(6) > td:nth-child(2) > .flex > .flex-1').click();
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(6) > td:nth-child(2) > .flex > .flex-1').fill('9999');
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(7) > td:nth-child(2) > .flex > .flex-1').click();
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(7) > td:nth-child(2) > .flex > .flex-1').fill('9999');
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(8) > td:nth-child(2) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(8) > td:nth-child(2) > .flex > .flex-1').fill('9999');
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(9) > td:nth-child(2) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(9) > td:nth-child(2) > .flex > .flex-1').fill('9999');
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(10) > td:nth-child(2) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(10) > td:nth-child(2) > .flex > .flex-1').fill('9999');
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(11) > td:nth-child(2) > .flex > .flex-1').click();
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(11) > td:nth-child(2) > .flex > .flex-1').fill('9999');
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(12) > td:nth-child(2) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(12) > td:nth-child(2) > .flex > .flex-1').fill('9999');
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(13) > td:nth-child(2) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(13) > td:nth-child(2) > .flex > .flex-1').fill('9999');
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(14) > td:nth-child(2) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(14) > td:nth-child(2) > .flex > .flex-1').fill('9999');
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(15) > td:nth-child(2) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(15) > td:nth-child(2) > .flex > .flex-1').fill('9999');
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(16) > td:nth-child(2) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(16) > td:nth-child(2) > .flex > .flex-1').fill('9999');
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(17) > td:nth-child(2) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(17) > td:nth-child(2) > .flex > .flex-1').fill('9999');
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(18) > td:nth-child(2) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('div:nth-child(4) > .overflow-x-auto > .w-full > tbody > tr:nth-child(18) > td:nth-child(2) > .flex > .flex-1').fill('9999');
    await page.getByRole('cell', { name: '$', exact: true }).first().click();
    await page.locator('tr:nth-child(19) > td:nth-child(2) > .flex > .flex-1').first().click();
    await page.locator('tr:nth-child(19) > td:nth-child(2) > .flex > .flex-1').first().fill('9999');
    await page.locator('tr:nth-child(20) > td:nth-child(2) > .flex > .flex-1').first().click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('tr:nth-child(20) > td:nth-child(2) > .flex > .flex-1').first().fill('9999');
    await page.locator('tr:nth-child(21) > td:nth-child(2) > .flex > .flex-1').first().click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('tr:nth-child(21) > td:nth-child(2) > .flex > .flex-1').first().fill('9999');
    await page.locator('tr:nth-child(22) > td:nth-child(2) > .flex > .flex-1').first().click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('tr:nth-child(22) > td:nth-child(2) > .flex > .flex-1').first().fill('9999');
    await page.getByRole('textbox', { name: 'Enter description' }).first().click();
    await page.getByRole('textbox', { name: 'Enter description' }).first().fill('test');
    await page.locator('div:nth-child(5) > .overflow-x-auto > .w-full > tbody > .hover\\:bg-gray-50 > td:nth-child(2) > .flex > .flex-1').click();
    await page.locator('div:nth-child(5) > .overflow-x-auto > .w-full > tbody > .hover\\:bg-gray-50 > td:nth-child(2) > .flex > .flex-1').fill('9999');
    await page.getByRole('cell', { name: '%', exact: true }).first().click();
    await page.locator('div:nth-child(5) > .overflow-x-auto > .w-full > tbody > .hover\\:bg-gray-50 > td:nth-child(3) > .flex > .flex-1').click();
    await page.locator('div:nth-child(5) > .overflow-x-auto > .w-full > tbody > .hover\\:bg-gray-50 > td:nth-child(3) > .flex > .flex-1').fill('50');
    await page.getByRole('button', { name: 'Add Row' }).first().click();
    await page.locator('div:nth-child(5) > .overflow-x-auto > .w-full > tbody > tr:nth-child(2) > td:nth-child(3) > .flex > .flex-1').click();
    await page.locator('div:nth-child(5) > .overflow-x-auto > .w-full > tbody > tr:nth-child(2) > td:nth-child(3) > .flex > .flex-1').fill('50');
    await page.locator('div:nth-child(5) > .overflow-x-auto > .w-full > tbody > tr:nth-child(2) > td:nth-child(2) > .flex > .flex-1').click();
    await page.locator('div:nth-child(5) > .overflow-x-auto > .w-full > tbody > tr:nth-child(2) > td:nth-child(2) > .flex > .flex-1').fill('9999');
    await page.getByRole('row', { name: 'Describe: $ 9999 50 % Remove' }).getByPlaceholder('Enter description').click();
    await page.getByRole('row', { name: 'Describe: $ 9999 50 % Remove' }).getByPlaceholder('Enter description').fill('test2');
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr > td:nth-child(2) > .flex > .flex-1').first().click();
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr > td:nth-child(2) > .flex > .flex-1').first().fill('9999');
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(2) > td:nth-child(2) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(2) > td:nth-child(2) > .flex > .flex-1').fill('9999');
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(3) > td:nth-child(2) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(3) > td:nth-child(2) > .flex > .flex-1').fill('9999');
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(4) > td:nth-child(2) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(4) > td:nth-child(2) > .flex > .flex-1').fill('9999');
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(5) > td:nth-child(2) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(5) > td:nth-child(2) > .flex > .flex-1').fill('9999');
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(6) > td:nth-child(2) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(6) > td:nth-child(2) > .flex > .flex-1').fill('9999');
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(7) > td:nth-child(2) > .flex > .flex-1').click();
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(7) > td:nth-child(2) > .flex > .flex-1').fill('9999');
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(8) > td:nth-child(2) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(8) > td:nth-child(2) > .flex > .flex-1').fill('9999');
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(9) > td:nth-child(2) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(9) > td:nth-child(2) > .flex > .flex-1').fill('9999');
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(10) > td:nth-child(2) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(10) > td:nth-child(2) > .flex > .flex-1').fill('9999');
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(11) > td:nth-child(2) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(11) > td:nth-child(2) > .flex > .flex-1').fill('9999');
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(12) > td:nth-child(2) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(12) > td:nth-child(2) > .flex > .flex-1').fill('9999');
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(13) > td:nth-child(2) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(13) > td:nth-child(2) > .flex > .flex-1').fill('9999');
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(14) > td:nth-child(2) > .flex > .flex-1').click();
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(14) > td:nth-child(2) > .flex > .flex-1').fill('9999');
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(15) > td:nth-child(2) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(15) > td:nth-child(2) > .flex > .flex-1').fill('9999');
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(16) > td:nth-child(2) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(16) > td:nth-child(2) > .flex > .flex-1').fill('9999');
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(17) > td:nth-child(2) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(17) > td:nth-child(2) > .flex > .flex-1').fill('9999');
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(18) > td:nth-child(2) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(18) > td:nth-child(2) > .flex > .flex-1').fill('9999');
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(19) > td:nth-child(2) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(19) > td:nth-child(2) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(19) > td:nth-child(2) > .flex > .flex-1').fill('9999');
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(20) > td:nth-child(2) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(20) > td:nth-child(2) > .flex > .flex-1').fill('9999');
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(21) > td:nth-child(2) > .flex > .flex-1').click();
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(21) > td:nth-child(2) > .flex > .flex-1').fill('9999');
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(22) > td:nth-child(2) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(22) > td:nth-child(2) > .flex > .flex-1').fill('9999');
    await page.getByRole('cell', { name: '$', exact: true }).first().click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('tr:nth-child(23) > td:nth-child(2) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('tr:nth-child(23) > td:nth-child(2) > .flex > .flex-1').fill('9999');
    await page.locator('tr:nth-child(24) > td:nth-child(2) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('tr:nth-child(24) > td:nth-child(2) > .flex > .flex-1').fill('9999');
    await page.locator('tr:nth-child(25) > td:nth-child(2) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('tr:nth-child(25) > td:nth-child(2) > .flex > .flex-1').fill('9999');
    await page.locator('tr:nth-child(26) > td:nth-child(2) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('tr:nth-child(26) > td:nth-child(2) > .flex > .flex-1').fill('9999');
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr > td:nth-child(3) > .flex > .flex-1').first().click();
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr > td:nth-child(3) > .flex > .flex-1').first().fill('50');
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr > td:nth-child(3) > .flex > .flex-1').first().press('ControlOrMeta+a');
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr > td:nth-child(3) > .flex > .flex-1').first().press('ControlOrMeta+c');
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(2) > td:nth-child(3) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(2) > td:nth-child(3) > .flex > .flex-1').fill('50');
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(3) > td:nth-child(3) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(3) > td:nth-child(3) > .flex > .flex-1').fill('50');
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(4) > td:nth-child(3) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(4) > td:nth-child(3) > .flex > .flex-1').fill('50');
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(5) > td:nth-child(3) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(5) > td:nth-child(3) > .flex > .flex-1').fill('50');
    await page.getByRole('cell', { name: '%', exact: true }).first().click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(6) > td:nth-child(3) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(6) > td:nth-child(3) > .flex > .flex-1').fill('50');
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(7) > td:nth-child(3) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(7) > td:nth-child(3) > .flex > .flex-1').fill('50');
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(8) > td:nth-child(3) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(8) > td:nth-child(3) > .flex > .flex-1').fill('50');
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(9) > td:nth-child(3) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(9) > td:nth-child(3) > .flex > .flex-1').fill('50');
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(10) > td:nth-child(3) > .flex > .flex-1').click();
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(10) > td:nth-child(3) > .flex > .flex-1').fill('50');
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(11) > td:nth-child(3) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(11) > td:nth-child(3) > .flex > .flex-1').fill('50');
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(12) > td:nth-child(3) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(12) > td:nth-child(3) > .flex > .flex-1').fill('50');
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(13) > td:nth-child(3) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(13) > td:nth-child(3) > .flex > .flex-1').fill('50');
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(14) > td:nth-child(3) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(14) > td:nth-child(3) > .flex > .flex-1').fill('50');
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(15) > td:nth-child(3) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(15) > td:nth-child(3) > .flex > .flex-1').fill('50');
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(16) > td:nth-child(3) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(16) > td:nth-child(3) > .flex > .flex-1').fill('50');
    await page.getByRole('cell', { name: '%', exact: true }).first().click();
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(17) > td:nth-child(3) > .flex > .flex-1').click();
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(17) > td:nth-child(3) > .flex > .flex-1').fill('50');
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(18) > td:nth-child(3) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(18) > td:nth-child(3) > .flex > .flex-1').fill('50');
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(19) > td:nth-child(3) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(19) > td:nth-child(3) > .flex > .flex-1').fill('50');
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(20) > td:nth-child(3) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(20) > td:nth-child(3) > .flex > .flex-1').fill('50');
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(21) > td:nth-child(3) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(21) > td:nth-child(3) > .flex > .flex-1').fill('50');
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(22) > td:nth-child(3) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('div:nth-child(6) > .overflow-x-auto > .w-full > tbody > tr:nth-child(22) > td:nth-child(3) > .flex > .flex-1').fill('50');
    await page.locator('tr:nth-child(23) > td:nth-child(3) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('tr:nth-child(23) > td:nth-child(3) > .flex > .flex-1').fill('50');
    await page.locator('tr:nth-child(24) > td:nth-child(3) > .flex > .flex-1').click();
    await page.locator('tr:nth-child(24) > td:nth-child(3) > .flex > .flex-1').fill('50');
    await page.locator('tr:nth-child(25) > td:nth-child(3) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('tr:nth-child(25) > td:nth-child(3) > .flex > .flex-1').fill('50');
    await page.locator('tr:nth-child(26) > td:nth-child(3) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('tr:nth-child(26) > td:nth-child(3) > .flex > .flex-1').fill('50');
    await page.getByRole('button', { name: 'Add Row' }).nth(1).click();
    await page.getByRole('textbox', { name: 'Enter description' }).nth(2).click();
    await page.getByRole('textbox', { name: 'Enter description' }).nth(2).fill('test');
    await page.locator('div:nth-child(7) > .overflow-x-auto > .w-full > tbody > tr > td:nth-child(2) > .flex > .flex-1').first().click();
    await page.locator('div:nth-child(7) > .overflow-x-auto > .w-full > tbody > tr > td:nth-child(3) > .flex > .flex-1').first().click();
    await page.locator('div:nth-child(7) > .overflow-x-auto > .w-full > tbody > tr > td:nth-child(3) > .flex > .flex-1').first().fill('50');
    await page.getByRole('cell', { name: '%', exact: true }).click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('div:nth-child(7) > .overflow-x-auto > .w-full > tbody > tr:nth-child(2) > td:nth-child(3) > .flex > .flex-1').click({
        modifiers: ['ControlOrMeta']
    });
    await page.locator('div:nth-child(7) > .overflow-x-auto > .w-full > tbody > tr:nth-child(2) > td:nth-child(3) > .flex > .flex-1').fill('50');
    await page.locator('div:nth-child(7) > .overflow-x-auto > .w-full > tbody > tr > td:nth-child(2) > .flex > .flex-1').first().click();
    await page.getByRole('row', { name: 'Describe: $ 50 % Remove' }).getByPlaceholder('Enter description').click();
    await page.getByRole('row', { name: 'Describe: $ 50 % Remove' }).getByPlaceholder('Enter description').fill('test2');
    await page.locator('div:nth-child(7) > .overflow-x-auto > .w-full > tbody > tr > td:nth-child(2) > .flex > .flex-1').first().click();
    await page.locator('div:nth-child(7) > .overflow-x-auto > .w-full > tbody > tr > td:nth-child(2) > .flex > .flex-1').first().fill('9999');
    await page.locator('div:nth-child(7) > .overflow-x-auto > .w-full > tbody > tr:nth-child(2) > td:nth-child(2) > .flex > .flex-1').click();
    await page.locator('div:nth-child(7) > .overflow-x-auto > .w-full > tbody > tr:nth-child(2) > td:nth-child(2) > .flex > .flex-1').fill('9999');
    await page.getByRole('textbox', { name: 'Enter amount' }).first().click();
    await page.getByRole('textbox', { name: 'Enter amount' }).first().fill('999999');
    await page.getByRole('textbox', { name: 'Enter amount' }).nth(1).click();
    await page.getByRole('textbox', { name: 'Enter amount' }).nth(1).fill('9999999');
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('textbox', { name: 'Enter service description' }).first().click();
    await page.getByRole('textbox', { name: 'Enter service description' }).first().fill('test');
    await page.locator('div').filter({ hasText: /^Service Description 2:$/ }).click();
    await page.getByRole('textbox', { name: 'Enter service description' }).nth(1).click();
    await page.getByRole('textbox', { name: 'Enter service description' }).nth(1).fill('test');
    await page.getByRole('textbox', { name: 'Enter service description' }).nth(2).click();
    await page.getByRole('textbox', { name: 'Enter service description' }).nth(2).fill('test');
    await page.getByRole('textbox', { name: 'Enter cost (e.g., $0 - $50,' }).first().click();
    await page.getByRole('textbox', { name: 'Enter cost (e.g., $0 - $50,' }).first().fill('999999');
    await page.getByRole('textbox', { name: 'Enter cost (e.g., $0 - $50,' }).nth(1).click();
    await page.getByRole('textbox', { name: 'Enter cost (e.g., $0 - $50,' }).nth(1).fill('999999');
    await page.getByRole('textbox', { name: 'Enter cost (e.g., $0 - $50,' }).nth(2).click();
    await page.getByRole('textbox', { name: 'Enter cost (e.g., $0 - $50,' }).nth(2).fill('999999');
    await page.getByRole('textbox', { name: '0', exact: true }).click();
    await page.getByRole('textbox', { name: '0', exact: true }).fill('50');
    await page.getByRole('radio', { name: 'No' }).first().check();
    await page.getByText('YesNo').first().click();
    await page.getByRole('radio', { name: 'Yes' }).first().check();
    await page.getByRole('radio', { name: 'No' }).nth(1).check();
    await page.getByRole('radio', { name: 'Yes' }).nth(1).check();
    await page.locator('label').filter({ hasText: 'No' }).nth(2).click();
    await page.getByRole('radio', { name: 'No' }).nth(2).check();
    await page.getByRole('radio', { name: 'Yes' }).nth(2).check();
    await page.getByText('No').nth(3).click();
    await page.getByRole('radio', { name: 'No' }).nth(3).check();
    await page.getByText('YesNo').nth(3).click();
    await page.getByText('Yes').nth(4).click();
    await page.getByRole('radio', { name: 'Yes' }).nth(3).check();
    await page.getByText('Hold Harmless and').click();
    await page.getByRole('checkbox', { name: 'Hold Harmless and' }).check();
    await page.getByText('Detailed Scope of Services').click();
    await page.getByRole('checkbox', { name: 'Detailed Scope of Services' }).check();
    await page.getByText('Requirement that Applicant be named as an Additional Insured on consultant\'s /').click();
    await page.getByRole('checkbox', { name: 'Requirement that Applicant be named as an Additional Insured on consultant\'s /' }).check();
    await page.getByText('Requirement that Applicant be granted a Waiver of Subrogation on sub-consultant').click();
    await page.getByRole('checkbox', { name: 'Requirement that Applicant be granted a Waiver of Subrogation on sub-consultant' }).check();
    await page.getByRole('textbox', { name: '$' }).nth(4).click();
    await page.getByRole('textbox', { name: '$' }).nth(4).fill('9999');
    await page.getByRole('textbox', { name: '$' }).nth(4).dblclick();
    await page.getByRole('textbox', { name: '$' }).nth(4).press('ControlOrMeta+a');
    await page.getByRole('textbox', { name: '$' }).nth(4).press('ControlOrMeta+c');
    await page.getByRole('textbox', { name: '$' }).nth(3).click();
    await page.getByRole('textbox', { name: '$' }).nth(3).fill('9999');
    await page.getByRole('textbox', { name: '$' }).nth(5).click();
    await page.getByRole('textbox', { name: '$' }).nth(5).fill('9999');
    await page.getByRole('textbox', { name: '$', exact: true }).nth(4).click({
        modifiers: ['ControlOrMeta']
    });
    await page.getByRole('textbox', { name: '$', exact: true }).nth(4).fill('9999');
    await page.getByRole('textbox', { name: '$', exact: true }).nth(5).click({
        modifiers: ['ControlOrMeta']
    });
    await page.getByRole('textbox', { name: '$', exact: true }).nth(5).fill('9999');
    await page.getByRole('textbox', { name: '$', exact: true }).nth(3).click({
        modifiers: ['ControlOrMeta']
    });
    await page.getByRole('textbox', { name: '$', exact: true }).nth(3).fill('9999');
    await page.getByText('No').nth(4).click();
    await page.getByRole('radio', { name: 'No' }).nth(4).check();
    await page.getByText('Yes', { exact: true }).nth(4).click();
    await page.getByRole('radio', { name: 'Yes' }).nth(4).check();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByText('5', { exact: true }).click();
    await page.getByRole('textbox').fill('2026-11-19');
    await page.getByRole('radio', { name: 'No' }).first().check();
    await page.locator('label').first().click();
    await page.getByRole('radio', { name: 'Yes' }).first().check();
    await page.getByRole('textbox', { name: 'Please provide explanation...' }).click();
    await page.getByRole('textbox', { name: 'Please provide explanation...' }).fill('test');
    await page.getByText('Is work done through or by any affiliated or related company(s)?YesNo').click();
    await page.locator('label').nth(3).click();
    await page.getByRole('radio', { name: 'No' }).nth(1).check();
    await page.getByText('YesNo').nth(1).click();
    await page.getByText('Yes').nth(2).click();
    await page.getByRole('radio', { name: 'Yes' }).nth(1).check();
    await page.getByRole('textbox', { name: 'Please provide explanation...' }).nth(1).click();
    await page.getByRole('textbox', { name: 'Please provide explanation...' }).nth(1).fill('test');
    await page.locator('label').nth(5).click();
    await page.getByRole('radio', { name: 'No' }).nth(2).check();
    await page.getByText('Yes').nth(4).click();
    await page.getByRole('radio', { name: 'Yes' }).nth(2).check();
    await page.getByRole('textbox', { name: 'Please provide explanation...' }).nth(2).click();
    await page.getByRole('textbox', { name: 'Please provide explanation...' }).nth(2).fill('test');
    await page.getByText('No').nth(3).click();
    await page.getByRole('radio', { name: 'No' }).nth(3).check();
    await page.getByText('YesNo').nth(3).click();
    await page.getByText('Yes', { exact: true }).nth(3).click();
    await page.getByRole('radio', { name: 'Yes' }).nth(3).check();
    await page.getByRole('textbox', { name: 'Please list predecessors...' }).click();
    await page.getByRole('textbox', { name: 'Please list predecessors...' }).fill('test');
    await page.locator('label').filter({ hasText: 'No' }).nth(4).click();
    await page.getByRole('radio', { name: 'No' }).nth(4).check();
    await page.getByText('YesNo').nth(4).click();
    await page.getByText('Yes', { exact: true }).nth(4).click();
    await page.getByRole('radio', { name: 'Yes' }).nth(4).check();
    await page.getByRole('textbox', { name: 'Please provide explanation...' }).nth(3).click();
    await page.getByRole('textbox', { name: 'Please provide explanation...' }).nth(3).fill('test');
    await page.getByText('YesNo').nth(5).click();
    await page.getByText('No').nth(5).click();
    await page.getByRole('radio', { name: 'No' }).nth(5).check();
    await page.getByText('Yes', { exact: true }).nth(5).click();
    await page.getByRole('radio', { name: 'Yes' }).nth(5).check();
    await page.getByRole('textbox', { name: 'Please provide explanation...' }).nth(4).click();
    await page.getByRole('textbox', { name: 'Please provide explanation...' }).nth(4).fill('test');
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByText('No', { exact: true }).click();
    await page.getByRole('radio', { name: 'No' }).check();
    await page.getByRole('radio', { name: 'Yes' }).check();
    await page.getByRole('textbox', { name: 'Please provide explanation...' }).fill('t');
    await page.getByRole('textbox', { name: 'Please provide explanation...' }).click();
    await page.getByRole('textbox', { name: 'Please provide explanation...' }).fill('test');
    await page.getByRole('textbox', { name: 'Coverage' }).first().click();
    await page.getByRole('textbox', { name: 'Coverage' }).first().fill('testt');
    await page.getByRole('textbox', { name: 'Coverage' }).nth(1).click();
    await page.getByRole('textbox', { name: 'Coverage' }).nth(1).fill('test');
    await page.locator('.overflow-x-auto > div > div:nth-child(4)').click();
    await page.getByRole('textbox', { name: 'Coverage' }).nth(2).click();
    await page.getByRole('textbox', { name: 'Coverage' }).nth(2).fill('test');
    await page.getByRole('textbox', { name: 'Carrier' }).first().click();
    await page.getByRole('textbox', { name: 'Carrier' }).first().fill('test');
    await page.getByRole('textbox', { name: 'Carrier' }).nth(1).click();
    await page.getByRole('textbox', { name: 'Carrier' }).nth(1).fill('test');
    await page.getByRole('textbox', { name: 'Carrier' }).nth(2).click();
    await page.getByRole('textbox', { name: 'Carrier' }).nth(2).fill('test');
    await page.getByRole('textbox', { name: 'Receipts' }).first().click();
    await page.getByRole('textbox', { name: 'Receipts' }).first().fill('test');
    await page.getByRole('textbox', { name: 'Receipts' }).nth(1).click();
    await page.getByRole('textbox', { name: 'Receipts' }).nth(1).fill('test');
    await page.getByRole('textbox', { name: 'Receipts' }).nth(2).fill('t');
    await page.getByRole('textbox', { name: 'Receipts' }).nth(2).click();
    await page.getByRole('textbox', { name: 'Receipts' }).nth(2).fill('test');
    await page.getByRole('textbox', { name: 'Occurrence' }).first().click();
    await page.getByRole('textbox', { name: 'Occurrence' }).first().fill('9999');
    await page.getByRole('textbox', { name: 'Occurrence' }).nth(1).click();
    await page.getByRole('textbox', { name: 'Occurrence' }).nth(1).fill('9999');
    await page.getByRole('textbox', { name: 'Occurrence' }).nth(2).click();
    await page.getByRole('textbox', { name: 'Occurrence' }).nth(2).fill('9999');
    await page.getByRole('textbox', { name: 'Aggregate' }).first().click();
    await page.getByRole('textbox', { name: 'Aggregate' }).first().fill('9999');
    await page.getByRole('textbox', { name: 'Aggregate' }).nth(1).click();
    await page.getByRole('textbox', { name: 'Aggregate' }).nth(1).fill('9999');
    await page.getByRole('textbox', { name: 'Aggregate' }).nth(2).click();
    await page.getByRole('textbox', { name: 'Aggregate' }).nth(2).fill('9999');
    await page.getByRole('textbox', { name: 'Deductible' }).first().click();
    await page.getByRole('textbox', { name: 'Deductible' }).first().fill('99');
    await page.getByRole('textbox', { name: 'Deductible' }).nth(1).click();
    await page.getByRole('textbox', { name: 'Deductible' }).nth(1).fill('99');
    await page.getByRole('textbox', { name: 'Deductible' }).nth(2).click();
    await page.getByRole('textbox', { name: 'Deductible' }).nth(2).fill('99');
    await page.getByRole('textbox', { name: 'Rate' }).first().click();
    await page.getByRole('textbox', { name: 'Rate' }).first().fill('9');
    await page.getByRole('textbox', { name: 'Rate' }).nth(1).click();
    await page.getByRole('textbox', { name: 'Rate' }).nth(1).fill('9');
    await page.getByRole('textbox', { name: 'Rate' }).nth(2).click();
    await page.getByRole('textbox', { name: 'Rate' }).nth(2).fill('9');
    await page.getByRole('textbox', { name: 'Policy Type' }).first().click();
    await page.getByRole('textbox', { name: 'Policy Type' }).first().fill('test');
    await page.getByRole('textbox', { name: 'Policy Type' }).nth(1).click();
    await page.getByRole('textbox', { name: 'Policy Type' }).nth(1).fill('test');
    await page.getByRole('textbox', { name: 'Policy Type' }).nth(2).click();
    await page.getByRole('textbox', { name: 'Policy Type' }).nth(2).fill('test');
    await page.getByRole('textbox', { name: 'Premium' }).first().click();
    await page.getByRole('textbox', { name: 'Premium' }).first().fill('999');
    await page.getByRole('textbox', { name: 'Premium' }).nth(1).click();
    await page.getByRole('textbox', { name: 'Premium' }).nth(1).fill('99');
    await page.getByRole('textbox', { name: 'Premium' }).nth(2).click();
    await page.getByRole('textbox', { name: 'Premium' }).nth(2).fill('999');
    await page.getByRole('textbox', { name: 'Premium' }).nth(1).click();
    await page.getByRole('textbox', { name: 'Premium' }).nth(1).fill('999');
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Proceed' }).click();
    await page.getByRole('button', { name: 'Save Application' }).click();
    await page.getByRole('textbox', { name: 'Enter your full name' }).click();
    await page.getByRole('textbox', { name: 'Enter your full name' }).fill('Test ND');
    await page.getByRole('textbox', { name: 'Enter your email address' }).click();
    await page.getByRole('textbox', { name: 'Enter your email address' }).fill('ndelacruz@neitclem.com');
    await page.getByRole('textbox', { name: 'Enter your agency name (' }).click();
    await page.getByRole('textbox', { name: 'Enter your agency name (' }).fill('Neitclem Wholesale Insurance Inc.');
    await page.getByRole('textbox', { name: 'Enter any additional' }).click();
    await page.getByRole('textbox', { name: 'Enter any additional' }).fill('This is a test. No further action required.');
    await page.getByText('By checking this box you').click();
    await page.getByRole('checkbox', { name: 'By checking this box you' }).check();
    await page.getByRole('button', { name: 'Save Application' }).nth(1).click();
    await page.getByRole('button', { name: 'Print Confirmation' }).click();
    await page.getByRole('button', { name: 'Preview Application PDF' }).click();
    await page.getByRole('button').filter({ hasText: /^$/ }).click();
    await page.getByRole('button', { name: 'Start New Application' }).click();
    await page.getByRole('button', { name: 'Yes, Start New' }).click();
});