// conf.js

exports.config = {

  
  allScriptsTimeout: 11000,
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['Tests/test2.js'],

  onPrepare: function(){
    browser.manage().timeouts().implicitlyWait(5000);
  }


}

