Ext.Loader.setConfig({
	enabled: true
});

Ext.application({
	name: 'Mobile',

	views: [

	],

	models: [
		'Contato'
	],

	stores: [
		'Contatos'
	],

	controllers: [
		'Main'
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
		Ext.Viewport.add(Ext.create('Mobile.view.ContatosList'));
		Ext.Viewport.add(Ext.create('Mobile.view.Painel2'));
	}

});