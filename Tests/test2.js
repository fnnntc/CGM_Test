var MainPage = require('../Pages/MainPage');
var SearchPage = require('../Pages/SearchPage');
var ContactCardPage = require('../Pages/ContactCardPage');

describe ('CLICKDOC App', function() {
    //var loginIframe = element(by.id('iframeDialog'));
    var validSearchName = "Beate";
    var validSearchName2 = "Beate Edel";
    var invalidSearchName = "Beate Edelse";
    var validLocation = "56567";
    var validDistance = "20"

    MainPage.get();
    MainPage.clickAcceptAllCookies()

    it('should open a Front-Page', function(){
        MainPage.expectClickdocFrontPageTitle() 
    });

    it('should click on "Sucheseite"', function(){
        MainPage.clickSucheButton() 
        
        SearchPage.expectSearchSectionDisplayed()
        SearchPage.expectResultPanelDisplayed()
    });

    it('search result should be empty', function(){
        SearchPage.expectEmptyResult() 
    });

    it('should suggest valid names', function(){
        SearchPage.enterName(validSearchName) 

        SearchPage.expectSuggestionsDropdownDisaplay()
        SearchPage.expectPhysicianSuggestionDisplayed()

        SearchPage.enterName(validSearchName2) 

        SearchPage.expectSuggestionsDropdownDisaplay()
        SearchPage.expectPhysicianSuggestionDisplayed()
    });

    it('should not suggest invalid name', function(){
        SearchPage.enterName(invalidSearchName) 
        SearchPage.expectPhysicianSuggestionNotDisplayed()
    });

    it('should search valid name', function(){
        SearchPage.enterName(validSearchName) 
        SearchPage.clickResultPanel()    //to make the dropdown disappear
        SearchPage.clickSearchButton()

        ContactCardPage.expectValidContactCards(validSearchName)
    });

    it('should load more results', function(){
        var cardsCountBefore = SearchPage.getCardsCount()
        SearchPage.clickLoadMoreButton() 
        var cardsCountAfter = SearchPage.getCardsCount()

        expect(cardsCountBefore < cardsCountAfter).toBeTruthy()
    });

    it('should enter valid location', function(){
        SearchPage.enterLocation(validLocation) 
        
        SearchPage.expectValidLocationSuggestions(validLocation)
    });

    it('should click first suggested location', function(){
        SearchPage.clickFirstSuggestedLocation(validLocation)

        SearchPage.expectDistanceSliderValue(validDistance)        
        // I wanted to add a check that the shown elements are in this location only, but in fact it is not like that
    });

    it('should search only with online booking', function(){
        SearchPage.clickOnlineBookingCheckbox()

        SearchPage.expectOnlineBookingIntervals()   

        SearchPage.clickSearchButton()
        browser.sleep(4000)
        ContactCardPage.expectOnlineBookingContactCards()
    });

    it('should clean the name', function(){
        SearchPage.clearNameInput()
    });

    it('should search only with video-conference', function(){
        SearchPage.clickVideoCallCheckbox()
        SearchPage.clickSearchButton()

        ContactCardPage.expectVideoconferenceContactCards()
    });

    it('should search only barrier-free', function(){
        SearchPage.clickVideoCallCheckbox()
        SearchPage.clickBarrierFreeCheckbox()
        SearchPage.clickSearchButton()
        
        ContactCardPage.expectBarrierFreeContactCards()
    });

    it('should sort alphabetically', function(){
        // it does not work - doctors are not sorted
    });

});