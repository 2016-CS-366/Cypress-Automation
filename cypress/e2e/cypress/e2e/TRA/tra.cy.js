/// <reference types="cypress" />
import {login_page} from './tra.js'
var loginPage = new login_page()

//describe('Access Webiste', () => {

// Runs before each test in the suite



it('Verify if we are able to login to the site', () => {

    cy.visit('http://54.161.197.52/login');
    loginPage.enter_Email('aminairshadahmed@gmail.com')
    loginPage.enter_Password('123123')
    loginPage.view_Icon()
    loginPage.click_Login()
    loginPage.close_Disclaimer()
    

});

