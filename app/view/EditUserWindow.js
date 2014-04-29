Ext.define('PhillyJS.view.EditUserWindow', {
    extend: 'Ext.window.Window',
    title: 'Edit User',
    xtype: 'editUserWindow',
    items: [
        {
            xtype: 'userForm',
            action: 'edit',
            header: false,
            border: false
        }
    ]
});