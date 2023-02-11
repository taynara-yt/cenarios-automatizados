Feature: Cadastro Usuario
    
   Background: 
   Given que possuo acesso ao sistema
   And clico no botão 'novo cadastro'
   And o sistema apresenta tela para criar conta

   Scenario: Validar cadastro com sucesso de novo usuario
   When acesso o formulario de cadastro
   And preencho os campos:
        |siape|cpf|nome|cargo|email|telefone|setor|senha|
    And clico no botao 'cadastrar'
    Then o sistema retorna a tela de login