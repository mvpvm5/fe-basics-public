const path = require('path');
const APP = `file://${path.join(__dirname, '../index.html')}`;

describe('Task 4.2: Gallery Grid', () => {
    let page;

    beforeAll(async () => {
        page = await browser.newPage();
        await page.goto(APP, { waitUntil: 'networkidle0' });
    });

    afterAll(async () => {
        await page.close();
    });

    test('.gallery-grid should have display: grid', async () => {
        const display = await page.$eval('.gallery-grid', el => getComputedStyle(el).display);
        expect(display).toBe('grid');
    });
});
