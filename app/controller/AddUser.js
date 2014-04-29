Ext.define('PhillyJS.controller.AddUser', {
    extend: 'Ext.app.Controller',

    init: function() {
        this.control({
            'userForm[action=add] button': {'click': this.onClickSave}
        });
    },

    onClickSave: function(button) {
        var user = this.getModel('User').create(button.up('userForm').getValues());
        this.getApplication().getUsersStore().add(user);
    }
});