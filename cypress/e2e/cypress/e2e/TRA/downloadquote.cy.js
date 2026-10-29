///<reference types="cypress" />
///<reference types="cypress-downloadfile" />

describe('Download Quote', function () {
    it('download quotation', () => {
        cy.visit('http://54.161.197.52/login')
        cy.get('#email-login').type('aminairshadahmed@gmail.com')
        cy.get('#-password-login').type('123123')
        cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click()
        cy.get('.MuiGrid-root > .MuiButtonBase-root').click()
        cy.get('.MuiStack-root > .MuiGrid-root > .MuiButtonBase-root', { timeout: 10000 }).click()
        //cy.contains('Disclaimer').should('be.visible')
        cy.contains('Stores', { timeout: 30000 }).click()
        cy.get('[data-testid="MuiDataTableBodyCell-6-0"] > .tss-1qtl85h-MUIDataTableBodyCell-root > .MuiGrid-root > .MuiButtonBase-root > [data-testid="LoginIcon"]', {timeout: 20000}).click() //To go to the project page.
        //cy.get('[aria-label="Update"]').click()
        cy.get('[data-testid="MuiDataTableBodyCell-5-0"] > .tss-1qtl85h-MUIDataTableBodyCell-root > .MuiGrid-root > [aria-label="Update"]').click() //To click the project edit icon
        cy.contains('Download Quote').click()
        cy.wait(5000) // Wait for the download to complete
        //cy.downloadFile('blob:http://54.161.197.52/553aaa42-23aa-4cf4-8f38-ec2bdfd77061', 'donwloads', 'quote.pdf') downloadfile command is supported by httpsnot http

    

    })
})