const path = require('path');
const APP = `file://${path.join(__dirname, '../index.html')}`;

describe('Task 2.3: Paragraph Style', () => {
    let page;

    beforeAll(async () => {
        page = await browser.newPage();
        await page.goto(APP, { waitUntil: 'networkidle0' });
    });

    afterAll(async () => {
        await page.close();
    });

    test('p should have 10px padding and 20px margin', async () => {
        const styles = await page.$eval('p', el => {
            const style = getComputedStyle(el);
            return { padding: style.padding, margin: style.margin };
        });
        expect(styles.padding).toBe('10px');
        expect(styles.margin).toBe('20px');
    });
});
