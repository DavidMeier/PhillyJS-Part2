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
            'userForm[action=edit] button': {click: this.saveEdits}
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