
describe ('Login Usuario - GPMM',()=>{
    beforeEach(() =>{
        cy.visit('http://localhost:5173/signin')
    })

    it('Erro Login', () =>{
        cy.get('#id-siape').type('123456789')
        cy.get('#outlined-adornment-password').type('fim@2222');
        cy.get('button[type="submit"]').click();
    })

})