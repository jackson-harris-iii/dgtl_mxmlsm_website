// customising the .env file in your project's root folder.
require('dotenv').config();

var keystone = require('keystone');

keystone.init({
    'cookie secret': 'secure string goes here',
    'name': 'dgtl_mxmlsm',

    'static': [
        './public/js',
        './public/img',
    ],

    'user model': 'User',
    'auto update': true,
    'session': true,
    // The url for your MongoDB connection
    'mongo': 'mongodb://localhost/keystonereactcms',

    'auth': true,
});
//import keystone models
keystone.import('models');

keystone.set('locals', {
    _: require('lodash'),
    env: keystone.get('env'),
    utils: keystone.utils,
    editable: keystone.content.editable,
});

//add routes
keystone.set('routes', require('./routes'));

keystone.set('nav', {
    posts: ['posts', 'post-categories'],
    enquiries: 'enquiries',
    users: 'users',
});

keystone.start();