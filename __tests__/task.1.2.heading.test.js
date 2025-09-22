const path = require('path');
const APP = `file://${path.join(__dirname, '../index.html')}`;

describe('Task 1.2: Main Heading', () => {
    let page;

    beforeAll(async () => {
        page = await browser.newPage();
        await page.goto(APP, { waitUntil: 'networkidle0' });
    });

    afterAll(async () => {
        await page.close();
    });

    test('should have an h1 element with the correct text', async () => {
        const heading = await page.$eval('h1', el => el.textContent.trim());
        expect(heading).toBe('Welcome to My Website');
    });
});
