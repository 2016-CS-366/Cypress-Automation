/// <'reference types="cypress" />
import { Forgot_Password } from './forgotpass.js'
var forgotPassword = new Forgot_Password()
describe('Access Webiste', () => {
    it('Access forgot password page', () => {
        forgotPassword.visitUrl()
        forgotPassword.Forgotpassword()
        forgotPassword.enterEmail()
        forgotPassword.clickButton()

        // cy.get('.MuiStack-root > .MuiTypography-root').click()
        // cy.url().should('include', '/forgot-password')
        // cy.get('.MuiTypography-root').should('have.text', 'Forgot Password')
        // cy.get('#email-login').type('aminairshadahmed@gmail.com')
        // cy.get('.MuiButtonBase-root').click()
    });


});