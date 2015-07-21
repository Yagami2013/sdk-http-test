/**
 * Created by hj on 2015/7/21.
 */
var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle={};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/input.html"] = requestHandlers.start;
handle["/max-age"] = requestHandlers.testHeader;

server.start(router.route,handle);
