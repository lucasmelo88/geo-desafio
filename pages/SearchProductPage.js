var SearchProductPage = function(){
  
  var inputSearchProduct = element(by.id("search"));
  var buttonSearch = element(by.xpath("//button[@ng-click='searchByName()']"));

  this.searchProduct = function(productName){
    inputSearchProduct.sendKeys(productName);
  }

  this.inputSearchProductClick = function(){
    inputSearchProduct.click();
  }

  this.searchButtonClick = function(){
    buttonSearch.click();
  }
};
module.exports = new SearchProductPage();