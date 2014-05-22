Ext.Loader.setConfig({
	enabled: true
});

Ext.application({
	name: 'Mobile',

	controllers: [
		'Main'
	],

	models: [
		'Contato'
	],

	stores: [
		'Contatos'
	],

	views: [
		'ContatosList',
		'ContatosForm'
	],

	viewport: {
		layout: {
			type: 'card',
			animation: {
				type: 'slide'
			}
		}
	},

	launch: function() {

	}

});