//tempatnya di CI/app/views

Ext.define('gus.view.gusdelete',{ // define app.folder.file
	extend: 'Ext.window.Window', // load up the extjs window
		
	alias: 'widget.gusdelete', // define as widget anDelete
	
	title: 'Alert!',
	layout: 'fit',
	autoShow: true,
	xtype: 'basic-window',
	
	bodyStyle: 'text-align:center',
	height: 110,
    	width: 200,
    	autoScroll: true,
    	bodyPadding: 10,
	html: 'Are you sure you want to delete?',
	
    	constrain: true,
	
	initComponent: function(grid, record){

		
		this.buttons = [
			{
				text: 'Yes',
				action: 'delete'
			},
			{
				text: 'Cancel',
				scope: this,
				handler: this.close // handler to close the window
			}
		];
		
		this.callParent(arguments);
		
	}
	
})
