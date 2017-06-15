describe("Geofusion Products List Products Functionality",function() {

  var home_page = require('../pages/HomePage.js');
  var list_products_page = require('../pages/ListProductsPage.js');

  it("Find product existent on table", function() {
    browser.manage().window().maximize();
    browser.get("http://desafio.geofusion.tech/");
    home_page.setName('Lucas Santana Melo');
    home_page.buttonOkClick();
    browser.sleep(3000);
    expect(list_products_page.valuesFromTable).toContain("Feijão");
  });

});