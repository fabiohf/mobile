Ext.define('Mobile.store.Contatos', {
	extend: 'Ext.data.Store',
	config: {
		model: 'Mobile.model.Contato',
		proxy: {
			type: 'ajax',
			url: 'app/data/contatos.xml',
			reader: {
				type: 'xml',
				record: 'contato',
				rootProperty: 'contatos'
			}
		},
		autoLoad: true
	}
});