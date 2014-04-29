Ext.define('PhillyJS.store.Users', {
    extend: 'Ext.data.Store',
    model: 'PhillyJS.model.User',
    proxy: {
        type: 'memory'
    },
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
});