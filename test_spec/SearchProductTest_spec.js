describe("Geofusion Products List Products Functionality",function() {

  var home_page = require('../pages/HomePage.js');
  var list_products_page = require('../pages/ListProductsPage.js');
  var search_product_page = require('../pages/SearchProductPage.js');
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

  it("Search should return the product on list", function(){
    search_product_page.inputSearchProductClick();
    search_product_page.searchProduct("Arroz");
    search_product_page.searchButtonClick();
    expect(list_products_page.valuesFromTable().count()).toBe(1);
  });

});