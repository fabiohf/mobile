Ext.define('Mobile.view.ContatosList', {
	extend: 'Ext.dataview.List',
	alias: 'widget.contatosList',
	config: {	
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
	                	text: 'Novo Contato',
	                	action: 'novoContato'
	            	}
	            ]
        	}
		],
		store: 'Contatos',
		itemTpl: '{nome} - {sobrenome}',
		onItemDisclosure: true
	}
});