//tempatnya di CI/app/views

Ext.define('gus.view.gusedit',{ // define app.folder.file
	extend: 'Ext.window.Window', // load ExtJS window
	alias: 'widget.gusedit', // define widget as anEdit
	
	title: 'Edit This Location', // title of window

	autoShow: true, 
	xtype: 'basic-window', // type of visual
	
	height: 250, // define property
   	width: 400, // define property
    	bodyPadding: 10, // define property
    	constrain: true, // define property
	
	initComponent: function(grid, record){
		this.items = [
            	{
                	xtype: 'form', // define a new item, form and its 
               	bodyPadding: 10,
			items: [
                    		{
                        		xtype: 'textfield',
                        		name : 'title', // using name instead of dataIndex
					layout: 'fit',
                        		fieldLabel: 'Title'
                    		},
                    		{
                        		xtype: 'textfield',
                        		name : 'description',
					layout: 'fit',
                        		fieldLabel: 'Description'
                    		},
                    		{
                        		xtype: 'textfield',
                        		name : 'address',
					layout: 'fit',
                        		fieldLabel: 'Address'
                    		},
				{
                        		xtype: 'textfield',
                        		name : 'tag',
					layout: 'fit',
                        		fieldLabel: 'Tag'
				}
                	]
            	}
        ];

        this.buttons = [
           	 {
                	text: 'Save',
                	action: 'save'
            	},
            	{
                	text: 'Cancel',
                	scope: this,
                	handler: this.close
            	}
        ];

        	this.callParent(arguments);
    }
	
})
