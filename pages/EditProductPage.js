var EditProductPage = function(){

  var buttonEdit = element(by.linkText("Editar"));
  var inputName = element(by.id("campo1"));

  var alertDialog;

  this.buttonEditClick = function(){
    buttonEdit.click();
  }

  this.clearName = function(){
    inputName.clear();
  }
}
module.exports = new EditProductPage();