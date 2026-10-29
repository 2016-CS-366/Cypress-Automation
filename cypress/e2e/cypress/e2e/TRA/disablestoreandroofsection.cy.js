///<reference types ="cypress"/>
describe('Disable Store and Roof Section', () => {

    beforeEach('login', function () {
        cy.visit('http://54.161.197.52/login')
        cy.get('#email-login').type('farooq.tahir@pionlog.com')
        cy.get('#-password-login').type('admin12345')
        cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click()
        cy.get('.MuiGrid-root > .MuiButtonBase-root').click()
        cy.get('.MuiStack-root > .MuiGrid-root > .MuiButtonBase-root', { timeout: 10000 }).click()
        //cy.contains('Disclaimer').should('be.visible')
        cy.contains('Stores').click()


    })
    it('disable store', function () {
        cy.get('[data-testid="MuiDataTableBodyCell-6-0"] > .tss-1qtl85h-MUIDataTableBodyCell-root > .MuiGrid-root > [aria-label="Enabled"]').click()


    })




    it('disable roof section', function () {
        cy.get('[data-testid="MuiDataTableBodyCell-6-2"] > .tss-1qtl85h-MUIDataTableBodyCell-root > .MuiGrid-root > [aria-label="Login to Store"] > [data-testid="LoginIcon"]').click()
        cy.get('[data-testid="MuiDataTableBodyCell-5-0"] > .tss-1qtl85h-MUIDataTableBodyCell-root > .MuiGrid-root > [aria-label="Update"]').click() //To click the project edit icon
        cy.get('[aria-label="Disabled"]').click()
        cy.get('.MuiDialogActions-root > :nth-child(1)').click()
        cy.get('[data-testid="MuiDataTableBodyCell-6-0"] > .tss-1qtl85h-MUIDataTableBodyCell-root > .MuiGrid-root > [aria-label="Enabled"] > [data-testid="ToggleOnIcon"] > path').click() //To click the Roof Section edit icon
        cy.get('.MuiDialogActions-root > :nth-child(1)').click()
     })


     it.only('Delete existing user and creating a new user', function () {
        cy.get('[data-testid="MuiDataTableBodyCell-6-0"] > .tss-1qtl85h-MUIDataTableBodyCell-root > .MuiGrid-root > [aria-label="Login to Store"]').click()
        cy.contains('Users').click()
        cy.get('[aria-label="Delete"]').click()
        cy.get('.MuiDialogActions-root > .MuiGrid-root > .MuiButtonBase-root').click() //To click the Delete button in pop up
        cy.wait(2000)
        cy.reload() //To reload the page
        cy.contains('Add').click()
        cy.get(':nth-child(1) > .MuiGrid-root > .MuiStack-root > .MuiInputBase-root > .MuiInputBase-input').type('Test')
        cy.get(':nth-child(2) > .MuiGrid-root > .MuiStack-root > .MuiInputBase-root > .MuiInputBase-input').type('Admin')
        cy.get(':nth-child(3) > .MuiGrid-root > .MuiStack-root > .MuiInputBase-root > .MuiInputBase-input').type('yufagauxoiwa-50@yopmail.com')
        cy.contains('Save & Close').click()

     })
})
