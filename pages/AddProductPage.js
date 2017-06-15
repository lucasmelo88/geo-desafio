
var SelectWrapper = require('../util/select-wrapper');

var AddProductPage = function(){

  var inputName = element(by.id("campo1"));
  var inputPrice = element(by.name("price"));
  var expirationDatePicker = element(by.id("campo3"));
  var buttonSave = element(by.xpath("//button[@ng-click='addProduct()']"));
  var buttonCancel = element(by.linkText("Cancelar"));

  this.setName = function(name){
    inputName.sendKeys(name);
  }

  this.setPrice = function(price){
    inputPrice.sendKeys(price);
  }

  this.setExpirationDate = function(){
    expirationDatePicker.click();
  }

  this.buttonSaveClick = function(){
    buttonSave.click();
  }

};
module.exports = new AddProductPage();