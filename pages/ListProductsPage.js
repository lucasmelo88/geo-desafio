
var SelectWrapper = require('../util/select-wrapper');

var ListProductsPage = function(){

  this.valuesFromColumnTable = function(column){
    return element.all(by.repeater("product in productsList").column(column));
  }

};
module.exports = new ListProductsPage();