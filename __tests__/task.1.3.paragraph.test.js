const path = require('path');
const APP = `file://${path.join(__dirname, '../index.html')}`;

describe('Task 1.3: Introduction Paragraph', () => {
    let page;

    beforeAll(async () => {
        page = await browser.newPage();
        await page.goto(APP, { waitUntil: 'networkidle0' });
    });

    afterAll(async () => {
        await page.close();
    });

    test('should have a paragraph with at least 20 characters', async () => {
        const paragraph = await page.$eval('#introduction p', el => el.textContent.trim());
        expect(paragraph.length).toBeGreaterThanOrEqual(20);
    });
});
