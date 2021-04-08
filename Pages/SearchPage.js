var SearchPage = function() {
    
    var resultPanel = element(by.xpath('//div[contains(@class,"default-panel")]'));
    //Search-Section
    var searchSection = element(by.xpath('//div[contains(@class,"filter-container")]'));
    var specNameInput = element(by.id('search-query-typeahead'));
    var locationInput = element(by.id('search-location-typeahead'));
    var onlineBookingCheckbox = element(by.xpath('//input[@id="onlineBooking"]/../label'));
    var videoCallCheckbox = element(by.id('videoCall'));
    var accessibilityCheckbox = element(by.id('accessibility'));
    var searchButton = element(by.xpath('//button[@angularticsaction="Search submit"]'));
    var suggestionsDropdown = element(by.xpath('//typeahead-container[contains(@class,"open dropdown-menu")]'));
    var physicianSuggestion = element(by.xpath('//typeahead-container//span[contains(@class,"physician")]'));
    //Sorting-Section
    var bestHitCheckbox = element(by.id('bestHit'));
    var sortAlphabeticallyCheckbox = element(by.id('sortAlphabetically'));
    var noLocationCheckbox = element(by.id('noLocation'));
    var distanceSlider = element(by.xpath('//ng5-slider[@angularticsaction="Sort by distance"]'));
    //Result-Section
    var emptyResult = element(by.xpath('//app-empty-state//span[text()="Auf der linken Seite kannst Du die Arztsuche starten."]'));
    var contactCard = element(by.xpath('//app-contact-card'));
    var loadMoreButton = element(by.xpath('//a[contains(@class,"load-more-link")]'));
    //online booking
    var onlineBookingIntervalOption = element(by.xpath('//div[contains(@class,"select-interval-option")]'));
    var onlineBookingIntervalHour = element(by.xpath('//div[contains(@class,"select-interval-hour")]'));

    this.expectSearchSectionDisplayed = function() {
        expect(searchSection.isDisplayed()).toBe(true)
        expect(specNameInput.isDisplayed()).toBe(true)
        expect(locationInput.isDisplayed()).toBe(true)
        expect(onlineBookingCheckbox.isPresent()).toBe(true)
        expect(videoCallCheckbox.isPresent()).toBe(true)
        expect(accessibilityCheckbox.isPresent()).toBe(true)
        expect(searchButton.isDisplayed()).toBe(true)
    };

    this.expectResultPanelDisplayed = function() {
        expect(resultPanel.isDisplayed()).toBe(true)
    };

    this.expectSortingSectionDisplayed = function() {
        expect(bestHitCheckbox.isDisplayed()).toBe(true)
        expect(sortAlphabeticallyCheckbox.isDisplayed()).toBe(true)
        expect(noLocationCheckbox.isDisplayed()).toBe(true)
        expect(distanceSlider.isDisplayed()).toBe(true)
    };

    this.expectEmptyResult = function() {
        expect(emptyResult.isDisplayed()).toBe(true)
    };

    this.clearNameInput = function() {
        specNameInput.clear()
    }

    this.enterName = function(name) {
        specNameInput.clear()
        specNameInput.sendKeys(name)
    };

    this.expectSuggestionsDropdownDisaplay = function() {
        expect(suggestionsDropdown.isDisplayed()).toBe(true)
    };

    this.expectPhysicianSuggestionDisplayed = function() {
        expect(physicianSuggestion.isDisplayed()).toBe(true)
    };

    this.expectPhysicianSuggestionNotDisplayed = function() {
        expect(physicianSuggestion.isPresent()).toBe(false)
    };

    this.clickSearchButton = function() {
        searchButton.click()
    };

    this.clickResultPanel = function() {
        resultPanel.click()
    };

    this.clickLoadMoreButton = function() {
        loadMoreButton.click()
    };

    this.getCardsCount = function() {
        return element.all(by.xpath('//app-contact-card')).count();
    };

    this.enterLocation = function(location) {
        locationInput.clear()
        locationInput.sendKeys(location)
    };

    this.expectValidLocationSuggestions = function(location) {
        var suggestionsCount = element.all(by.xpath('//typeahead-container[contains(@class,"open dropdown-menu")]//button')).count();
        var validSuggestionsCount = element.all(by.xpath('//typeahead-container[contains(@class,"open dropdown-menu")]//button[contains(.,"'+location+'")]')).count();
        expect(suggestionsCount).toBe(validSuggestionsCount)
    };

    this.clickFirstSuggestedLocation = function(location) {
        var firstSuggestedLocation = element(by.xpath('(//typeahead-container[contains(@class,"open dropdown-menu")]//button[contains(.,"'+location+'")]/span[not(contains(@class,"first-location"))])[1]'));
        
        firstSuggestedLocation.click()
    };

    this.expectDistanceSliderValue = function(distanceValue) {
        var distanceSlider = element(by.xpath('//ng5-slider[@angularticsaction="Sort by distance"]//span[contains(@aria-valuenow,"'+distanceValue+'")]'));
        
        expect(distanceSlider.isDisplayed()).toBe(true)
    };

    this.clickOnlineBookingCheckbox = function() {
        //onlineBookingCheckbox.click()
        browser.actions().mouseMove(onlineBookingCheckbox).click().perform();
    };

    this.expectOnlineBookingIntervals = function() { 
        expect(onlineBookingIntervalOption.isDisplayed()).toBe(true)
        expect(onlineBookingIntervalHour.isDisplayed()).toBe(true)
    };

    this.clickVideoCallCheckbox = function() {
        //videoCallCheckbox.click()
        browser.actions().mouseMove(videoCallCheckbox).click().perform();
    };

    this.clickBarrierFreeCheckbox = function() {
        //accessibilityCheckbox.click()
        browser.actions().mouseMove(accessibilityCheckbox).click().perform();
    };


};
module.exports = new SearchPage();
