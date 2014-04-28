Ext.define('PhillyJS.controller.AddUser', {
    extend: 'Ext.app.Controller',
    views: ['PhillyJS.view.UserForm'],
    models: ['PhillyJS.model.User'],

    init: function() {
        this.control({
            'userForm button': {'click': this.onClickSave}
        });
    },

    onClickSave: function(button) {
        var user = this.getModel('User').create(button.up('userForm').getValues());
        console.log(user);
    }
});