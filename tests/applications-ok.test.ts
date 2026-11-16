import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const applications = [
  'Habitational Application',
  'Inland Marine Application',
  'Lessors Risk Application',
  "Owner's Interest Application",
  'Vacant Building Supplemental Application',
  'Vacant Land Supplemental Application',
  'Salvage Yard Application',
  'Cannabis Application',
  'Convenience Store & Gas Station Application',
  'Discontinued Completed Operations Application',
  'Environmental Application',
  'Excess Application',
  'Firearms Application',
  'Funeral Home Application',
  'Health, Nutrition & Lifestyle Application',
  'Kratom Application',
  'Non-Invasive Weight Loss Supplemental Application',
  'Liquor Liability Application',
  'Restaurant & Tavern Application',
  'Special Events Application',
  'Cosmetic Manufacturing Application',
  'Insurance, Agents & Brokers Professional Liability Application',
  'Medical Professional Application',
  'Pharmacy Professional Application',
  'Product Liability Application',
  'Real Estate Liability Application',
  'Sexual Abuse & Molestation Liability Application',
  'Title Agent Application',
  'Contractors Application',
  'Contractors Equipment Application',
  'Contractors Verus Application',
  'Fire Suppression Contractor Professional Liability Application',
  'Janitorial Supplemental Application',
  'Traffic Control Application',
  'Tree Trimming, Landscape Gardening & Lawn Care Services Application',
  'Wrap-Up Application',
  'Micro Cyber Liability Application',
  'Ransomware Application',
  'Garage Application',
  'Garage Verus Application',
  'Recreational Vehicle Application',
  'Tire Dealer & Service/Repair Supplemental Application',
];

const filePath = 'docs/data/applications-ok-results.json';

test.describe('Applications Library Tests', () => {
  for (const appName of applications) {
    test(appName, async ({ page, context }) => {
      await page.goto('https://neitclem.com/applications');

      const page1Promise = page.waitForEvent('popup');
      const responsePromise = context.waitForEvent(
        'response',
        (res) => res.request().resourceType() === 'document' && res.url() !== 'https://neitclem.com/applications'
      );

      await page.getByRole('link', { name: appName }).click();

      await page1Promise;
      const response = await responsePromise;

      const result = {
        name: appName,
        url: response.url(),
        status: response.status(),
        ok: response.ok(),
        checkedAt: new Date().toISOString(),
      };

      fs.mkdirSync(path.dirname(filePath), { recursive: true });

      let results: typeof result[] = [];
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf-8').trim();
        if (fileContent) {
          try {
            const parsed = JSON.parse(fileContent);
            results = Array.isArray(parsed) ? parsed : [parsed];
          } catch {
            results = [];
          }
        }
      }

      results.push(result);
      fs.writeFileSync(filePath, JSON.stringify(results, null, 2));

      expect(response.ok()).toBeTruthy();
    });
  }
});