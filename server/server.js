const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
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

// app.get('/index.html', function(req, res) {
//     const html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8')
//     res.send(html)
// });
// app.get('/', function(req, res) {   //网站主页
//     const html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8')
//     res.send(html)
// });
// app.get('', function(req, res) {
//     const html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8')
//     res.send(html)
// });


//检测文件或者文件夹存在 nodeJS
function fsExistsSync(path) {
    try{
        fs.accessSync(path,fs.F_OK);
    }catch(e){
        return false;
    }
    return true;
}
app.use('/dist/static', express.static('../dist/static'));
app.get('*',function(req, res) {
    const url = req.originalUrl.split('?')[0];
    var html;
    console.log("url:" + url);
    if(!url || url == '/'){
        html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8');
    } else {
        // console.log(path.resolve(__dirname, '../' + url));
        if(fsExistsSync(path.resolve(__dirname, '../' + url))) {
            if(url.indexOf('static') == 6) {    //图片静态资源
                return;
                // var type = url.split('/')[4].split('.')[1].toLowerCase()
                // res.setHeader("Content-Type", contentType[type]);
                // html = fs.readFileSync(path.resolve(__dirname, '../' + url), 'binary');


                // console.log("html");
                // console.log(html);
                // res.send(new Buffer(html));
                // return;
            } else {
                html = fs.readFileSync(path.resolve(__dirname, '../' + url), 'utf-8');
            }
        } else {
            html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8');
        }
        // return;

        // fs.exists(__dirname, '../dist' + url, function (exists) {  //exists  存在为true 不存在为false  node6  已经废弃了fs.exists
        //     if(exists){
        //         console.log("?enter")
        //         html = fs.readFileSync(path.resolve(__dirname, '..' + url), 'utf-8');
        //     } else {
        //         html = '';
        //         console.log("?false");
        //     }
        // });
    }
    res.send(html);
});

// app.route('/dist')
//     .get(function(req, res, next) {
//         next();
//     },function(req,res){
//         res.send("测试next是不是进来了");
//     });


app.listen(8082,()=>{
    console.log("localhost:8082");
});