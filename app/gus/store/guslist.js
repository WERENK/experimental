//tempatnya di CI/app/stores

Ext.define( 'gus.store.guslist', { // define app.folder.file
	extend: 'Ext.data.Store', // load ExtJS Store
	model: 'gus.model.guslist', // define format to be used
	
    	autoLoad: true, 
	autoSync: true,

	proxy: { 
		type: 'ajax',
		api: { // get ready for read any data in the location
			read: 'app/gus/data/guslocation.json',
		},
		reader: { // define type of reader
			type: 'json',
			root: 'result', // root to be read
			successProperty: 'success'
		}
	}
});
