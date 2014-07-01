//tempatnya di CI/app/views

Ext.define('gus.view.guslocation',{ // define App.folder.file
	extend: 'Ext.Container', // load ExtJS,
	extend: 'Ext.grid.Panel', // load ExtJS,
    	alias: 'widget.guslocation', // widget name
	
	store: 'gsist', // load dependencies anList

    	title: 'All Locations', // title of the table
	
    initComponent: function() {		
		this.columns = [ 	// adding column
			{xtype: 'rownumberer'},	//add rownumberer from ExtJS
            {header: 'Location',  dataIndex: 'title',  flex: 1}, // column, dataIndex is 
// like name in form html
            {header: 'Description', dataIndex: 'description', flex: 1}, // column
			{header: 'Address', dataIndex: 'address', flex: 1}, // column
			{header: 'Tag', dataIndex: 'tag', flex: 1}, // column
			{header: 'Action', // column
               			 xtype: 'actioncolumn', // type column as action
                			sortable: false,
					width: 40,
                			menuDisabled: true,
                			items: [{
                    		icon: 'asset/icons/delete.gif', // the icon
                    		tooltip: 'Delete Entry', // hover function
				margin: 5,
                    		scope: this,
                    		handler: this.onRemoveClick // function to be called
},
				{
					icon: 'asset/icons/page_white_edit.png' // the icon,
                    			tooltip: 'Edit Entry', // hover function 
                    			scope: this,
					margin: 5,
                    			handler: this.onEditClick // function to be called
				}
				]
            }
       ];

        this.callParent(arguments);
    },
	
	onRemoveClick: function(grid, rowIndex, colIndex){ // retrieve row data
		var record = grid.getStore().getAt(rowIndex); 
		console.log("Trying to delete "+record.get('title')); //console info
		
		var view = Ext.widget('gusdelete'); // calling for widget anDelete
		view.down('basic-window').loadRecord(record); // Passing data 
//to widget anDelete	
	},
	
	onEditClick: function(grid, rowIndex, colIndex){ // retrieve row data
		var record = grid.getStore().getAt(rowIndex);
		console.log('Try to edit ' + record.get('title')); // console info
		
		var view = Ext.widget('gusedit'); // calling for widget anEdit
		view.down('form').loadRecord(record); // Passing data to anEdit
	},
});