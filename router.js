/**
 * Created by hj on 2015/7/21.
 */
function route(handle,pathname,response){
    console.log("Route for request for "+pathname);
    if(typeof handle[pathname]==='function'){
        handle[pathname](response);
    }else{
        console.log("No request handler for "+pathname);
        response.writeHead(404,{"Content-Type":"text/plain"});
        response.write("404 not found.");
        response.end();
    }
}

exports.route = route;