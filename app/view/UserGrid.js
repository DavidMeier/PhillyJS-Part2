Ext.define('PhillyJS.view.UserGrid', {
    extend: 'Ext.grid.Panel',
    requires: [
        'Ext.grid.*'
    ],
    xtype: 'userGrid',
    store: 'Users',
    columns: [
        {text: 'First Name', dataIndex: 'firstName'},
        {text: 'Last Name', dataIndex: 'lastName'},
        {text: 'Email', dataIndex: 'email'},
        {text: 'Birthday', dataIndex: 'dob', xtype: 'datecolumn', format: 'm/d/Y'},
        {text: 'Address', flex: 1, xtype: 'templatecolumn', tpl: '{address1}<tpl if="address2"><br>{address2}</tpl>'},
        {text: 'City', dataIndex: 'city'},
        {text: 'State', dataIndex: 'state' },
        {text: 'Zip', dataIndex: 'zip'}
    ]
});