// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage
let devServer;

module.exports = {
  before: (browser) => {
    console.log('Setting up...');
    devServer = browser.globals.devServerURL;
  },
  'main view': (browser) => {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('#main-view');
  },
  'nav bar': (browser) => {
    browser
      .url(devServer)
      .waitForElementVisible('.view-main .navbar-inner .center', 5000)
      .assert.containsText('.view-main .navbar-inner .center', 'Home');
  },
  'content block title': (browser) => {
    browser
      .url(devServer)
      .waitForElementVisible('.view-main .page-content .content-block-title', 5000)
      .assert.containsText('.view-main .page-content .content-block-title', 'Home Page');
  },
  'content block': (browser) => {
    browser
      .url(devServer)
      .waitForElementVisible('.view-main .page-content .content-block', 5000)
      .assert.containsText('.view-main .page-content .content-block', 'This is an example of split view application layout where left view degrades to panel on narrow screens (iPad portrait and iPhone). It behaves like default Mail app on iOS 7.\nEach view may have different layout, different navbar type (dynamic, fixed or static) or without navbar. You can easily control one view from another without any line of JavaScript just using "data-view" attribute on links.')
      .end();
  }
};
