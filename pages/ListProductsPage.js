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

  this.getColumnIndex = function(columnDesired){
    let colIndex;
    columns.each(function(element, index){
      element.getText().then(function(text){
        if(text == columnDesired){
          colIndex = index + 1;
          console.log("Coluna: " + (index + 1) +"");
        }
      });
    });
    console.log("Result: " + (colIndex) +"");
    return colIndex;
  }

  this.getRowIndex = function(colIndex, value){
    var rows = element.all(by.xpath("//*[@id='list']/div/table/tbody/tr/td[ " + colIndex + " ]"));
    rows.each(function(element, index){
      element.getText().then(function(text){
        if(text == value){
          console.log("elemento encontrado");
          console.log("Linha: " + index + 1 + "");
          return index + 1;
        }
        console.log("elemento não encontrado");
      });
    });
  }

  this.getValueFromTable = function(columnDesired, valueDesired){
    return columns.each(function(element, index){
      return element.getText().then(function(text){
        if(text == columnDesired){
          let colIndex = index + 1;
          console.log("Coluna: " + (index + 1) +"");
          let rows = element.all(by.xpath("//*[@id='list']/div/table/tbody/tr/td[ " + colIndex + " ]"));
          return rows.each(function(element, index){
            return element.getText().then(function(text){
              if(text == valueDesired){
                let rowIndex =  index + 1
                return text;
                //console.log("elemento encontrado");
                //console.log("Linha: " + index + 1 + "");
              }
            });
          });
        }
        
      });
    });
    // let columnIndex = this.getColumnIndex(columnDesired);
    // let rowIndex = this.getRowIndex(columnIndex);
    //return valueFromTable = element(by.xpath("//*[@id='list']/div/table/tbody/tr[ " + rowIndex + " ]/td[ " + columnIndex + " ]")).getText();
  }

};
module.exports = new ListProductsPage();