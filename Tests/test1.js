var MainPage = require('../Pages/MainPage');
var LoginFramePage = require('../Pages/LoginFramePage');

describe ('CLICKDOC App', function() {
    //var loginIframe = element(by.id('iframeDialog'));
    
    //var validEmail = 'dirk.nonn@cgm.com#1111'
    var validEmail = 'dirk.nonn@cgm.com#1111'
    var invalidEmail = 'testmail.com'
    var validPassword = 'recruitingTest1!'
    var invalidPassword = 'abcdefg'

    MainPage.get();
    MainPage.clickAcceptAllCookies()

    it('should open a Front-Page', function(){
        MainPage.expectClickdocFrontPageTitle() 
    });

    it('should open login dialog', function() {
        MainPage.clickProfileButton()
        
        LoginFramePage.expectLoginDialogOpen()
    });

    it('should enter valid e-mail', function(){
        LoginFramePage.clearEmail()
        LoginFramePage.setEmail(validEmail)

        LoginFramePage.expectValidMailInput()
    });

    it('should enter wrong password', function(){
        LoginFramePage.clearPassword()
        LoginFramePage.setPassword(invalidPassword)

        LoginFramePage.expectValidPasswordInput()
    });

    it('should not login with wrong credentials', function(){
        LoginFramePage.clickLoginButton()

        LoginFramePage.expectLoginBlocked()
    });

    it('should enter invalid email', function(){
        LoginFramePage.clearEmail()
        LoginFramePage.setEmail(invalidEmail)

        LoginFramePage.expectLoginBlocked()
        browser.sleep(5000);
    });

    it('should enter with valid credentials', function(){
        LoginFramePage.clearEmail()
        LoginFramePage.setEmail(validEmail)
        LoginFramePage.clearPassword()
        LoginFramePage.setPassword(validPassword)
        LoginFramePage.clickLoginButton()
        browser.switchTo().defaultContent();
        MainPage.expectUserIconDisplayed()
    });

    it('should logout', function(){
        MainPage.clickUserIcon()

        //MainPage.expectDropDownMyProfileDisplayed()
        //MainPage.expectDropDownLogoutDisplayed()

        MainPage.clickDropDownLogoutButton()

        //MainPage.expectProfileButtonDisplayed()
        //MainPage.expectUserIconNotDisplayed()
    });

});