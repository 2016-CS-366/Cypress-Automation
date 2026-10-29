/// <reference types = "cypress"/>
describe('Basic Navigation', () => {

    it('basic navigation', () => {
        cy.visit('http://54.161.197.52/login')
        cy.get('#email-login').type('farooq.tahir@pionlog.com')
        cy.get('#-password-login').type('admin12345')
        cy.get('[data-testid="VisibilityOffIcon"] > path').click()
        cy.get('.MuiGrid-root > .MuiButtonBase-root').click()
        cy.get('.MuiStack-root > .MuiGrid-root > .MuiButtonBase-root').click()
        cy.contains('Stores').click()
        cy.wait(2000)
        cy.contains('Admins').click()
        cy.wait(2000)
        cy.contains('Brackets').click() // Click on the "Brackets" tab
        cy.wait(2000)
        cy.get('[data-testid="pagination-rows"]').click()
        cy.get('[data-value="100"]').click()
        cy.wait(3000)
        cy.contains('Strengths').click()
        cy.wait(2000)
        cy.get('[data-testid="pagination-rows"]').click()
        cy.get('[data-value="15"]').click({force:true})
        cy.wait(3000)    
    })
})

