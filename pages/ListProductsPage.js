var ListProductsPage = function(){

  var idValueFromTable = element(by.xpath("//*[@id='list']/div/table/tbody/tr/td[1]"));
  var nameValueFromTable = element(by.xpath("//*[@id='list']/div/table/tbody/tr[1]/td[2]"));
  var priceValueFromTable = element(by.xpath("//*[@id='list']/div/table/tbody/tr[1]/td[3]"));
  var repeaterProducts = element.all(by.repeater("product in productsList"));
  var columns = element.all(by.tagName("th"));
  var valueFromTable;

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

  this.getValueFromColumn = function(columnDesired){
    let deferred = protractor.promise.defer();
    columns.each(function(element, i){
      element.getText().then(function(text){
        if(text == columnDesired){
          let colIndex = i + 1;
          console.log("Coluna: " + (i + 1) +"");
          element.all(by.xpath("//*[@id='list']/div/table/tbody/tr/td[" + colIndex + "]")).map(function(elm){
            return elm.getText().then(function(text){
              return text;
            });
          }).then(function(result){
            return deferred.fulfill(result);
          });
        }
      });
    });
    return deferred.promise;
  }
}
module.exports = new ListProductsPage();