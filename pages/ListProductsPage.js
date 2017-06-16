var ListProductsPage = function(){

  var idValueFromTable = element(by.xpath("//*[@id='list']/div/table/tbody/tr/td[1]"));
  var nameValueFromTable = element(by.xpath("//*[@id='list']/div/table/tbody/tr[1]/td[2]"));
  var priceValueFromTable = element(by.xpath("//*[@id='list']/div/table/tbody/tr[1]/td[3]"));
  var repeaterProducts = element.all(by.repeater("product in productsList"));

  this.valuesFromTable = function(){
    return repeaterProducts;
  }

  this.getProductIdFromTable = function(){
    return idValueFromTable.getText();
  }

  this.getProductNameFromTable = function(){
    return nameValueFromTable.getText();
  }

    this.getProductPriceFromTable = function(){
    return priceValueFromTable.getText();
  }

};
module.exports = new ListProductsPage();