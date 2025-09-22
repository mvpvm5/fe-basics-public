const NodeEnvironment = require('jest-environment-node').default;
const puppeteer = require('puppeteer');

class PuppeteerEnvironment extends NodeEnvironment {
    async setup() {
        await super.setup();
        this.global.browser = await puppeteer.launch({
            headless: "new",
            args: ['--no-sandbox']
        });
    }

    async teardown() {
        await this.global.browser.close();
        await super.teardown();
    }
}

module.exports = PuppeteerEnvironment;
