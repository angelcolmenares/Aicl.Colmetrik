Ext.define('App.view.authrole.List',{ 
    extend: 'Ext.grid.Panel',
    alias : 'widget.authrolelist', 
    constructor: function(config){
    	config= config|| {};
    	config.store= config.store|| 'AuthRole',
        config.frame = config.frame==undefined? false:config.frame;
		config.selType = config.selType || 'rowmodel';
    	config.height = config.height||350;
    	config.width = config.width || 600;
    	config.viewConfig = config.viewConfig || {
        	stripeRows: true
	    };
        config.margin=config.margin|| '2 2 2 2';	
    	if (arguments.length==0 )
    		this.callParent([config]);
    	else
    		this.callParent(arguments); 
    },
    
    initComponent: function() {
        
        this.columns=[
	{
		text: 'Name',
		dataIndex: 'Name',
		flex: 1,
		sortable: true
	},
	{
		text: 'Directory',
		dataIndex: 'Directory',
		sortable: true
	},
	{
		text: 'ShowOrder',
		dataIndex: 'ShowOrder',
		sortable: true
	},
	{
		text: 'Title',
		dataIndex: 'Title',
		sortable: true
	}
];
 
        this.dockedItems=[{
            xtype: 'toolbar',
            items: [{
                text:'New',
                tooltip:'add new record',
                iconCls:'add',
                disabled:true,
                action: 'new'
            },'-',{
                text:'Delete',
                tooltip:'delete selected record',
                iconCls:'remove',
                disabled:true,
                action: 'delete'
            }]		
        }]
                
        this.callParent(arguments);
    }
});
