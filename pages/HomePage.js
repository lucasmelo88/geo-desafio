
var SelectWrapper = require('../util/select-wrapper');

var HomePage = function(){

  var buttonAddProduct = element(by.linkText("Novo Produto"));

  this.setName = function(name){
    element(by.id('owner')).sendKeys(name);
  }

  this.buttonOkClick = function(){
    element(by.xpath("//button[@ng-click='setOwner(ownerName)']")).click();
  }

  this.buttonAddProductClick = function(){
    buttonAddProduct.click();
  }

};
module.exports = new HomePage();