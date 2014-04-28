# Introduction

## Generate the application

We use Sencha Command to generate our application using the generate app command

    sencha -sdk ~/sencha/ext-4.2.1.883 generate app PhillyJS ~/phillyJs

Open app/view/Main.js and make the following changes

<pre>
Ext.define('PhillyJS.view.Main', {
    extend: 'Ext.tab.Panel',
    requires:[],
    xtype: 'app-main',

    items:[{
        title: 'Center Tab 1'
    }]
});
</pre>

## UserForm View

## Add Fields

# Save Our New User

## Create User Model

## Add Save Button to UserForm

## Create AddUser Controller

## Wire Up Save Button

At this point we can show in the controller method that the user is added to the record via console.

# Show A List Of Our Users

## UserGrid View

## Create Users Store

## Edit Save to Add to Store

# Edit A User

## Add seed data

## EditUser Controller

## EditUser View

## Add Actions To UserForm Instances

# Theming
