export class update_tier {

    email_textbox = '#email-login'
    password_textbox = '#-password-login'   
    login_button = '.MuiGrid-root > .MuiButtonBase-root'
    store_menu = '[data-testid="MuiDataTableBodyCell-6-0"] > .tss-1qtl85h-MUIDataTableBodyCell-root > .MuiGrid-root > .MuiButtonBase-root'
    prices_menu = '[data-testid="MuiDataTableBodyCell-6-0"] > .tss-1qtl85h-MUIDataTableBodyCell-root > .MuiGrid-root > .MuiButtonBase-root'

    visiturl() {
        cy.visit('http://54.161.197.52/login')
    }
    enter_Email(email) {
        cy.get(this.email_textbox).type(email)
    }

    enter_Password(password) {
        cy.get(this.password_textbox).type(password)
    }

    clickLogin() {
        cy.get(this.login_button).click()
        cy.wait(2000)
    }

    disclaimer() {
        cy.contains('OK').click()
        cy.wait(2000)

    }

    store() {
        cy.get(this.store_menu).click()

    }

    Prices() {
        cy.get(this.prices_menu).click()
        cy.contains('Prices').should('be.visible').click()

    }

    updatetier() {
    
        cy.get('[aria-label="Update Tiers"]').click()
        cy.wait(2000)
        cy.contains('Tier 5').should('be.visible').click()
        cy.contains('Activate').click()


    }
}
