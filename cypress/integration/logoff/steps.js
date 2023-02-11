
Given(/^que possuo acesso ao sistema$/, () => {
	cy.visit('/')
});

When(/^eu clico no icone de configuracao$/, () => {
	return true;
});

When(/^o sistema apresenta lista de opcoes$/, () => {
	return true;
});

Then(/^o sistema apresenta mensagem de sessão finalizada$/, () => {
	return true;
});

Then(/^o sistema redireciona para tela de login$/, () => {
	return true;
});
