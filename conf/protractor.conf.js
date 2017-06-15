//protractor.conf.js
exports.config = {
  framework: 'jasmine2',
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['../test_spec/AddProductPageTest_spec.js'],
  directConnect: true,
  // suites:{
  //   functional: ['./functional/division_spec.js']
  // }
};