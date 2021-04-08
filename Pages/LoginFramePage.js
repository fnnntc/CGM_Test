var LoginFramePage = function() {
    var loginFrameCloseIcon = element(by.xpath('//span[contains(@class,"iframe-dialog-close")]'));
    var loginFrameMailInput = element(by.xpath('//input[@data-web-test="login_email"]'));
    var loginFrameMailInputValid = element(by.xpath('//input[@data-web-test="login_email" and contains(@class,"ng-valid")]'));
    var loginFramePasswordInput = element(by.xpath('//input[@data-web-test="login_password"]'));
    var loginFramePasswordInputValid = element(by.xpath('//input[@data-web-test="login_password" and contains(@class,"ng-valid")]'));
    var loginFramePasswordForgotButton = element(by.xpath('//a[@data-web-test="login_forgot_password"]'));
    var loginFrameRegisterButton = element(by.xpath('//button[@data-web-test="login_register_btn"]'));
    var loginFrameLoginButton = element(by.xpath('//button[@data-web-test="login_primary_btn"]'));
    var loginFailedMessage = element(by.xpath('//app-error-message[@data-web-test="login_failed"]'));  

    this.closeLoginFrame = function() {
      loginFrameCloseIcon.click()
    };

    this.expectLoginDialogOpen = function() {
        expect(loginFrameCloseIcon.isDisplayed()).toBe(true)
        browser.switchTo().frame(element(by.id('iframeDialog')).getWebElement());    //TO-DO
        expect(loginFrameMailInput.isDisplayed()).toBe(true)
        expect(loginFramePasswordInput.isDisplayed()).toBe(true)
        expect(loginFramePasswordForgotButton.isDisplayed()).toBe(true)
        expect(loginFrameRegisterButton.isDisplayed()).toBe(true)
        expect(loginFrameLoginButton.isDisplayed()).toBe(true)
      };

      this.clearEmail = function() {
        loginFrameMailInput.clear()
      };

      this.setEmail = function(email) {
        loginFrameMailInput.sendKeys(email)
      };

      this.expectValidMailInput = function() {
        expect(loginFrameMailInputValid.isDisplayed()).toBe(true)
      };

      this.clearPassword = function() {
        loginFramePasswordInput.clear()
      };

      this.setPassword = function(password) {
        loginFramePasswordInput.sendKeys(password)
      };

      this.expectValidPasswordInput = function() {
        expect(loginFramePasswordInputValid.isDisplayed()).toBe(true)
      }; 

      this.clickLoginButton = function() {
        loginFrameLoginButton.click()
      }; 

      this.expectLoginBlocked = function() {
        //var loginButton2 = element(by.xpath('//button[@data-web-test="login_primary_btn"]'));
        //expect(loginButton2.getCssValue('background-color')).toEqual("rbga(0, 0, 0, .2)");
        //expect(loginFailedMessage.isPresent()).toBe(true)
      }; 
}
module.exports = new LoginFramePage();