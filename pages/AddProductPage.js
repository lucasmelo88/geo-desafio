
var SelectWrapper = require('../util/select-wrapper');

var AddProductPage = function(){

  var inputName = element(by.id("campo1"));
  var inputPrice = element(by.name("price"));
  var expirationDatePicker = element(by.id("campo3"));
  var buttonSave = element(by.buttonText("Salvar"));
  var buttonCancel = element(by.linkText("Cancelar"));
  var dateElement = element(by.xpath("/html/body/div[3]/div[1]/table/tbody/tr[5]/td[6]"));
  var messageRequiredName = element(by.xpath("//span[@ng-show='formAdd.name.$error.required']"));
  var messageRequiredPrice = element(by.xpath("//span[@ng-show='formAdd.price.$error.required']"));
  
  var alertDialog;

  this.setName = function(name){
    inputName.sendKeys(name);
  }

  this.setPrice = function(price){
    inputPrice.sendKeys(price);
  }

  this.setExpirationDate = function(){
    expirationDatePicker.click();
    browser.sleep(3000);
    dateElement.click();
  }

  this.buttonSaveClick = function(){
    buttonSave.click();
  }

  this.alertNewProductHandle = function(){
    alertDialog = browser.switchTo().alert();
    alertDialog.getText().then(function(text){
      console.log(text);
    });
    alertDialog.accept();
  }

  this.getMessageRequiredName = function(){
    return messageRequiredName.getText();
  }

  this.getMessageRequiredPrice = function(){
    return messageRequiredPrice.getText();
  }

  this.getMessageAlert = function(){
    return alertDialog.getText();
  }

};
module.exports = new AddProductPage();