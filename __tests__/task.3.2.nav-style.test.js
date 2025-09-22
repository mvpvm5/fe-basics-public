const path = require('path');
const APP = `file://${path.join(__dirname, '../index.html')}`;

describe('Task 3.2: Navigation Style', () => {
    let page;

    beforeAll(async () => {
        page = await browser.newPage();
        await page.goto(APP, { waitUntil: 'networkidle0' });
    });

    afterAll(async () => {
        await page.close();
    });

    test('nav li should be inline-block with margin', async () => {
        const styles = await page.$eval('nav li', el => {
            const style = getComputedStyle(el);
            return { display: style.display, marginRight: style.marginRight };
        });
        const ulStyle = await page.$eval('nav ul', el => getComputedStyle(el).listStyleType);

        expect(ulStyle).toBe('none');
        expect(styles.display).toBe('inline-block');
        expect(styles.marginRight).toBe('15px');
    });
});
