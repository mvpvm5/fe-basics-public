const path = require('path');
const APP = `file://${path.join(__dirname, '../index.html')}`;

describe('Task 1.1: Page Title', () => {
    let page;

    beforeAll(async () => {
        page = await browser.newPage();
        await page.goto(APP, { waitUntil: 'networkidle0' });
    });

    afterAll(async () => {
        await page.close();
    });

    test('should have the title "My Learning Journey"', async () => {
        const title = await page.title();
        expect(title).toBe('My Learning Journey');
    });
});
