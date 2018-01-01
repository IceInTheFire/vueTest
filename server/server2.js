"use strict";

const express = require("express");
const path = require('path');
const history = require("connect-history-api-fallback");
const app = express();
const fs = require('fs');
const contentType = {
    "css": "text/css",
    "gif": "image/gif",
    "html": "text/html",
    "ico": "image/x-icon",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "js": "text/javascript",
    "json": "application/json",
    "pdf": "application/pdf",
    "png": "image/png",
    "svg": "image/svg+xml",
    "swf": "application/x-shockwave-flash",
    "tiff": "image/tiff",
    "txt": "text/plain",
    "wav": "audio/x-wav",
    "wma": "audio/x-ms-wma",
    "wmv": "video/x-ms-wmv",
    "xml": "text/xml"
};

const compress = require('compression');
app.use(compress());           //配合nginx做gzip压缩  express4以上写法

app.use(history());
// app.use(express.static("dist"))
app.use('/dist', express.static('../dist'));

app.get('*',function(req, res) {
    const url = req.originalUrl.split('?')[0];
    var html;
    if(!url || url == '/' || url == '/dist' || url.indexOf('/dist/static') == -1 || url.indexOf('/dist/js/')){
        html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8');
        res.send(html);
    } else {
        // return;
    }

});

app.listen(8888, () => {
    console.log("正在监听8888");
})


// locaohost:8888