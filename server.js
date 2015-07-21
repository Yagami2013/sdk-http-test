/**
 * Created by hj on 2015/7/21.
 */
var http = require("http");
var url = require("url");

function start(route,handle){
    function onRequest(request,response){
        var pathname = url.parse(request.url).pathname;
        var method = request.method.toString();
        console.log("Request for "+method+" "+pathname+" received.");

        route(handle,pathname,response);

    }

    http.createServer(onRequest).listen(8080);
    console.log("Server has started.");
}
exports.start = start;
