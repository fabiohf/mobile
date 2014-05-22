Ext.define('Mobile.controller.Main', {
	extend: 'Ext.app.Controller',
	config: {
		routes: {
			'': 'showContatosList',
			'index.html': 'showContatosList',
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
			}
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
			}
		}
	},

	showContatosList: function() {
		Ext.Viewport.setActiveItem(this.getContatosList());
	},
	
	showContatosForm: function(view, index, target, record, evt, opts) {
		if(record && record.data) {
			this.getContatosForm().setRecord(record);
		} else {
			this.getContatosForm().reset();
		}
		Ext.Viewport.setActiveItem(this.getContatosForm());
	}
});