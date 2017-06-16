var DeleteProductPage = function(){

  var buttonDelete = element(by.linkText("Excluir"));
  var modalDeleteAlert = element(by.xpath("//*[@id='delete-modal']/div/div/div[2]"));
  var buttonAllowDelete = element(by.buttonText("Sim"));
  var buttonDenyDelete = element(by.buttonText("Não"));

  var alertDialog;

  this.buttonDeleteClick = function(){
    buttonDelete.click();
  }

  this.buttonAllowDeleteClick = function(){
    buttonAllowDelete.click();
  }

  this.getMessageDeleteAlert = function(){
    return modalDeleteAlert.getText();
  }

  this.alertDeletedProductHandle = function(){
    alertDialog = browser.switchTo().alert();
    alertDialog.getText().then(function(text){
      console.log(text);
    });
  }

  this.acceptAlertMessage = function(){
    alertDialog.accept();
  }

  this.getMessageAlert = function(){
    return alertDialog.getText();
  }

};
module.exports = new DeleteProductPage();