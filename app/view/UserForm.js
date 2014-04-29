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
            emptyText: 'First Name',
            allowBlank: false
        },
        {
            name: 'lastName',
            fieldLabel: 'Last Name',
            emptyText: 'Last Name',
            allowBlank: false
        },
        {
            name: 'email',
            fieldLabel: 'Email Address',
            vtype: 'email'
        },
        {
            name: 'dob',
            xtype: 'datefield',
            fieldLabel: 'Date of Birth'
        },
        {
            name: 'address1',
            fieldLabel: 'Address Line 1',
            allowBlank: false
        },
        {
            name: 'address2',
            fieldLabel: 'Address Line 2'
        },
        {
            name: 'city',
            fieldLabel: 'City',
            allowBlank: false
        },
        {
            name: 'state',
            fieldLabel: 'State',
            allowBlank: false
        },
        {
            name: 'zip',
            fieldLabel: 'Zip',
            allowBlank: false,
            regex: /^\d{5}(?:[-\s]\d{4})?$/,
            regexText: 'A valid zip code is required'
        },
        {
            xtype: 'button',
            text: 'Save',
            action: 'save',
            formBind: true
        }
    ]
});