export class Forgot_Password{
 
    visitUrl(){
        cy.visit('http://54.161.197.52/login');
    }
    Forgotpassword(){
        cy.get('.MuiStack-root > .MuiTypography-root').click()
        cy.url().should('include', '/forgot-password')
        cy.get('.MuiTypography-root').should('have.text', 'Forgot Password')
    }
    enterEmail(){
        cy.get('#email-login').type('aminairshadahmed@gmail.com')
    }
    clickButton(){
        cy.get('.MuiButtonBase-root').click()
    }   
}






// cy.get('.MuiStack-root > .MuiTypography-root').click()
// cy.url().should('include', '/forgot-password')
// cy.get('.MuiTypography-root').should('have.text', 'Forgot Password')
// cy.get('#email-login').type('aminairshadahmed@gmail.com')
// cy.get('.MuiButtonBase-root').click()