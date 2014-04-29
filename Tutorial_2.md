# Show A List Of Our Users

Our admin section will be housed in a separate tab and will contain a grid that shows all our user data.
First we will create the new view.

## UserGrid View

We create the new UserGrid view using either you favorite IDE or the following command:

    sencha generate view UserGrid

This creates a basic generic view in our view folder.  Lets add it to our Main view and take a look.

view/UserGrid.js

<pre>
Ext.define("PhillyJS.view.UserGrid", {
    extend: 'Ext.Component',
    <strong>xtype: 'userGrid'</strong>
    html: 'Hello, World!!'
});
</pre>

Add our new view to the application

Application.js

<pre>
...
views: [
    'UserForm',
    <strong>'UserGrid'</strong>
]
...
</pre>

Add it as a second tab to our tab panel

view.Main.js

<pre>
Ext.define('PhillyJS.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',
    layout: 'fit',
    items:[{
        xtype: 'userForm'
    }<strong>,{
        xtype: 'userGrid',
        title: 'Users'
    }</strong>]
});
</pre>

We should be able to see the second tab and "Hello World!!"

## Create Users Store

A grid needs two things, a column definition and a store.  Let's take a few moments and create the store.
A store is simply a collection of records of the same type.

store/Users.js

    Ext.define('PhillyJS.store.Users', {
        extend: 'Ext.data.Store',
        model: 'PhillyJS.model.User',
        proxy: {
            type: 'memory'
        }
    });

Add our new store to the application

Application.js

    ...
    stores: [
        'Users'
    ]
    ...

## Finish the Grid

view/UserGrid.js

<pre>
Ext.define('PhillyJS.view.UserGrid', {
    <strong>extend: 'Ext.grid.Panel',</strong>
    xtype: 'userGrid',
    <strong>store: 'Users',
    columns: [
        {text: 'First Name', dataIndex: 'firstName'},
        {text: 'Last Name', dataIndex: 'lastName'},
        {text: 'DOB', dataIndex: 'dob'},
        {text: 'Address', dataIndex: 'address1'},
        {text: 'City', dataIndex: 'city'},
        {text: 'State', dataIndex: 'state' }
    ]</strong>
});
</pre>

## Edit Save to Add to Store

controller/AddUser.js

<pre>
Ext.define('PhillyJS.controller.AddUser', {
    extend: 'Ext.app.Controller',

    init: function() {
        this.control({
            'userForm button': {'click': this.onClickSave}
        });
    },

    onClickSave: function(button) {
        var user = this.getModel('User').create(button.up('userForm').getValues());
        <strong>this.getApplication().getUsersStore().add(user);</strong>
    }
});
</pre>

We see that we don't like how the date is formatted.  Let's add a format to the dob column.

<pre>
...
    {text: '<strong>Birthday</strong>', dataIndex: 'dob'<strong>, xtype: 'datecolumn', format: 'm/d/Y'</strong>},
...
</pre>

# Edit A User

## Add seed data

store/Users.js

    ...
    data: [
        {
            firstName: 'David',
            lastName: 'Meier',
            dob: '7/18/1979',
            address1: '123 Some Ln',
            address2: '',
            city: 'Philly',
            state: 'JS',
            zip: '12345',
            email: 'dmeier@pointroll.com'
        },
        {
            firstName: '',
            lastName: '',
            dob: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            zip: '',
            email: ''
        },
        {
            firstName: '',
            lastName: '',
            dob: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            zip: '',
            email: ''
        },
        {
            firstName: '',
            lastName: '',
            dob: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            zip: '',
            email: ''
        },
        {
            firstName: '',
            lastName: '',
            dob: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            zip: '',
            email: ''
        }
    ]
    ...

## EditUser View

view/EditUserForm.js

    Ext.define('PhillyJS.view.EditUserWindow', {
        extend: 'Ext.window.Window',
        title: 'Edit User',
        xtype: 'editUserWindow',
        items: [
            {
                xtype: 'userForm'
            }
        ]
    });

## EditUser Controller

