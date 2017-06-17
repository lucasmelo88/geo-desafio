describe("Geofusion Products Delete Product Functionality",function() {

  var home_page = require('../pages/HomePage.js');
  var search_product_page = require('../pages/SearchProductPage.js');
  var delete_product_page = require('../pages/DeleteProductPage.js');
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

  it("Delete product with sucess", function() {
    search_product_page.inputSearchProductClick();
    search_product_page.searchProduct("Arroz");
    search_product_page.searchButtonClick();
    delete_product_page.buttonDeleteClick();
    browser.sleep(2000);
    expect(delete_product_page.getMessageDeleteAlert()).toEqual("Deseja realmente excluir este produto?");
    delete_product_page.buttonAllowDeleteClick();
    browser.sleep(2000);
    delete_product_page.alertDeletedProductHandle();
    expect(delete_product_page.getMessageAlert()).toEqual("Produto excluído com sucesso!");
    delete_product_page.acceptAlertMessage();
  });

});