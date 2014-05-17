Ext.define('Mobile.view.Painel1', {
	extend: 'Ext.Container',
	config: {
		html: 'Painel 1',
		items: [
	        {			   
	            xtype: 'toolbar',
	            docked: 'top',
	            ui: 'light',
	            items: [
	            	{
            			xtype: 'button',
	                	text: 'Mudar Painel 2',
	                	action: 'mudarPainel2'
	            	}
	            ]
	        }
		]
	}
});