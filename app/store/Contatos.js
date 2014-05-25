Ext.define('Mobile.store.Contatos', {
	extend: 'Ext.data.Store',
	config: {
		model: 'Mobile.model.Contato',
		proxy: {
			type: 'localstorage',
			id: 'mobile'
		},
		autoLoad: true,
		autoSync: true
	}
});