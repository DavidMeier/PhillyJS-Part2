Ext.define('PhillyJS.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',
    layout: 'fit',
    items:[{
        xtype: 'userForm',
        action: 'add'
    },{
        xtype: 'userGrid',
        title: 'Users'
    }]
});