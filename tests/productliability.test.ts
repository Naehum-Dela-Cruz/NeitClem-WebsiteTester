import { test, expect } from '@playwright/test';

test('Product Liability Application end-to-end submission', async ({ page }) => {
    test.setTimeout(180_000); // Long multi-step form

    // Automatically accept browser confirm dialogs
    page.on('dialog', async (dialog) => {
        console.log(`Dialog message: ${dialog.message()}`);
        await dialog.accept().catch(() => { });
    });

    await page.goto('https://product-liability.gratusinc.org/');

    // ==========================================
    // STEP 1: Applicant Information
    // ==========================================
    await page.getByRole('textbox', { name: 'Enter insured name' }).fill('test');
    await page.getByRole('textbox').nth(1).fill('2026-11-17');
    await page.getByRole('textbox', { name: 'Enter phone number' }).fill('123');
    await page.getByRole('textbox', { name: 'Enter email address' }).fill('klamis@neitclem.com');
    await page.getByRole('textbox', { name: 'Enter address' }).fill('test');
    await page.getByRole('textbox', { name: 'Enter city' }).first().fill('Los Angeles');
    await page.getByRole('combobox').first().selectOption('CA');
    await page.getByRole('textbox', { name: 'Enter zip code' }).first().fill('90041');
    await page.locator('input[type="date"]').nth(1).fill('2026-11-17');
    await page.locator('input[type="date"]').nth(2).fill('2027-11-17');
    await page.getByRole('button', { name: 'Next' }).click();

    // ==========================================
    // STEP 2: Business Operations
    // ==========================================
    await page.getByRole('checkbox', { name: 'Manufacturing' }).check();
    await page.getByRole('textbox').nth(1).fill('2');
    await page.getByRole('textbox').nth(2).fill('test');
    await page.getByRole('textbox').nth(3).fill('test');
    await page.getByRole('radio', { name: 'No' }).first().check();
    await page.getByRole('radio', { name: 'Yes' }).nth(1).check();
    await page.getByRole('textbox').nth(4).fill('test');
    await page.getByRole('radio', { name: 'Yes' }).first().check();
    await page.getByRole('textbox').nth(4).fill('test');
    await page.getByRole('textbox', { name: 'Products and Goods(or' }).first().fill('test');
    await page.getByRole('checkbox', { name: 'manufacturer' }).first().check();
    await page.getByRole('textbox', { name: 'No. of Years' }).first().fill('2');
    await page.getByRole('textbox', { name: '% of Gross Receipts' }).first().fill('100');
    await page.getByRole('textbox', { name: 'Does Applicant Install?' }).first().fill('no');
    await page.getByRole('textbox', { name: 'Repair or Service?' }).first().fill('service');
    await page.getByRole('checkbox', { name: 'wholesaler' }).nth(1).check();
    await page.getByRole('textbox', { name: 'Upcoming Year (Estimate) from' }).fill('2026-11-17');
    await page.getByRole('textbox', { name: 'Upcoming Year (Estimate) to' }).fill('2027-11-17');
    await page.getByRole('textbox', { name: 'Sales United States $' }).first().fill('100000');
    await page.getByRole('textbox', { name: 'Current Year from' }).fill('2026-01-17');
    await page.getByRole('textbox', { name: 'Current Year to' }).fill('2026-11-17');
    await page.getByRole('textbox', { name: 'Sales United States $' }).nth(1).fill('1000000');
    await page.getByRole('radio', { name: 'Yes' }).nth(2).check();
    await page.getByRole('radio', { name: 'Yes' }).nth(3).check();
    await page.locator('.ml-6 > div:nth-child(2) > .w-full').fill('test');
    await page.getByRole('radio', { name: 'Yes' }).nth(4).check();
    await page.getByRole('radio', { name: 'Yes' }).nth(5).check();
    await page.locator('div:nth-child(10) > input').first().fill('test');
    await page.locator('input:nth-child(7)').fill('test');
    await page.locator('input[name="foreignManufacturingOrAssembly"]').first().check();
    await page.locator('input[name="subManufacturerWrittenAgreement"]').first().check();
    await page.locator('input[name="obtainCertificatesOfInsuranceFromAllSuppliers"]').first().check();
    await page.locator('div:nth-child(13) > .w-full').fill('test');
    await page.getByRole('button', { name: 'Next' }).click();

    // ==========================================
    // STEP 3: Quality Control
    // ==========================================
    await page.getByRole('radio', { name: 'Yes' }).first().check();
    await page.getByRole('textbox').first().fill('test');
    await page.getByRole('radio', { name: 'Yes' }).nth(1).check();
    await page.getByRole('textbox', { name: '15) How long are quality' }).fill('1 year');
    await page.getByRole('radio', { name: 'Yes' }).nth(2).check();
    await page.getByRole('radio', { name: 'Yes' }).nth(3).check();
    await page.getByRole('radio', { name: 'Yes' }).nth(4).check();
    await page.getByRole('radio', { name: 'Yes' }).nth(5).check();
    await page.locator('input[name="recordDesignChanges"]').first().check();
    await page.locator('input[name="recordAdvertisingMaterialChanges"]').first().check();
    await page.getByRole('textbox', { name: 'If Yes, how long do you' }).fill('1 year');
    await page.getByRole('textbox').nth(3).fill('test');
    await page.locator('input[name="designsReviewedTestedVerifiedByOthers"]').first().check();
    await page.getByRole('textbox', { name: 'If Yes, by whom?' }).fill('test');
    await page.getByRole('textbox').nth(5).fill('test');
    await page.locator('input[name="warningLabelsReviewedByOutsideCounsel"]').first().check();
    await page.locator('input[name="subjectToGovernmentOrIndustryStandards"]').first().check();
    await page.locator('input[name="productsInFullCompliance"]').first().check();
    await page.locator('textarea').nth(3).fill('test');
    await page.locator('input[name="attainedIso9000Qs9000OrSimilar"]').first().check();
    await page.locator('input[name="offerTrainingInUserOfProducts"]').first().check();
    await page.locator('input[name="certifyTrainees"]').first().check();
    await page.locator('input[name="formalWrittenProductRecallProcedure"]').first().check();
    await page.locator('input[name="recalledOrConsideringRecall"]').first().check();
    await page.locator('textarea').nth(4).fill('test');
    await page.locator('input[name="carbonNanotubesOrFullerenesUsed"]').first().check();
    await page.locator('textarea').nth(5).fill('test');
    await page.locator('input[name="otherNanoscaleMaterialsUsed"]').first().check();
    await page.getByRole('textbox').filter({ hasText: /^$/ }).nth(3).fill('test');
    await page.getByRole('button', { name: 'Next' }).click();

    // ==========================================
    // STEP 4: Loss History & Coverage
    // ==========================================
    await page.getByRole('textbox', { name: 'Year' }).first().fill('2025');
    await page.getByRole('textbox', { name: 'Carrier' }).first().fill('test');
    await page.getByRole('textbox', { name: 'Policy Number' }).first().fill('123');
    await page.getByRole('textbox', { name: 'Limits' }).first().fill('100000');
    await page.getByRole('textbox', { name: 'Premium' }).first().fill('10000');
    await page.getByRole('checkbox', { name: 'no insured or uninsured' }).check();
    await page.getByRole('radio', { name: 'Yes' }).first().check();
    await page.locator('textarea').fill('test');
    await page.getByRole('radio', { name: 'Yes' }).nth(1).check();
    await page.locator('textarea').nth(1).fill('test');
    await page.getByRole('radio', { name: 'Yes' }).nth(2).check();
    await page.locator('textarea').nth(2).fill('test');
    await page.getByRole('textbox', { name: ') Current Carrier:' }).fill('test');
    await page.getByRole('textbox', { name: 'Limits:', exact: true }).fill('100000');
    await page.getByRole('textbox', { name: 'Deductible/SIR:' }).fill('5000');
    await page.getByRole('textbox', { name: 'Rate:' }).fill('10000');
    await page.getByRole('textbox', { name: 'Premium:' }).fill('1000');
    await page.getByRole('textbox', { name: 'Retro Date:' }).fill('123');
    await page.getByRole('checkbox', { name: 'Occurrence' }).check();
    await page.getByRole('textbox', { name: ') Desired Limits:' }).fill('test');
    await page.getByRole('textbox', { name: 'Desired Deductible / SIR:' }).fill('1000');
    await page.getByRole('button', { name: 'Next' }).click();

    // ==========================================
    // STEP 5: Liability Limits
    // The form shows pre-filled limits with optional dropdowns for
    // "Damage to Premises Rented" and "Medical Expense".
    // ==========================================
    await expect(page.getByRole('heading', { name: 'Liability Limits' })).toBeVisible();
    await page.getByRole('button', { name: 'Next' }).click(); // Liability Limits → Application Summary

    // ==========================================
    // STEP 6: Application Summary → Confirm Review modal → Carrier Selection
    // Next on the Summary page opens the "Confirm Application Review" modal.
    // Proceed dismisses the modal and advances to Carrier Selection (Step 7).
    // ==========================================
    await expect(page.getByRole('heading', { name: 'Application Summary' })).toBeVisible();
    await page.getByRole('button', { name: 'Next' }).click(); // Summary → opens Confirm Review modal
    await expect(page.getByRole('button', { name: 'Proceed' })).toBeVisible({ timeout: 10_000 });
    await page.getByRole('button', { name: 'Proceed' }).click(); // Proceed → Carrier Selection

    // ==========================================
    // STEP 6: Carrier Selection & Submission
    // ==========================================
    await expect(page.getByRole('button', { name: 'Nautilus Ins Co.' })).toBeVisible();
    await page.getByRole('button', { name: 'Nautilus Ins Co.' }).click();
    await page.getByRole('button', { name: 'Save Application' }).click();

    // Fill contact information modal
    await page.getByRole('textbox', { name: 'Sender Full Name *' }).fill('test');
    await page.getByRole('textbox', { name: 'Sender Email Address *' }).fill('klamis@neitclem.com');
    await page.getByRole('checkbox', { name: 'By checking this box you' }).check();

    // Submit the application
    await page.getByRole('button', { name: 'Save Application' }).nth(1).click();

    // Wait for the save overlay to finish
    await expect(page.getByRole('heading', { name: 'Saving Application' })).toBeHidden({ timeout: 60_000 });

    // Confirm we reached the success/confirmation screen
    const startNew = page.getByRole('button', { name: 'Start New Application' });
    try {
        await expect(startNew).toBeVisible({ timeout: 15_000 });
    } catch (e) {
        await page.screenshot({ path: 'test-results/productliability-final-step.png', fullPage: true });
        throw e;
    }
    await startNew.click();
});
