Ext.define('PhillyJS.view.UserForm', {
    extend: 'Ext.form.Panel',
    requires: [
        'Ext.form.*'
    ],
    alias: 'widget.userForm',
    title: 'User Form',
    defaults: {
        xtype: 'textfield',
        margin: 10
    },
    items: [
        {
            name: 'firstName',
            fieldLabel: 'First Name',
            emptyText: 'First Name'
        },
        {
            name: 'lastName',
            fieldLabel: 'Last Name',
            emptyText: 'Last Name'
        },
        {
            name: 'dob',
            xtype: 'datefield',
            fieldLabel: 'Date of Birth'
        },
        {
            name: 'address1',
            fieldLabel: 'Address Line 1'
        },
        {
            name: 'address2',
            fieldLabel: 'Address Line 2'
        },
        {
            name: 'city',
            fieldLabel: 'City'
        },
        {
            name: 'state',
            fieldLabel: 'State'
        },
        {
            name: 'zip',
            fieldLabel: 'Zip'
        },
        {
            xtype: 'button',
            text: 'Save',
            action: 'save'
        }
    ]
});