export const config = {
    
    // runner: 'local',
    // port: 4723,

    user: 'oauth-paloma166.pah-447e0',
    key: '93c6c903-04ac-4ad8-a071-56e2b20b1d93',
    hostname: 'ondemand.us-west-1.saucelabs.com',
    port: 443,
    baseUrl: 'wd/hub',
    
    specs: [
        './test/specs/**/*.js'
    ],
   
    maxInstances: 1,
    
    capabilities: [
    // { 
    //     platformName: 'Android',
    //     'appium:deviceName': 'ebac',
    //     'appium:platformVersion': '9.0',
    //     'appium:automationName': 'UiAutomator2',
    //     'appium:app': `${process.cwd()}/app/ebacshop.apks`,
    //     'appium:appWaitActivity': '.MainActivity',
    //     'appium:disableIdLocatorAutocompletion': true
    // }

    {
        platformName: 'Android',
        'appium:app': 'storage:filename=ebacshop.aab', 
        'appium:deviceName': 'Samsung.*',
        'appium:platformVersion': '10',
        'appium:automationName': 'UiAutomator2',
        'appium:disableIdLocatorAutocompletion': true,
        'sauce:options': {
            build: 'appium-build-ebacshop',
            name: 'EBAC Shop Teste',
            deviceOrientation: 'PORTRAIT',
            appiumVersion: '2.0.0'
        },
    }
],

    logLevel: 'info',
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec',
        ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false
        }]
    ],    
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
    if (error) {
        await driver.takeScreenshot();
    }
    }

}