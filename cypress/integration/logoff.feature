Feature: Logoff com sucesso

    Background: 
    Given que possuo acesso ao sistema
2
    Scenario: Validar logoff de usuarios
    When eu clico no icone de configuracao
    And o sistema apresenta lista de opcoes
    Then o sistema apresenta mensagem de sessão finalizada
    And o sistema redireciona para tela de login