const { Person, BMICalculator } = require('./spec.helper')


describe("BMICalculator", function() {
    let bmi_calulator;
    let person;

    beforeEach(function() {
        person = new Person({weight: 90, height: 186});
        calculator = new BMICalculator(); 
    }); 

    it ("calculates BMI for a person using metric method", function() {
        calculator.metric_bmi(person);
        expect(person.bmiValue).to.equal(26.01);
    });

    it ("sets BMI message for a person using metric method", () => {
        calculator.metric_bmi(person);
        expect(person.bmiMessage).to.equal('Overweight');
    });

});