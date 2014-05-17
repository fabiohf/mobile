Ext.define('Mobile.view.Painel2', {
	extend: 'Ext.Container',
	config: {
		html: 'Painel 2',
		items: [
	        {			   
	            xtype: 'toolbar',
	            docked: 'top',
	            ui: 'light',
	            items: [
	            	{
            			xtype: 'button',
            			ui: 'back',
	                	text: 'Mudar Painel 1',
	                	action: 'mudarPainel1'
	            	}
	            ]
	        }
		]
	}
});