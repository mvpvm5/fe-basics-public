const path = require('path');
const APP = `file://${path.join(__dirname, '../index.html')}`;

describe('Task 4.1: Gallery Images', () => {
    let page;

    beforeAll(async () => {
        page = await browser.newPage();
        await page.goto(APP, { waitUntil: 'networkidle0' });
    });

    afterAll(async () => {
        await page.close();
    });

    test('gallery should contain 6 img elements', async () => {
        const images = await page.$$('.gallery-grid img');
        expect(images.length).toBe(6);
    });
});
