Ext.define('Mobile.controller.Main', {
	extend: 'Ext.app.Controller',
	config: {
		routes: {
			'': 'showContatosList',
			'index.html': 'showContatosList',
		},

		refs: {
			contatosList: {
				xtype: 'contatosList',
				selector: 'contatosList',
				autoCreate: true
			},
			contatosForm: {
				xtype: 'contatosForm',
				selector: 'contatosForm',
				autoCreate: true
			},
			salvarContatoBtn: 'button[action=salvarContato]',
			apagarContatoBtn: 'button[action=apagarContato]',
			toolbarContatosForm: '#toolbarContatosForm'
		},

		control: {
			'button[action=listarContato]': {
				tap: 'showContatosList'
			},
			'button[action=novoContato]': {
				tap: 'showContatosForm'
			},
			contatosList: {
				itemtap: 'showContatosForm'
			},
			salvarContatoBtn: {
				tap: 'salvarContato'
			},
			apagarContatoBtn: {
				tap: 'apagarContato'
			}
		}
	},

	showContatosList: function() {
		Ext.Viewport.setActiveItem(this.getContatosList());
	},
	
	showContatosForm: function(view, index, target, record, evt, opts) {
		if(record && record.data) {
			this.getContatosForm().setRecord(record);
			this.getToolbarContatosForm().setTitle('Editanto ' + record.get('nome'));
			this.getApagarContatoBtn().show();
		} else {
			this.getContatosForm().reset();
			this.getContatosForm().setRecord(null);
			this.getToolbarContatosForm().setTitle('Novo Contato');
			this.getApagarContatoBtn().hide();
		}
		Ext.Viewport.setActiveItem(this.getContatosForm());
	},

	salvarContato: function() {
		var form 	= this.getContatosForm();
			contato = Ext.create('Mobile.model.Contato', this.getContatosForm().getValues()),
			store 	= Ext.getStore('Contatos');
			
		if(form.getRecord() !== null) {
			var record = store.findRecord('id', form.getRecord().getId());
			record.set(form.getValues());
		} else {
			store.add(contato);
		}

		this.showContatosList();
	},

	apagarContato: function() {
		Ext.Msg.confirm(
			'Apagar Contato',
			'Tem certeza que deseja apagar esse contato?',
			function(btn) {
				if(btn == 'yes') {
					Ext.getStore('Contatos').remove(this.getContatosForm().getRecord());
					this.showContatosList();
				}
			},
			this
		);
	}
});