describe("Geofusion Add Product Functionality",function() {

  var home_page = require('../pages/HomePage.js');
  var add_product = require('../pages/AddProductPage.js');

  it("Add new product", function() {
    browser.manage().window().maximize();
    browser.get("http://desafio.geofusion.tech/");
    home_page.setName('Lucas Santana Melo');
    home_page.buttonOkClick();
    browser.sleep(3000);
    home_page.buttonAddProductClick();
    add_product.setName('Carne');
    add_product.setPrice('1000');
    add_product.buttonSaveClick();
  });

});