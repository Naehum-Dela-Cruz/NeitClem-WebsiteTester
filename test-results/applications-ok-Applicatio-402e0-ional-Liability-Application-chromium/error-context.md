# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: applications-ok.test.ts >> Applications Library Tests >> Insurance, Agents & Brokers Professional Liability Application
- Location: tests\applications-ok.test.ts:54:5

# Error details

```
Error: expect(received).toBeTruthy()

Received: false
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - navigation [ref=e3]:
      - link "NeitClem CA License# 0E24609" [ref=e4] [cursor=pointer]:
        - /url: /
        - generic [ref=e5]: NeitClem
        - generic [ref=e6]: CA License# 0E24609
      - list [ref=e7]:
        - listitem [ref=e8]:
          - button "Open menu" [ref=e9] [cursor=pointer]:
            - generic [ref=e20]: Menu
      - generic [ref=e22]:
        - textbox "Search NeitClem" [ref=e23]:
          - /placeholder: " "
        - generic [aria-hidden]: NeitClem Search…
        - link "Open AI Mode — chat with NeitClem's AI assistant" [ref=e24] [cursor=pointer]:
          - /url: ai-chat
          - generic [ref=e27]: AI Mode
      - button "Submit an Application" [ref=e29] [cursor=pointer]
  - button "Connect with NeitClem" [ref=e30] [cursor=pointer]
  - generic [ref=e38]:
    - navigation "Breadcrumb" [ref=e39]:
      - link "Home" [ref=e40] [cursor=pointer]:
        - /url: /
      - generic [aria-hidden] [ref=e41]: /
      - generic [ref=e42]: Applications
    - heading "Submit Smarter. Get Quoted Faster." [level=1] [ref=e43]: Submit Smarter.Get Quoted Faster.
    - paragraph [ref=e44]: NeitClem Online Applications — our proprietary submission platform — gives you the fastest path from application to quote. No downloads, no email attachments. Submit directly and get instant confirmation.
    - paragraph [ref=e45]:
      - text: "Last updated:"
      - generic [ref=e49]: September 11, 2026
    - generic [ref=e50]:
      - link "Start an Online Application" [ref=e51] [cursor=pointer]:
        - /url: "#nca-section"
      - link "Browse PDF Form Library" [ref=e52] [cursor=pointer]:
        - /url: form-library
  - navigation "Filter online applications" [ref=e53]:
    - generic [ref=e55]:
      - button "All Categories" [ref=e58] [cursor=pointer]
      - searchbox "Search applications..." [ref=e64]
  - generic [ref=e66]:
    - generic [ref=e67]:
      - generic [ref=e68]:
        - heading "Contractors & Trades" [level=2] [ref=e70]
        - generic [ref=e71]:
          - link "Contractors Application" [ref=e73] [cursor=pointer]:
            - /url: https://contractors.gratusinc.org/
          - link "Contractors Equipment Application" [ref=e76] [cursor=pointer]:
            - /url: https://contractors-equipment.gratusinc.org/
          - link "Contractors Verus Application" [ref=e79] [cursor=pointer]:
            - /url: https://contractors-verus.gratusinc.org/
          - link "Fire Suppression Contractor Professional Liability Application" [ref=e82] [cursor=pointer]:
            - /url: https://fire-suppression.gratusinc.org/
          - link "Janitorial Supplemental Application" [ref=e85] [cursor=pointer]:
            - /url: https://janitorial.gratusinc.org/
          - link "Traffic Control Application New" [ref=e88] [cursor=pointer]:
            - /url: https://traffic-control.gratusinc.org/
            - generic [ref=e89]: Traffic Control Application
            - generic [ref=e90]: New
          - link "Tree Trimming, Landscape Gardening & Lawn Care Services Application" [ref=e92] [cursor=pointer]:
            - /url: https://landscaping.gratusinc.org/
          - link "Wrap-Up Application New" [ref=e95] [cursor=pointer]:
            - /url: https://wrap-up.gratusinc.org/
            - generic [ref=e96]: Wrap-Up Application
            - generic [ref=e97]: New
      - generic [ref=e98]:
        - heading "Cyber" [level=2] [ref=e100]
        - generic [ref=e101]:
          - link "Micro Cyber Liability Application" [ref=e103] [cursor=pointer]:
            - /url: https://micro-cyber.gratusinc.org/
          - link "Ransomware Application" [ref=e106] [cursor=pointer]:
            - /url: https://ransomware.gratusinc.org/
      - generic [ref=e108]:
        - heading "Garage & Auto Applications" [level=2] [ref=e110]
        - generic [ref=e111]:
          - link "Garage Application" [ref=e113] [cursor=pointer]:
            - /url: https://garage.gratusinc.org/
          - link "Garage Verus Application" [ref=e116] [cursor=pointer]:
            - /url: https://garage-verus.gratusinc.org/
          - link "Recreational Vehicle Application" [ref=e119] [cursor=pointer]:
            - /url: https://recreational-vehicle.gratusinc.org/
          - link "Tire Dealer & Service/Repair Supplemental Application" [ref=e122] [cursor=pointer]:
            - /url: https://tiredealer.gratusinc.org/
      - generic [ref=e124]:
        - heading "Health, Nutrition & Lifestyle" [level=2] [ref=e126]
        - generic [ref=e127]:
          - link "Health, Nutrition & Lifestyle Application" [ref=e129] [cursor=pointer]:
            - /url: https://natural-products.gratusinc.org/
          - link "Kratom Application" [ref=e132] [cursor=pointer]:
            - /url: https://kratom.neitclem.com/
          - link "Non-Invasive Weight Loss Supplemental Application" [ref=e135] [cursor=pointer]:
            - /url: https://weight-loss.gratusinc.org/
      - generic [ref=e137]:
        - heading "Hospitality, Events & Lifestyle" [level=2] [ref=e139]
        - generic [ref=e140]:
          - link "Liquor Liability Application" [ref=e142] [cursor=pointer]:
            - /url: https://liquor-liability.gratusinc.org/
          - link "Restaurant & Tavern Application" [ref=e145] [cursor=pointer]:
            - /url: https://restaurant-tavern.gratusinc.org/
          - link "Special Events Application" [ref=e148] [cursor=pointer]:
            - /url: https://special-events.gratusinc.org/
      - generic [ref=e150]:
        - heading "Manufacturing" [level=2] [ref=e152]
        - link "Cosmetic Manufacturing Application" [ref=e155] [cursor=pointer]:
          - /url: https://cosmetic-manufacturing.gratusinc.org/
      - generic [ref=e157]:
        - heading "Professional Liability" [level=2] [ref=e159]
        - generic [ref=e160]:
          - link "Insurance, Agents & Brokers Professional Liability Application" [active] [ref=e162] [cursor=pointer]:
            - /url: https://professional-liability.gratusinc.org/
          - link "Medical Professional Application" [ref=e165] [cursor=pointer]:
            - /url: https://medical-professional.gratusinc.org/
          - link "Pharmacy Professional Application" [ref=e168] [cursor=pointer]:
            - /url: https://pharmacy-professional.gratusinc.org/
          - link "Product Liability Application" [ref=e171] [cursor=pointer]:
            - /url: https://product-liability.gratusinc.org/
          - link "Real Estate Liability Application" [ref=e174] [cursor=pointer]:
            - /url: https://real-estate.gratusinc.org/
          - link "Sexual Abuse & Molestation Liability Application" [ref=e177] [cursor=pointer]:
            - /url: https://sexual-liability.gratusinc.org/
          - link "Title Agent Application" [ref=e180] [cursor=pointer]:
            - /url: https://title-agent.gratusinc.org/
      - generic [ref=e182]:
        - heading "Property" [level=2] [ref=e184]
        - generic [ref=e185]:
          - link "Habitational Application" [ref=e187] [cursor=pointer]:
            - /url: https://habitational.gratusinc.org/
          - link "Inland Marine Application" [ref=e190] [cursor=pointer]:
            - /url: https://inland-marine.gratusinc.org/
          - link "Lessors Risk Application" [ref=e193] [cursor=pointer]:
            - /url: https://lessors-risk.gratusinc.org/
          - link "Owner's Interest Application" [ref=e196] [cursor=pointer]:
            - /url: https://owners-interest.gratusinc.org/
          - link "Vacant Building Supplemental Application" [ref=e199] [cursor=pointer]:
            - /url: https://vacant-building.gratusinc.org/
          - link "Vacant Land Supplemental Application" [ref=e202] [cursor=pointer]:
            - /url: https://vacant-lot.gratusinc.org/
      - generic [ref=e204]:
        - heading "Salvage & Recycling Applications" [level=2] [ref=e206]
        - link "Salvage Yard Application" [ref=e209] [cursor=pointer]:
          - /url: https://salvage-yard.gratusinc.org/
      - generic [ref=e211]:
        - heading "Specialty Lines" [level=2] [ref=e213]
        - generic [ref=e214]:
          - link "Cannabis Application New" [ref=e216] [cursor=pointer]:
            - /url: https://cannabis.gratusinc.org/
            - generic [ref=e217]: Cannabis Application
            - generic [ref=e218]: New
          - link "Convenience Store & Gas Station Application" [ref=e220] [cursor=pointer]:
            - /url: https://gas-station.gratusinc.org/
          - link "Discontinued Completed Operations Application" [ref=e223] [cursor=pointer]:
            - /url: https://discontinued-operations.gratusinc.org/
          - link "Environmental Application" [ref=e226] [cursor=pointer]:
            - /url: https://environmental-services.gratusinc.org/
          - link "Excess Application" [ref=e229] [cursor=pointer]:
            - /url: https://excess.gratusinc.org/
          - link "Firearms Application New" [ref=e232] [cursor=pointer]:
            - /url: https://firearms.gratusinc.org/
            - generic [ref=e233]: Firearms Application
            - generic [ref=e234]: New
          - link "Funeral Home Application New" [ref=e236] [cursor=pointer]:
            - /url: https://funeral.gratusinc.org/
            - generic [ref=e237]: Funeral Home Application
            - generic [ref=e238]: New
    - generic [ref=e239]:
      - generic [ref=e240]: Need to submit a PDF application instead?
      - link "Browse the PDF Form Library" [ref=e241] [cursor=pointer]:
        - /url: form-library
  - generic [ref=e245]:
    - paragraph [ref=e246]: Can't find the form you need? Our brokerage team can help.
    - generic [ref=e247]:
      - link "(323) 258-2600" [ref=e248] [cursor=pointer]:
        - /url: tel:3232582600
      - link "QuoteNow@neitclem.com" [ref=e251] [cursor=pointer]:
        - /url: mailto:QuoteNow@neitclem.com
  - contentinfo [ref=e255]:
    - generic [ref=e256]:
      - generic [ref=e257]:
        - generic [ref=e258]:
          - generic [ref=e259]:
            - img "NeitClem" [ref=e260]
            - generic [ref=e261]:
              - paragraph [ref=e262]: NeitClem
              - paragraph [ref=e263]: Wholesale Insurance Brokerage
          - paragraph [ref=e264]: California's trusted wholesale surplus lines brokerage — proudly serving agents and carriers since 1992.
          - generic [ref=e265]:
            - link "Facebook" [ref=e266] [cursor=pointer]:
              - /url: https://www.facebook.com/neitclem
            - link "Instagram" [ref=e269] [cursor=pointer]:
              - /url: https://www.instagram.com/neitclem_insurance
            - link "LinkedIn" [ref=e273] [cursor=pointer]:
              - /url: https://www.linkedin.com/in/dennis-clemente-b610637b
        - generic [ref=e278]:
          - heading "Company" [level=4] [ref=e279]
          - list [ref=e280]:
            - listitem [ref=e281]:
              - link "About Us" [ref=e282] [cursor=pointer]:
                - /url: /#about
            - listitem [ref=e283]:
              - link "Become an Advertiser" [ref=e284] [cursor=pointer]:
                - /url: media-signup
            - listitem [ref=e285]:
              - link "NeitClem PodiumBots" [ref=e286] [cursor=pointer]:
                - /url: neitclem-media
            - listitem [ref=e287]:
              - link "Our Carriers" [ref=e288] [cursor=pointer]:
                - /url: carriers
            - listitem [ref=e289]:
              - link "Our Partners" [ref=e290] [cursor=pointer]:
                - /url: partners
            - listitem [ref=e291]:
              - link "Register as Agent" [ref=e292] [cursor=pointer]:
                - /url: register-as-agent
        - generic [ref=e293]:
          - heading "Agent Services" [level=4] [ref=e294]
          - list [ref=e295]:
            - listitem [ref=e296]:
              - link "Applications Library" [ref=e297] [cursor=pointer]:
                - /url: form-library
            - listitem [ref=e298]:
              - link "Loss Run Request" [ref=e299] [cursor=pointer]:
                - /url: loss-runs
            - listitem [ref=e300]:
              - link "NeitClem Applications" [ref=e301] [cursor=pointer]:
                - /url: applications
            - listitem [ref=e302]:
              - link "Online Quote" [ref=e303] [cursor=pointer]:
                - /url: online-quote
            - listitem [ref=e304]:
              - link "Payment Options" [ref=e305] [cursor=pointer]:
                - /url: payment
            - listitem [ref=e306]:
              - link "Report a Claim" [ref=e307] [cursor=pointer]:
                - /url: report-a-claim
        - generic [ref=e308]:
          - heading "Resources" [level=4] [ref=e309]
          - list [ref=e310]:
            - listitem [ref=e311]:
              - link "Coverages" [ref=e312] [cursor=pointer]:
                - /url: coverages
            - listitem [ref=e313]:
              - link "Product Flyer Library" [ref=e314] [cursor=pointer]:
                - /url: flyer-library
            - listitem [ref=e315]:
              - link "Products & Services" [ref=e316] [cursor=pointer]:
                - /url: products
            - listitem [ref=e317]:
              - link "Promotional Flyers" [ref=e318] [cursor=pointer]:
                - /url: neitclem-flyers
            - listitem [ref=e319]:
              - link "Risk Alerts" [ref=e320] [cursor=pointer]:
                - /url: risk-alerts
            - listitem [ref=e321]:
              - link "Risk Appetite" [ref=e322] [cursor=pointer]:
                - /url: appetite
            - listitem [ref=e323]:
              - link "US Risk Map" [ref=e324] [cursor=pointer]:
                - /url: risk-map
        - generic [ref=e325]:
          - heading "NeitClem Tools" [level=4] [ref=e326]
          - list [ref=e327]:
            - listitem [ref=e328]:
              - link "NeitClem AI" [ref=e329] [cursor=pointer]:
                - /url: ai-chat
            - listitem [ref=e330]:
              - link "NeitClem Hub" [ref=e331] [cursor=pointer]:
                - /url: https://neitclem.sharepoint.com/:u:/r/sites/TheNeitClemHub/SitePages/TheNeitClemHub.aspx?d=w596dc877193f496393289681adbc2f32&csf=1&web=1&e=xlvFOt
            - listitem [ref=e332]:
              - link "NeitClem Nexus" [ref=e333] [cursor=pointer]:
                - /url: https://staging-nexus.gratusinc.org/login
            - listitem [ref=e334]:
              - link "NeitClem Connect" [ref=e335] [cursor=pointer]:
                - /url: https://app.gratusinc.org/
            - listitem [ref=e336]:
              - link "NeitClem Risk Review" [ref=e337] [cursor=pointer]:
                - /url: https://propertyreview.neitclem.com/login
        - generic [ref=e338]:
          - heading "Legal" [level=4] [ref=e339]
          - list [ref=e340]:
            - listitem [ref=e341]:
              - link "Branding" [ref=e342] [cursor=pointer]:
                - /url: branding
            - listitem [ref=e343]:
              - link "Privacy Policy" [ref=e344] [cursor=pointer]:
                - /url: privacy-policy
            - listitem [ref=e345]:
              - link "Producer Agreement" [ref=e346] [cursor=pointer]:
                - /url: producer-agreement
            - listitem [ref=e347]:
              - link "Terms of Service" [ref=e348] [cursor=pointer]:
                - /url: terms-of-service
      - generic [ref=e349]:
        - paragraph [ref=e350]: © 2026 NeitClem Wholesale Insurance Brokerage, Inc. All Rights Reserved. CA License# 0E24609
        - generic [ref=e351]:
          - link [ref=e352] [cursor=pointer]:
            - /url: https://www.wsia.org
            - img "WSIA" [ref=e353]
          - link [ref=e354] [cursor=pointer]:
            - /url: https://ciwa.net/
            - img "CIWA" [ref=e355]
          - link [ref=e356] [cursor=pointer]:
            - /url: https://www.nagains.org/
            - img "NAGA" [ref=e357]
          - link [ref=e358] [cursor=pointer]:
            - /url: https://www.slacal.com/
            - img "SLA" [ref=e359]
      - paragraph [ref=e361]:
        - text: Powered by
        - link "Gratus Inc." [ref=e362] [cursor=pointer]:
          - /url: https://gratusinc.org/
  - button "Scroll to top" [ref=e363] [cursor=pointer]
  - dialog "Cookie consent" [ref=e366]:
    - generic [ref=e368]:
      - generic [ref=e374]:
        - paragraph [ref=e375]: Cookie Notice
        - paragraph [ref=e376]:
          - text: We use essential cookies to keep this site running and optional third-party cookies (including social plugins) to improve your experience. By clicking "Accept All" you consent to all cookies. See our
          - link "Privacy Policy" [ref=e377] [cursor=pointer]:
            - /url: /privacy-policy
          - text: for details.
      - generic [ref=e378]:
        - button "Necessary Only" [ref=e379] [cursor=pointer]
        - button "Accept All" [ref=e380] [cursor=pointer]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import fs from 'fs';
  3  | import path from 'path';
  4  | 
  5  | const applications = [
  6  |   'Habitational Application',
  7  |   'Inland Marine Application',
  8  |   'Lessors Risk Application',
  9  |   "Owner's Interest Application",
  10 |   'Vacant Building Supplemental Application',
  11 |   'Vacant Land Supplemental Application',
  12 |   'Salvage Yard Application',
  13 |   'Cannabis Application',
  14 |   'Convenience Store & Gas Station Application',
  15 |   'Discontinued Completed Operations Application',
  16 |   'Environmental Application',
  17 |   'Excess Application',
  18 |   'Firearms Application',
  19 |   'Funeral Home Application',
  20 |   'Health, Nutrition & Lifestyle Application',
  21 |   'Kratom Application',
  22 |   'Non-Invasive Weight Loss Supplemental Application',
  23 |   'Liquor Liability Application',
  24 |   'Restaurant & Tavern Application',
  25 |   'Special Events Application',
  26 |   'Cosmetic Manufacturing Application',
  27 |   'Insurance, Agents & Brokers Professional Liability Application',
  28 |   'Medical Professional Application',
  29 |   'Pharmacy Professional Application',
  30 |   'Product Liability Application',
  31 |   'Real Estate Liability Application',
  32 |   'Sexual Abuse & Molestation Liability Application',
  33 |   'Title Agent Application',
  34 |   'Contractors Application',
  35 |   'Contractors Equipment Application',
  36 |   'Contractors Verus Application',
  37 |   'Fire Suppression Contractor Professional Liability Application',
  38 |   'Janitorial Supplemental Application',
  39 |   'Traffic Control Application',
  40 |   'Tree Trimming, Landscape Gardening & Lawn Care Services Application',
  41 |   'Wrap-Up Application',
  42 |   'Micro Cyber Liability Application',
  43 |   'Ransomware Application',
  44 |   'Garage Application',
  45 |   'Garage Verus Application',
  46 |   'Recreational Vehicle Application',
  47 |   'Tire Dealer & Service/Repair Supplemental Application',
  48 | ];
  49 | 
  50 | const filePath = 'test-results/applications-ok-results.json';
  51 | 
  52 | test.describe('Applications Library Tests', () => {
  53 |   for (const appName of applications) {
  54 |     test(appName, async ({ page, context }) => {
  55 |       await page.goto('https://neitclem.com/applications');
  56 | 
  57 |       const page1Promise = page.waitForEvent('popup');
  58 |       const responsePromise = context.waitForEvent(
  59 |         'response',
  60 |         (res) => res.request().resourceType() === 'document' && res.url() !== 'https://neitclem.com/applications'
  61 |       );
  62 | 
  63 |       await page.getByRole('link', { name: appName }).click();
  64 | 
  65 |       await page1Promise;
  66 |       const response = await responsePromise;
  67 | 
  68 |       const result = {
  69 |         name: appName,
  70 |         url: response.url(),
  71 |         status: response.status(),
  72 |         ok: response.ok(),
  73 |         checkedAt: new Date().toISOString(),
  74 |       };
  75 | 
  76 |       fs.mkdirSync(path.dirname(filePath), { recursive: true });
  77 | 
  78 |       let results: typeof result[] = [];
  79 |       if (fs.existsSync(filePath)) {
  80 |         const fileContent = fs.readFileSync(filePath, 'utf-8').trim();
  81 |         if (fileContent) {
  82 |           try {
  83 |             const parsed = JSON.parse(fileContent);
  84 |             results = Array.isArray(parsed) ? parsed : [parsed];
  85 |           } catch {
  86 |             results = [];
  87 |           }
  88 |         }
  89 |       }
  90 | 
  91 |       results.push(result);
  92 |       fs.writeFileSync(filePath, JSON.stringify(results, null, 2));
  93 | 
> 94 |       expect(response.ok()).toBeTruthy();
     |                             ^ Error: expect(received).toBeTruthy()
  95 |     });
  96 |   }
  97 | });
```