Ext.define('PhillyJS.Application', {
    name: 'PhillyJS',

    extend: 'Ext.app.Application',

    views: [
        'UserForm',
        'UserGrid',
        'EditUserWindow'
    ],

    controllers: [
        'AddUser',
        'EditUser'
    ],

    stores: [
        'Users'
    ],

    models: [
        'User'
    ]
});
