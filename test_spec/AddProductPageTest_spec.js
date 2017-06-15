describe("Geofusion Add Product Functionality",function() {

  var home_page = require('../pages/HomePage.js');
  var add_product = require('../pages/AddProductPage.js');

  beforeEach(function() {
    //Opening the url
    browser.manage().window().maximize();
    browser.get("http://desafio.geofusion.tech/");
    //Login
    home_page.setName('Lucas Santana Melo');
    home_page.buttonOkClick();
    browser.sleep(3000);
  });

  afterEach(function() {
		browser.sleep(3000);
    browser.close();
	});

  it("Add new product with success", function() {
    home_page.buttonAddProductClick();
    add_product.setName('Carne');
    add_product.setPrice('1000');
    add_product.setExpirationDate();
    browser.sleep(3000);
    add_product.buttonSaveClick();
    browser.sleep(3000);
    add_product.alertNewProductHandle();
    expect(add_product.getMessageAlert()).toEqual("Produto adicionado com sucesso!");
  });

});