/// <reference types="Cypress" />

beforeEach(() => {
  cy.visit('http://localhost:3000/admin/notifications')
});

describe('Teste corretamente Notificações', () => {

  it('espera que remova a notificação aluno 10865-10', () => {
    cy.get('.card-body')
      //continuar (use find())
  });

  it('espera que remova a notificacao Curso 5522 Turma 20', () => {
    //pass
  });

  it('espera que o scroll funcione até o final da pagina', () => {
    //pass
  });
})