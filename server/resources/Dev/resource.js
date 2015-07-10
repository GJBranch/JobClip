'use strict';

var buildConfig = {root: './client'};

function DevResource(config){
    function get(req, res) {
        res.sendfile('index.html', buildConfig);
    }
    this.get = get;
}

module.exports = DevResource;
