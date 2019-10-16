/// <reference types="Cypress" />

beforeEach(() => {
  cy.visit('http://localhost:3000/admin/dashboard')
});

describe('Teste corretamente Sidebar', () => {
  it('espera que abra a aba dashboard', () => {
    cy.get('.navbar-brand')
      .should('have.attr', 'href', '/')
      .should('contain', 'Painel');
  });

  it('espera que abra a aba Notificações', () => {
    //pass
  })

  it('espera que abra a aba Usuários', () => {
    //pass
  });
})

describe('Teste corretamente Footer', () => {
  it('espera que haja o link Unifcv', () => {
    //pass
  });

  it('espera que haja o link Cypress', () => {
    //pass
  });

  it('espera que haja o link ReactJS', () => {
    //pass
  });

  it('espera que haja copyright', () => {
    //pass
  });
})

describe('Teste se a pagina é expansível', () => {
  it('seja expansivel para macbook 15', () => {
    //pass
  });

  it('seja expansível para iphone 5', () => {
    //pass
  });

  it('seja expansivel para SEU CELULAR', () => {
    //pass
  });

  it('seja expansível para dimensão 1024x728', () => {
    //pass
  });

})