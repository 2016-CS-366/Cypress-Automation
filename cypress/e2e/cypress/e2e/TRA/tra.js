export class login_page{

    email_textbox = '#email-login'
    password_textbox = '#-password-login'
    login_button = '.MuiGrid-root > .MuiButtonBase-root'



    enter_Email(email){
        cy.get(this.email_textbox).type(email)

    }
    enter_Password(password){
        cy.get(this.password_textbox).type(password)

    }
    view_Icon(){
        cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click()

    }
    click_Login(){
        cy.get(this.login_button).click()

    }
    
    close_Disclaimer(){
        cy.contains('Disclaimer').should('be.visible')
        cy.contains('OK').click()

    }

}



        
       // cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click()
        