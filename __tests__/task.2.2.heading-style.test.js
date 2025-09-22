const path = require('path');
const APP = `file://${path.join(__dirname, '../index.html')}`;

describe('Task 2.2: Heading Style', () => {
    let page;

    beforeAll(async () => {
        page = await browser.newPage();
        await page.goto(APP, { waitUntil: 'networkidle0' });
    });

    afterAll(async () => {
        await page.close();
    });

    test('h1 should be centered and blue', async () => {
        const styles = await page.$eval('h1', el => {
            const style = getComputedStyle(el);
            return { color: style.color, textAlign: style.textAlign };
        });
        expect(styles.textAlign).toBe('center');
        expect(styles.color).toBe('rgb(0, 0, 255)'); // blue
    });
});
