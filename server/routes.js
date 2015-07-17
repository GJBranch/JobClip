'use strict';
var routes = [
    {
        name: 'JobClip',
        url: '/',
        httpMethod: 'get',
        method: 'get'
    },
    {
        name: 'login',
        url: '/',
        httpMethod: 'get',
        method: 'get'
    },
    {
        name: 'userCreate',
        url: '/user/create',
        httpMethod: 'post',
        method: 'post'
    },
    {
        name: 'users',
        url: '/users',
        httpMethod: 'post',
        method: 'post'
    }
];

module.exports = routes;
