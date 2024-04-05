In the package.json file, below are the script that was added-
"scripts": {
    "test": "cucumber-js features/step_definitions ",
    "tag": "npm test -- -t"
  }

  To run the test described in feature file, use the command-  npm run test

  To run the test in headed mode and decrese the speed, we can change settings in hooks.js by making below settings-
  global.browser = await chromium.launch({
                headless: false,
                slowMo:1000
            });
NOTE- Currently, all steps are written in step.js, If you want to run multiple step files then you need to make changes in cucumber.js file and change the path