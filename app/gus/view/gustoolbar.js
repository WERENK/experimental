//tempatnya di CI/app/views

Ext.define('gus.view.gustoolbar', { // define this file by App.folderlocation.filename
	extend: 'Ext.toolbar.Toolbar', // load ExtJS toolbar
	alias: 'widget.gustoolbar', // name as widget anToolbar
	
	initComponent: function(){ // initiate function
		this.items = [ // widget’s item
			{
				text: 'Tambah Baru' // the default is button. so we only 
// need to  define it text
			}
		];
		
		this.callParent(arguments); // routine
	}
});
