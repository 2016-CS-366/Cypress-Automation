///<reference types="cypress" />
import { update_tier } from "./updatetier"
const updateTier = new update_tier()
describe('Update Tier', () => {
    it('update tier', () => {
        updateTier.visiturl()
        updateTier.enter_Email('aminairshadahmed@gmail.com')
        updateTier.enter_Password('123123')
        updateTier.clickLogin()
        updateTier.disclaimer()
        updateTier.store()
        updateTier.Prices()
        updateTier.updatetier()   
        
        
        // cy.visit('http://54.161.197.52/login')
        // cy.get('#email-login').type('aminairshadahmed@gmail.com')
        // cy.get('#-password-login').type('123123')
        // cy.get('.MuiGrid-root > .MuiButtonBase-root').click()
        // cy.wait(2000)
        // cy.contains('OK').click()
        // cy.wait(2000)   
        // cy.get('[data-testid="MuiDataTableBodyCell-6-0"] > .tss-1qtl85h-MUIDataTableBodyCell-root > .MuiGrid-root > .MuiButtonBase-root').click()   
        // cy.contains('Prices').should('be.visible').click()
        // cy.get('[aria-label="Update Tiers"]').click()
        // cy.wait(2000)
        // cy.contains('Tier 4').should('be.visible').click()  
        // cy.contains('Activate').click()
        // cy.wait(3000)
    })


})

