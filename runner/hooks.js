const {BeforeAll, Before, AfterAll, After, setDefaultTimeout} = require ('cucumber')
const { chromium } = require('playwright');
const BasePage = require('../page_object/base_actions.page');
const { setupBrowserContext, closeBrowserContext } = require('../page_object/base_actions.page');
const fs = require ('fs')
var path = require('path');
let basePage;
//let moonHost = process.env.moonHostIp;
//let moonHost = '52.186.103.162';
let moonHost = '';
setDefaultTimeout(60 * 8 * 10000);


// Create a global browser for the test session.
BeforeAll(async() =>{
    basePage = new BasePage();
        if (moonHost){
                console.log(moonHost)
                global.browser = await chromium.connect({
                timeout: 0,
                wsEndpoint: 'ws://'+moonHost+':4444/playwright/chromium',
                headless:false
            });
        }
        else{
            console.log(moonHost)  
            global.browser = await chromium.launch({
                headless: false,
                slowMo:1000
            });
        }
});

// AfterAll(async() => {
//      await global.browser.close();
// });

// // Create a fresh browser context for each test.
// Before(async(scenario) =>{
//     global.context = await global.browser.newContext({
//         recordVideo : {
//           dir : 'videos/'+scenario.pickle.name,
//         }
//     });
//     global.page = await global.context.newPage();
// });

// After(async() => {
//     await global.page.close();
//     //global.context.close();
// });
AfterAll(async () => {
    await basePage.closeBrowserContext();
    await global.browser.close();
});

// Create a fresh browser context for each test.
Before(async (scenario) => {
    await basePage.setupBrowserContext(scenario);
});

After(async () => {
    await basePage.closeBrowserContext();
});


