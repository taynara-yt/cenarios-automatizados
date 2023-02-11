describe ('Erro campos vazios - GPMM',()=>{
    beforeEach(() =>{
        cy.visit('http://localhost:5173/signin')
    })

    it('verifica mensagem de erro campo siape', () =>{
        cy.contains('button', 'Entrar').click();
        cy.contains('span','siape must be a `number` type, but the final value was: `NaN`.').should('be.visible');
    })

    it('verifica mensagem de erro campo senha', () =>{
        cy.contains('button', 'Entrar').click();
        cy.contains('span','Este campo é obrigatório').should('be.visible');
    })

})
