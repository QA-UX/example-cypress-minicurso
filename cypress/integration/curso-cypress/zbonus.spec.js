/// <reference types="Cypress" />

/*
  Exercício Bônus
  Exercicio consiste em acessar a pagina da Elotech
  pelo google e depois acessar a aba notícias
*/

describe('acessar google', () =>{
  it('acessar página elotech', () =>{
    cy.visit('https://www.google.com')
    
    //continuar
  });
})