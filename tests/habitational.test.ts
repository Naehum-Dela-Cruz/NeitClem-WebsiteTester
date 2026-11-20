import { test, expect } from '@playwright/test';
import path from 'path';

test('Habitational Application end-to-end submission', async ({ page }) => {
    test.setTimeout(180_000); // Long end-to-end flow incl. slow save/PDF generation

    // Automatically accept browser confirm dialogs (e.g. "Start New Application" confirmation)
    page.on('dialog', async (dialog) => {
        console.log(`Dialog message: ${dialog.message()}`);
        await dialog.accept().catch(() => {});
    });

    await page.goto('https://habitational.gratusinc.org/');
    await page.getByRole('spinbutton', { name: 'How many locations do you' }).fill('1');
    await page.getByRole('checkbox', { name: 'Include Property Coverage' }).check();
    await page.getByRole('textbox', { name: 'Street Address: *' }).fill('7442 N Figueroa Street');
    await page.getByRole('textbox', { name: 'City: *' }).fill('Los Angeles');
    await page.getByLabel('State: *').selectOption('CA');
    await page.getByRole('textbox', { name: 'Zip Code: *' }).fill('90041');
    await page.getByRole('textbox', { name: 'County: *' }).fill('Los Angeles');
    await page.getByRole('spinbutton', { name: 'Number of Apartment Units: *' }).fill('9');
    await page.getByRole('textbox', { name: 'Assisted Living / Senior' }).fill('25');
    await page.getByRole('textbox', { name: 'General Population:' }).fill('25');
    await page.getByRole('textbox', { name: 'Student Occupancy - Post' }).fill('25');
    await page.getByRole('textbox', { name: 'Subsidized Housing:' }).fill('10');
    await page.getByRole('textbox', { name: 'Treatment / Recovery Facility:' }).fill('15');
    await page.getByRole('spinbutton', { name: '1. Total number of days' }).fill('200');
    await page.locator('#animalsAllowed-yes').check();
    await page.locator('#aggressiveDogBreedsLimited-yes').check();
    await page.locator('#cooperativeHousing-yes').check();
    await page.getByRole('spinbutton', { name: 'Year Built:' }).fill('2026');
    await page.getByRole('spinbutton', { name: 'Number of stories:' }).fill('3');
    await page.getByRole('spinbutton', { name: 'Number of Buildings:' }).fill('1');
    await page.getByRole('spinbutton', { name: 'Annual Revenue:' }).fill('9999997');
    await page.locator('#adequateEgress-yes').check();
    await page.locator('#emergencyProcedures-yes').check();
    await page.locator('#exitsMarked-yes').check();
    await page.locator('#stairwaysExitsClutterFree-yes').check();
    await page.locator('#burglarBars-yes').check();
    await page.locator('#quickReleaseMechanism-yes').check();
    await page.locator('#ownerManagerResiding-yes').check();
    await page.locator('#managerInsurance-yes').check();
    await page.locator('#structuralInspection-yes').check();
    await page.locator('#onsiteManager-yes').check();
    await page.getByRole('textbox', { name: 'Hours available:' }).fill('24');
    await page.locator('#unitsForRental-yes').check();
    await page.getByRole('checkbox', { name: 'Improving' }).check();
    await page.locator('#slidingGlassDoors-yes').check();
    await page.locator('#entryDoorsLocks-yes').check();
    await page.locator('#criminalChecksEmployees-yes').check();
    await page.locator('#criminalChecksTenants-yes').check();
    await page.locator('#previousIncidentsAssault-no').check();
    await page.locator('#vacancyPeriodAnticipated-yes').check();
    await page.getByRole('textbox', { name: 'If Yes, what % of the units' }).fill('50');
    await page.locator('#commonRestroom-yes').check();
    await page.locator('#privacyLocks-yes').check();
    await page.locator('#electricalSystems-yes').check();
    await page.getByRole('textbox', { name: 'If Yes, please describe' }).fill('Test Input');
    await page.locator('#securityGuards-yes').check();
    await page.getByRole('checkbox', { name: 'Armed', exact: true }).check();
    await page.getByRole('checkbox', { name: 'Unarmed' }).check();
    await page.getByRole('textbox', { name: 'Hours of patrol From: To:' }).fill('00:00');
    await page.locator('input[name="patrolHoursTo"]').fill('23:59');
    await page.locator('#arrestPower-yes').check();
    await page.locator('#guardEmployees-no').check();
    await page.locator('#subcontractorsAdditionalInsured-yes').check();
    await page.locator('#certificatesOfInsurance-yes').check();
    await page.getByRole('textbox', { name: 'Types of Systems - Heating:' }).fill('Volcano');
    await page.getByRole('textbox', { name: 'Types of Systems - A/C:' }).fill('Tundra');
    await page.getByRole('textbox', { name: 'Heating - Date of last full' }).fill('2026-11-17');
    await page.getByRole('textbox', { name: 'A/C - Date of last full' }).fill('2026-11-17');
    await page.getByRole('textbox', { name: 'Construction - Date of last' }).fill('2026-11-17');
    await page.getByRole('textbox', { name: 'Wiring - Date of last full' }).fill('2026-11-17');
    await page.getByRole('textbox', { name: 'Plumbing - Date of last full' }).fill('2026-11-17');
    await page.getByRole('textbox', { name: 'Types of Systems - Plumbing:' }).fill('Torrent');
    await page.getByRole('textbox', { name: 'Age of Roof?' }).fill('1');
    await page.getByRole('textbox', { name: 'Type of Roof?' }).fill('Shale');
    await page.getByRole('textbox', { name: 'Roof - last updated:' }).fill('2026-11-17');
    await page.locator('#entireComplexFenced-yes').check();
    await page.locator('#entrancesExitsHaveGates-yes').check();
    await page.locator('#buildingHistoricalRegistry-yes').check();
    await page.locator('#renovationPlanned-yes').check();
    await page.getByRole('textbox', { name: 'If so, provide details,' }).fill('None');
    await page.locator('#demolitionPlanned-no').check();
    await page.locator('#unrepairedDamages-no').check();
    await page.locator('#unmitigatedPCBs-yes').check();
    await page.getByRole('textbox', { name: 'If so, provide details:' }).fill('None');
    await page.locator('#sprinklered-yes').check();
    await page.getByRole('checkbox', { name: 'Full' }).check();
    await page.locator('#smokeDetectors-yes').check();
    await page.locator('#co2Detector-yes').check();
    await page.locator('#hardWiredBatteryBackup-yes').check();
    await page.locator('#fireExtinguishers-yes').check();
    await page.locator('#carbonMonoxideDetectors-yes').check();
    await page.locator('#sparkArresterChimney-yes').check();
    await page.locator('#damperFunctional-yes').check();
    await page.locator('#flueChimneyCleaned-yes').check();
    await page.locator('#premisesWoodedArea-yes').check();
    await page.getByRole('textbox', { name: 'How often are detectors' }).fill('Daily');
    await page.getByRole('textbox', { name: 'How often are batteries' }).fill('Monthly');
    await page.locator('#housingCodesCompliant-yes').check();
    await page.locator('#pullCords-yes').check();
    await page.getByRole('textbox', { name: 'If yes, who does the' }).fill('Test Input ');
    await page.getByRole('textbox', { name: 'Enter any additional notes,' }).fill('Test Input');
    await page.getByRole('button', { name: 'Continue' }).click();

    // Coverage options
    await page.locator('select[name="medicalExpense"]').selectOption('10,000');
    await page.locator('select[name="damageToPremisesRented"]').selectOption('250,000');
    await page.getByRole('button', { name: 'Continue' }).click();

    // Applicant & Agency Information
    await page.getByRole('textbox', { name: 'Applicant Name: *' }).fill('Test Applicant ND');
    await page.getByRole('textbox', { name: 'DBA:' }).fill('Test ND Applicant');
    await page.getByRole('textbox', { name: 'Applicant Phone Number: *' }).fill('(323) 258-2600');
    await page.getByRole('textbox', { name: 'Proposed Policy Period From: *' }).fill('2026-11-17');
    await page.getByRole('textbox', { name: 'Proposed Policy Period To: *' }).fill('2026-11-17');
    await page.getByLabel('Business Entity:').selectOption('Other');
    await page.getByRole('textbox', { name: 'Please specify' }).fill('Test Input');
    await page.getByRole('textbox', { name: 'Applicant Mailing Address: *' }).fill('7442 N Figueroa Street, Los Angeles, CA 90041');
    await page.getByRole('textbox', { name: 'City: *' }).fill('Los Angeles');
    await page.getByLabel('State: *').selectOption('CA');
    await page.getByRole('textbox', { name: 'Zip Code: *' }).fill('90041');
    await page.getByRole('textbox', { name: 'Phone Number for Inspection' }).fill('(323) 258-2600');
    await page.getByRole('textbox', { name: 'Inspection Contact:', exact: true }).fill('ND');
    await page.getByRole('textbox', { name: 'Web Address:' }).fill('https://neitclem.com/');
    await page.getByRole('textbox', { name: 'Description of Primary' }).fill('Test Input');
    await page.getByRole('textbox', { name: 'Agency:' }).fill('NeitClem Wholesale Insurance Brokerage, Inc.');
    await page.getByRole('textbox', { name: 'Agent:' }).fill('ND');
    await page.getByRole('textbox', { name: 'Agent Email:' }).fill('ndelacruz@neitclem.com');
    await page.getByRole('textbox', { name: 'Agent Phone Number:' }).fill('(323) 258-2600');
    await page.getByRole('textbox', { name: 'Agency Mailing Address:' }).fill('7442 N Figueroa Street, Los Angeles, CA 90041');
    await page.getByRole('textbox', { name: 'Agency City:' }).fill('Los Angeles');
    await page.getByLabel('Agency State:').selectOption('CA');
    await page.getByRole('textbox', { name: 'Agency Zip:' }).fill('90041');
    await page.getByRole('button', { name: 'Continue' }).click();

    // Property Coverage section
    await page.locator('select[name="locationNumber"]').selectOption('1');
    await page.locator('input[name="buildingNumber"]').fill('1');
    await page.locator('input[name="territory"]').fill('Test Input');
    await page.locator('select[name="construction"]').selectOption('Masonry Non-Combustible');
    await page.getByRole('textbox', { name: 'sq ft' }).fill('10000');
    await page.locator('select[name="protectionClass"]').selectOption('10');
    await page.locator('select[name="propertyClassCode"]').selectOption('0311');
    await page.locator('select[name="causeOfLoss"]').selectOption('Special');
    await page.getByRole('checkbox', { name: 'Excl Sprinkler Leakage' }).check();
    await page.getByRole('checkbox', { name: 'Sprinkler system' }).check();
    await page.getByRole('checkbox', { name: 'Central station fire alarm' }).check();
    await page.getByRole('checkbox', { name: 'Central station burglar alarm' }).check();
    await page.getByRole('textbox', { name: 'Enter crime score' }).fill('0');
    await page.locator('select[name="deductible"]').selectOption('25,000');
    await page.getByRole('radio', { name: 'Incl' }).check();
    await page.locator('select[name="windHailDeductible"]').selectOption('25,000');
    await page.getByRole('textbox', { name: '%' }).fill('100');
    await page.getByRole('textbox', { name: '$' }).fill('69000');
    await page.getByRole('textbox', { name: 'Description' }).fill('Test input');
    await page.getByRole('button', { name: '➕Add' }).click();
    await page.locator('div:nth-child(2) > div > div > .form-control-dark').first().selectOption('Personal Property of Others');
    await page.getByRole('textbox', { name: '0' }).fill('1000000');
    await page.locator('div:nth-child(2) > div:nth-child(3) > div > .form-control-dark').selectOption('100%');
    await page.locator('div:nth-child(2) > div:nth-child(4) > div > .form-control-dark').selectOption('RC');
    await page.getByRole('textbox', { name: 'Enter any additional property' }).fill('Test Input');
    await page.getByRole('button', { name: 'Continue' }).click();

    // Summary / Review step
    await page.getByRole('button', { name: 'Proceed to Summary' }).click();
    await page.getByRole('button', { name: 'Continue' }).click();

    // Confirmation modal: click Proceed to advance past review
    await expect(page.getByRole('button', { name: 'Proceed' })).toBeVisible();
    await page.getByRole('button', { name: 'Proceed' }).click();

    // ==========================================
    // Carrier Selection & Submission
    // ==========================================
    await page.getByText('Liability + Property Coverage AvailableSubmission').nth(1).click();
    await page.getByRole('button', { name: 'Submit Application' }).click();
    await page.getByRole('textbox', { name: 'Enter your full name' }).fill('Test ND');
    await page.getByRole('textbox', { name: 'Enter your email address' }).fill('ndelacruz@neitclem.com');
    await page.getByRole('textbox', { name: 'Enter your agency name (' }).fill('NeitClem Wholesale Insurance Brokerage, Inc.');
    await page.getByRole('textbox', { name: 'Enter any additional' }).fill('This is a test. No further action required.');
    await page.getByRole('checkbox', { name: 'By checking this box you' }).check();
    await page.getByRole('button', { name: 'Save & Send Application' }).click();

    // Wait for the save to finish before proceeding
    await expect(page.getByRole('heading', { name: 'Saving Application' })).toBeHidden({ timeout: 60_000 });
    await expect(page.getByRole('button', { name: 'Preview Application PDF' })).toBeVisible({ timeout: 30_000 });

    // Go back to carrier selection and submit a second carrier
    await page.getByRole('button', { name: '← Back to Carrier Selection' }).click();
    await page.getByRole('button', { name: 'Go Back' }).click();
    await page.getByText('Liability + Property Coverage AvailableSubmission').nth(1).click();
    await page.getByRole('button', { name: 'Submit Application' }).click();
    await page.getByRole('textbox', { name: 'Enter your full name' }).fill('Test ND');
    await page.getByRole('textbox', { name: 'Enter your email address' }).fill('ndelacruz@neitclem.com');
    await page.getByRole('textbox', { name: 'Enter your agency name (' }).fill('NeitClem Wholesale Insurance Brokerage, Inc.');
    await page.getByRole('textbox', { name: 'Enter any additional' }).fill('This is a test. No further action required.');
    await page.getByRole('checkbox', { name: 'By checking this box you' }).check();
    await page.getByRole('button', { name: 'Save & Send Application' }).click();

    // Wait for save to complete
    await expect(page.getByRole('heading', { name: 'Saving Application' })).toBeHidden({ timeout: 60_000 });

    // Go back and submit a third carrier
    await page.getByRole('button', { name: '← Back to Carrier Selection' }).click();
    await page.getByRole('button', { name: 'Go Back' }).click();
    await page.getByText('Liability + Property Coverage AvailableSubmission').first().click();
    await page.getByRole('button', { name: 'Submit Application' }).click();
    await page.getByRole('textbox', { name: 'Enter your full name' }).fill('Test ND');
    await page.getByRole('textbox', { name: 'Enter your email address' }).fill('ndelacruz@neitclem.com');
    await page.getByRole('textbox', { name: 'Enter your agency name (' }).fill('NeitClem Wholesale Insurance Brokerage, Inc.');
    await page.getByRole('textbox', { name: 'Enter any additional' }).fill('This is a test. No further action required.');
    await page.getByRole('checkbox', { name: 'By checking this box you' }).check();
    await page.getByRole('button', { name: 'Save & Send Application' }).click();

    // Wait for save to complete
    await expect(page.getByRole('heading', { name: 'Saving Application' })).toBeHidden({ timeout: 60_000 });

    // Confirm we reached the confirmation screen; take a screenshot if not
    const startNew = page.getByRole('button', { name: 'Start New Application' });
    try {
        await expect(startNew).toBeVisible({ timeout: 15_000 });
    } catch (e) {
        await page.screenshot({ path: 'test-results/habitational-final-step.png', fullPage: true });
        throw e;
    }

    await startNew.click();
    await page.getByRole('dialog').getByRole('button', { name: 'Start New Application' }).click();
});
