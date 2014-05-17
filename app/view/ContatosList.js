Ext.define('Mobile.view.ContatosList', {
	extend: 'Ext.dataview.List',
	config: {
		store: 'Contatos',
		itemTpl: '{nome} - {sobrenome}',
		items: [
			{
				xtype: 'toolbar',
	            docked: 'top',
	            ui: 'light',
	            title: 'Lista de Contatos',
	            items: [
	            	{
	            		xtype: 'spacer'
	            	},
	            	{
	        			xtype: 'button',
	        			ui: 'forward',
	                	text: 'Mudar Painel 2',
	                	action: 'mudarPainel2'
	            	}
	            ]
        	}
		]
	}
});