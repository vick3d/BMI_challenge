const chai = require('chai');
const BrowserHelpers = require('e2e_training_wheels')
global.browser = new BrowserHelpers()
global.expect = chai.expect;
global.Person = require('./src/js/person');
global.BMICalculator = require('./src/js/calculator');