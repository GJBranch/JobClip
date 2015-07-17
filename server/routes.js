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
        name: 'users',
        url: '/users',
        httpMethod: 'post',
        method: 'post'
    },
    {
        name: 'sessionCreate',
        url: '/sessions/create',
        httpMethod: 'post',
        method: 'post'
    },
    {
        name: 'api',
        url: '/api',
        httpMethod: 'get',
        method: 'get'
    }
];

module.exports = routes;
