describe("Geofusion Products List Products Functionality",function() {

  var home_page = require('../pages/HomePage.js');
  var list_products_page = require('../pages/ListProductsPage.js');
  var base_data = require("../json/BaseData.json");

  beforeEach(function() {
    //Opening the url
    browser.get(base_data.baseUrl);
    browser.manage().window().maximize();
    //Login
    home_page.setName(base_data.loginName);
    home_page.buttonOkClick();
    browser.sleep(3000);
  });

  afterEach(function() {
		browser.sleep(2000);
	});

  it("Find product existent on list", function() {
    expect(list_products_page.getProductNameFromTable()).toBe("Açucar");
  });

  it("Validate if product id is displayed on the list", function() {
    expect(list_products_page.getProductIdFromTable()).not.toBeNull();
  });

  it("Validate product price format", function() {
    expect(list_products_page.getProductPriceFromTable()).toEqual("R$ 10.00");
  });

});