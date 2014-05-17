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

		Ext.Viewport.add(
			{
				html: 'Painel 1',
				items: [
			        {			   
			            xtype: 'toolbar',
			            docked: 'top',
			            ui: 'light',
			            items: [
			            	{
			                	text: 'Mudar Painel 2',
			                	listeners: {
			                		tap: function() {
			                			Ext.Viewport.setActiveItem(1);
			                		}
			                	}
			            	}
			            ]
			        }
     			]
			},
			{
				html: 'Painel 2',
				items: [
			        {
			        	xtype: 'toolbar',
			            docked: 'top',
			            ui: 'light',
			            items: [
			            	{
			                	text: 'Mudar Painel 1',
			                	ui: 'back',
			                	listeners: {
			                		tap: function() {
			                			Ext.Viewport.setActiveItem(0);
			                		}
			                	}
			            	}
			            ]
			        }
     			]
			}
		)
	}

});