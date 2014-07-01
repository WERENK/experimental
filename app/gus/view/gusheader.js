//tempatnya di CI/app/views

Ext.define('gus.view.gusheader', { // define this file by it App.folder location
	extend: 'Ext.Container', // load ExtJS container
	alias: 'widget.gusheader', // named this file as object name anHeader
	
	initComponent: function(){ // initiate function whenever being called
		this.items = [ // define widget’s item
			{
				xtype: 'panel', // type of item, check in documentation
				width: 'fit', // auto fit or 100%
				height: 50, // property height, in pixel
				bodyPadding: 10, // property padding in pixel
				html: '<h1>GUS HEADER</h1>', 
				// put any html tag up there
				border: false // no border
			}
		];
		
		this.callParent(arguments); // idk. it seems to be return value?
	}
});