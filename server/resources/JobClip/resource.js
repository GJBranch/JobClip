'use strict';

var buildConfig = {root: './client'};

function JobClipResource(config){
    function get(req, res) {
        res.sendfile('index.html', buildConfig);
    }
    this.get = get;
}

module.exports = JobClipResource;
