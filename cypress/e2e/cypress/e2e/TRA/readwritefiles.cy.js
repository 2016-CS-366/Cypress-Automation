///<reference types="cypress" />
before(function () {
    cy.fixture('example.json').as('test_data')

})

it('read files using fixtures', function(){
    cy.fixture('example').then((data) => {
        cy.log(data.name)
        cy.log(data.email)
        cy.log(data.body)

    })
})

it('read file using readfile()', function () {
    cy.readFile('cypress/fixtures/example.json').then((data) => {
        cy.log(data.name)
        cy.log(data.email)
        cy.log(data.body)
    })
})

it('write file using writeFile()', function(){

    cy.writeFile('e2e/sample.txt', 'Hello This is a sample text file', {flag: 'a+'})
    
})