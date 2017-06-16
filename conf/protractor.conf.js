//protractor.conf.js
exports.config = {
  framework: 'jasmine2',
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['../test_spec/HomePageLoginTest_spec.js','../test_spec/AddProductTest_spec.js',
          '../test_spec/SearchProductTest_spec.js','../test_spec/ListProductsPageTest_spec.js',
          '../test_spec/DeleteProductTest_spec.js'],
  //specs: ['../test_spec/AddProductPageTest_spec.js'],
  directConnect: true,
  // suites:{
  //   functional: ['./functional/division_spec.js']
  // }
};