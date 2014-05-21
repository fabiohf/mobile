Ext.define('Mobile.view.Painel2', {
	extend: 'Ext.Container',
	alias: 'widget.painel2',
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