/// <reference types="Cypress" />

beforeEach(() => {
  cy.visit('http://localhost:3000/admin/user-page')
});

describe('Teste corretamente tela Usuarios', () => {
  it('espera que adicione um aluno', () => {
    cy.get('.form-group')
      .find('input[name="nome"]').type('John', { delay: 100 })
      .should('have.value', 'John');
    //continuar
  });

  it('espera que adicione aluno e confirme', () => {
    //pass
  });

  it('espera que adicione 3 alunos e scroll até final ', () => {
    //pass
  });

  it('espera que adicione 3 alunos e confirme o segundo ', () => {
    //pass
  });

})