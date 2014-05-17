Ext.define('Mobile.store.Contatos', {
	extend: 'Ext.data.Store',
	config: {
		model: 'Mobile.model.Contato',
		data: [
			{
				nome: 'Fabio Henrique',
				sobrenome: 'Fernandes'
			},
			{
				nome: 'Felipe',
				sobrenome: 'Fernandes'
			}
		]
	}
});