Ext.Loader.setConfig({
	enabled: true
});

Ext.application({
	name: 'Mobile',

	views: [

	],

	models: [

	],

	controllers: [
		'Main'
	],

	stores: [
	
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
		Ext.Viewport.add(Ext.create('Mobile.view.Painel1'));
		Ext.Viewport.add(Ext.create('Mobile.view.Painel2'));
	}

});