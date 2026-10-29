///<reference types="cypress" />
describe('Create Quotation', () => {

  it('Fence quotation', () => {
    cy.visit('http://54.161.197.52/login')
    cy.get('#email-login').type('aminairshadahmed@gmail.com')
    cy.get('#-password-login').type('123123')
    cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click()
    cy.get('.MuiGrid-root > .MuiButtonBase-root').click()
    cy.get('.MuiStack-root > .MuiGrid-root > .MuiButtonBase-root', { timeout: 10000 }).click()
    //cy.contains('Disclaimer').should('be.visible')
    // cy.visit('http://54.161.197.52/Stores')
    // cy.get('[data-testid="MuiDataTableBodyCell-6-0"] > .tss-1qtl85h-MUIDataTableBodyCell-root > .MuiGrid-root > .MuiButtonBase-root > [data-testid="LoginIcon"]', { timeout: 20000 }).click()
    cy.contains('Stores', { timeout: 30000 }).click()
    cy.get('[data-testid="MuiDataTableBodyCell-6-0"] > .tss-1qtl85h-MUIDataTableBodyCell-root > .MuiGrid-root > .MuiButtonBase-root > [data-testid="LoginIcon"]', { timeout: 20000 }).click()
    cy.get('.css-1b6w447 > .MuiGrid-root > .MuiButtonBase-root').click()
    cy.get('input[name="name"]').type('automation project2')
    cy.get('input[name="description"]').type('Created by automation2')
    cy.contains('Save', { timeout: 30000 }).click()
    cy.wait(2000)
    cy.contains('Snow Fence').click()
    cy.get('input[name="name"]').type('Roof created by automated test run2')
    cy.get('input[name="description"]').type('Description added by automation2')
    cy.contains('Save', { timeout: 10000 }).click()
    cy.wait(5000)
    cy.get('#mui-component-select-1').click() //To click the roof type
    cy.get('[data-value="10"]').click()
    cy.get('#mui-component-select-107').click() //To click the construction type
    cy.get('[data-value="107"]').click()
    cy.get('#mui-component-select-Material').click() //To click the Material sort dropdown
    cy.get('[data-value="Zinc Plated Steel"]').click()
    cy.get('#mui-component-select-66').click() //To click the fence type
    cy.get('[data-value="83"]').click()
    cy.get(':nth-child(4) > .MuiInputBase-root > .MuiSelect-select').click() //To click the Material type
    cy.get('[data-value="72"]').click()
    cy.get(':nth-child(5) > .MuiInputBase-root > .MuiSelect-select').click() //To click the Fastener type
    cy.get('[data-value="85"]').click()
    cy.get('#mui-component-select-48').click() //To click the sheathing type
    cy.get('[data-value="89"]').click()
    cy.wait(2000)
    cy.get('input[name="Width of Panel or Rafter Spacing (inches)"]').type('10')
    cy.get('input[name="Length of Panel (feet)"]').type('10')
    cy.get('input[name="Roof Pitch (x/12)"]').type('18')
    cy.get('input[name="Ground Snow Load (Per Square Foot)"]').type('300')
    cy.wait(1000) 
    cy.get('input[name="Eave Length (feet)"]').type('30')
    cy.contains('Finish Project').click()

  })
  it('Fence quotation', () => {
    cy.visit('http://54.161.197.52/login')
    cy.get('#email-login').type('aminairshadahmed@gmail.com')
    cy.get('#-password-login').type('123123')
    cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click()
    cy.get('.MuiGrid-root > .MuiButtonBase-root').click()
    cy.get('.MuiStack-root > .MuiGrid-root > .MuiButtonBase-root', { timeout: 10000 }).click()
    //cy.contains('Disclaimer').should('be.visible')
    cy.contains('Stores', { timeout: 30000 }).click()
    cy.get('[data-testid="MuiDataTableBodyCell-6-0"] > .tss-1qtl85h-MUIDataTableBodyCell-root > .MuiGrid-root > .MuiButtonBase-root > [data-testid="LoginIcon"]', { timeout: 20000 }).click()
    //cy.get('.css-1b6w447 > .MuiGrid-root > .MuiButtonBase-root').click()
    cy.get('[data-testid="MuiDataTableBodyCell-5-1"] > .tss-1qtl85h-MUIDataTableBodyCell-root > .MuiGrid-root > [aria-label="Delete"]').click()
    cy.get('.MuiDialogActions-root > .MuiGrid-root > .MuiButtonBase-root').click()
    cy.get('.css-1deacqj > .MuiTypography-root').click()
  })


})    