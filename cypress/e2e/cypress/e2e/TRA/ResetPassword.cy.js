///<reference types="cypress" />
describe('Reset Password', () => {
    it('Reset Password', () => {
        cy.visit('http://54.161.197.52/login')
        cy.get('#email-login').type('aminairshadahmed@gmail.com')
        cy.get('#-password-login').type('123123')
        cy.get('.MuiGrid-root > .MuiButtonBase-root').click()
        cy.wait(2000)
        cy.contains('OK').click()
        cy.wait(2000)
        cy.get('.MuiButtonBase-root > .MuiTypography-root').click()
        cy.get('.MuiList-root > [tabindex="0"]').click()
        cy.wait(2000)
        cy.get('input[name="oldPassword"]').type('123123')
        cy.get('input[name="newPassword"]').type('123123')
        cy.get('input[name="confirmPassword"]').type('1234123')
        cy.get(':nth-child(1) > .MuiButtonBase-root').click()
        cy.wait(2000)
        cy.get('input[name="confirmPassword"]').clear().type('123123')
        cy.get(':nth-child(1) > .MuiButtonBase-root').click()
        cy.contains('OK').click()
        cy.get('#email-login').type('aminairshadahmed@gmail.com')
        cy.get('#-password-login').type('123123')

    })
    it('Login after reset password', () => {
        cy.visit('http://54.161.197.52/login')
        cy.get('#email-login').type('aminairshadahmed@gmail.com')
        cy.get('#-password-login').type('123123')
        cy.get('.MuiGrid-root > .MuiButtonBase-root').click()
    })

})