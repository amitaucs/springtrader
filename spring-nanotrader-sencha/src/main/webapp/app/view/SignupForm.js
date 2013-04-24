Ext.define('SpringTrader.view.SignupForm', {
    extend: 'Ext.form.Panel',
    xtype: 'signupPage',
    requires: ['Ext.field.Email', 'Ext.field.Password', 'Ext.field.Number'],
    config: {
        title: 'Sign up',
        items: [
            { xtype: 'fieldset',
                items: [
                    { xtype: 'textfield', name: 'fullname', placeHolder: 'Name' },
                    { xtype: 'emailfield', name: 'email', placeHolder: 'Email address' },
                    { xtype: 'passwordfield', name: 'passwd', placeHolder: 'Password'},
                    { xtype: 'passwordfield', name: 'passwdconfirm', placeHolder: 'Confirm password'},
                    { xtype: 'textfield', name: 'userid', placeHolder: 'Username'},
                    { xtype: 'numberfield', name: 'openbalance', placeHolder: 'Opening balance', minValue: 100000, stepValue: 1000},
                    { xtype: 'textfield', name: 'address', placeHolder: 'Address' },
                    { xtype: 'numberfield', name: 'creditcard', placeHolder: 'CC# 1234 1234 1234 1234', disabled: true},
                    { xtype: 'container',
                        layout: { type: 'vbox', align: 'center', pack: 'center' },
                        items: [
                            { xtype: 'button', ui: 'confirm', text: 'Sign up', itemId: 'signupSubmitBtn' }
                        ]
                    }
                ]
            },
        ]
    }
});