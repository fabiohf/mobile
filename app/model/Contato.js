Ext.define('Mobile.model.Contato', {
	extend: 'Ext.data.Model',
	config: {
		fields: [
			{
				name: 'nome'
			},
			{
				name: 'sobrenome'
			},
			{
				name: 'email'
			},
			{
				name: 'endereco'
			}
		]
	}
})