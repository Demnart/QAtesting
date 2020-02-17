exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'http://qatesting.ml',
      browser: 'chrome',
      host: 'localhost',
      port : 4444,
      restart: false,
      windowsSize: 'maximize',
      smartWait: 5000,
      timeouts: {
	 "script": 60000,
         "page load": 10000
      }

    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'QAtesting',
  translation: 'ru-RU',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}