controller/EditUser.js

    Ext.define('PhillyJS.controller.EditUser', {
        extend: 'Ext.app.Controller',

        refs: [
            {
                ref: 'editWindow',
                selector: 'editUserWindow',
                autoCreate: true,
                xtype: 'editUserWindow'
            }
        ],

        init: function() {
            this.control({
                'userGrid': {'itemdblclick': this.showEditWindow}
            });
        },

        showEditWindow: function(grid, record) {
            var wnd = this.getEditWindow()

            wnd.down('form').loadRecord(record);
            wnd.show();
        }
    });

Add our new controller and view to the application

<pre>
Ext.define('PhillyJS.Application', {
    name: 'PhillyJS',

    extend: 'Ext.app.Application',

    views: [
        'UserForm',
        'UserGrid'<strong>,
        'EditUserWindow'</strong>
    ],

    controllers: [
        'AddUser'<strong>,
        'EditUser'</strong>
    ],

    stores: [
        'Users'
    ],

    models: [
        'User'
    ]
});
</pre>

Test and see that the form looks a little strange

view/EditUserWindow.js

<pre>
Ext.define('PhillyJS.view.EditUserWindow', {
    extend: 'Ext.window.Window',
    title: 'Edit User',
    xtype: 'editUserWindow',
    items: [
        {
            xtype: 'userForm'<strong>,
            header: false,
            border: false</strong>
        }
    ]
});
</pre>

Lets save our edits

controller/EditUser.js

<pre>
Ext.define('PhillyJS.controller.EditUser', {
    extend: 'Ext.app.Controller',

    refs: [
        {
            ref: 'editWindow',
            selector: 'editUserWindow',
            autoCreate: true,
            xtype: 'editUserWindow'
        }
    ],

    init: function() {
        this.control({
            'userGrid': {'itemdblclick': this.showEditWindow}<strong>,
            'userForm button': {click: this.saveEdits}</strong>
        });
    },

    showEditWindow: function(grid, record) {
        var wnd = this.getEditWindow()

        wnd.down('form').loadRecord(record);
        wnd.show();
    }<strong>,

    saveEdits: function() {
        var wnd = this.getEditWindow(),
            form = wnd.down('form');

        form.getRecord().set(form.getValues());
        wnd.close();
    }</strong>
});
</pre>

Click save and see that it adds a new record

## Add Actions To UserForm Instances

view/EditUserWindow.js

<pre>
Ext.define('PhillyJS.view.EditUserWindow', {
    extend: 'Ext.window.Window',
    title: 'Edit User',
    xtype: 'editUserWindow',
    items: [
        {
            xtype: 'userForm'<strong>,
            action: 'edit',</strong>
            header: false,
            border: false
        }
    ]
});
</pre>

view/Main.js

<pre>
Ext.define('PhillyJS.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',
    layout: 'fit',
    items:[{
        xtype: 'userForm'<strong>,
        action: 'add'</strong>
    },{
        xtype: 'userGrid',
        title: 'Users'
    }]
});
</pre>

controller/EditUser.js

<pre>
Ext.define('PhillyJS.controller.EditUser', {
    extend: 'Ext.app.Controller',

    refs: [
        {
            ref: 'editWindow',
            selector: 'editUserWindow',
            autoCreate: true,
            xtype: 'editUserWindow'
        }
    ],

    init: function() {
        this.control({
            'userGrid': {'itemdblclick': this.showEditWindow},
            'userForm<strong>[action=edit]</strong> button': {click: this.saveEdits}
        });
    },

    showEditWindow: function(grid, record) {
        var wnd = this.getEditWindow()

        wnd.down('form').loadRecord(record);
        wnd.show();
    },

    saveEdits: function() {
        var wnd = this.getEditWindow(),
            form = wnd.down('form');

        form.getRecord().set(form.getValues());
        wnd.close();
    }
});
</pre>

controller/AddUser.js

<pre>
Ext.define('PhillyJS.controller.AddUser', {
    extend: 'Ext.app.Controller',

    init: function() {
        this.control({
            'userForm<strong>[action=add]</strong> button': {'click': this.onClickSave}
        });
    },

    onClickSave: function(button) {
        var user = this.getModel('User').create(button.up('userForm').getValues());
        this.getApplication().getUsersStore().add(user);
    }
});
</pre>

## Format the address column

view/UserGrid.js

    ...
    {text: 'Address', flex: 1, xtype: 'templatecolumn', tpl: '{address1}<tpl if="address2"><br>{address2}</tpl>'},
    ...
