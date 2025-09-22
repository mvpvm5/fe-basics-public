const path = require('path');
const APP = `file://${path.join(__dirname, '../index.html')}`;

describe('Task 3.1: Navigation Structure', () => {
    let page;

    beforeAll(async () => {
        page = await browser.newPage();
        await page.goto(APP, { waitUntil: 'networkidle0' });
    });

    afterAll(async () => {
        await page.close();
    });

    test('nav should contain a ul with 3 li > a elements', async () => {
        const links = await page.$$('nav ul li a');
        expect(links.length).toBe(3);
    });
});
