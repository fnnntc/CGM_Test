var MainPage = function() {
    var URL = 'https://demo.clickdoc.de/cd-de/'
    var FrontPageTitle = 'CLICKDOC - Arzttermine online buchen & Gesundheits-Apps'

    var profileButton = element(by.xpath('//ul[contains(@class,"menu-desktop")]//a[@angularticsaction="Open login iframe"]'));
    var sucheButton = element(by.xpath('//ul[contains(@class,"menu-desktop")]//a[@angularticsaction="Go to search"]'));
    var userIcon = element(by.xpath('//a[contains(@class,"user-profile-dropdown-toggle")]'));
    var dropDownMyPrfoileButton = element(by.xpath('//a[@routerlink="my-profile"]'));
    var dropDownLogoutButton = element(by.xpath('//div[contains(@class,"dropdown-menu")]//span[contains(@class,"icon-M_logout")]'));
    var accpeptAllCookies = element(by.xpath('//button[contains(@class,"agree-consent--all")]'));


    this.get = function() {
        browser.driver.ignoreSynchronization = true;
        browser.waitForAngularEnabled(false);
        browser.get(URL);
        accpeptAllCookies.click()
      };
  
    this.clickAcceptAllCookies = function() {
        accpeptAllCookies.click()
      };

    this.clickProfileButton = function() {
        profileButton.click();
      };

    this.clickSucheButton = function() {
      sucheButton.click();
      };

    this.expectClickdocFrontPageTitle = function() {
        expect(browser.getTitle()).toEqual(FrontPageTitle)
      };

    this.expectProfileButtonNotDisplayed = function() {
        expect(profileButton.isDisplayed()).toBe(false)
      };  

    this.expectUserIconDisplayed = function() {
        expect(userIcon.isDisplayed()).toBe(true)
      };  
    
    this.expectUserIconNotDisplayed = function() {
        expect(userIcon.isDisplayed()).toBe(false)
      };    

    this.clickUserIcon = function() {
        userIcon.click()
      };  

    this.expectDropDownMyProfileDisplayed = function() {
        expect(dropDownMyPrfoileButton.isDisplayed()).toBe(true)
      };  

    this.expectDropDownLogoutDisplayed = function() {
        expect(dropDownLogoutButton.isDisplayed()).toBe(true)
      };  

    this.clickDropDownLogoutButton = function() {
        dropDownLogoutButton.click()
      };   

    this.expectProfileButtonDisplayed = function() {
        expect(profileButton.isPresent()).toBe(true)
      }; 

    
  };
  module.exports = new MainPage();