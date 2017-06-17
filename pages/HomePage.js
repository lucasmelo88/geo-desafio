var HomePage = function(){

  this.setName = function(name){
    element(by.id('owner')).sendKeys(name);
  }

  this.buttonOkClick = function(){
    element(by.xpath("//button[@ng-click='setOwner(ownerName)']")).click();
  }
};
module.exports = new HomePage();