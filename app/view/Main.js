Ext.define('PhillyJS.view.Main', {
    extend: 'Ext.tab.Panel',
    requires:[
        'PhillyJS.view.UserForm'
    ],
    xtype: 'app-main',
    items:[{
        xtype: 'userForm'
    }]
});