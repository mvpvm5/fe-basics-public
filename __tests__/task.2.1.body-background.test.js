const path = require('path');
const APP = `file://${path.join(__dirname, '../index.html')}`;

describe('Task 2.1: Body Background Color', () => {
    let page;

    beforeAll(async () => {
        page = await browser.newPage();
        await page.goto(APP, { waitUntil: 'networkidle0' });
    });

    afterAll(async () => {
        await page.close();
    });

    test('should have a body background color of #f0f0f0', async () => {
        const bgColor = await page.$eval('body', el => getComputedStyle(el).backgroundColor);
        expect(bgColor).toBe('rgb(240, 240, 240)'); // #f0f0f0
    });
});
