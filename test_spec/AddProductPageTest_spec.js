describe("Geofusion Add Product Functionality",function() {

  var home_page = require('../pages/HomePage.js');
  var add_product = require('../pages/AddProductPage.js');
  var ec = protractor.ExpectedConditions;

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
    //browser.close();
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

  it("Try to add new product without fill the name", function() {
    home_page.buttonAddProductClick();
    add_product.setName('');
    add_product.setPrice('1000');
    add_product.setExpirationDate();
    browser.sleep(3000);
    add_product.buttonSaveClick();

    browser.wait(ec.not(ec.alertIsPresent(), 3000))
    expect(add_product.getMessageRequiredName()).toEqual("Nome é obrigatório.");
  });

  it("Try to add new product without fill the price", function() {
    home_page.buttonAddProductClick();
    add_product.setName('Açucar');
    add_product.setPrice('');
    add_product.setExpirationDate();
    browser.sleep(3000);
    add_product.buttonSaveClick();

    browser.wait(ec.not(ec.alertIsPresent(), 3000))
    expect(add_product.getMessageRequiredPrice()).toEqual("Preço é obrigatório.");
  });

  it("Try to add new product without fill the expiration date", function() {
    home_page.buttonAddProductClick();
    add_product.setName('Açucar');
    add_product.setPrice('1000');
    add_product.buttonSaveClick();
    
    add_product.alertNewProductHandle();
    expect(add_product.getMessageAlert()).toEqual("Produto adicionado com sucesso!");
  });

});