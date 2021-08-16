describe('tickets', () => {
    beforeEach(() => {
        cy.visit('http://ticket-box.s3.eu-central-1.amazonaws.com/index.html');
    });
    it("preecher todos os campos de texto", () =>{
        const firstName = "Jhuan"
        const lastName = "Neves"
        cy.get('#first-name').type(firstName)
        cy.get('#last-name').type(lastName)
        cy.get('#email').type('jhuan.neves@gmail.com')
        cy.get('#requests').type('vegetarian')
        cy.get('#signature').type(`${firstName} ${lastName}`)
        

    });
    it('selecionar o segundo valor na lista', () => {
        cy.get('#ticket-quantity').select('2')
        
    });
    it('selecionar tipo de ticket VIP', () => {
        cy.get('#vip').check()
        
    });
    it('selecionar Friend', () => {
        cy.get('#friend').check()
        
    });
    it('selecionar Publication e desmarcar Friend', () => {
        cy.get('#friend').check()
        cy.get('#publication').check()
        cy.get('#friend').uncheck()
        
    });
    it("has 'TICKETBOX' header´s heading", () => {
        cy.get('header h1').should('have.text','TICKETBOX')
        cy.get('header h1').should('contain','TICKETBOX')
        cy.get('header h1').should('contain.text','TICKETBOX')

    });
    // it('email invalid', () => {
    //     cy.get('#email')
    //     .as('email').type('mariagrk-gmail.com')     
    //     cy.get('@email.invalid')
    //     .as('invalid_email')
    //     .should('exist')
    //     cy.get('#email')
    //     .clear()
    //     .type('mariagrk@gmail.com');
    //     cy.get('#email.invalid').should('not.exist')


    // });
    // it('Preencher todos os campos e depois resetar', () => {
    //     const firstName = "Renée"
    //     const lastName = "Azevedo"
    //     const fullName = `${firstName} ${lastName}`
    //     cy.get('#first-name').type(firstName)
    //     cy.get('#last-name').type(lastName)
    //     cy.get('#email').type('renee.moura@hotmail.com')
    //     cy.get('#ticket-quantity').select('2')
    //     cy.get('#vip').check()
    //     cy.get('#social-media').check()
    //     cy.get('#requests').type("blablablabla")
    //     cy.get('#agree').check()
    //     cy.get('#signature').type(fullName)
    //     cy.get('.agreement p').should(
    //         'contain',`I, ${fullName}, wish to buy 2 VIP tickets.`)
    //     cy.get('button[type=submit]').
    //     as("submitButton")
    //     .should('not.be.disabled')    
    //     cy.get('.reset').click()
    //     cy.get('@submitButton').
    //     should('be.disabled') 

    // it.only('Preencher os campos obrigatórios', () => {
    //     const customer = {
    //         firtName: "João",
    //         lastName: "Silva",
    //         email: "joao_silva@example.com"
    //     }
    //     cy.preencherCamposObrigatórios(customer)  

    //     cy.get('button[type=submit]').
    //       as("submitButton")
    //       .should('not.be.disabled')    
    //       cy.get('.reset').click()
    //       cy.get('@submitButton').
    //       should('be.disabled') 
    // });
        
     
    // });
});