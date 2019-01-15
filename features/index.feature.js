require('../spec.helper')

describe('User can calculate BMI', () => {
    before(async () => {
        await browser.init()
        await browser.visitPage('http://localhost:8080/')
    });

    beforeEach(async () => {
        await browser.page.reload();

    });

    after(async () => {
        await browser.close();
    });

    describe('Using metric method', () => {
        beforeEach(async () => {
            await browser.fillIn("input[id='weight-in-kgs']", {with: "95"})
            await browser.fillIn("input[id='height-in-cm']", {with: "185"})
            await browser.clickOnButton("button[id='calculate']")

        })

        it('and see BMIvalue', async () => {
            let content = await browser.getContent("span[id='display_value']")
            expect(content).to.eql('Your BMI is 27.76');
        });
    
        it('and see BMImessage', async () => {
            let content = await browser.getContent("span[id='display_message']")
            expect(content).to.eql('and you are Overweight');
        });    
    })

    describe('Using imperial method', () => {
        beforeEach(async () => {
            await browser.clickOnButton("button[id='imperial']")
            await browser.fillIn("input[id='weight-in-lbs']", {with: "200"})
            await browser.fillIn("input[id='height-in-inches']", {with: "72"})
            await browser.clickOnButton("button[id='calculate']")
                        
        })

        it('and see BMIvalue', async () => {
            let content = await broser.getContent("span[id='display_value']")
            expect(content).to.eql('Your BMI is 27.76');
        })
        it('and see BMImessage', async () => {
            let content = await browser.getContent("span[id='display_message'")
            expect(content).to.eql('and you are Overweight')
        });
    })
});