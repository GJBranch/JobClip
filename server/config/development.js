var config = {
    baseUrl: 'http://localhost',
    port: 8001,
    secret: '38ealc0acc8oiyeteg7kt3oua0l47l3ty2e1rghrre9o4lssf3t4lraaiboh22nos',
    users: [{
        id: 1,
        username: 'branch',
        password: 'branch',
        provider: 'local'
    }] //TODO: move to database
};

module.exports = config;
