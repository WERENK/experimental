//tempatnya di CI/app/controllers


Ext.define('gus.controller.guslocation', { // define app.folder.file
	extend: 'Ext.app.Controller', // load ExtJS 
	
	// Load up all dependencies
views: [
		'guslocation',
		'gusdelete',
		'gusedit',
		'gustoolbar'
		],
		
	models: [
		'guslist'
	],
	
	store: [
		'guslist'
	],
	
	init: function(){ // initiate function
		this.control({ // function to control
			'gusedit button[action=save]':{ // using selector to find specific
							// item widget xtype[property=value] 
				click: this.updateLocation // call action by trigger click
			}
		});
	},

	updateLocation: function(button){ // function to update
console.log('Try to save'); // console info
	var win    = button.up('window'), // ???
        	form   = win.down('form'), // ???        
		record = form.getRecord(), 
        		values = form.getValues(); 

    		record.set(values); 
    		win.close();
		this.getStore('guslist').sync(); // sync data with anList in store
		
	}
	
});