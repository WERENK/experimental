Ext.application({
	name: 'GUS', //nama dari aplikasi yang dibuat
	appFolder: 'app/gus', //lokasi aplikasimu dari localhost/(nama folder CI)

//memanggil bagian-bagian penyusunnya
controllers: [
		'guslocation'
],

views: [
		'guslocation',
		'gusheader',
		'gustoolbar'
],

models: [
		'guslist'
],

stores: [
		'guslist'
],

	launch: function(){
		Ext.create('Ext.container.Viewport', {
           	items: [
				{	//properti dari item yang dibuat
					xtype: 'gusheader', //tipe
				}, {
					xtype: 'gustoolbar', //tipe
				}, {
					xtype: 'guslocation', //tipe
					collapsible: true,
					border: false //tanpa border
				}			
]
        });
	}
});

//tiap kali aplikasi dipanggil, harus dijelaskan lokasi & nama aplikasinya