/// <reference types="cypress" />
///<reference types="cypress-downloadfile" />
describe('Create Store', () => {
    it('create store', () => {
        cy.visit('http://54.161.197.52/Stores')
        cy.get('#email-login').type('farooq.tahir@pionlog.com')
        cy.get('#-password-login').type('admin12345')
        cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click()
        cy.get('.MuiGrid-root > .MuiButtonBase-root').click()
        cy.contains('Disclaimer').should('be.visible')
        cy.contains('OK').click()
        cy.contains('Stores', {timeout: 10000}).click()
        cy.contains('Add',{ timeout: 10000 }).click()
        cy.get('input[name="storeName"]', { timeout: 10000 }).type('Test Store')
        cy.get('input[name="contactName"]').type('test-store')
        cy.get('input[name="email"]').type('email@email.com')
        cy.get('input[name="phone1"]').type('1234567890')
        cy.get('textarea[name="address"]', {timeout: 20000}).type('123 Test Street')
        cy.get('#tier-select').click();
        cy.contains('Tier 5 (0%)').click();
        // cy.contains('Add Logo').click()
        cy.get('input[type="file"]').attachFile('ocean-3605547_1280.jpg',{ force: true });    
        cy.contains('Save & Add MOre').click()
        //cy.contains('Save & Close').click()
        


    })
    
})