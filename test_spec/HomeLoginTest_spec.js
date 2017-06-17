describe("Geofusion Products Manager Login Functionality",function() {

  var home_page = require('../pages/HomePage.js');
  var base_data = require("../json/BaseData.json");

  it("Login as user", function() {
    browser.manage().window().maximize();
    browser.get(base_data.baseUrl);
    home_page.setName(base_data.loginName);
    home_page.buttonOkClick();
    browser.sleep(3000);
  });

});