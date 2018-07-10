function route(handle,pathname,response){
    console.log("About to route a request for "+pathname);
    if (typeof handle[pathname] === 'function'){
        handle[pathname](response);
    } else {
        console.log("Fail to route the request for " + pathname);
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not found");
        response.end();     
    }
}

console.log('test 20180710');;;

exports.route = route;