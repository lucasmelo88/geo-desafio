describe("Geofusion Add Product Functionality",function() {

  var home_page = require('../pages/HomePage.js');
  var add_product = require('../pages/AddProductPage.js');

  beforeEach(function() {
    //Opening the url
    browser.get("http://desafio.geofusion.tech/");
    browser.manage().window().maximize();
    //Login
    home_page.setName('Lucas Santana Melo');
    home_page.buttonOkClick();
    browser.sleep(3000);
  });

  afterEach(function() {
		browser.sleep(2000);
	});

  it("Try to add new product without fill the name", function() {
    home_page.buttonAddProductClick();
    add_product.setName('');
    add_product.setPrice('1000');
    add_product.setExpirationDate();
    browser.sleep(3000);
    add_product.buttonSaveClick();

    //should not be opened a alert because the validation is under the input of name
    expect(add_product.verifyAlertIsNotPresent()).toBe(true);
    expect(add_product.getMessageAlertName()).toEqual("Nome é obrigatório.");
  });

  it("Try to add new product without fill the price", function() {
    home_page.buttonAddProductClick();
    add_product.setName('Açucar');
    add_product.setPrice('');
    add_product.setExpirationDate();
    browser.sleep(3000);
    add_product.buttonSaveClick();

    //should not be opened a alert because the validation is under the input of price
    expect(add_product.verifyAlertIsNotPresent()).toBe(true);
    expect(add_product.getMessageAlertPrice()).toEqual("Preço é obrigatório.");
  });

  it("Try to add new product without fill the expiration date", function() {
    home_page.buttonAddProductClick();
    add_product.setName('Açucar');
    add_product.setPrice('1000');
    add_product.buttonSaveClick();

    add_product.alertProductHandle();
    expect(add_product.getMessageAlert()).toEqual("Produto adicionado com sucesso!");
  });

  it("Try to add new product with invalid expiration date", function() {
    home_page.buttonAddProductClick();
    add_product.setName('Açucar');
    add_product.setPrice('1000');
    add_product.setInvalidExpirationDate();
    add_product.buttonSaveClick();
    browser.sleep(3000);

    //should not be showed the alert because must to have a validation to invalid date
    expect(add_product.verifyAlertIsPresent()).toBe(false);
    //Just to close the alert opened when it should not
    add_product.forceAcceptAlertMessage();
    //TODO:
    //Should be created a message to validate an invalid expiration date to do expect method
  });

  it("Try to add new product typing a name with more than 50 characters", function() {
    home_page.buttonAddProductClick();
    add_product.setName('CarneFeijãoLimpezaAçucarLegumesVerdurasBolachasPastaDeDente');
    add_product.setPrice('1000');
    add_product.setExpirationDate();
    add_product.buttonSaveClick();
    browser.sleep(3000);
    
    //should not be showed the alert because must to have a validation to invalid name
    expect(add_product.verifyAlertIsPresent()).toBe(false);
    //Just to close the alert opened when it should not
    add_product.forceAcceptAlertMessage();
    //TODO:
    //Should be created a message to validate an invalid name to do expect method
  });

  it("Add new product with success", function() {
    home_page.buttonAddProductClick();
    add_product.setName('Arroz');
    add_product.setPrice('1000');
    add_product.setExpirationDate();
    browser.sleep(3000);
    add_product.buttonSaveClick();
    browser.sleep(2000);
    add_product.alertProductHandle();
    expect(add_product.getMessageAlert()).toEqual("Produto adicionado com sucesso!");
    add_product.acceptAlertMessage();
  });

});