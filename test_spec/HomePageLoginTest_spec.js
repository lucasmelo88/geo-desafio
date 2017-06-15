describe("Geofusion Products Manager Login Functionality",function() {

  var home_page = require('../pages/HomePage.js');

  it("Login as user", function() {
    browser.manage().window().maximize();
    browser.get("http://desafio.geofusion.tech/");
    home_page.setName('Lucas Santana Melo');
    home_page.buttonOkClick();
    browser.sleep(3000);
  });

});