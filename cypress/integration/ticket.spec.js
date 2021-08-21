const { it } = require("mocha");

describe('tickets', () => {
    beforeEach(() => {
        cy.visit('http://ticket-box.s3.eu-central-1.amazonaws.com/index.html');
    });
    const firstName = "Jhuan"
    const lastName = "Neves"
    it("preecher todos os campos de texto", () =>{
        
        cy.get('#first-name')
            .type(firstName)
        cy.get('#last-name')
            .type(lastName)
        cy.get('#email')
            .type('jhuan.neves@gmail.com')
        cy.get('#requests')
            .type('vegetarian')
        cy.get('#signature')
            .type(`${firstName} ${lastName}`)
        

    });
    it('selecionar o segundo valor na lista', () => {
        cy.get('#ticket-quantity')
            .select('2')
        
    });
    it('selecionar tipo de ticket VIP', () => {
        cy.get('#vip')
            .check()
        
    });
    it('selecionar Friend', () => {
        cy.get('#friend')
            .check()
        
    });
    it('selecionar Publication e desmarcar Friend', () => {
        cy.get('#friend')
            .check()
        cy.get('#publication')
            .check()
        cy.get('#friend')
            .uncheck()
        
    });
    it("has 'TICKETBOX' header´s heading", () => {
        cy.get('header h1')
            .should('have.text','TICKETBOX')
        cy.get('header h1')
            .should('contain','TICKETBOX')
        cy.get('header h1')
            .should('contain.text','TICKETBOX')

    });
    it('email invalid', () => {
        cy.get('#email')
            .as('email')
            .type('mariagrk-gmail.com')     
        cy.get('@email.invalid')
            .as('invalid_email')
            .should('exist')
        cy.get('#email')
            .clear()
            .type('mariagrk@gmail.com');
        cy.get('#email.invalid').should('not.exist')


    });
    it('Test e2e',()=>{
        cy.get('#first-name')
            .type(firstName)
        cy.get('#last-name')
            .type(lastName)
        cy.get('#email')
            .type('jhuan.neves@example')
        cy.get('#ticket-quantity')
            .select('2')
        cy.get('#vip')
            .click()
        cy.get('#friend')
            .check()
        cy.get('#requests')
            .type('I want some sweet popcorn')
        cy.get('.agreement p')
            .should('contain','I, Jhuan Neves, wish to buy 2 VIP tickets. I understand that all ticket sales are final.')

        cy.get("button[type='submit']")
            .as("btnSubmit")
            .should('be.disabled')
        cy.get('#agree')
            .click()
        cy.get('#signature')
            .type(`${firstName} ${lastName}`)
        
        cy.get("@btnSubmit")
            .click()
        
        cy.get('.success > p')
            .should("contain", "Ticket(s) successfully ordered.")
        
        
    })

});