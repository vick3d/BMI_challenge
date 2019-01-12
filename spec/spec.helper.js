const fs = require('fs');
const chai = require('chai');
global.expect = chai.expect;

let person = fs.readFileSync('./src/js/person.js');
eval( person + `\nexports.Person = Person;`)
