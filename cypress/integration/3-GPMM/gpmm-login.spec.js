
describe ('Login Usuario - GPMM',()=>{
    beforeEach(() =>{
        cy.visit('http://localhost:5173/signin')
    })

    it('Login com sucesso', () =>{
        cy.get('#id-siape').type('123456789')
        cy.get('#outlined-adornment-password').type('incio@1234');
        cy.get('button[type="submit"]').click();
    })

})