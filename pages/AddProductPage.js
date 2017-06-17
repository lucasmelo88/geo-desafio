var AddProductPage = function(){

  var inputName = element(by.id("campo1"));
  var inputPrice = element(by.name("price"));
  var expirationDatePicker = element(by.id("campo3"));
  var buttonSave = element(by.buttonText("Salvar"));
  var buttonCancel = element(by.linkText("Cancelar"));
  var buttonAddProduct = element(by.linkText("Novo Produto"));
  var buttonPreviousMonthYear = element(by.xpath("/html/body/div[3]/div[1]/table/thead/tr[2]/th[1]"));
  var dateElement = element(by.xpath("/html/body/div[3]/div[1]/table/tbody/tr[5]/td[6]"));
  var invalidDateElement = element(by.xpath("/html/body/div[3]/div[1]/table/tbody/tr[5]/td[4]"));
  var messageAlertName = element(by.xpath("//span[@ng-show='formAdd.name.$error.required']"));
  var messageAlertPrice = element(by.xpath("//span[@ng-show='formAdd.price.$error.required']"));
  var ec = protractor.ExpectedConditions; 
  
  var alertDialog;

  this.setName = function(name){
    inputName.sendKeys(name);
  }

  this.setPrice = function(price){
    inputPrice.sendKeys(price);
  }

  //TODO:
  //method to set a dynamic value
  this.setExpirationDate = function(){
    expirationDatePicker.click();
    browser.sleep(3000);
    dateElement.click();
  }

  //method to set a dynamic value
  this.setInvalidExpirationDate = function(){
    expirationDatePicker.click();
    browser.sleep(3000);
    buttonPreviousMonthYear.click();
    invalidDateElement.click();
  }

  this.buttonSaveClick = function(){
    buttonSave.click();
  }

  this.buttonAddProductClick = function(){
    buttonAddProduct.click();
  }

  this.alertProductHandle = function(){
    alertDialog = browser.switchTo().alert();
    alertDialog.getText().then(function(text){
      console.log(text);
    });
  }

  this.acceptAlertMessage = function(){
    alertDialog.accept();
  }

  this.executeConfirmAlert = function(){
    browser.executeScript('window.confirm = function() {return true;}');
  }

  this.forceAcceptAlertMessage = function(){
    if (this.verifyAlertIsPresent()){
      alertDialog = browser.switchTo().alert();
      alertDialog.accept();
    }
  }

  this.verifyAlertIsPresent = function(){
    return browser.wait(ec.alertIsPresent(), 3000);
  }

  this.verifyAlertIsNotPresent = function(){
    return browser.wait(ec.not(ec.alertIsPresent(), 3000));
  }

  this.getMessageAlertName = function(){
    return messageAlertName.getText();
  }

  this.getMessageAlertPrice = function(){
    return messageAlertPrice.getText();
  }

  this.getMessageAlert = function(){
    return alertDialog.getText();
  }

};
module.exports = new AddProductPage();