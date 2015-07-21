/**
 * Created by hj on 2015/7/21.
 */
var exec = require("child_process").exec;

function start(response){
    console.log("Request handler 'start' was called.");

    var body = '<html>'+
    '<head>'+
    '<meta http-equiv="CONTENT-TYPE" content="text/html" charset="UTF-8">'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Submit text"/>'+ '</form>'+
   ' </body>'+
    '</html>'

        //response.writeHead(200,{"Content-Type":"text/html"});
        //response.write(body);
        //response.end();
    exec("ls -lah",function(error,stdout,stderr){
        response.writeHead(200,{"Content-Type":"text/html"});
        response.write(body);
        response.end();
    });
}
function upload(response){
    console.log("Request handler 'upload' was called.");
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("Hello Upload");
    response.end();

}

function testHeader(response){
    console.log("Request handler 'testHeader' was called.");
    response.writeHead(200,{"Cache-Control":"max-age=30"});
    response.write("Test sucess");
    response.end();
}
exports.start = start;
exports.upload = upload;
exports.testHeader = testHeader;