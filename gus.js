Ext.application({
	name: 'GUS',
	appFolder: 'app/gus',

	launch: function(){
		Ext.create('Ext.container.Viewport', {
           	items: [
				{
					xtype: 'panel',
					width: 'fit',
					height: 50,
					bodyPadding: 10,
					html: '<h1>HELLO WORLD</h1>',
					border: false
				}			
]
        });
	}
});
