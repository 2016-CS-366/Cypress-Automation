/// <refreence types = "cypress" />
describe("read file", () => {

    it("readfile from readfile.cy.js", () => {
        cy.readFile("cypress/fixtures/readfile.json").then((data) => {
            cy.log(data.Name);
            cy.log(data.Email);
            cy.log(data.Password);
        });

    })

    it("write file", () => {
        cy.writeFile("e2e/writefile.txt", "This is amina here. I am a SQA Engineer and I am working on Cypress Automation.", {flag: 'a+'})
       
    })


});