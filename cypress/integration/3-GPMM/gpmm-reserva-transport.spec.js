describe ('Reserva Transporte - GPMM',()=>{
    beforeEach(() =>{
        cy.visit('http://localhost:5173/transport')
    })

    it('validar reserva de transporte com sucesso', () =>{
            
        cy.contains('id-button', 'Nova Reserva').click();
        
        cy.contains('Button', 'Nova Reserva').click();

        //cy.contains('id-button', 'Nova Reserva').click();
       // cy.get('button[type="submit"]').click();
        cy.contains('input[name="departure"]').type('Portão A ICET');

        //cy.contains('#onClick={handleOpenRegisterTransportReservation}').click();

       
    })

})

