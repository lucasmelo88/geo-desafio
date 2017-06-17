describe("Geofusion Edit Product Functionality",function() {

  var home_page = require('../pages/HomePage.js');
  var search_product_page = require('../pages/SearchProductPage.js');
  var add_product = require('../pages/AddProductPage.js');
  var edit_page = require('../pages/EditProductPage.js');
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

  it("Edit an existent product changing the name", function() {
    search_product_page.inputSearchProductClick();
    search_product_page.searchProduct("Açucar");
    search_product_page.searchButtonClick();
    edit_page.buttonEditClick();
    edit_page.clearName();
    add_product.setName('Açucar mascavo');
    add_product.buttonSaveClick();
    browser.sleep(2000);
    add_product.alertProductHandle();
    expect(add_product.getMessageAlert()).toEqual("Produto editado com sucesso!");
    add_product.acceptAlertMessage();
  });
});