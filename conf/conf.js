//protractor.conf.js
exports.config = {
  framework: 'jasmine',
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['../test_spec/ListProductsTest_spec.js'],
  directConnect: true,
  suites:{
    all: ['../test_spec/HomeLoginTest_spec.js','../test_spec/AddProductTest_spec.js',
          '../test_spec/SearchProductTest_spec.js','../test_spec/ListProductsTest_spec.js',
          '../test_spec/EditProductTest_spec.js','../test_spec/DeleteProductTest_spec.js'],
    homeLogin: ['../test_spec/HomeLoginTest_spec.js'],
    addProduct: ['../test_spec/AddProductTest_spec.js'],
    searchProduct: ['../test_spec/SearchProductTest_spec.js'],
    listProducts: ['../test_spec/ListProductsTest_spec'],
    editProduct: ['../test_spec/EditProductTest_spec.js'],
    deleteTest: ['../test_spec/DeleteProductTest_spec.js']
  },
};