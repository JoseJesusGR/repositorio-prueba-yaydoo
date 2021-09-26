/// <reference types="cypress" />

describe('Crear una cuenta', () => {
    beforeEach(() => {
      
      cy.visit('https://staging.d2vmtp7i0k2rpv.amplifyapp.com/es/login')
    })
  
    it('Crear cuenta y pagarla', () => {
      cy.log('Hola mundo')
      cy.get('input[name="email"]').type('automation@test.com')
      cy.get('input[name="password"]').type('Abc12345.')
      cy.contains('Continuar').click() 
      cy.url({ timeout: 20000 }).should('include', '/es/dashboard')
      cy.get('img[alt="payments"]').click()
      cy.url({ timeout: 10000 }).should('include', '/es/account-payables/accounts')
      cy.contains('Crear Cuenta por Pagar').click()
      cy.get('input[name="name"]').type('Happy Path')
      cy.get('input[name="name"]').type('{downarrow}')
      cy.get('input[name="name"]').type('{enter}')
      cy.contains('Continuar').click()
      cy.get('input[name="totalAmount"]').type('160')
      cy.get('textarea[name="paymentReason"]').type('Prueba Jesús')
      cy.contains('Crear cuenta').click()
      cy.url({ timeout: 10000 }).should('include', '/es/account-payables/accounts/mailbox')
      cy.contains('20210926').click()
      cy.url({ timeout: 8000 }).should('include', '/es/account-payables/accounts/mailbox?detail')
      cy.contains('Aprobar').click({force: true}) 
      cy.url({ timeout: 8000 }).should('include', '/es/account-payables/accounts/mailbox?detail=')
      cy.get('button[class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textSecondary"]').click({force: true})
      cy.url({ timeout: 8000 }).should('include', '/es/account-payables/accounts/mailbox?detail=')
      cy.contains('p[class="MuiTypography-root MuiTypography-body1"]', 'La cuenta por pagar "20210926-0030" ha sido aprobada')
      cy.url({ timeout: 8000 }).should('include', '/es/account-payables/accounts/mailbox?detail=')
      cy.contains('close').click()
      cy.contains('¿Marcar como pagada?').click({force: true})
      cy.url({ timeout: 8000 }).should('include', '/es/account-payables/accounts/mailbox?detail=')
      cy.contains('p[class="MuiTypography-root MuiTypography-body1"]', 'La cuenta ha sido marcada como pagada')
      cy.contains('close').click()
      cy.get('body').trigger('keydown', { keyCode: 27});
      cy.wait(500);
      cy.get('body').trigger('keyup', { keyCode: 27});
      cy.contains('20210926-0030').should('not.exist')
      cy.contains('Pagadas').click()
      cy.url({ timeout: 8000 }).should('include', '/es/account-payables/accounts/paid')
      cy.contains('20210926-0030').should('exist')
      
      
     
      
     

    
      
      //assert.equal('La cuenta por pagar "20210925-0030" ha sido aprobada', 'La cuenta por pagar "20210925-0030" ha sido aprobada', 'Coincide')
    })
  
   
  })
  