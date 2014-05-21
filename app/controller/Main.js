Ext.define('Mobile.controller.Main', {
	extend: 'Ext.app.Controller',
	config: {

		routes: {
			'': 'showContatosList',
			'index.html': 'showContatosList',
		},

		control: {

			'button[action=mudarPainel1]': {
				tap: 'showContatosList'
			},

			'button[action=mudarPainel2]': {
				tap: 'onMudarPainel2'
			}
		},

		refs: {
			contatosList: {
				xtype: 'contatoslist',
				selector: 'contatoslist',
				autoCreate: true
			},
			painel2: {
				xtype: 'painel2',
				selector: 'painel2',
				autoCreate: true
			}
		}
	},

	showContatosList: function() {
		Ext.Viewport.setActiveItem(this.getContatosList());
	},

	onMudarPainel2: function(button) {
		Ext.Viewport.setActiveItem(this.getPainel2());
		console.log(Ext.Viewport.getInnerItems());
	}
});