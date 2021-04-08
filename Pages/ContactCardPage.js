var ContactCardPage = function() {
    var contactCard = element(by.xpath('//app-contact-card'));
    var contactCardHeader = element(by.xpath('//app-contact-header'));
    var contactCardDetails = element(by.xpath('//app-contact-details'));
    var contactCardSlots = element(by.xpath('//app-contact-slots-details'));

    this.expectValidContactCards = function(name) {
        var cardsCount = element.all(by.xpath('//app-contact-card')).count();
        var validCardCount = element.all(by.xpath('//app-contact-card[contains(.,"'+name+'")]')).count();
        expect(validCardCount).toBe(cardsCount)


        element.all(by.xpath('//app-contact-card'))
        .each(function(element, index) {
            expect(element.element(by.xpath('.//app-contact-header')).isPresent())
            .toBe(true)
            expect(element.element(by.xpath('.//app-contact-details')).isPresent())
            .toBe(true)
            //Available appointments-section, if any are available - how to check if it should or should not be available? Has to be clarified
            //expect(element.element(by.xpath('.//app-contact-slots-details')).isPresent())
            //.toBe(true)
          });
    };

    this.expectOnlineBookingContactCards = function() {
        element.all(by.xpath('//app-contact-card'))
        .each(function(element, index) {
            expect(element.element(by.xpath('.//app-contact-header')).isPresent())
            .toBe(true)
            expect(element.element(by.xpath('.//app-contact-details')).isPresent())
            .toBe(true)
            expect(element.element(by.xpath('.//app-contact-slots-details')).isPresent())
            .toBe(true)
          });
    };

    this.expectVideoconferenceContactCards = function() {
        element.all(by.xpath('//app-contact-card'))
        .each(function(element, index) {
            expect(element.element(by.xpath('.//app-contact-header')).isPresent())
            .toBe(true)
            expect(element.element(by.xpath('//span[contains(.,"Videosprechstunde")]')).isPresent())
            .toBe(true)
          });
    };

    this.expectBarrierFreeContactCards = function() {
        element.all(by.xpath('//app-contact-card'))
        .each(function(element, index) {
            expect(element.element(by.xpath('.//app-contact-header')).isPresent())
            .toBe(true)
            expect(element.element(by.xpath('.//app-contact-details//app-profile-field[contains(.,"Barrierefrei")]')).isPresent())
            .toBe(true)
          });
    };
    

}
module.exports = new ContactCardPage();