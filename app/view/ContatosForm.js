Ext.define('Mobile.view.ContatosForm', {
	extend: 'Ext.form.Panel',
	alias: 'widget.contatosForm',
	config: {
		items: [
	        {			   
	            xtype: 'toolbar',
	            docked: 'top',
	            ui: 'light',
	            title: 'Editar Contato',
	            itemId: 'toolbarContatosForm',
	            items: [
	            	{
            			xtype: 'button',
            			ui: 'back',
	                	text: 'Voltar',
	                	action: 'listarContato'
	            	}
	            ]
	        },
	        {
	        	xtype: 'fieldset',
	        	items: [
	        		{
	        			xtype: 'textfield',
	        			name: 'nome',
	        			label: 'Nome'
	        		},
	        		{
	        			xtype: 'textfield',
	        			name: 'sobrenome',
	        			label: 'Sobrenome'
	        		},
	        		{
	        			xtype: 'textfield',
	        			name: 'email',
	        			label: 'Email'
	        		},
	        		{
	        			xtype: 'textfield',
	        			name: 'endereco',
	        			label: 'Endereco'
	        		}
	        	],
	        },
        	{
        		xtype: 'button',
        		ui: 'action',
        		text: 'Salvar',
        		action: 'salvarContato'
        	},
        	{
        		xtype: 'container',
        		height: 20
        	},
        	{
        		xtype: 'button',
        		ui: 'action',
        		text: 'Apagar',
        		action: 'apagarContato',
        		hidden: true
        	}
		]
	}
});